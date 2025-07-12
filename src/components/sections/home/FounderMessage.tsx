"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { FounderImage } from '@/components/ui/FounderImage';

interface FounderMessageProps {
  className?: string;
}

export const FounderMessage: React.FC<FounderMessageProps> = ({ className }) => {
  return (
    <section className={cn("py-32 bg-white relative overflow-hidden", className)}>
      {/* Background pattern removed */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black relative z-10 tracking-tight">
                Founder's Message
              </h2>
              <div className="w-48 h-1 bg-black mt-2 mb-4"></div>
              
              <div className="flex mb-10 relative">
                <div className="relative h-[2px] w-20 bg-black">
                </div>
              </div>
            </div>
            
            <div className="space-y-6 text-black leading-relaxed text-lg relative">
              
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-black pl-5 border-l-4 border-black ml-2">
                UA Legal is a premier Indian law firm headquartered in New Delhi. Established in 2020, our goal is to serve the corporate world, particularly small and medium industries that often lack legal resources and awareness.
              </p>
              
              <div className="bg-white p-6 rounded-sm shadow-md border border-black">
                <p className="text-black mb-4">
                  We provide personalized service and commitment to ensure client satisfaction. Our reputation, coupled with our negotiation and litigation strengths, enables us to deliver results effectively. Our founder, Mr. Aditya Dhawan, brings exceptional experience and skills to the firm.
                </p>
                <p className="text-black">
                  UA Legal has a network of highly experienced lawyers across all major commercial cities in India. We are equipped to handle both domestic and cross-border transactions.
                </p>
              </div>
              
            </div>
            
            <div className="mt-8 pt-10 border-t border-black relative">
              <div className="absolute top-[-10px] left-0 right-0 flex justify-center">
                <div className="bg-white px-8 -mt-2.5">
                  <div className="w-20 h-[3px] bg-black"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last flex flex-col">
            <div className="relative z-10 overflow-hidden rounded-sm group shadow-md border border-black">
              <FounderImage 
                src="/assets/images/team/aditya-dhawan.jpg" 
                alt="Aditya Dhawan, Founder" 
                width={600}
                height={800}
                className="w-full h-auto rounded-sm object-cover"
                style={{ 
                  maxHeight: '640px'
                }}
              />
            </div>
            
            <div className="flex flex-col items-center mt-6">
              <Image 
                src="/assets/images/signature.png" 
                alt="Aditya Dhawan's Signature"
                width={200}
                height={70}
                className="mb-4"
              />
              <p className="font-playfair text-2xl font-bold text-black mb-2 tracking-wide">Aditya Dhawan</p>
              <div className="flex items-center">
                <div className="h-5 w-0.5 bg-black mr-3"></div>
                <p className="text-black uppercase tracking-wider text-sm font-medium letter-spacing-wider">Founder, UA Legal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
