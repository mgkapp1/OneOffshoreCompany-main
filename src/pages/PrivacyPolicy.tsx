"use client";

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link to="/">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4 bg-white/20 text-white hover:bg-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Home
              </button>
            </Link>
          </div>
          <div className="h-12 w-auto mb-8 flex items-center space-x-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="hsl(207, 90%, 60%)"></circle>
              <circle cx="20" cy="20" r="12" fill="white"></circle>
              <circle cx="20" cy="20" r="6" fill="hsl(207, 90%, 60%)"></circle>
            </svg>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900">One</span>
              <span className="text-lg font-bold" style={{ color: 'rgb(61, 162, 245)' }}>Offshore</span>
              <span className="text-lg font-bold text-gray-600">Company</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy, GDPR & CCPA</h1>
          <p className="text-xl opacity-90">Comprehensive privacy protection and data rights</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Privacy Policy</h2>
          <h3>Introduction</h3>
          <p>Privacy statement of Emford Global DMCC trading as One Offshore Company ("Emford" or "We").</p>
          <p>To perform our contractual obligations, Emford collects, processes, and stores personal data relating to you, including but not limited to, sensitive personal data. Emford treats any personal data we collect according to our client onboarding processes in line with current Regulatory Obligations as a Licensed and Supervised Management Company and Corporate Trustee and as part of the provision of our services as private and confidential and we abide by all data protection laws as may be applicable. We have implemented organizational, physical, and technical safeguards which are designed to protect your personal information from unauthorized access, use, or disclosure. We are also committed to being transparent about how your personal data is collected and used. We ask that you read this privacy statement carefully as it contains important information on who we are, how and why we collect, store, use, and share your personal information, your rights in relation to your personal information, and on how to contact us and the supervisory authorities if you have a complaint on the way your personal data is being collected or processed.</p>
          
          {/* Rest of the Privacy Policy content remains the same */}
          <h3>Collection of Personal Data</h3>
          <p>We collect personal data directly from you, and where lawful and reasonable, we may collect personal information about you from third parties and publicly available sources, such as Business Introducers, internet websites, Anti-Money Laundering screening software for the purposes set out below. Personal data we may collect includes but is not limited to:</p>
          <ul>
            <li>Name</li>
            <li>Contact information including email address and phone number</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
          
          {/* ... rest of the content ... */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;