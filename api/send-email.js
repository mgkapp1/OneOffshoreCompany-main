import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { 
      customer_name, 
      customer_email, 
      order_amount, 
      jurisdiction, 
      order_items, 
      invoice_number, 
      payment_type 
    } = req.body;

    const templateParams = {
      email: customer_email,
      customer_name,
      customer_email,
      order_amount,
      jurisdiction,
      order_items,
      invoice_number,
      payment_type,
      reply_to: customer_email,
      from_name: "One Offshore Company"
    };

    // Send email using EmailJS Node.js SDK (no CORS issues)
    const result = await emailjs.send(
      'service_88341ce',
      'template_a49s36z',
      templateParams,
      {
        publicKey: 'Jd-xUzfI7TVry1bHs',
        // For Node.js, you might need a private key
        privateKey: process.env.EMAILJS_PRIVATE_KEY, // You'll need to set this in your environment
      }
    );

    console.log('Email sent successfully:', result);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}