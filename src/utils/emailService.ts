// EmailJS utility functions with dynamic loading support

declare global {
  interface Window {
    emailjs: any;
  }
}

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

// Initialize EmailJS with retry logic
const initializeEmailJS = async (): Promise<boolean> => {
  if (!window.emailjs) {
    console.log('EmailJS not loaded yet, waiting...');
    return new Promise((resolve) => {
      const checkEmailJS = () => {
        if (window.emailjs) {
          console.log('EmailJS loaded, initializing...');
          window.emailjs.init("Jd-xUzfI7TVry1bHs");
          resolve(true);
        } else {
          setTimeout(checkEmailJS, 100);
        }
      };
      checkEmailJS();
    });
  }
  
  // Already initialized
  return true;
};

export const sendPaymentConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Initializing EmailJS before sending email...');
    
    // Ensure EmailJS is initialized
    const initialized = await initializeEmailJS();
    if (!initialized) {
      console.error('EmailJS failed to initialize');
      return false;
    }

    console.log('Sending payment confirmation email:', emailData);
    
    // Try different parameter formats to find what works with your template
    const templateParams = {
      // Try format 1: Direct recipient
      to_email: emailData.customer_email,
      customer_name: emailData.customer_name,
      customer_email: emailData.customer_email,
      order_amount: emailData.order_amount,
      jurisdiction: emailData.jurisdiction,
      order_items: emailData.order_items,
      invoice_number: emailData.invoice_number,
      payment_type: emailData.payment_type,
      reply_to: emailData.customer_email,
      from_name: "One Offshore Company",
      
      // Try format 2: Alternative field names
      to: emailData.customer_email,
      subject: `Payment Confirmation - ${emailData.invoice_number || 'New Order'}`,
      message: `Thank you ${emailData.customer_name} for your payment of ${emailData.order_amount} for ${emailData.jurisdiction}.`
    };

    console.log('Template parameters:', templateParams);
    
    // Send email using EmailJS
    const result = await window.emailjs.send(
      'service_88341ce',
      'template_a49s36z',
      templateParams
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    
    // Log the specific error for debugging
    if (error.text) {
      console.error('EmailJS error details:', error.text);
    }
    
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};