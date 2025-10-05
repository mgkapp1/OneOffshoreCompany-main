"use client";

import React, { useState, useEffect } from 'react';
import { X, Search, MapPin, FileText, Building, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Enhanced search data with icons and better categorization
  const searchData = [
    { 
      title: 'Seychelles Company Formation', 
      description: 'Professional offshore company formation services in Seychelles', 
      url: '/jurisdiction/seychelles', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'BVI Company Formation', 
      description: 'British Virgin Islands offshore company services', 
      url: '/jurisdiction/bvi', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'Gibraltar Company Formation', 
      description: 'Gibraltar offshore company formation services', 
      url: '/jurisdiction/gibraltar', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'Hong Kong Company Formation', 
      description: 'Hong Kong offshore company services', 
      url: '/jurisdiction/hong-kong', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'Marshall Islands Company', 
      description: 'Marshall Islands offshore company formation', 
      url: '/jurisdiction/marshall-islands', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'Nevis Company Formation', 
      description: 'Nevis offshore company services', 
      url: '/jurisdiction/nevis', 
      type: 'Jurisdiction',
      icon: <MapPin className="w-4 h-4" />
    },
    { 
      title: 'Company Formation Services', 
      description: 'Complete offshore company registration services', 
      url: '/#jurisdictions', 
      type: 'Service',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Corporate Banking', 
      description: 'Offshore corporate banking solutions', 
      url: '/#jurisdictions', 
      type: 'Service',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Trust Formation', 
      description: 'Offshore trust formation services', 
      url: '/#jurisdictions', 
      type: 'Service',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Compliance Requirements', 
      description: 'Documentation and compliance requirements', 
      url: '/#compliance', 
      type: 'Service',
      icon: <Shield className="w-4 h-4" />
    },
    { 
      title: 'Privacy Policy', 
      description: 'GDPR, CCPA and privacy information', 
      url: '/privacy-policy-gdpr-ccpa', 
      type: 'Legal',
      icon: <FileText className="w-4 h-4" />
    },
    { 
      title: 'Terms of Service', 
      description: 'Terms and conditions', 
      url: '/terms-of-service', 
      type: 'Legal',
      icon: <FileText className="w-4 h-4" />
    },
    { 
      title: 'Cookie Policy', 
      description: 'Cookie usage and tracking information', 
      url: '/cookie-policy', 
      type: 'Legal',
      icon: <FileText className="w-4 h-4" />
    },
    { 
      title: 'About Us', 
      description: 'Learn more about One Offshore Company', 
      url: '/#about', 
      type: 'Company',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Contact Us', 
      description: 'Get in touch with our experts', 
      url: '/#contact', 
      type: 'Company',
      icon: <Building className="w-4 h-4" />
    },
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
  }, [searchQuery]);

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Jurisdiction':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Service':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Legal':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Company':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mt-20 border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Search Our Website</h2>
                <p className="text-blue-100 text-sm">Find jurisdictions, services, and information</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for jurisdictions, services, legal documents, or company information..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-4 space-y-2">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.url}
                  onClick={handleResultClick}
                  className="block p-4 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-blue-600 group-hover:text-blue-700 transition-colors">
                      {result.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                          {result.title}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getTypeColor(result.type)} ml-2 flex-shrink-0`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery.trim() !== '' ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                No results found for "<span className="text-blue-600 font-medium">"{searchQuery}"</span>". 
                Try searching for jurisdictions, services, or legal information.
              </p>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search our website</h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Enter keywords to find jurisdictions, services, legal documents, or company information.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Jurisdictions</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Services</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Legal</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Company</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            Search across all jurisdictions, services, and legal documents • Press ESC to close
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;