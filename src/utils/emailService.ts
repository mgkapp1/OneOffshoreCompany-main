// Email notification service for payment confirmations

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
  
  // Try multiple notification methods
  const methods = [
    sendAdminEmailNotification,
    sendCustomerEmailNotification,
    submitToGoogleForms
  ];
  
  let successCount = 0;
  
  for (const method of methods) {
    try {
      const result = await method(paymentData);
      if (result) successCount++;
    } catch (error) {
      console.error(`Notification method failed:`, error);
    }
  }
  
  console.log(`Payment notification completed: ${successCount}/${methods.length} methods succeeded`);
  return successCount > 0;
};

// Method 1: Send email to admin staff
const sendAdminEmailNotification = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Sending admin email notification...');
    
    // Using mailto links as a simple fallback
    const adminEmails = ['info@oneoffshorecompany.com', 'admin@oneoffshorecompany.com'];
    
    const subject = `New Payment Received - ${paymentData.invoice_number || 'Order'}`;
    const body = `
New Payment Details:

Customer: ${paymentData.customer_name}
Email: ${paymentData.customer_email}
Amount: ${paymentData.order_amount}
Jurisdiction: ${paymentData.jurisdiction}
Payment Type: ${paymentData.payment_type}
Invoice: ${paymentData.invoice_number}

Order Items:
${paymentData.order_items}

Please process this order promptly.
    `.trim();
    
    // Create mailto links for each admin
    adminEmails.forEach(email => {
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
    });
    
    console.log('Admin email notifications opened');
    return true;
  } catch (error) {
    console.error('Admin email notification failed:', error);
    return false;
  }
};

// Method 2: Send confirmation email to customer
const sendCustomerEmailNotification = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Sending customer email confirmation...');
    
    const subject = `Payment Confirmation - One Offshore Company`;
    const body = `
Dear ${paymentData.customer_name},

Thank you for your payment of ${paymentData.order_amount}.

Order Details:
${paymentData.order_items}

Our team will contact you within 24 hours to guide you through the next steps of your company formation process.

If you have any questions, please don't hesitate to contact us at info@oneoffshorecompany.com.

Best regards,
One Offshore Company Team
    `.trim();
    
    const mailtoLink = `mailto:${paymentData.customer_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    console.log('Customer email confirmation opened');
    return true;
  } catch (error) {
    console.error('Customer email notification failed:', error);
    return false;
  }
};

// Method 3: Submit to Google Forms (if URL is correct)
const submitToGoogleForms = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Attempting Google Forms submission...');
    
    // We need the correct Google Forms URL - this is currently broken
    // For now, we'll return false and focus on email notifications
    console.warn('Google Forms submission disabled - need correct form URL');
    return false;
    
    // If we had the correct URL, we would use:
    // const formUrl = 'YOUR_CORRECT_GOOGLE_FORMS_URL_HERE';
    // ... form submission code ...
    
  } catch (error) {
    console.error('Google Forms submission failed:', error);
    return false;
  }
};

export const formatOrderItems = (items: Array<{name: string; price: number; jurisdiction: string}>) => {
  return items.map(item => 
    `${item.name} (${item.jurisdiction}) - £${item.price}`
  ).join('\n');
};

// Test function to verify notification system
export const testNotificationSystem = async (): Promise<boolean> => {
  console.log('Testing notification system...');
  
  const testData: PaymentData = {
    customer_name: 'Test Customer',
    customer_email: 'test@example.com',
    order_amount: '£100.00',
    jurisdiction: 'Test Jurisdiction',
    order_items: 'Test Item - £100',
    invoice_number: 'TEST-001',
    payment_type: 'test'
  };
  
  return await submitPaymentNotification(testData);
};

// Function to help get the correct Google Forms URL
export const getGoogleFormsHelp = (): void => {
  const helpText = `
To set up Google Forms integration:

1. Go to your Google Form
2. Click "Send" in the top-right
3. Click the link icon (🔗)
4. Copy the URL - it should look like:
   https://docs.google.com/forms/d/e/1FAIpQLS.../viewform?usp=sf_link

5. Replace "/viewform" with "/formResponse" to get:
   https://docs.google.com/forms/d/e/1FAIpQLS.../formResponse

6. Send me this corrected URL and I'll update the code.
  `;
  
  console.log(helpText);
  alert('Check browser console for Google Forms setup instructions');
};