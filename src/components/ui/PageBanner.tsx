import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
}

const PageBanner = ({
  title,
  breadcrumbs,
  backgroundImage,
  className,
}: PageBannerProps) => {
  const bannerStyle = backgroundImage 
    ? { 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    : {};

  return (
    <section 
      className={cn(
        "relative bg-white py-28 md:py-36",
        className
      )}
      style={backgroundImage ? {} : {}}
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
        <div className="absolute -left-10 -top-10 w-40 h-40 border border-accent/10 rounded-full"></div>
        <div className="absolute right-10 bottom-10 w-24 h-24 border border-accent/10 rounded-full"></div>
        <div className="absolute left-1/4 bottom-0 w-16 h-16 border border-accent/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-black mb-6 relative tracking-wide">
            <span className="relative">
              {title}
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></span>
            </span>
          </h1>
          
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex justify-center items-center text-black mt-8 text-sm font-medium tracking-wide">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-3 text-black">/</span>}
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="hover:underline transition-colors uppercase"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-black font-semibold uppercase">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
