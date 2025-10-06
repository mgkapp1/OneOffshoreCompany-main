// Email service using client-side EmailJS

export interface EmailData {
  customer_name: string;
  customer_email: string;
  order_amount: string;
  jurisdiction: string;
  order_items: string;
  invoice_number: string;
  payment_type: string;
  [key: string]: string;
}

export const sendPaymentConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Sending payment confirmation email via client-side EmailJS:', emailData);
    
    // Import EmailJS dynamically to avoid SSR issues
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      email: emailData.customer_email,
      customer_name: emailData.customer_name,
      customer_email: emailData.customer_email,
      order_amount: emailData.order_amount,
      jurisdiction: emailData.jurisdiction,
      order_items: emailData.order_items,
      invoice_number: emailData.invoice_number,
      payment_type: emailData.payment_type,
      reply_to: emailData.customer_email,
      from_name: "One Offshore Company"
    };

    // Send email using client-side EmailJS
    const result = await emailjs.send(
      'service_88341ce',
      'template_a49s36z',
      templateParams,
      {
        publicKey: 'Jd-xUzfI7TVry1bHs',
      }
    );

    console.log('Email sent successfully via client-side:', result);
    return true;
  } catch (error) {
    console.error('Failed to send email via client-side EmailJS:', error);
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};