"use client";

import { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for client-side only components
const TestimonialCarouselComponent = dynamic(
  () => import('@/components/sections/home/TestimonialCarousel'),
  {
    loading: () => <div className="min-h-[300px] bg-gradient-to-r from-cream to-cream-light"></div>,
    ssr: false, // Client-side render only
  }
);

const PracticeAreasComponent = dynamic(
  () => import('@/components/sections/home/PracticeAreas'),
  {
    loading: () => <div className="min-h-[300px] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-accent animate-spin"></div>
    </div>,
    ssr: true,
  }
);

const StatsSectionComponent = dynamic(
  () => import('@/components/sections/home/StatsSection'),
  { 
    loading: () => <div className="min-h-[200px]"></div>,
    ssr: true,
  }
);

const AwardsSectionComponent = dynamic(
  () => import('@/components/sections/home/AwardsSection'),
  { 
    loading: () => <div className="min-h-[200px]"></div>,
    ssr: true,
  }
);

const CallToActionComponent = dynamic(
  () => import('@/components/ui/CallToAction'),
  { 
    loading: () => <div className="min-h-[100px]"></div>,
    ssr: true,
  }
);

// Wrapper components to expose to server components
export const TestimonialCarousel = () => <TestimonialCarouselComponent />;
export const PracticeAreas = () => <PracticeAreasComponent />;
export const StatsSection = () => <StatsSectionComponent />;
export const AwardsSection = () => <AwardsSectionComponent />;
export const CallToAction = () => <CallToActionComponent />;
