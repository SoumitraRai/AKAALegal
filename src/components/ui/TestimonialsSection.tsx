import React from 'react';
import { cn } from '@/utils/cn';

interface TestimonialProps {
  quote: string;
  author: string;
  title?: string;
  image?: string;
  company?: string;
}

const TestimonialCard = ({ quote, author, title, image, company }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
      {/* Quotation mark */}
      <div className="absolute top-4 left-4 text-6xl text-gold opacity-20 leading-none font-serif">
        "
      </div>
      
      <div className="relative z-10">
        <p className="text-navy-700 italic mb-6 pt-6">{quote}</p>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/30" 
              />
            </div>
          )}
          
          <div>
            <p className="font-cormorant font-semibold text-lg">{author}</p>
            {(title || company) && (
              <p className="text-navy-600 text-sm">
                {title}{title && company && ', '}{company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: TestimonialProps[];
  className?: string;
  variant?: 'grid' | 'carousel';
}

const TestimonialsSection = ({
  title = 'What Our Clients Say',
  description,
  testimonials,
  className = '',
  variant = 'grid'
}: TestimonialsSectionProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 text-center mb-4">
            {title}
          </h2>
        )}
        
        {description && (
          <p className="text-navy-600 text-center max-w-3xl mx-auto mb-12">
            {description}
          </p>
        )}
        
        <div className={cn(
          "mt-12",
          variant === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : ""
        )}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
