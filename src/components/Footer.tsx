
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-10 py-4 opacity-0 animate-fade-in text-center text-bucksradar-gray text-sm" style={{ animationDelay: '700ms' }}>
      <p>© {currentYear} BucksRadar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
