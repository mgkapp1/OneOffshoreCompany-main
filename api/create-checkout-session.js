import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { 
      amount, 
      productDescription, 
      customerEmail, 
      customerName, 
      customerPhone, 
      companyName, 
      invoiceNumber, 
      jurisdiction, 
      paymentType,
      successUrl,
      cancelUrl
    } = req.body;

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: productDescription,
            },
            unit_amount: amount, // in pence
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerEmail,
      metadata: {
        customerName,
        customerPhone,
        companyName,
        invoiceNumber,
        jurisdiction,
        paymentType
      },
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