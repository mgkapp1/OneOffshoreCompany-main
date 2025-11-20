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
    // Extract all renewal parameters
    const invoiceNumber = searchParams.get('$ProFormaID');
    const companyName = searchParams.get('$OSCompanyName');
    const firstName = searchParams.get('$FirstName');
    const lastName = searchParams.get('$LastName');
    const phone = searchParams.get('$TelNo');
    const email = searchParams.get('$CustomerEmail');
    const jurisdiction = searchParams.get('$Jurisdiction');
    const amount = searchParams.get('$ValueIncTax');

    console.log('Renewals page loaded with parameters:', {
      invoiceNumber,
      companyName,
      firstName,
      lastName,
      phone,
      email,
      jurisdiction,
      amount
    });

    // Check if we have essential renewal parameters
    const hasRenewalParams = invoiceNumber || amount;

    if (hasRenewalParams) {
      console.log('Renewal parameters detected, showing checkout page');
      setIsProcessing(false);
      setShowCheckout(true);
    } else {
      console.log('No renewal parameters found, redirecting to home');
      // Small delay to show processing state
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [searchParams, navigate]);

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Renewal</h2>
          <p className="text-gray-600">Checking payment information...</p>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return <CheckoutPage />;
  }

  return null;
};

export default Renewals;