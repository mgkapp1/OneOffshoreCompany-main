"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [emailStatus, setEmailStatus] = useState<'pending' | 'sent' | 'failed'>('pending');
  const [emailError, setEmailError] = useState<string | null>(null);
  
  // Use ref to track if we've already processed the payment
  const hasProcessedRef = useRef(false);
  // Use localStorage for persistent duplicate protection across page refreshes
  const [hasProcessedPayment, setHasProcessedPayment] = useState(false);

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

  const generatePaymentId = () => {
    const customerData = getCustomerDataFromURL();
    return `payment_${customerData.email}_${customerData.amount}_${customerData.invoice_number || 'cart'}_${customerData.name}`;
  };

  const sendConfirmationEmail = async (): Promise<boolean> => {
    try {
      const customerData = getCustomerDataFromURL();
      
      // Validate we have required data
      if (!customerData.email || !customerData.name) {
        console.warn('Missing customer data for email confirmation');
        setEmailStatus('failed');
        setEmailError('Missing customer information');
        return false;
      }

      const emailData = {
        email: customerData.email,
        amount: customerData.amount,
        name: customerData.name,
        company: customerData.company,
        phone: customerData.phone,
        jurisdiction: customerData.jurisdiction,
        invoice_number: customerData.invoice_number,
        payment_type: customerData.payment_type
      };

      console.log('Sending email via serverless function:', emailData);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      console.log('Email API response:', result);

      if (result.success) {
        setEmailStatus('sent');
        return true;
      } else {
        setEmailStatus('failed');
        setEmailError(result.error || 'Failed to send email');
        return false;
      }
      
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      setEmailStatus('failed');
      setEmailError('Network error - our team will contact you directly');
      return false;
    }
  };

  useEffect(() => {
    // Check if we've already processed this payment using localStorage
    const paymentId = generatePaymentId();
    const processedPayment = localStorage.getItem(paymentId);
    
    if (processedPayment) {
      console.log('Payment already processed, skipping email');
      setEmailStatus('sent');
      setIsLoading(false);
      return;
    }

    // Prevent duplicate processing in current session
    if (hasProcessedRef.current) {
      return;
    }
    
    hasProcessedRef.current = true;

    const processPaymentSuccess = async () => {
      try {
        // Clear cart on successful payment
        clearCart();
        
        // Send confirmation email
        const emailSent = await sendConfirmationEmail();
        
        if (emailSent) {
          // Mark this payment as processed in localStorage to prevent duplicates on refresh
          localStorage.setItem(paymentId, 'processed');
          // Set expiration to 1 hour
          setTimeout(() => {
            localStorage.removeItem(paymentId);
          }, 60 * 60 * 1000);
        }
        
      } catch (error) {
        console.error('Error processing payment success:', error);
        setEmailStatus('failed');
        setEmailError('An error occurred - our team will contact you directly');
      } finally {
        setIsLoading(false);
      }
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
          <p className="text-gray-600 mb-6">
            Thank you for your payment of <strong>{formattedAmount}</strong>
          </p>
          
          {/* Email Status */}
          {emailStatus === 'sent' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-green-600" />
                <p className="text-green-700 font-medium">
                  Confirmation email sent to {customerData.email}
                </p>
              </div>
            </div>
          )}
          
          {emailStatus === 'failed' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="text-yellow-700 font-medium">
                    Email confirmation may be delayed
                  </p>
                  <p className="text-yellow-600 text-sm mt-1">
                    {emailError || 'Our team will contact you directly within 24 hours'}
                  </p>
                </div>
              </div>
            </div>
          )}
          
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
              {customerData.invoice_number && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Invoice:</span>
                  <span className="font-semibold text-gray-800">{customerData.invoice_number}</span>
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
                  <p className="text-blue-700 text-sm">
                    {emailStatus === 'sent' 
                      ? 'Check your email for order details and next steps' 
                      : 'Our team will email you within 24 hours'}
                  </p>
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