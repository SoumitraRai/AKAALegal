"use client";

import Image from 'next/image';
import { useState } from 'react';

interface AwardImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export const AwardImage: React.FC<AwardImageProps> = ({ 
  src, 
  alt, 
  fallback = '/assets/images/placeholder-award.jpg' 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-contain"
      sizes="96px"
      onError={() => {
        setError(true);
        setImgSrc(fallback);
      }}
      unoptimized={error}
    />
  );
};
