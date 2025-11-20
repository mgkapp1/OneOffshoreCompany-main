"use client";

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Renewals = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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

    // Always redirect to checkout with all parameters preserved
    const params = new URLSearchParams(searchParams);
    navigate(`/checkout?${params.toString()}`);
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Renewal</h2>
        <p className="text-gray-600">Redirecting to checkout...</p>
      </div>
    </div>
  );
};

export default Renewals;