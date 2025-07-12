"use client";

import { useCounterAnimation } from '@/hooks/animation';

interface StatProps {
  value: number;
  suffix?: string;
  description: string;
}

const StatCounter: React.FC<StatProps> = ({ value, suffix = '', description }) => {
  const { count, counterRef } = useCounterAnimation(value);

  return (
    <div ref={counterRef} className="text-center">
      <div className="flex items-center justify-center">
        <span className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold">
          {count}
        </span>
        {suffix && <span className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gold ml-1">{suffix}</span>}
      </div>
      <p className="mt-2 text-sm md:text-base font-montserrat text-text-light">{description}</p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { value: 95, suffix: '%', description: 'Success Rate' },
    { value: 200, suffix: '+', description: 'Cases Won' },
    { value: 18, suffix: '+', description: 'Years of Experience' },
    { value: 150, suffix: '+', description: 'Satisfied Clients' },
  ];

  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/textures/legal-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              description={stat.description} 
            />
          ))}
        </div>
      </div>
      
      {/* Accent line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-80"></div>
    </section>
  );
};

export default StatsSection;
