"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const JurisdictionsSection = () => {
  const { addItem } = useCart();

  const jurisdictions = [
    {
      id: 1,
      name: "Seychelles Company",
      price: 669,
      popular: true,
      mainGradient: "bg-gradient-to-r from-blue-600 via-yellow-400 to-green-600",
      flagGradient: "linear-gradient(45deg, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 33%, rgb(255, 215, 0) 33%, rgb(255, 215, 0) 66%, rgb(220, 20, 60) 66%, rgb(220, 20, 60) 100%)",
      description: "Seychelles offers one of the most attractive offshore jurisdictions with 0% corporate tax on foreign-sourced income, strong privacy laws, and rapid company formation.",
      features: ["Certificate of Incorporation", "Memorandum & Articles", "Share certificates"],
      route: "/jurisdiction/seychelles"
    },
    {
      id: 2,
      name: "BVI Company",
      price: 1090,
      mainGradient: "bg-gradient-to-r from-blue-600 to-blue-800",
      flagGradient: "linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 65%, rgb(0, 102, 0) 65%, rgb(0, 102, 0) 100%)",
      description: "BVI is a premier offshore jurisdiction offering political stability, no corporate tax, flexible corporate structures, and strong confidentiality laws.",
      features: ["Certificate of Incorporation", "Memorandum & Articles", "Share certificates"],
      route: "/jurisdiction/bvi"
    },
    {
      id: 3,
      name: "Gibraltar Company",
      price: 1299,
      mainGradient: "bg-gradient-to-r from-red-600 to-yellow-400",
      flagGradient: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255,I notice the JurisdictionsSection file was cut off. Let me complete it with the full updated version including both UK services at the bottom:

<dyad-write path="src/components/JurisdictionsSection.tsx" description="Updating JurisdictionsSection to include UK LTD and UK LLP at the bottom">
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const JurisdictionsSection = () => {
  const { addItem } = useCart();

  const jurisdictions = [
    {
      id: 1,
      name: "Seychelles Company",
      price: 669,
      popular: true,
      mainGradient: "bg-gradient-to-r from-blue-600 via-yellow-400 to-green-600",
      flagGradient: "linear-gradient(45deg, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 33%, rgb(255, 215, 0) 33%, rgb(255, 215, 0) 66%, rgb(220, 20, 60) 66%, rgb(220, 20, 60) 100%)",
      description: "Seychelles offers one of the most attractive offshore jurisdictions with 0% corporate tax on foreign-sourced income, strong privacy laws, and rapid company formation.",
      features: ["Certificate of Incorporation", "Memorandum & Articles", "Share certificates"],
      route: "/jurisdiction/seychelles"
    },
    {
      id: 2,
      name: "BVI Company",
      price: 1090,
      mainGradient: "bg-gradient-to-r from-blue-600 to-blue-800",
      flagGradient: "linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 65%, rgb(0, 102, 0) 65%, rgb(0, 102, 0) 100%)",
      description: "BVI is a premier offshore jurisdiction offering political stability, no corporate tax, flexible corporate structures, and strong confidentiality laws.",
      features: ["Certificate of Incorporation", "Memorandum & Articles", "Share certificates"],
      route: "/jurisdiction/bvi"
    },
    {
      id: 3,
      name: "Gibraltar Company",
      price: 1299,
      mainGradient: "bg-gradient-to-r from-red-600 to-yellow-400",
      flagGradient: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(220, 20, 60) 50%, rgb(220, 20, 60) 100%)",
      description: "Establishing a company in Gibraltar presents a myriad of strategic advantages with low corporate tax rates, no capital gains tax, and access to global markets through its strategic location.",
      features: ["Registered office address", "Government fees included", "Certificate of Incorporation"],
      route: "/jurisdiction/gibraltar"
    },
    {
      id: 4,
      name: "Hong Kong Company",
      price: 1749,
      mainGradient: "bg-gradient-to-r from-red-600 to-red-700",
      flagGradient: "rgb(220, 20, 60)",
      description: "Hong Kong offers a business-friendly environment with competitive corporate tax rates, excellent banking facilities, and access to Asian markets.",
      features: ["Certificate of Incorporation", "Business registration", "Share certificates"],
      route: "/jurisdiction/hong-kong"
    },
    {
      id: 5,
      name: "Marshall Islands Company",
      price: 1125,
      mainGradient: "bg-gradient-to-r from-blue-600 to-blue-700",
      flagGradient: "linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%)",
      description: "Marshall Islands provides a cost-effective offshore solution with minimal reporting requirements, no local taxation, and flexible corporate structures.",
      features: ["Certificate of Incorporation", "Articles of Incorporation", "Share certificates"],
      route: "/jurisdiction/marshall-islands"
    },
    {
      id: 6,
      name: "Nevis Company",
      price: 1100,
      mainGradient: "bg-gradient-to-r from-green-600 to-yellow-400",
      flagGradient: "linear-gradient(135deg, rgb(0, 102, 0) 0%, rgb(0, 102, 0) 40%, rgb(255, 215, 0) 40%, rgb(255, 215, 0) 60%, rgb(220, 20, 60) 60%, rgb(220, 20, 60) 100%)",
      description: "Strong asset protection laws and favorable LLC structure.",
      features: ["LLC Formation", "Certificate of Formation", "Operating Agreement"],
      route: "/jurisdiction/nevis"
    },
    {
      id: 7,
      name: "UK LTD Company",
      price: 300,
      mainGradient: "bg-gradient-to-r from-blue-800 to-red-600",
      flagGradient: "linear-gradient(135deg, #012169 0%, #012169 50%, #C8102E 50%, #C8102E 100%)",
      description: "Private Limited Company registration in the United Kingdom offering limited liability protection, tax efficiency, and professional credibility.",
      features: ["Certificate of Incorporation", "Memorandum & Articles", "Share certificates"],
      route: "/jurisdiction/uk-ltd"
    },
    {
      id: 8,
      name: "UK LLP Company",
      price: 500,
      mainGradient: "bg-gradient-to-r from-blue-900 to-red-700",
      flagGradient: "linear-gradient(135deg, #012169 0%, #012169 50%, #C8102E 50%, #C8102E 100%)",
      description: "Limited Liability Partnership combining partnership flexibility with limited liability protection, ideal for professional services firms.",
      features: ["Certificate of Incorporation", "LLP Agreement", "Registered office"],
      route: "/jurisdiction/uk-llp"
    }
  ];

  const getCountryCode = (name: string) => {
    const countryMap: { [key: string]: string } = {
      "Seychelles Company": "Seychelles",
      "BVI Company": "BVI",
      "Gibraltar Company": "Gibraltar",
      "Hong Kong Company": "Hong Kong",
      "Marshall Islands Company": "Marshall Islands",
      "Nevis Company": "Nevis",
      "UK LTD Company": "UK",
      "UK LLP Company": "UK"
    };
    return countryMap[name] || name.split(' ')[0];
  };

  const handleAddToCart = (jurisdiction: any) => {
    addItem({
      id: `${jurisdiction.name.toLowerCase().replace(/\s+/g, '-')}-formation`,
      name: jurisdiction.name,
      price: jurisdiction.price,
      jurisdiction: getCountryCode(jurisdiction.name),
      type: 'formation'
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price);
  };

  return (
    <section id="jurisdictions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Jurisdictions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our most popular offshore jurisdictions, each offering unique advantages for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jurisdictions.map((jurisdiction) => (
            <div 
              key={jurisdiction.id}
              className={`rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                jurisdiction.popular ? 'border-2 border-green-500' : 'border-gray-200'
              }`}
            >
              <Link to={jurisdiction.route}>
                <div className={`h-32 ${jurisdiction.mainGradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="mb-2">
                      <div 
                        className="w-12 h-8 mx-auto rounded overflow-hidden border border-gray-300"
                        style={{ background: jurisdiction.flagGradient }}
                      ></div>
                    </div>
                    <span className="text-white font-bold text-lg">
                      {getCountryCode(jurisdiction.name)}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{jurisdiction.name}</h3>
                  {jurisdiction.popular && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-green-500 text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {jurisdiction.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#3FA4F4]">{formatPrice(jurisdiction.price)}</span>
                  <span className="text-sm text-gray-500">Formation</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {jurisdiction.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Link to={jurisdiction.route} className="flex-1">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full">
                      View Details
                    </button>
                  </Link>
                  <button 
                    onClick={() => handleAddToCart(jurisdiction)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3FA4F4] text-white hover:bg-blue-600 h-9 rounded-md px-3 flex-1"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JurisdictionsSection;