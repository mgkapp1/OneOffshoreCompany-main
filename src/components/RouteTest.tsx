"use client";

import React from 'react';
import { useLocation } from 'react-router-dom';

const RouteTest = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50">
      <div className="text-sm">
        <div>Current Path: {location.pathname}</div>
        <div>Search: {location.search}</div>
      </div>
    </div>
  );
};

export default RouteTest;