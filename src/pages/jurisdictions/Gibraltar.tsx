"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const GibraltarPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'gibraltar-formation',
      name: 'Gibraltar Company Formation',
      price: 1299,
      jurisdiction: 'Gibraltar',
      type: 'formation'
    });
    // Redirect to Popular Jurisdictions section on home page
    window.location.href = '/#jurisdictions';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Jurisdictions
            </button>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-8 rounded overflow-hidden" style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(220, 20, 60) 50%, rgb(220, 20, 60) 100%)', border: '1px solid rgb(221, 221, 221)' }}></div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Gibraltar Company Formation</h1>
              <p className="text-gray-600">Professional offshore company formation services</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Gibraltar</h2>
              <p className="text-gray-600 mb-4">
                Establishing a company in Gibraltar presents a myriad of strategic advantages with low corporate tax rates, 
                no capital gains tax, and access to global markets through its strategic location at the gateway to Europe and Africa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Low corporate tax rates (10%)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No capital gains tax</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strategic European location</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">English common law legal system</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Includes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of Incorporation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memorandum & Articles of Association
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
<dyad-problem-report summary="137 problems">
<problem file="src/pages/jurisdictions/BVI.tsx" line="23" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="24" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="44" column="10" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="45" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="81" column="14" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="83" column="16" code="17008">JSX element 'ul' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="96" column="18" code="17008">JSX element 'li' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="99" column="23" code="1005">'&gt;' expected.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="99" column="114" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="106" column="21" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="107" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="109" column="31" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="116" column="7" code="1005">'}' expected.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="119" column="3" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="268" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="270" column="24" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="23" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="24" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="44" column="10" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="45" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="80" column="14" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="82" column="16" code="17008">JSX element 'ul' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="101" column="21" code="1003">Identifier expected.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="101" column="137" code="1002">Unterminated string literal.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="103" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="110" column="27" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="111" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="113" column="31" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="120" column="7" code="1005">'}' expected.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="123" column="3" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="271" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="273" column="30" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="23" column="6" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="24" column="8" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="44" column="10" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="45" column="12" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="81" column="14" code="17008">JSX element 'div' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="83" column="16" code="17008">JSX element 'ul' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="102" column="18" code="17008">JSX element 'li' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="103" column="105" code="1003">Identifier expected.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="116" column="84" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="132" column="90" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="136" column="100" code="1005">'}' expected.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="136" column="121" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="144" column="2" code="17008">JSX element 'dyad-write' has no corresponding closing tag.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="151" column="21" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="152" column="3" code="1109">Expression expected.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="154" column="31" code="1382">Unexpected token. Did you mean `{'&gt;'}` or `&amp;gt;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="161" column="7" code="1005">'}' expected.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="164" column="3" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="313" column="1" code="1381">Unexpected token. Did you mean `{'}'}` or `&amp;rbrace;`?</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="315" column="24" code="1005">'&lt;/' expected.</problem>
<problem file="src/pages/jurisdictions/BVI.tsx" line="99" column="19" code="2322">Type '{ className: string; src: true; }' is not assignable to type 'SVGProps&lt;SVGSVGElement&gt;'.
  Property 'src' does not exist on type 'SVGProps&lt;SVGSVGElement&gt;'.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="101" column="17" code="2339">Property 'liI' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/Gibraltar.tsx" line="103" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="103" column="98" code="2322">Type 'boolean' is not assignable to type 'string'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="103" column="105" code="2339">Property 'dyad-problem-report' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="104" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="104" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="105" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="105" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="106" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="106" column="135" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="107" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="107" column="135" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="108" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="108" column="135" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="109" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="109" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="110" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="110" column="134" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="111" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="111" column="99" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="112" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="112" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="113" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="113" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="114" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="114" column="103" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="115" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="115" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="116" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="116" column="96" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="117" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="117" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="118" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="118" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="119" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="119" column="101" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="120" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="120" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="121" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="121" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="122" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="122" column="141" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="123" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="123" column="141" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="124" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="124" column="141" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="125" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="125" column="140" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="126" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="126" column="110" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="127" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="127" column="119" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="128" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="128" column="148" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="129" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="129" column="146" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="130" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="130" column="109" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="131" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="131" column="146" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="132" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="132" column="102" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="133" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="133" column="146" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="134" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="134" column="146" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="135" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="135" column="107" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="136" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="136" column="91" code="2304">Cannot find name 'className'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="137" column="73" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="138" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="138" column="152" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="139" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="139" column="158" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="140" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="140" column="181" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="141" column="1" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="141" column="188" code="2339">Property 'problem' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="142" column="1" code="2339">Property 'dyad-problem-report' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/pages/jurisdictions/HongKong.tsx" line="144" column="1" code="2339">Property 'dyad-write' does not exist on type 'JSX.IntrinsicElements'.</problem>
<problem file="src/App.tsx" line="9" column="8" code="1192">Module '&quot;C:/Users/Admin/dyad-apps/OneOffshoreCompany-main/src/pages/jurisdictions/BVI&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="10" column="8" code="1192">Module '&quot;C:/Users/Admin/dyad-apps/OneOffshoreCompany-main/src/pages/jurisdictions/Gibraltar&quot;' has no default export.</problem>
<problem file="src/App.tsx" line="11" column="8" code="1192">Module '&quot;C:/Users/Admin/dyad-apps/OneOffshoreCompany-main/src/pages/jurisdictions/HongKong&quot;' has no default export.</problem>
</dyad-problem-report>I'll fix all the TypeScript errors by properly completing the BVI, Gibraltar, and Hong Kong pages with correct JSX syntax and closing tags.

<dyad-write path="src/pages/jurisdictions/BVI.tsx" description="Fix BVI page with proper JSX syntax and closing tags">
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const BVIPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'bvi-formation',
      name: 'BVI Company Formation',
      price: 1090,
      jurisdiction: 'BVI',
      type: 'formation'
    });
    // Redirect to Popular Jurisdictions section on home page
    window.location.href = '/#jurisdictions';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Jurisdictions
            </button>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-8 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(0, 82, 204) 0%, rgb(0, 82, 204) 65%, rgb(0, 102, 0) 65%, rgb(0, 102, 0) 100%)', border: '1px solid rgb(221, 221, 221)' }}></div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">BVI Company Formation</h1>
              <p className="text-gray-600">Professional offshore company formation services</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About BVI</h2>
              <p className="text-gray-600 mb-4">
                The British Virgin Islands is a premier offshore jurisdiction offering political stability, 
                no corporate tax, flexible corporate structures, and strong confidentiality laws. 
                It's one of the world's most respected offshore financial centers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">0% corporate tax on foreign income</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Political and economic stability</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible corporate structures</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strong confidentiality laws</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Includes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of Incorporation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memorandum & Articles of Association
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Share certificates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Registered office address for 1 year
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Registered agent services for 1 year
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Government fees included
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">Pricing & Package</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#3FA4F4] mb-2">£1090.00</div>
                  <p className="text-gray-600">Formation Package</p>
                  <p className="text-sm text-gray-500 mt-2">Annual renewal: £750</p>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3FA4F4] text-white hover:bg-blue-600 h-11 rounded-md px-8 w-full mb-4"
                >
                  Add to Cart
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 inline mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Formation time: 1-2 days
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose BVI?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• World-renowned financial center</li>
                <li>• No capital gains tax or inheritance tax</li>
                <li>• English common law legal system</li>
                <li>• No currency exchange controls</li>
                <li>• Confidentiality of directors and shareholders</li>
                <li>• No requirement for annual audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BVIPage;