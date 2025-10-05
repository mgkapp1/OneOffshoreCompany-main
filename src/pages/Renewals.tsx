"use client";

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const Renewals = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle double slash in URL by redirecting to clean URL
    if (location.pathname.includes('//')) {
      const cleanPath = location.pathname.replace('//', '/');
      navigate(`${cleanPath}${location.search}`, { replace: true });
      return;
    }

    // Extract parameters from accounting software link
    const companyName = searchParams.get('$OSCompanyName');
    const firstName = searchParams.get('$FirstName');
    const lastName = searchParams.get('$LastName');
    const phone = searchParams.get('$TelNo');
    const email = searchParams.get('$CustomerEmail');
    const invoiceNumber = searchParams.get('$ProFormaID');
    const jurisdiction = searchParams.get('$Jurisdiction');
    const amount = searchParams.get('$ValueIncTax');

    console.log('Processing invoice payment:', {
      companyName, firstName, lastName, phone, email, invoiceNumber, jurisdiction, amount
    });

    // Build checkout URL with cleaned parameters
    const checkoutParams = new URLSearchParams();
    
    if (invoiceNumber) checkoutParams.append('$ProFormaID', invoiceNumber);
    if (companyName) checkoutParams.append('$OSCompanyName', companyName);
    if (firstName) checkoutParams.append('$FirstName', firstName);
    if (lastName) checkoutParams.append('$LastName', lastName);
    if (phone) checkoutParams.append('$TelNo', phone);
    if (email) checkoutParams.append('$CustomerEmail', email);
    if (jurisdiction) checkoutParams.append('$Jurisdiction', jurisdiction);
    if (amount) checkoutParams.append('$ValueIncTax', amount);

    // Redirect to checkout page with invoice parameters
    navigate(`/checkout?${checkoutParams.toString()}`);
  }, [searchParams, navigate, location]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Invoice</h2>
        <p className="text-gray-600">Redirecting to payment page...</p>
      </div>
    </div>
  );
};

export default Renewals;