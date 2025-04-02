
import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold text-3xl md:text-4xl bg-gradient-button text-transparent bg-clip-text">
          BucksRadar
        </span>
      </div>
      <p className="text-bucksradar-gray text-sm md:text-base mb-6 text-center">
        Empowering Your Binary Trading Journey
      </p>
    </div>
  );
};

export default Logo;
