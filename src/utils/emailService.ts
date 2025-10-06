// Email service using our API route to avoid CORS issues

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
    console.log('Sending payment confirmation email via API:', emailData);
    
    // Use our server-side API route to avoid CORS issues
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('Email sent successfully via API');
      return true;
    } else {
      console.error('API returned error:', result.message);
      return false;
    }
  } catch (error) {
    console.error('Failed to send email via API:', error);
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};