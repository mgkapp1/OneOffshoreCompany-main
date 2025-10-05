"use client";

import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Offshore Company Formation:
            <span className="block">Clear. Simple. Human.</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Established in 2012, we provide comprehensive offshore company formation services from £699. Expert assistance with jurisdictions including Seychelles, Gibraltar, Hong Kong, BVI, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => scrollToSection('jurisdictions')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-white text-[#3FA4F4] hover:bg-gray-50 font-semibold px-6 py-2"
            >
              View Our Jurisdictions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-white text-[#3FA4F4] hover:bg-gray-50 hover:text-[#3FA4F4] font-semibold px-6 py-2"
            >
              Free Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;