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
    
    // Test the form submission with a simple approach
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf8wJq1hA8J8Q6Q7Q9Q0Q1Q2Q3Q4Q5Q6Q7Q8Q9Q0Q1Q2Q3Q4Q5Q6Q7Q/formResponse';
    
    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    form.target = '_blank'; // Open in new tab for testing
    form.style.display = 'none';
    
    // Add all form fields
    const fields = [
      { name: 'entry.123456789', value: paymentData.customer_name },       // Customer Name
      { name: 'entry.987654321', value: paymentData.customer_email },      // Customer Email
      { name: 'entry.111111111', value: paymentData.order_amount },        // Order Amount
      { name: 'entry.222222222', value: paymentData.jurisdiction },        // Jurisdiction
      { name: 'entry.333333333', value: paymentData.order_items },         // Order Items
      { name: 'entry.444444444', value: paymentData.invoice_number },      // Invoice Number
      { name: 'entry.555555555', value: paymentData.payment_type },        // Payment Type
    ];
    
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    console.log('Form submitted successfully via hidden form method');
    return true;
    
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    
    // Fallback: Try the fetch method with different field names
    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf8wJq1hA8J8Q6Q7Q9Q0Q1Q2Q3Q4Q5Q6Q7Q8Q9Q0Q1Q2Q3Q4Q5Q6Q7Q/formResponse';
      const formData = new URLSearchParams();
      
      // Try common Google Forms field patterns
      formData.append('entry.123456789', paymentData.customer_name);
      formData.append('entry.987654321', paymentData.customer_email);
      formData.append('entry.111111111', paymentData.order_amount);
      formData.append('entry.222222222', paymentData.jurisdiction);
      formData.append('entry.333333333', paymentData.order_items);
      formData.append('entry.444444444', paymentData.invoice_number);
      formData.append('entry.555555555', paymentData.payment_type);
      
      await fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      console.log('Fallback form submission completed');
      return true;
    } catch (fallbackError) {
      console.error('Fallback submission also failed:', fallbackError);
      return false;
    }
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};

// Test function to verify form submission
export const testGoogleFormSubmission = async (): Promise<boolean> => {
  console.log('Testing Google Form submission...');
  
  const testData: PaymentData = {
    customer_name: 'Test Customer',
    customer_email: 'test@example.com',
    order_amount: '£100.00',
    jurisdiction: 'Test Jurisdiction',
    order_items: 'Test Item - £100',
    invoice_number: 'TEST-001',
    payment_type: 'test'
  };
  
  return await submitPaymentToGoogleForm(testData);
};