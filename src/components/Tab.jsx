import React from 'react';

const Tab = ({ label, isActive, onClick }) => (
  <button
    className={`p-2 ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Tab;
