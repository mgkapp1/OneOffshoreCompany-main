"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About One Offshore Company</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our package solutions are meticulously crafted based on our extensive experience in the industry. To give you an idea of our offerings, please browse our website to see some of our competitive package prices.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              To explore further package solutions, please call us for a free consultation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We take pride in being more than just an online provider of offshore companies and trusts. Our expertise extends to all aspects of your offshore business, ensuring comprehensive support and guidance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-green-600 mr-3">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-gray-700">Regulated agents in various offshore locations worldwide</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-green-600 mr-3">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-gray-700">Expert guidance for all aspects of offshore business</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-green-600 mr-3">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-gray-700">Professional advice and comprehensive support</span>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border bg-white shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-6 h-6 text-[#3FA4F4]">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Established Since 2012</h4>
                      <p className="text-gray-600">Over a decade of experience in offshore company formation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-[#3FA4F4]">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Global Presence</h4>
                      <p className="text-gray-600">Offices in Dubai and Mauritius for comprehensive support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake w-6 h-6 text-[#3FA4F4]">
                        <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                        <path d="m21 3 1 11h-2"></path>
                        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                        <path d="M3 4h8"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Professional Service</h4>
                      <p className="text-gray-600">Expert guidance throughout your offshore business journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;