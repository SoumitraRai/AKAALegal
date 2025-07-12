"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  focusVisible: boolean;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  // Initialize with user's system preferences where possible
  const [focusVisible, setFocusVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    
    // Load saved preferences from localStorage if available
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    
    if (savedReducedMotion !== null) {
      setReducedMotion(savedReducedMotion);
    }
    
    // Add keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
        document.body.classList.add('keyboard-navigation');
      }
    };
    
    const handleMouseDown = () => {
      setFocusVisible(false);
      document.body.classList.remove('keyboard-navigation');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  
  // Apply accessibility classes to HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Always ensure text is black and backgrounds are white
    htmlElement.classList.add('standard-colors');
    
    if (reducedMotion) {
      htmlElement.classList.add('reduced-motion');
    } else {
      htmlElement.classList.remove('reduced-motion');
    }
    
  }, [reducedMotion]);
  
  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', String(newValue));
  };
  
  return (
    <AccessibilityContext.Provider
      value={{
        focusVisible,
        reducedMotion,
        toggleReducedMotion
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
