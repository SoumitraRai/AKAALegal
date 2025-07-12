"use client";

import { useState } from 'react';

interface OfficeImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export const OfficeImage: React.FC<OfficeImageProps> = ({ 
  src, 
  alt, 
  fallback = '/assets/images/placeholder-office.jpg' 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative h-72 md:h-full rounded-lg overflow-hidden shadow-xl">
      <img 
        src={imgSrc} 
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImgSrc(fallback)}
      />
      <div className="absolute inset-0 bg-navy/20"></div>
    </div>
  );
};
