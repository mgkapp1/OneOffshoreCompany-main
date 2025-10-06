"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const BVIPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'bvi-formation',
      name: 'BVI Company Formation',
      price: 1090,
      jurisdiction: 'BVI',
      type: 'formation'
    });
    // Redirect to Popular Jurisdictions section on home page
    window.location.href = '/#jurisdictions';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Jurisdictions
            </button>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-8 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 65%, rgb(0, 102, 0) 65%, rgb(0, 102, 0) 100%)', border: '1px solid rgb(221, 221, 221)' }}></div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">BVI Company Formation</h1>
              <p className="text-gray-600">Professional offshore company formation services</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About BVI</h2>
              <p className="text-gray-600 mb-4">
                The British Virgin Islands is a premier offshore jurisdiction offering political stability, 
                no corporate tax, flexible corporate structures, and strong confidentiality laws. 
                It's one of the world's most respected offshore financial centers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">0% corporate tax on foreign income</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Political and economic stability</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible corporate structures</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strong confidentiality laws</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Includes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of Incorporation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memorandum & Articles of Association
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-I'll continue updating the remaining jurisdiction pages to add the redirect functionality after adding items to cart.

<dyad-write path="src/pages/jurisdictions/BVI.tsx" description="Update BVI page to redirect after adding to cart">
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const BVIPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'bvi-formation',
      name: 'BVI Company Formation',
      price: 1090,
      jurisdiction: 'BVI',
      type: 'formation'
    });
    // Redirect to Popular Jurisdictions section on home page
    window.location.href = '/#jurisdictions';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Jurisdictions
            </button>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-8 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 65%, rgb(0, 102, 0) 65%, rgb(0, 102, 0) 100%)', border: '1px solid rgb(221, 221, 221)' }}></div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">BVI Company Formation</h1>
              <p className="text-gray-600">Professional offshore company formation services</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About BVI</h2>
              <p className="text-gray-600 mb-4">
                The British Virgin Islands is a premier offshore jurisdiction offering political stability, 
                no corporate tax, flexible corporate structures, and strong confidentiality laws. 
                It's one of the world's most respected offshore financial centers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">0% corporate tax on foreign income</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Political and economic stability</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible corporate structures</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strong confidentiality laws</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Includes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of Incorporation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memorandum & Articles of Association
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Share certificates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Registered office address for 1 year
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Registered agent services for 1 year
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Government fees included
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">Pricing & Package</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#3FA4F4] mb-2">£1090.00</div>
                  <p className="text-gray-600">Formation Package</p>
                  <p className="text-sm text-gray-500 mt-2">Annual renewal: £750</p>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3FA4F4] text-white hover:bg-blue-600 h-11 rounded-md px-8 w-full mb-4"
                >
                  Add to Cart
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 inline mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Formation time: 1-2 days
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose BVI?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• World-renowned financial center</li>
                <li>• No capital gains tax or inheritance tax</li>
                <li>• English common law legal system</li>
                <li>• No currency exchange controls</li>
                <li>• Confidentiality of directors and shareholders</li>
                <li>• No requirement for annual audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BVIPage;