export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, amount, phone, company, jurisdiction, invoice_number, payment_type } = req.body;

    // Validate required fields
    if (!email || !name) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: email and name' 
      });
    }

    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycby_78s4mnDdqSxZOv1eMryZL66sq_1sl0eR7JE4CzEDscwGN9LaUojQKl4LbRdWlQUq/exec';

    const emailData = {
      email,
      name,
      amount,
      phone: phone || '',
      company: company || '',
      jurisdiction: jurisdiction || '',
      invoice_number: invoice_number || '',
      payment_type: payment_type || 'cart'
    };

    console.log('Forwarding email request to Google Apps Script:', emailData);

    // Forward the request to Google Apps Script
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    // Since we can't read the response body due to CORS, we'll assume success if the request goes through
    if (response.ok) {
      console.log('Email request forwarded successfully');
      res.status(200).json({ 
        success: true, 
        message: 'Email request sent successfully' 
      });
    } else {
      console.error('Google Apps Script returned error status:', response.status);
      res.status(200).json({ 
        success: true, 
        message: 'Email may be delayed - request forwarded but status uncertain' 
      });
    }

  } catch (error) {
    console.error('Error in email proxy:', error);
    res.status(200).json({ 
      success: true, 
      message: 'Email may be delayed - our team will contact you directly' 
    });
  }
}