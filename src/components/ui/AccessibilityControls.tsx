"use client";

import React from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { cn } from '@/utils/cn';

interface AccessibilityControlsProps {
  className?: string;
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ className }) => {
  const { reducedMotion, toggleReducedMotion } = useAccessibility();
  
  return (
    <div className={cn("fixed bottom-4 left-4 z-50 flex flex-col gap-2", className)}>
      <button
        onClick={toggleReducedMotion}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 transition-all",
          reducedMotion ? "bg-primary text-white" : "text-gray-700"
        )}
        aria-label={reducedMotion ? "Enable animations" : "Reduce animations"}
        title={reducedMotion ? "Enable animations" : "Reduce animations"}
      >
        <i className="fas fa-film"></i>
      </button>
    </div>
  );
};
