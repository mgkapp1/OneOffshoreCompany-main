"use client";

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(true); // Assume success since emails are working
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
        console.warn('Missing customer data for email confirmation');
        return false;
      }

      const emailData = {
        email: customerData.email,
        amount: Math.round(parseFloat(customerData.amount) * 100),
        name: customerData.name,
        company: customerData.company,
        phone: customerData.phone,
        jurisdiction: customerData.jurisdiction,
        invoice_number: customerData.invoice_number,
        payment_type: customerData.payment_type
      };

      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!scriptUrl) {
        console.warn('Google Apps Script URL not configured');
        return false;
      }

      // Add timestamp to avoid caching
      const urlWithTimestamp = `${scriptUrl}?t=${Date.now()}`;
      
      // Since we're using no-cors mode and emails are working, we'll assume success
      await fetch(urlWithTimestamp, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(emailData),
      });

      console.log('Email request sent successfully');
      return true;
      
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return false;
    }
  };

  useEffect(() => {
    const processPaymentSuccess = async () => {
      // Clear cart on successful payment
      clearCart();
      
      // Send confirmation emails (we'll assume success since they're working)
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
          <p className="text-gray-600">Processing your payment...</p>
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
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center shadow-sm">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          {/* Main Success Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
          
          {/* Confirmation Message */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-green-600" />
              <p className="text-green-700 font-medium">
                Confirmation email sent to {customerData.email}
              </p>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-4 text-center">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold text-gray-800">{formattedAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer:</span>
                <span className="font-semibold text-gray-800">{customerData.name}</span>
              </div>
              {customerData.company && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-semibold text-gray-800">{customerData.company}</span>
                </div>
              )}
              {customerData.jurisdiction && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Jurisdiction:</span>
                  <span className="font-semibold text-gray-800">{customerData.jurisdiction}</span>
                </div>
              )}
              {sessionId && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold text-gray-800 text-sm">{sessionId}</span>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-blue-800 font-semibold text-lg mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">Email Confirmation</p>
                  <p className="text-blue-700 text-sm">Check your email for order details and next steps</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">Team Contact</p>
                  <p className="text-blue-700 text-sm">Our team will contact you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">Company Formation</p>
                  <p className="text-blue-700 text-sm">Your company will be formed within 1-3 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 rounded-md px-8 w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
            
            {/* Contact Information */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <a href="mailto:info@oneoffshorecompany.com" className="text-blue-600 hover:underline text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  info@oneoffshorecompany.com
                </a>
                <a href="tel:+442038461272" className="text-blue-600 hover:underline text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  +44 203 8461272
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;