"use client";

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    emailjs: any;
  }
}

interface EmailJSLoaderProps {
  children: React.ReactNode;
}

const EmailJSLoader = ({ children }: EmailJSLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if EmailJS is already loaded
    if (window.emailjs) {
      setIsLoaded(true);
      return;
    }

    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      console.log('EmailJS loaded successfully');
      setIsLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load EmailJS');
      setIsLoaded(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return <>{children}</>;
};

export default EmailJSLoader;