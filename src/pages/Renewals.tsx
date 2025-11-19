"use client";

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Renewals = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract all current search parameters
    const params = new URLSearchParams(searchParams);
    
    // Build the redirect URL to checkout with all parameters preserved
    const checkoutUrl = `/checkout${params.toString() ? `?${params.toString()}` : ''}`;
    
    console.log('Redirecting from renewals to checkout:', checkoutUrl);
    
    // Redirect to checkout page with all parameters
    navigate(checkoutUrl, { replace: true });
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Renewal</h2>
        <p className="text-gray-600">Redirecting to payment page...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
      </div>
    </div>
  );
};

export default Renewals;