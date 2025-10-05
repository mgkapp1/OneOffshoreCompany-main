"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import JurisdictionsSection from '@/components/JurisdictionsSection';
import ComplianceSection from '@/components/ComplianceSection';
import FormingOffshoreCompanySection from '@/components/FormingOffshoreCompanySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <JurisdictionsSection />
      <ComplianceSection />
      <FormingOffshoreCompanySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;