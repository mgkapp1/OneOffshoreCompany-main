"use client";

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl opacity-90">Understanding how we use cookies to enhance your experience</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>This Cookie Policy explains how Emford Global DMCC trading as One Offshore Company ("Emford" or "We") uses cookies and similar technologies on our website to enhance your browsing experience and improve our services.</p>
          
          {/* Rest of the Cookie Policy content remains the same */}
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They are designed to hold a modest amount of data specific to a particular client and website and can be accessed either by the web server or the client device. Cookies are used to remember your preferences and actions to improve your browsing experience, making interactions faster and more efficient.</p>
          
          <h2>Types of Cookies We Use</h2>
          <h3>Necessary Cookies</h3>
          <p>Necessary cookies are essential for the operation of our website. They enable you to navigate through the site and use its core features, such as accessing secure areas. Without these cookies, certain services you have asked for cannot be provided.</p>
          {/* ... rest of the content ... */}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;