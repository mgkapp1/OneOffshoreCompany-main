"use client";

import React from 'react';
import { FileText, CheckCircle, Users, Building } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-primary-blue" />,
      title: "Initial Consultation",
      description: "Discuss your requirements and choose the right jurisdiction"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-blue" />,
      title: "Document Preparation",
      description: "We prepare all necessary documents for company formation"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-blue" />,
      title: "Company Registration",
      description: "Submit documents and register your offshore company"
    },
    {
      icon: <Building className="w-8 h-8 text-primary-blue" />,
      title: "Bank Account Setup",
      description: "Assist with corporate bank account opening"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Our Simple Process</h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            We make offshore company formation straightforward with our proven 4-step process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-accent-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-primary-blue mb-2">{index + 1}</div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">{step.title}</h3>
              <p className="text-text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;