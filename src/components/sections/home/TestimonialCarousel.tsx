"use client";

import { useState, useEffect, useCallback } from 'react';
import { TestimonialImage } from '@/components/ui/TestimonialImage';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Stevens',
      role: 'Corporate Client',
      quote: 'UA Legal provided exceptional guidance throughout our merger process. Their attention to detail and strategic advice helped us navigate complex regulatory challenges seamlessly.',
      imageSrc: '/assets/images/testimonials/client-1.jpg',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Real Estate Developer',
      quote: "Working with UA Legal on our property acquisitions has been a game-changer. Their team's expertise in real estate law and negotiation skills saved us significant time and resources.",
      imageSrc: '/assets/images/testimonials/client-2.jpg',
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Tech Startup Founder',
      quote: 'The intellectual property protection strategies developed by UA Legal have been instrumental in safeguarding our innovations. Their proactive approach to legal challenges is unmatched.',
      imageSrc: '/assets/images/testimonials/client-3.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }, [testimonials.length]);

  // Auto advance slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  // Create placeholder testimonial images
  useEffect(() => {
    // This would typically be handled by a proper image setup
    // In a production environment, you'd ensure these images exist
  }, []);

  return (
    <section className="py-20 relative bg-cream overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold opacity-5 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-navy opacity-5 -ml-20 -mb-20"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold-light opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy relative inline-block">
            Client Testimonials
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-light font-montserrat">
            See what our clients have to say about their experience working with UA Legal.
          </p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gold-light/20 relative">
                    <div className="absolute -top-5 left-8 text-4xl text-gold opacity-80">
                      <FaQuoteLeft />
                    </div>
                    <div className="pt-6">
                      <p className="text-text font-montserrat text-lg italic mb-8">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center mt-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-gold-light">
                          <TestimonialImage 
                            src={testimonial.imageSrc} 
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-playfair text-lg font-semibold text-navy">{testimonial.name}</h4>
                          <p className="text-text-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none 
                  ${activeIndex === index ? 'bg-gold' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
