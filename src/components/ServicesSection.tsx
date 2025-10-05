"use client";

import React from 'react';
import { Shield, Globe, Users, FileText, Building, CreditCard } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary-blue" />,
      title: "Company Formation",
      description: "Complete offshore company registration with all necessary documentation and legal compliance."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary-blue" />,
      title: "Bank Account Opening",
      description: "Assistance with corporate bank account setup in reputable international banks."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary-blue" />,
      title: "Legal Compliance",
      description: "Ongoing compliance support, annual returns, and regulatory requirements management."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-blue" />,
      title: "Privacy Protection",
      description: "Nominee services and privacy enhancement to protect your personal information."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-blue" />,
      title: "Global Jurisdictions",
      description: "Expert advice on choosing the right jurisdiction for your specific business needs."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-blue" />,
      title: "Dedicated Support",
      description: "Personal account manager and 24/7 support throughout your company's lifecycle."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Comprehensive Services</h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            End-to-end offshore company solutions tailored to your business requirements and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-accent-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">{service.title}</h3>
              <p className="text-text-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;