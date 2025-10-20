// Google Forms notification service for payment confirmations

export interface PaymentData {
  customer_name: string;
  customer_email: string;
  order_amount: string;
  jurisdiction: string;
  order_items: string;
  invoice_number: string;
  payment_type: string;
}

// Main function to handle payment notifications
export const submitPaymentNotification = async (paymentData: PaymentData): Promise<boolean> => {
  console.log('Processing payment notification:', paymentData);
  
  try {
    const result = await submitToGoogleForms(paymentData);
    console.log('Google Forms submission result:', result);
    return result;
  } catch (error) {
    console.error('Payment notification failed:', error);
    return false;
  }
};

// Submit to Google Forms with correct field IDs
const submitToGoogleForms = async (paymentData: PaymentData): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      console.log('Submitting to Google Forms...');
      
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_pPwsjgbV112Y0h0XtFX8VlbWBrwOf_kyF04rOxygUMA0QQ/formResponse';
      
      // Create form with CORRECT field IDs
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = '_self'; // Submit in same window
      form.style.display = 'none';
      
      // Add fields with correct IDs
      const fields = [
        { name: 'entry.920199730', value: paymentData.customer_name },     // Customer Name
        { name: 'entry.749779668', value: paymentData.customer_email },    // Customer Email
        { name: 'entry.626643499', value: paymentData.order_amount },      // Order Amount
        { name: 'entry.164648043', value: paymentData.jurisdiction },      // Jurisdiction
        { name: 'entry.1303214782', value: paymentData.order_items },      // Order Items
        { name: 'entry.220328264', value: paymentData.invoice_number },    // Invoice Number
        { name: 'entry.1195054803', value: paymentData.payment_type },     // Payment Type
      ];
      
      // Add all fields to the form
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      
      // Submit the form
      form.submit();
      
      console.log('Google Forms submitted successfully with fields:', fields);
      
      // Remove form after submission
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        resolve(true);
      }, 1000);
      
    } catch (error) {
      console.error('Google Forms submission failed:', error);
      resolve(false);
    }
  });
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};

// Test function to verify Google Forms submission
export const testNotificationSystem = async (): Promise<boolean> => {
  console.log('Testing Google Forms submission...');
  
  const testData: PaymentData = {
    customer_name: 'Test Customer',
    customer_email: 'test@example.com',
    order_amount: '£100.00',
    jurisdiction: 'Test Jurisdiction',
    order_items: 'Test Item - £100',
    invoice_number: 'TEST-001',
    payment_type: 'test'
  };
  
  const result = await submitPaymentNotification(testData);
  console.log('Test result:', result);
  return result;
};