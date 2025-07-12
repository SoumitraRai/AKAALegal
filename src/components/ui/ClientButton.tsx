"use client";

import React from 'react';
import { Button as BaseButton, ButtonProps, buttonVariants } from './Button';
import { cn } from '@/utils/cn';

// This is a client component version of Button that includes event handlers
const ClientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    // If href is provided, render an anchor tag styled as button with event handlers
    if (href) {
      return (
        <a 
          href={href} 
          className={cn(buttonVariants({ variant, size, className }))}
          role="button"
          tabIndex={0}
          aria-label={props['aria-label'] || (typeof props.children === 'string' ? props.children : undefined)}
          onKeyDown={(e) => {
            // Make anchor with role="button" work with keyboard
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          {props.children}
        </a>
      );
    }
    
    // Otherwise use the base button
    return <BaseButton ref={ref} variant={variant} size={size} className={className} {...props} />;
  }
);

ClientButton.displayName = "ClientButton";

export { ClientButton };
