"use client";

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { submitPaymentNotification, formatOrderItems, PaymentData } from '../utils/emailService';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { state, clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [notificationStatus, setNotificationStatus] = useState<string>('Processing your payment...');

  const processPaymentSuccess = async () => {
    try {
      console.log('PaymentSuccess mounted - processing payment confirmation');
      
      // Check if we've already processed this payment
      const paymentProcessed = sessionStorage.getItem('paymentProcessed');
      
      if (paymentProcessed) {
        console.log('Payment already processed in this session');
        setIsLoading(false);
        return;
      }

      // Mark as processed immediately
      sessionStorage.setItem('paymentProcessed', 'true');
      
      // Clear cart
      clearCart();
      
      // Extract customer data from Stripe metadata
      const customerName = searchParams.get('name') || 'Customer';
      const customerEmail = searchParams.get('customer_email') || searchParams.get('email') || '';
      const phone = searchParams.get('phone') || '';
      const companyName = searchParams.get('company') || '';
      const invoiceNumber = searchParams.get('invoice') || searchParams.get('$ProFormaID') || '';
      const jurisdiction = searchParams.get('jurisdiction') || '';
      const paymentType = searchParams.get('payment_type') || (state.items.length > 0 ? 'cart' : 'invoice');
      const amount = searchParams.get('amount') || state.total.toString();

      console.log('Submitting payment to Google Forms...');

      // Prepare payment data
      const paymentData: PaymentData = {
        customer_name: customerName,
        customer_email: customerEmail,
        order_amount: `£${parseFloat(amount).toFixed(2)}`,
        jurisdiction: jurisdiction || (state.items.length > 0 ? state.items.map(item => item.jurisdiction).join(', ') : ''),
        order_items: state.items.length > 0 
          ? formatOrderItems(state.items)
          : `Invoice Payment - ${invoiceNumber}`,
        invoice_number: invoiceNumber,
        payment_type: paymentType
      };

      console.log('Payment data for Google Forms:', paymentData);

      setNotificationStatus('Submitting to Google Forms...');

      // Submit to Google Forms
      const success = await submitPaymentNotification(paymentData);
      
      if (success) {
        setNotificationStatus('✓ Submitted to Google Forms Successfully');
        console.log('Google Forms submission completed');
      } else {
        setNotificationStatus('⚠ Google Forms Submission Failed');
        console.error('Google Forms submission failed');
      }

    } catch (error) {
      console.error('Error processing payment success:', error);
      setNotificationStatus('❌ Processing Error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    processPaymentSuccess();

    // Cleanup: Remove sessionStorage when component unmounts (user leaves page)
    return () => {
      console.log('PaymentSuccess cleanup - removing sessionStorage');
      sessionStorage.removeItem('paymentProcessed');
    };
  }, [clearCart, searchParams, state.items, state.total]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
          <p className="text-sm text-gray-500 mt-2">Submitting to Google Forms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order. Your payment has been processed successfully.
          </p>
          
          {/* Notification Status */}
          <div className={`border rounded-lg p-4 mb-6 ${
            notificationStatus.includes('✓') ? 'bg-green-50 border-green-200' : 
            notificationStatus.includes('❌') ? 'bg-red-50 border-red-200' : 
            'bg-yellow-50 border-yellow-200'
          }`}>
            <h3 className={`font-semibold mb-2 ${
              notificationStatus.includes('✓') ? 'text-green-800' : 
              notificationStatus.includes('❌') ? 'text-red-800' : 
              'text-yellow-800'
            }`}>
              {notificationStatus}
            </h3>
            <p className={`text-sm ${
              notificationStatus.includes('✓') ? 'text-green-700' : 
              notificationStatus.includes('❌') ? 'text-red-700' : 
              'text-yellow-700'
            }`}>
              {notificationStatus.includes('✓') 
                ? 'Your order has been submitted to our system. Our team will contact you within 24 hours.'
                : 'There was an issue submitting your order. Please contact info@oneoffshorecompany.com for assistance.'
              }
            </p>
          </div>
          
          {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {sessionId}
            </p>
          )}
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Our team will contact you within 24 hours to guide you through the next steps of your company formation process.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 font-semibold">What happens next?</p>
              <ul className="text-blue-700 text-sm mt-2 space-y-1 text-left">
                <li>• Our team will contact you within 24 hours</li>
                <li>• We'll guide you through the documentation process</li>
                <li>• Your company will be formed within 1-3 business days</li>
                <li>• Check your email for confirmation messages</li>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;