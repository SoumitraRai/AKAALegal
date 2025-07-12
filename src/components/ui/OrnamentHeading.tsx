import React from 'react';
import { cn } from '@/utils/cn';

interface OrnamentHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const OrnamentHeading: React.FC<OrnamentHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className,
}) => {
  return (
    <div className={cn(
      "mb-12",
      center ? "text-center" : "",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
        {title}
      </h2>
      
      <div className={cn(
        "flex my-4",
        center ? "justify-center" : ""
      )}>
        <div className="relative w-20 h-[3px] bg-accent">
          <span className="absolute top-0 -left-5 w-4 h-[3px] bg-accent"></span>
          <span className="absolute top-0 -right-5 w-4 h-[3px] bg-accent"></span>
        </div>
      </div>
      
      {subtitle && (
        <p className="text-lg text-text-light">{subtitle}</p>
      )}
    </div>
  );
};

export default OrnamentHeading;
