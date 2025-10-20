"use client";

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft, RefreshCw, Mail, HelpCircle, Eye } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { submitPaymentNotification, formatOrderItems, PaymentData, testNotificationSystem, getGoogleFormsHelp, viewStoredNotifications } from '../utils/emailService';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { state, clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [notificationSent, setNotificationSent] = useState(false);
  const [notificationError, setNotificationError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<string | null>(null);

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

      console.log('Sending payment notifications...');

      // Prepare and submit notifications
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

      console.log('Payment data for notifications:', paymentData);

      const success = await submitPaymentNotification(paymentData);
      
      if (success) {
        console.log('Payment notifications sent successfully');
        setNotificationSent(true);
      } else {
        console.error('Some notification methods failed');
        setNotificationError('Some notifications failed. Our team will still contact you shortly.');
      }

    } catch (error) {
      console.error('Error processing payment success:', error);
      setNotificationError('An error occurred. Our team will contact you shortly.');
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

  const handleTestNotifications = async () => {
    setTestResult('Testing notification system...');
    const result = await testNotificationSystem();
    setTestResult(result ? 'Notification test successful!' : 'Some notifications failed!');
  };

  const handleRetryNotifications = async () => {
    setIsLoading(true);
    setNotificationError(null);
    await processPaymentSuccess();
  };

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
          
          {notificationSent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700 font-medium">
                ✓ Payment notifications sent successfully
              </p>
              <p className="text-green-600 text-sm mt-1">
                Our team has been notified and will contact you shortly.
              </p>
            </div>
          )}
          
          {notificationError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-700 mb-4">
                {notificationError}
              </p>
              <button
                onClick={handleRetryNotifications}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-600 text-white hover:bg-yellow-700 h-9 rounded-md px-4"
              >
                <RefreshCw className="w-4 h-4" />
                Retry Notifications
              </button>
            </div>
          )}
          
          {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {sessionId}
            </p>
          )}
          
          {/* Test Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-semibold mb-2">Notification System</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleTestNotifications}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-9 rounded-md px-4"
              >
                <Mail className="w-4 h-4" />
                Test Notifications
              </button>
              <button
                onClick={getGoogleFormsHelp}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-700 h-9 rounded-md px-4"
              >
                <HelpCircle className="w-4 h-4" />
                Field Help
              </button>
              <button
                onClick={viewStoredNotifications}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-9 rounded-md px-4"
              >
                <Eye className="w-4 h-4" />
                View Notifications
              </button>
            </div>
            {testResult && (
              <p className="text-blue-700 text-sm mt-2">{testResult}</p>
            )}
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              You will receive email confirmations shortly with your order details and next steps for your company formation.
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