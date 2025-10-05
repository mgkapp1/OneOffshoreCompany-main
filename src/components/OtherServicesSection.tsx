"use client";

import React from 'react';

const OtherServicesSection = () => {
  return (
    <section id="other-services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Additional professional services to support your offshore business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Bank Account Opening</h3>
            <p className="text-gray-600">Assistance with corporate bank account setup in international banks.</p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Services</h3>
            <p className="text-gray-600">Legal documentation and advisory services for international business.</p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Advisory</h3>
            <p className="text-gray-600">International tax planning and compliance advisory services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;