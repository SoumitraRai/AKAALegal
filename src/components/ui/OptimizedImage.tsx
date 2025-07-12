"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/utils/cn';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  aspectRatio?: number;
  wrapperClassName?: string;
  fill?: boolean;
}

/**
 * OptimizedImage component that wraps Next.js Image with:
 * - Blur placeholder
 * - Loading state
 * - Fade-in animation
 * - Optional aspect ratio wrapper
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  wrapperClassName,
  aspectRatio,
  fill = false,
  quality = 85,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Default placeholder for blur effect
  const blurDataURL = props.blurDataURL || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  
  // Generate wrapper style based on aspect ratio if provided
  const wrapperStyle: React.CSSProperties = {};
  if (aspectRatio && !fill) {
    wrapperStyle.paddingBottom = `${(1 / aspectRatio) * 100}%`;
  }

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        aspectRatio && !fill ? "w-full h-0" : "",
        fill ? "w-full h-full" : "",
        wrapperClassName
      )}
      style={aspectRatio ? wrapperStyle : undefined}
    >
      <Image
        src={src}
        alt={alt || ""}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={quality}
        priority={priority}
        fill={fill}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          fill ? "object-cover" : "",
          className
        )}
        {...props}
      />
    </div>
  );
};
