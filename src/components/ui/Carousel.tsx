"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/utils/cn';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  spacing?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  className?: string;
  carouselId?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 3,
  spacing = 30,
  autoplay = false,
  autoplayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  className,
  carouselId = 'carousel',
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerView);
  const [totalPages, setTotalPages] = useState(Math.ceil(React.Children.count(children) / itemsPerView));
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle responsive behavior
  const updateVisibleItems = useCallback(() => {
    let items = itemsPerView;
    if (window.innerWidth <= 1200 && window.innerWidth > 768) {
      items = Math.min(itemsPerView, 2);
    } else if (window.innerWidth <= 768) {
      items = 1;
    }
    
    setVisibleItems(items);
    setTotalPages(Math.ceil(React.Children.count(children) / items));
    
    // Adjust current page if it exceeds new total pages
    if (currentPage >= Math.ceil(React.Children.count(children) / items)) {
      setCurrentPage(Math.max(0, Math.ceil(React.Children.count(children) / items) - 1));
    }
  }, [children, currentPage, itemsPerView]);
  
  // Setup resize handler
  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [updateVisibleItems]);
  
  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentPage(prev => (prev + 1) % totalPages);
      }, autoplayInterval);
      
      return () => {
        if (autoplayTimerRef.current) {
          clearInterval(autoplayTimerRef.current);
        }
      };
    }
  }, [autoplay, autoplayInterval, totalPages]);
  
  // Navigation functions
  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };
  
  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  
  // Render child items with proper widths
  const renderItems = () => {
    return React.Children.map(children, (child, index) => {
      const itemWidth = `calc(${100 / visibleItems}% - ${spacing * (visibleItems - 1) / visibleItems}px)`;
      return (
        <div
          className="transition-all duration-500 ease-in-out"
          style={{
            flex: `0 0 ${itemWidth}`,
            minWidth: itemWidth,
            marginRight: index < children.length - 1 ? `${spacing}px` : 0,
          }}
        >
          {child}
        </div>
      );
    });
  };
  
  // Calculate transform for track
  const getTrackTransform = () => {
    if (!trackRef.current) return 'translateX(0%)';
    
    const itemWidth = 100 / visibleItems;
    const gapWidth = spacing / (trackRef.current.clientWidth / 100) * visibleItems;
    const moveX = currentPage * (visibleItems * (itemWidth + gapWidth));
    
    return `translateX(-${moveX}%)`;
  };
  
  return (
    <div className={cn("w-full relative", className)}>
      {/* Carousel container */}
      <div className="relative my-10">
        {/* Navigation buttons */}
        {showNavigation && (
          <>
            <button 
              className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 rounded-full bg-primary text-white border-none flex items-center justify-center cursor-pointer transition-colors hover:bg-accent z-10 shadow-md"
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              aria-label={`Previous ${carouselId} items`}
              aria-controls={`${carouselId}-track`}
            >
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            
            <button 
              className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 rounded-full bg-primary text-white border-none flex items-center justify-center cursor-pointer transition-colors hover:bg-accent z-10 shadow-md"
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              aria-label={`Next ${carouselId} items`}
              aria-controls={`${carouselId}-track`}
            >
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </>
        )}
        
        {/* Carousel track */}
        <div 
          className="flex overflow-hidden mx-16"
          ref={trackRef}
          role="region"
          aria-label={`${carouselId} carousel`}
          aria-roledescription="carousel"
        >
          <div 
            id={`${carouselId}-track`}
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: getTrackTransform() }}
            aria-live="polite"
          >
            {renderItems()}
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center mt-5 gap-2.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                currentPage === index 
                  ? "bg-accent scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => goToPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
