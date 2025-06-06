import React from 'react';

interface LogoProps {
  className?: string;
}

import logoImage from './images.png';

const Logo: React.FC<LogoProps> = ({ className = 'h-10' }) => {
  return (
    <a href="#" className={`flex items-center group ${className}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src={logoImage} 
          alt="Kéba Consulting" 
          className={`h-14 w-auto transform transition-transform duration-500 group-hover:scale-110 ${className}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-500/10 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>
    </a>
  );
};

export default Logo;