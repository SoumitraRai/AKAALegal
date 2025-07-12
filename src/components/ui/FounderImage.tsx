"use client";

import Image from 'next/image';
import { useState } from 'react';

interface FounderImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

export const FounderImage: React.FC<FounderImageProps> = ({ 
  src, 
  alt,
  fallback = '/assets/images/placeholder-image.jpg', // Use a local fallback image
  className,
  width,
  height,
  style
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      onError={() => {
        setError(true);
        setImgSrc(fallback);
      }}
      unoptimized={error} // Skip optimization for fallback image to avoid issues
    />
  );
};
