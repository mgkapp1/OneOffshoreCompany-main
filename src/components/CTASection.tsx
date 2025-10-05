"use client";

import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Offshore Company?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have successfully established their offshore companies with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Get Started Today
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;