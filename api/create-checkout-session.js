import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { items, customer_email, metadata, success_url, cancel_url } = req.body;
    
    // Since we are relying solely on Stripe's email, we combine all details into the product name/description.
    const primaryItem = items[0];
    
    let description = `Order: ${primaryItem.name} (J: ${primaryItem.jurisdiction}, T: ${primaryItem.type}). `;
    description += `Client: ${metadata.name} (Email: ${customer_email}, Tel: ${metadata.phone || 'N/A'}). `;
    if (metadata.company) {
      description += `Co: ${metadata.company}. `;
    }
    if (metadata.invoice) {
      description += `Inv #: ${metadata.invoice}. `;
    }
    description += `Pmt Type: ${metadata.payment_type}.`;

    // Map items to Stripe line items, using the combined description for the product name
    // Note: Stripe product names have a limit, but this should generally fit.
    const line_items = [{
      price_data: {
        currency: 'gbp',
        product_data: {
          name: description, // Use the combined description here
        },
        unit_amount: primaryItem.amount, // in pence
      },
      quantity: primaryItem.quantity || 1,
    }];

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
      customer_email: customer_email,
      metadata: metadata, // Keep metadata for dashboard visibility
    });

    res.status(200).json({
      sessionId: session.id,
      sessionUrl: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}