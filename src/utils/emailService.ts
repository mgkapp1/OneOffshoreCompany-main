// Google Forms submission service for payment confirmations

export interface PaymentData {
  customer_name: string;
  customer_email: string;
  order_amount: string;
  jurisdiction: string;
  order_items: string;
  invoice_number: string;
  payment_type: string;
}

export const submitPaymentToGoogleForm = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Submitting payment confirmation to Google Form:', paymentData);
    
    // Google Forms submission URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf8wJq1hA8J8Q6Q7Q9Q0Q1Q2Q3Q4Q5Q6Q7Q8Q9Q0Q1Q2Q3Q4Q5Q6Q7Q/formResponse';
    
    // Prepare form data with field IDs
    const formData = new URLSearchParams();
    formData.append('entry.hj99tb3', paymentData.customer_name);       // Customer Name
    formData.append('entry.hj99tb5', paymentData.customer_email);      // Customer Email
    formData.append('entry.hj99tb7', paymentData.order_amount);        // Order Amount
    formData.append('entry.hj99tb9', paymentData.jurisdiction);        // Jurisdiction
    formData.append('entry.hj99tb11', paymentData.order_items);        // Order Items
    formData.append('entry.hj99tb13', paymentData.invoice_number);     // Invoice Number
    formData.append('entry.hj99tb15', paymentData.payment_type);       // Payment Type
    
    // Submit to Google Forms
    const response = await fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Google Forms doesn't allow CORS
    });
    
    console.log('Payment data submitted to Google Form successfully');
    return true;
    
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};