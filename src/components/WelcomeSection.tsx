"use client";

import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Welcome to One Offshore Company</h3>
          <p className="text-gray-600 max-w-4xl mx-auto">
            We, as a leading provider of offshore companies and trusts, offer a wide range of services from regulated agents in various offshore locations worldwide. Our strategic presence in Dubai, with additional offices in Mauritius, enables us to deliver professional advice and support to our esteemed international clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fadeInUp">
            <div className="text-[#3FA4F4] text-4xl mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Established 2012</h3>
            <p className="text-gray-600">Leading brand for online company formations</p>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <div className="text-[#3FA4F4] text-4xl mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Global Presence</h3>
            <p className="text-gray-600">Head office in Dubai, additional office in Mauritius</p>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="text-[#3FA4F4] text-4xl mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Expert Support</h3>
            <p className="text-gray-600">Professional advice from regulated agents worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;