"use client";

import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import SearchModal from './SearchModal';
import CartModal from './CartModal';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Jurisdictions", id: "jurisdictions" },
    { name: "Compliance", id: "compliance" },
    { name: "Forming An Offshore Company", id: "forming-offshore-company" },
    { name: "About Us", id: "about" },
    { name: "Contact Us", id: "contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  // Test renewals link - remove in production
  const testRenewalsLink = () => {
    navigate('/renewals?$OSCompanyName=Test%20Company&$FirstName=John&$LastName=Doe&$TelNo=+441234567890&$CustomerEmail=test@example.com&$ProFormaID=TEST-12345&$Jurisdiction=Seychelles&$ValueIncTax=1065');
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <div className="h-8 sm:h-10 md:h-12 w-auto flex items-center space-x-3">
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
              </a>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Test renewals link - remove in production */}
              <button 
                onClick={testRenewalsLink}
                className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer text-xs"
              >
                Test Invoice Link
              </button>

              <div className="hidden sm:block">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-2 cursor-pointer"
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
              </div>

              <button 
                onClick={() => setIsCartOpen(true)}
                className="justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm cursor-pointer relative"
              >
                <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Cart</span>
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>

              <div className="lg:hidden">
                <button 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-wrap justify-center space-x-4 xl:space-x-8 py-3 border-t border-gray-200">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#3FA4F4] px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-[#3FA4F4] font-medium text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-[#3FA4F4] font-medium text-left cursor-pointer flex items-center space-x-2"
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
                <button 
                  onClick={testRenewalsLink}
                  className="text-gray-600 hover:text-[#3FA4F4] font-medium text-left cursor-pointer"
                >
                  Test Invoice Link
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default Header;