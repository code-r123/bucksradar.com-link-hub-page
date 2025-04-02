
import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
      <div className="w-40 h-40 mb-3">
        <img 
          src="/lovable-uploads/ee4fb995-e6ec-4f70-9b0d-96e5be7486e7.png" 
          alt="BucksRadar Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      <span className="font-bold text-3xl md:text-4xl bg-gradient-brand text-transparent bg-clip-text mb-2">
        BucksRadar
      </span>
      <p className="text-orange-400 text-sm md:text-base mb-6 text-center font-medium">
        Master Binary Trading with Free Bots & Signals! 🚀
      </p>
    </div>
  );
};

export default Logo;
