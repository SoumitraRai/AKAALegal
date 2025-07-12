"use client";

import { useState } from 'react';
import Image from 'next/image';

interface TestimonialImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export const TestimonialImage: React.FC<TestimonialImageProps> = ({ 
  src, 
  alt, 
  fallback = '/assets/images/placeholder-client.jpg' 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image 
      src={imgSrc} 
      alt={alt}
      fill
      className="object-cover"
      sizes="64px"
      onError={() => {
        setError(true);
        setImgSrc(fallback);
      }}
      unoptimized={error}
    />
  );
};
