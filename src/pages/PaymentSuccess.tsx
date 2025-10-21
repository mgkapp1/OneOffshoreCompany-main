"use client";

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { clearCart, state } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const getCustomerDataFromURL = () => {
    return {
      email: searchParams.get('customer_email') || '',
      amount: searchParams.get('amount') || '0',
      name: searchParams.get('customer_name') || '',
      company: searchParams.get('company_name') || '',
      phone: searchParams.get('customer_phone') || '',
      jurisdiction: searchParams.get('jurisdiction') || '',
      invoice_number: searchParams.get('invoice_number') || '',
      payment_type: searchParams.get('payment_type') || 'cart'
    };
  };

  const sendConfirmationEmail = async () => {
    try {
      const customerData = getCustomerDataFromURL();
      
      // Validate we have required data
      if (!customerData.email || !customerData.name) {
        throw new Error('Missing customer data for email confirmation');
      }

      const emailData = {
        email: customerData.email,
        amount: Math.round(parseFloat(customerData.amount) * 100), // Convert to pence
        name: customerData.name,
        company: customerData.company,
        phone: customerData.phone,
        jurisdiction: customerData.jurisdiction,
        invoice_number: customerData.invoice_number,
        payment_type: customerData.payment_type
      };

      console.log('Sending email data:', emailData);
      
      const response = await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      
      if (result.success) {
        setEmailSent(true);
        console.log('Confirmation emails sent successfully');
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      setEmailError('Failed to send confirmation email. Our team will contact you shortly.');
    }
  };

  useEffect(() => {
    const processPaymentSuccess = async () => {
      // Clear cart on successful payment
      clearCart();
      
      // Send confirmation emails
      await sendConfirmationEmail();
      
      setIsLoading(false);
    };

    processPaymentSuccess();
  }, [clearCart]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment and sending confirmation...</p>
        </div>
      </div>
    );
  }

  const customerData = getCustomerDataFromURL();
  const formattedAmount = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(parseFloat(customerData.amount));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
          
          {emailSent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700">✓ Confirmation email sent to {customerData.email}</p>
            </div>
          )}
          
          {emailError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-700">{emailError}</p>
            </div>
          )}
          
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order of {formattedAmount}. Your payment has been processed successfully.
          </p>
          
          {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {sessionId}
            </p>
          )}
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Order Details:</h3>
              <p className="text-sm text-gray-600"><strong>Name:</strong> {customerData.name}</p>
              <p className="text-sm text-gray-600"><strong>Email:</strong> {customerData.email}</p>
              {customerData.company && <p className="text-sm text-gray-600"><strong>Company:</strong> {customerData.company}</p>}
              {customerData.phone && <p className="text-sm text-gray-600"><strong>Phone:</strong> {customerData.phone}</p>}
              {customerData.jurisdiction && <p className="text-sm text-gray-600"><strong>Jurisdiction:</strong> {customerData.jurisdiction}</p>}
            </div>
            
            <p className="text-gray-700">
              You will receive a confirmation email shortly with your order details and next steps for your company formation.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 font-semibold">What happens next?</p>
              <ul className="text-blue-700 text-sm mt-2 space-y-1 text-left">
                <li>• Our team will contact you within 24 hours</li>
                <li>• We'll guide you through the documentation process</li>
                <li>• Your company will be formed within 1-3 business days</li>
                <li>• Check your email for the confirmation and next steps</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <Link to="/">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 rounded-md px-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
            
            <p className="text-sm text-gray-500">
              Need help? Contact us at <a href="mailto:info@oneoffshorecompany.com" className="text-blue-600 hover:underline">info@oneoffshorecompany.com</a>
              <br />
              or call <a href="tel:+442038461272" className="text-blue-600 hover:underline">+44 203 8461272</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;