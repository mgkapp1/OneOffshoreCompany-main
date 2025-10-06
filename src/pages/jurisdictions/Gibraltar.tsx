"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const GibraltarPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'gibraltar-formation',
      name: 'Gibraltar Company Formation',
      price: 1299,
      jurisdiction: 'Gibraltar',
      type: 'formation'
    });
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
            <div className="w-12 h-8 rounded overflow-hidden" style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(220, 20, 60) 50%, rgb(220, 20, 60) 100%)', border: '1px solid rgb(221, 221, 221)' }}></div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Gibraltar Company Formation</h1>
              <p className="text-gray-600">Professional offshore company formation services</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Gibraltar</h2>
              <p className="text-gray-600 mb-4">
                Establishing a company in Gibraltar presents a myriad of strategic advantages with low corporate tax rates, 
                no capital gains tax, and access to global markets through its strategic location at the gateway to Europe and Africa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Low corporate tax rates (0% - 10%)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No capital gains tax</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strategic European location</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">English common law legal system</span>
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
                  <div className="text-3xl font-bold text-[#3FA4F4] mb-2">£1299.00</div>
                  <p className="text-gray-600">Formation Package</p>
                  <p className="text-sm text-gray-500 mt-2">Annual renewal: £799</p>
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
                    Formation time: 2-3 days
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Gibraltar?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• EU market access through Gibraltar's special status</li>
                <li>• Political stability as a British Overseas Territory</li>
                <li>• Sophisticated banking and financial services</li>
                <li>• No VAT or sales tax</li>
                <li>• Modern corporate legislation</li>
                <li>• Professional service providers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GibraltarPage;