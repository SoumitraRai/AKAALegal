import React from 'react';
import { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';

export const metadata: Metadata = {
  title: 'About Us | UA Legal | Premier Law Firm in India',
  description: 'Learn about UA Legal\'s rich heritage, values, and commitment to excellence in the legal profession across India.',
  keywords: 'law firm India, legal heritage, about UA Legal, top lawyers in India',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <PageBanner 
        title="About Our Firm"
        backgroundImage="/assets/images/about-banner.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-navy-800 text-center leading-relaxed">
              UA Legal is a premier law firm in Delhi NCR providing exceptional legal services
              to small and medium industries with personalized commitment and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 mb-6">Our Story</h2>
              <p className="mb-4">
                We provide personalized service and commitment to ensure client satisfaction. Our reputation,
                coupled with our negotiation and litigation strengths, enables us to deliver results effectively.
                Our founder, Mr. Aditya Dhawan, brings exceptional experience and skills to the firm.
              </p>
              <p className="mb-6">
                UA Legal has a network of highly experienced lawyers across all major commercial cities in India.
                We are equipped to handle both domestic and cross-border transactions.
              </p>
              
              <div className="mt-8">
                <div className="inline-block">
                  <img 
                    src="/assets/images/signature.png" 
                    alt="Founder's Signature" 
                    className="h-16 mb-2"
                  />
                  <div>
                    <p className="font-cormorant text-xl font-semibold">Aditya Dhawan</p>
                    <p className="text-navy-600 text-sm">Founder & Managing Partner</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/about-image.jpg" 
                  alt="UA Legal office" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-navy-900 p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm uppercase font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 mb-12">
            Our Vision & Mission
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4">Our Vision</h3>
              <p>To be the most trusted legal advisor for businesses in India, known for our integrity, expertise, and client-first approach that delivers exceptional results.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4">Our Mission</h3>
              <p>To provide accessible, high-quality legal services that empower our clients to achieve their business objectives while navigating complex legal challenges with confidence.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 text-center mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-cormorant font-semibold mb-3">{value.title}</h3>
                <p className="text-navy-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our practice, from client communication to legal strategy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards and maintain transparency in all our client relationships.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Client Focus",
    description: "We put our clients' needs first, delivering personalized solutions tailored to their unique situations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and approaches to stay ahead in an evolving legal landscape.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];
