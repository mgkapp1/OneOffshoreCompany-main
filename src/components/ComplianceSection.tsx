"use client";

import React from 'react';

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Compliance Requirements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What you need to supply for your offshore company formation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Standard Requirements Card */}
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5 text-[#3FA4F4] mr-2">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                Standard Requirements
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-[#3FA4F4]">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Company Information Form</h4>
                    <div className="text-sm text-gray-600">
                      <span>Complete and signed company information form (<a href="https://oneoffshorecompany.com/wp-content/uploads/2017/04/company_information_form.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3FA4F4] underline hover:text-blue-600">downloadable PDF</a>)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-[#3FA4F4]">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Certified Passport(s)</h4>
                    <div className="text-sm text-gray-600">Certified or notarized passport(s) for owners and directors. Must be current and in English or translated.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-6 h-6 text-[#3FA4F4]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" x2="12" y1="8" y2="12"></line>
                      <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Proof of Address</h4>
                    <div className="text-sm text-gray-600">Bank statement or utility bill less than 3 months old. Must be in English or translated.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-[#3FA4F4]">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional References</h4>
                    <div className="text-sm text-gray-600">Bank reference or professional reference from accountant/lawyer (required for bank account opening)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gibraltar Formation Requirements Card */}
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-5 h-5 text-[#3FA4F4] mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Gibraltar Formation Requirements
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Bank reference or Professional Reference (from accountant or lawyer)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">CV (Curriculum Vitae)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">6 Months of Bank Statements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Utility Bill</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Business Plan (template provided)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-600 mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Source of Funds Declaration (template provided)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Document Certification Requirements */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Document Certification Requirements</h3>
          <div className="space-y-4 text-gray-600">
            <p>Certification should be carried out by a lawyer, accountant, notary, or bank. The individual who certifies the documents must provide their full name and contact details.</p>
            <p><strong>Important:</strong> Please scan all documents via e-mail to: <span className="text-[#3FA4F4]">info@oneoffshorecompany.com</span> and send original documents via courier. We are unable to provide you with the incorporated company documents until we have received original compliance documents.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;