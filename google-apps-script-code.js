function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    console.log('Received data:', data);
    
    // Validate required fields
    if (!data.email || !data.name) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Missing required fields: email and name'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Duplicate protection - check if we recently processed this order
    const cache = CacheService.getScriptCache();
    const cacheKey = `order_${data.email}_${data.amount}_${data.invoice_number || 'cart'}`;
    const recentOrder = cache.get(cacheKey);
    
    if (recentOrder) {
      console.log('Duplicate request detected, skipping email. Cache key:', cacheKey);
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Email already sent recently (duplicate request)'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Store in cache for 10 minutes to prevent duplicates
    cache.put(cacheKey, 'sent', 600);
    
    // Send confirmation email to customer
    const customerSubject = 'Payment Confirmation - One Offshore Company';
    const customerBody = `
Dear ${data.name},

Thank you for your payment of £${(data.amount / 100).toFixed(2)}.

Your payment has been successfully processed and we have received your order for:
${data.payment_type === 'invoice' ? `Invoice: ${data.invoice_number}` : 'Company Formation Service'}

${data.jurisdiction ? `Jurisdiction: ${data.jurisdiction}` : ''}
${data.company ? `Company: ${data.company}` : ''}

Our team will contact you within 24 hours to proceed with the next steps for your company formation.

If you have any questions, please don't hesitate to contact us at info@oneoffshorecompany.com or call +44 203 8461272.

Best regards,
One Offshore Company Team
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: customerSubject,
      body: customerBody
    });
    
    // Send notification email to admin
    const adminSubject = `New Payment Received - ${data.name}`;
    const adminBody = `
New payment received:

Customer: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Amount: £${(data.amount / 100).toFixed(2)}
Payment Type: ${data.payment_type}
${data.invoice_number ? `Invoice: ${data.invoice_number}` : ''}
${data.jurisdiction ? `Jurisdiction: ${data.jurisdiction}` : ''}
${data.company ? `Company: ${data.company}` : ''}

Please contact the customer within 24 hours to proceed with company formation.
    `;
    
    MailApp.sendEmail({
      to: 'info@oneoffshorecompany.com',
      subject: adminSubject,
      body: adminBody
    });
    
    console.log('Emails sent successfully for:', data.email);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Emails sent successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - you can run this to test the script
function testSendEmail() {
  const testData = {
    email: 'test@example.com',
    name: 'Test Customer',
    amount: 66900,
    phone: '+441234567890',
    company: 'Test Company Ltd',
    jurisdiction: 'Seychelles',
    invoice_number: 'TEST-001',
    payment_type: 'invoice'
  };
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(testData)
  };
  
  const response = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
  
  console.log('Test response:', response.getContent());
}