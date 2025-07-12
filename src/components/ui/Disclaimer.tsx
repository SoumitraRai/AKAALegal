import React from 'react';
import { cn } from '@/utils/cn';
import OrnamentHeading from './OrnamentHeading';

interface DisclaimerProps {
  className?: string;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ className }) => {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <OrnamentHeading 
          title="Disclaimer" 
          center
        />
        
        <div className="max-w-3xl mx-auto text-center text-text-light text-sm md:text-base">
          <p>The Bar Council of India does not permit advertisement or solicitation by Advocates in any form or manner. By accessing this website, you acknowledge that you are seeking information relating to UA Legal of your own accord and that there has been no form of solicitation, advertisement, or inducement by UA Legal or its members.</p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
