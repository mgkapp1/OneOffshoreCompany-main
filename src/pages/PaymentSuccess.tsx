"use client";

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clear cart on successful payment
    clearCart();
    setIsLoading(false);
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
          
          {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {sessionId}
            </p>
          )}
          
          <div className="space-y-4">
            <p className="text-gray-700">
              You will receive a confirmation email shortly with your order details and next steps for your company formation.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 font-semibold">What happens next?</p>
              <ul className="text-blue-700 text-sm mt-2 space-y-1 text-left">
                <li>• Our team will contact you within 24 hours</li>
                <li>• We'll guide you through the documentation process</li>
                <li>• Your company will be formed within 1-3 business days</li>
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