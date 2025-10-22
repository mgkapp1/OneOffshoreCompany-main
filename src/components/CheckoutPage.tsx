"use client";

import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface CustomerFormData {
  name: string;
  email: string;
  email_confirmation: string;
  phone: string;
  company_name: string;
  invoice_number: string;
  amount: string;
  jurisdiction: string;
  payment_type: 'cart' | 'invoice';
}

const CheckoutPage = () => {
  const { state } = useCart();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    email: '',
    email_confirmation: '',
    phone: '',
    company_name: '',
    invoice_number: '',
    amount: '',
    jurisdiction: '',
    payment_type: 'cart'
  });

  // Check if this is an invoice payment from URL parameters
  useEffect(() => {
    const invoiceNumber = searchParams.get('$ProFormaID');
    const companyName = searchParams.get('$OSCompanyName');
    const firstName = searchParams.get('$FirstName');
    const lastName = searchParams.get('$LastName');
    const phone = searchParams.get('$TelNo');
    const email = searchParams.get('$CustomerEmail');
    const jurisdiction = searchParams.get('$Jurisdiction');
    const amount = searchParams.get('$ValueIncTax');

    if (invoiceNumber) {
      // This is an invoice payment - pre-fill the form
      setFormData(prev => ({
        ...prev,
        payment_type: 'invoice',
        invoice_number: invoiceNumber || '',
        company_name: companyName || '',
        name: `${firstName || ''} ${lastName || ''}`.trim(),
        phone: phone || '',
        email: email || '',
        email_confirmation: email || '',
        jurisdiction: jurisdiction || '',
        amount: amount || ''
      }));
    } else {
      // This is a cart payment - set amount from cart
      setFormData(prev => ({
        ...prev,
        amount: state.total.toString(),
        payment_type: 'cart'
      }));
    }
  }, [searchParams, state.total]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address');
      return false;
    }

    if (formData.email !== formData.email_confirmation) {
      setError('Email addresses do not match');
      return false;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Prepare items array for the serverless function
      let itemsToSend;
      if (formData.payment_type === 'invoice') {
        // For invoice payment, create a single item representing the invoice
        itemsToSend = [{
          name: `Invoice Payment: ${formData.invoice_number}`,
          amount: Math.round(parseFloat(formData.amount) * 100), // Convert GBP to pence
          jurisdiction: formData.jurisdiction || 'N/A',
          type: 'invoice',
          quantity: 1
        }];
      } else {
        // For cart payment, use the items from the cart state
        itemsToSend = state.items.map(item => ({
          ...item,
          amount: Math.round(item.price * 100), // Convert GBP to pence
          quantity: 1
        }));
      }

      if (itemsToSend.length === 0) {
        setError('Your cart is empty or invoice amount is zero.');
        setIsProcessing(false);
        return;
      }

      // Call the secure serverless function to create the Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: itemsToSend,
          customer_email: formData.email,
          success_url: `${window.location.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/checkout`,
          metadata: {
            name: formData.name,
            phone: formData.phone,
            company: formData.company_name,
            invoice: formData.invoice_number,
            jurisdiction: formData.jurisdiction,
            payment_type: formData.payment_type
          }
        }),
      });

      const data = await response.json();

      if (data.error || !data.sessionUrl) {
        throw new Error(data.message || 'Failed to create Stripe session.');
      }

      // Redirect to Stripe Checkout using session URL
      window.location.href = data.sessionUrl;

    } catch (error) {
      console.error('Checkout error:', error);
      setError(error instanceof Error ? error.message : 'Payment failed');
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price);
  };

  const isInvoicePayment = formData.payment_type === 'invoice';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Home
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary & Customer Information */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {isInvoicePayment ? (
                  <div className="py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Invoice Payment</h3>
                    <p className="text-sm text-gray-600">Invoice: {formData.invoice_number}</p>
                    <p className="text-sm text-gray-600">Company: {formData.company_name}</p>
                  </div>
                ) : (
                  state.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 capitalize">{item.jurisdiction} • {item.type}</p>
                      </div>
                      <span className="font-semibold text-blue-600">{formatPrice(item.price)}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-2xl text-blue-600">{formatPrice(parseFloat(formData.amount))}</span>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Information</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email_confirmation">
                    Confirm Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email_confirmation"
                    name="email_confirmation"
                    required
                    value={formData.email_confirmation}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                {!isInvoicePayment && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="company_name">
                      Company Name (Optional)
                    </label>
                    <input 
                      type="text" 
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Your Order</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                <p className="text-gray-600 mb-4">
                  You'll be redirected to Stripe's secure payment page to complete your purchase.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded mr-3">
                      <svg viewBox="0 0 24 24" width="24" height="24" className="text-blue-600">
                        <path fill="currentColor" d="M13.5 2L13 4h-2l-.5-2h3zM20 13.5v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 13.5v-3H2v3H0v2h2v3h2v-3h3v-2H4z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800">Secure Payment</p>
                      <p className="text-blue-600 text-sm">Powered by Stripe</p>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isProcessing || !formData.name || !formData.email || !formData.email_confirmation || formData.email !== formData.email_confirmation}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Pay {formatPrice(parseFloat(formData.amount))}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Your payment is secure and encrypted. A confirmation email will be sent to you and our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;