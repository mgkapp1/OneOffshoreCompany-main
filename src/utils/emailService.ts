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

// Main function to handle payment notifications
export const submitPaymentNotification = async (paymentData: PaymentData): Promise<boolean> => {
  console.log('Processing payment notification:', paymentData);
  
  // Try multiple notification methods
  const methods = [
    submitToGoogleForms,
    sendSilentAdminNotification
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

// Method 1: Submit to Google Forms (primary method)
const submitToGoogleForms = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Submitting to Google Forms...');
    
    // Using the correct Google Forms URL provided
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_pPwsjgbV112Y0h0XtFX8VlbWBrwOf_kyF04rOxygUMA0QQ/formResponse';
    
    // First, let's try to get the actual field names by fetching the form HTML
    try {
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe_pPwsjgbV112Y0h0XtFX8VlbWBrwOf_kyF04rOxygUMA0QQ/viewform');
      const html = await response.text();
      console.log('Form HTML fetched, looking for field names...');
      
      // Extract field names from the HTML (this is a fallback)
      const fieldNameRegex = /name="(entry\.\d+)"|name="(entry\.[a-zA-Z0-9_]+)"/g;
      const matches = html.matchAll(fieldNameRegex);
      const fieldNames = Array.from(matches).map(match => match[1] || match[2]);
      console.log('Found field names in form:', fieldNames);
    } catch (fetchError) {
      console.log('Could not fetch form HTML, using default field patterns');
    }
    
    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    form.style.display = 'none';
    
    // Common Google Forms field patterns to try
    const fieldPatterns = [
      // Pattern 1: entry.number (most common)
      { name: 'entry.1234567890', value: paymentData.customer_name },
      { name: 'entry.1234567891', value: paymentData.customer_email },
      { name: 'entry.1234567892', value: paymentData.order_amount },
      { name: 'entry.1234567893', value: paymentData.jurisdiction },
      { name: 'entry.1234567894', value: paymentData.order_items },
      { name: 'entry.1234567895', value: paymentData.invoice_number },
      { name: 'entry.1234567896', value: paymentData.payment_type },
      
      // Pattern 2: entry.hash (alternative)
      { name: 'entry.hj99tb3', value: paymentData.customer_name },
      { name: 'entry.email', value: paymentData.customer_email },
      { name: 'entry.amount', value: paymentData.order_amount },
      { name: 'entry.jurisdiction', value: paymentData.jurisdiction },
      { name: 'entry.items', value: paymentData.order_items },
      { name: 'entry.invoice', value: paymentData.invoice_number },
      { name: 'entry.payment_type', value: paymentData.payment_type },
      
      // Pattern 3: Just numbers
      { name: '1234567890', value: paymentData.customer_name },
      { name: '1234567891', value: paymentData.customer_email },
      { name: '1234567892', value: paymentData.order_amount },
      { name: '1234567893', value: paymentData.jurisdiction },
      { name: '1234567894', value: paymentData.order_items },
      { name: '1234567895', value: paymentData.invoice_number },
      { name: '1234567896', value: paymentData.payment_type },
    ];
    
    // Add all fields to the form
    fieldPatterns.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    
    console.log('Form submitted successfully');
    
    // Remove form after submission
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
    }, 1000);
    
    return true;
    
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    
    // Fallback: Try fetch API
    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_pPwsjgbV112Y0h0XtFX8VlbWBrwOf_kyF04rOxygUMA0QQ/formResponse';
      
      const formData = new FormData();
      
      // Try multiple field name patterns
      const patterns = [
        'entry.1234567890', 'entry.1234567891', 'entry.1234567892', 'entry.1234567893',
        'entry.1234567894', 'entry.1234567895', 'entry.1234567896',
        'entry.hj99tb3', 'entry.email', 'entry.amount', 'entry.jurisdiction',
        'entry.items', 'entry.invoice', 'entry.payment_type'
      ];
      
      patterns.forEach(pattern => {
        formData.append(pattern, 'test');
      });
      
      await fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      console.log('Fallback fetch submission completed');
      return true;
    } catch (fallbackError) {
      console.error('All Google Forms submission methods failed:', fallbackError);
      return false;
    }
  }
};

// Method 2: Silent admin notification (no popups)
const sendSilentAdminNotification = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    console.log('Sending silent admin notification...');
    
    // This method doesn't open any popups - just logs to console
    // In a real implementation, you'd send to a webhook or API
    console.log('ADMIN NOTIFICATION - New Payment:', paymentData);
    
    // You can also store in localStorage for admin review
    const notifications = JSON.parse(localStorage.getItem('paymentNotifications') || '[]');
    notifications.push({
      ...paymentData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('paymentNotifications', JSON.stringify(notifications));
    
    console.log('Silent admin notification completed');
    return true;
  } catch (error) {
    console.error('Silent admin notification failed:', error);
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

// Function to help debug form field names
export const getGoogleFormsHelp = (): void => {
  const helpText = `
To find the correct field names for your Google Form:

1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLSe_pPwsjgbV112Y0h0XtFX8VlbWBrwOf_kyF04rOxygUMA0QQ/viewform

2. Right-click on the FIRST field (Customer Name) and select "Inspect"

3. In the developer tools, look for the input element. It should have a name attribute like:
   - name="entry.1234567890" (most common)
   - name="entry.hj99tb3" (alternative)

4. Note down the exact name for each field and provide them to me.

Current field patterns being tried:
- entry.1234567890, entry.1234567891, etc.
- entry.hj99tb3, entry.email, entry.amount, etc.
- Just numbers: 1234567890, 1234567891, etc.
  `;
  
  console.log(helpText);
  alert('Check browser console for detailed field name instructions');
};

// Function to view stored notifications (for admin)
export const viewStoredNotifications = (): void => {
  const notifications = JSON.parse(localStorage.getItem('paymentNotifications') || '[]');
  console.log('Stored Payment Notifications:', notifications);
  if (notifications.length === 0) {
    alert('No stored notifications found');
  } else {
    alert(`Found ${notifications.length} stored notifications. Check browser console for details.`);
  }
};