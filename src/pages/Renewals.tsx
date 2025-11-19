"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CheckoutPage from '../components/CheckoutPage';

const Renewals = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    // Log for debugging
    console.log('Renewals page loaded with params:', Object.fromEntries(searchParams));
    
    // Check if we have essential renewal parameters
    const hasRenewalParams = searchParams.has('$ProFormaID') || searchParams.has('$ValueIncTax');
    
    if (hasRenewalParams) {
      // We have renewal parameters, show the checkout page directly
      console.log('Renewal parameters detected, showing checkout page');
      setIsProcessing(false);
      setShowCheckout(true);
    } else {
      // No renewal parameters, redirect to home
      console.log('No renewal parameters, redirecting to home');
      navigate('/');
    }
  }, [searchParams, navigate]);

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Renewal</h2>
          <p className="text-gray-600">Loading payment information...</p>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    // Render the CheckoutPage component directly with all the search parameters
    return <CheckoutPage />;
  }

  return null;
};

export default Renewals;