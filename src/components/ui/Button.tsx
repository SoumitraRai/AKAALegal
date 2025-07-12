import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90 border border-primary hover:text-primary hover:bg-transparent',
        secondary: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
        outlined: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-white',
        text: 'bg-transparent text-accent hover:text-primary p-0 border-none flex items-center gap-1',
      },
      size: {
        default: 'py-2 px-6',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    // If href is provided, render an anchor tag styled as button
    if (href) {
      return (
        <a 
          href={href} 
          className={cn(buttonVariants({ variant, size, className }))}
          role="button"
          tabIndex={0}
          aria-label={props['aria-label'] || (typeof props.children === 'string' ? props.children : undefined)}
        >
          {props.children}
        </a>
      );
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={props.type || "button"} // Explicitly set type for accessibility
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
