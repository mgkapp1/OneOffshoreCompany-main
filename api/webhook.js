import Stripe from 'stripe';
import fetch from 'node-fetch';
import FormData from 'form-data';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to buffer the request body
function buffer(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // 1. Retrieve line items to get product names and amounts
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 });
      
      const orderDetails = {
        sessionId: session.id,
        totalAmount: session.amount_total, // in cents
        currency: session.currency,
        customerEmail: session.customer_details?.email || session.customer_email,
        metadata: session.metadata,
        lineItems: lineItems.data.map(item => ({
          name: item.description,
          amount: item.amount_total, // in cents
          quantity: item.quantity,
        })),
      };

      // 2. Send order details to Google Apps Script for email notification (Server-to-Server)
      const gasUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

      if (gasUrl) {
        try {
          const gasResponse = await fetch(gasUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
          });

          if (gasResponse.ok) {
            console.log('Order details successfully forwarded to Google Apps Script.');
          } else {
            const responseText = await gasResponse.text();
            console.error(`Failed to forward order details to GAS. Status: ${gasResponse.status}. Response: ${responseText}`);
          }
        } catch (fetchError) {
          console.error('Error during fetch to Google Apps Script:', fetchError);
        }
      } else {
        console.warn('GOOGLE_SCRIPT_WEBHOOK_URL is not set. Admin email notification skipped.');
      }

    } catch (error) {
      console.error('Error processing checkout.session.completed or forwarding to GAS:', error);
      // Still return 200 to Stripe so it doesn't retry the webhook
      return res.status(200).json({ received: true, error: 'Failed to process or forward order details.' });
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).json({ received: true });
}