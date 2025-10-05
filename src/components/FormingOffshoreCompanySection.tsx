"use client";

import React from 'react';

const FormingOffshoreCompanySection = () => {
  return (
    <section id="forming-offshore-company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Forming An Offshore Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of offshore company formation services, corporate banking solutions, and trust formation services with competitive pricing and expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offshore Company Formation Card */}
          <div className="rounded-lg border bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-[#3FA4F4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Offshore Company Formation</h3>
              <p className="text-gray-600 mb-6">Professional company formation services in multiple jurisdictions including Seychelles, BVI, Gibraltar, Hong Kong, and Marshall Islands from £699.</p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 text-[#3FA4F4] hover:text-blue-600 font-medium">
                View Jurisdictions →
              </button>
            </div>
          </div>
          
          {/* Corporate Banking Card */}
          <div className="rounded-lg border bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-[#3FA4F4]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Banking</h3>
              <p className="text-gray-600 mb-6">Professional assistance with offshore bank account opening through our network of banking partners worldwide.</p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 text-[#3FA4F4] hover:text-blue-600 font-medium">
                Get Quote →
              </button>
            </div>
          </div>
          
          {/* Trust Formation Card */}
          <div className="rounded-lg border bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-[#3FA4F4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trust Formation</h3>
              <p className="text-gray-600 mb-6">Expert offshore trust formation services for asset protection and estate planning with professional guidance.</p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 text-[#3FA4F4] hover:text-blue-600 font-medium">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormingOffshoreCompanySection;