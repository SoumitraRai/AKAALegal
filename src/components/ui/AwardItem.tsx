"use client";

import { AwardImage } from '@/components/ui/AwardImage';

interface AwardItemProps {
  name: string;
  year: string;
  issuer: string;
  imageSrc: string;
}

export const AwardItem: React.FC<AwardItemProps> = ({ name, year, issuer, imageSrc }) => {
  return (
    <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="relative h-24 w-24 mb-4">
        <AwardImage
          src={imageSrc}
          alt={`${name} award logo`}
        />
      </div>
      <h3 className="text-navy font-playfair font-semibold text-lg text-center">{name}</h3>
      <p className="text-text-light text-sm text-center mt-1">{year}</p>
      <p className="text-gold text-xs text-center mt-1">{issuer}</p>
    </div>
  );
};
