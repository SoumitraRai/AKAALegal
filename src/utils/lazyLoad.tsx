"use client";

import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

type LazyComponentProps = {
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  fallback?: React.ReactNode;
  threshold?: number;
};

/**
 * LazyComponent - Lazily loads a component when it comes into viewport
 */
export const LazyComponent = ({ 
  component: Component, 
  props = {}, 
  fallback = null,
  threshold = 0.1
}: LazyComponentProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  
  return (
    <div ref={ref} className="min-h-[10px]">
      {inView ? <Component {...props} /> : fallback}
    </div>
  );
};

/**
 * createLazyComponent - Creates a dynamically imported component with loading fallback
 */
export const createLazyComponent = <T extends object>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  fallback: React.ReactNode = null,
  ssr = false
) => {
  const LazyLoadedComponent = dynamic(importFunc, {
    loading: () => <>{fallback}</>,
    ssr,
  });
  
  return (props: T) => <LazyLoadedComponent {...props} />;
};
