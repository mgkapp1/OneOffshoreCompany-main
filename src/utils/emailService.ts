import emailjs from '@emailjs/browser';

// Initialize EmailJS with your credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_88341ce',
  TEMPLATE_ID: 'template_a49s36z',
  PUBLIC_KEY: 'Jd-xUzfI7TVry1bHs'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface EmailData {
  customer_name: string;
  customer_email: string;
  order_amount: string;
  jurisdiction: string;
  order_items: string;
  invoice_number: string;
  payment_type: string;
  [key: string]: string; // Add index signature to fix TypeScript error
}

export const sendPaymentConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Sending payment confirmation email:', emailData);
    
    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      emailData
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};