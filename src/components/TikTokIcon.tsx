
import React from 'react';

const TikTokIcon = ({ size = 24, ...props }: { size?: number, [key: string]: any }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 10.223-8.718 6.33 6.33 0 005.171-1.974v6.79a6.337 6.337 0 004.193-3.58 6.19 6.19 0 00.391-1.97V9.11a8.044 8.044 0 004.651 1.422v-3.395a4.79 4.79 0 01-.003-.438l.003-.013z" 
        fill="currentColor" 
      />
    </svg>
  );
};

export default TikTokIcon;
