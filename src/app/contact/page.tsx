"use client";

import React from 'react';
import PageBanner from '@/components/ui/PageBanner';
import PremiumContactForm from '@/components/ui/PremiumContactForm';
import FAQSection from '@/components/ui/FAQSection';
import { OfficeImage } from '@/components/ui/OfficeImage';

// Metadata is defined in layout.tsx

export default function ContactPage() {
  return (
    <main className="pt-24">
      <PageBanner 
        title="Contact Us"
        backgroundImage="/assets/images/contact-banner.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-2 border-gold/30"></div>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-cormorant font-semibold mb-4 relative pb-3">
                  {item.title}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-gold"></span>
                </h3>
                
                <p className="text-navy-600 mb-4">{item.description}</p>
                
                {item.link && (
                  <a 
                    href={item.link.url}
                    className="inline-block text-navy-800 font-medium hover:text-gold transition-colors relative"
                  >
                    {item.link.text}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-black mb-4">Get In Touch</h2>
              <p className="text-black mb-6">
                We're here to help with your legal needs. Fill out the form, and our team will get back to you promptly.
              </p>
              <OfficeImage 
                src="/assets/images/office-building.jpg" 
                alt="UA Legal Office" 
              />
            </div>
            
            <div>
              <PremiumContactForm 
                variant="primary"
                showTitle={false}
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        items={faqs}
        className="bg-white"
      />
      
      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-navy-900/10 z-10 pointer-events-none"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1594807333995!2d77.22567531508346!3d28.59540018243435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db961be3a7%3A0x6f5585e4bd434a!2sSupreme%20Court%20of%20India!5e0!3m2!1sen!2sin!4v1627638722545!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          title="UA Legal office location"
          className="filter grayscale"
        ></iframe>
      </section>
    </main>
  );
}

const contactInfo = [
  {
    title: "Main Office",
    description: "123 Legal Avenue, Sector 45, Gurugram, Haryana 122001, India",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: {
      text: "View on Google Maps",
      url: "https://maps.google.com"
    }
  },
  {
    title: "Contact Details",
    description: "Email: info@ualegal.com\nPhone: +91 98765 43210\nFax: +91 11 2345 6789",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: {
      text: "Email Us Now",
      url: "mailto:info@ualegal.com"
    }
  },
  {
    title: "Business Hours",
    description: "Monday - Friday: 9:00 AM to 6:00 PM\nSaturday: 10:00 AM to 2:00 PM\nSunday: Closed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const faqs = [
  {
    question: "What areas of law does UA Legal practice?",
    answer: "UA Legal specializes in corporate law, litigation, intellectual property, insolvency and bankruptcy matters, real estate, taxation, labor and employment, and banking and finance."
  },
  {
    question: "How can I schedule a consultation with UA Legal?",
    answer: "You can schedule a consultation by filling out the contact form on our website, calling our office directly at +91 98765 43210, or sending an email to info@ualegal.com. Our team will get back to you promptly to arrange a meeting."
  },
  {
    question: "Does UA Legal offer services throughout India?",
    answer: "Yes, UA Legal has a network of highly experienced lawyers across all major commercial cities in India. We are equipped to handle both domestic and cross-border transactions."
  },
  {
    question: "What information should I bring to my first meeting with an attorney?",
    answer: "For your first meeting, it's helpful to bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, or business records. A brief written summary of your situation can also be helpful for our attorneys to understand your needs better."
  },
  {
    question: "What are your fee structures?",
    answer: "Our fee structures vary depending on the type of legal matter, complexity, and expected duration. We offer various arrangements including hourly rates, fixed fees for specific services, and in some cases, success-based fee structures. We provide transparency in our billing and will discuss all fee arrangements during your initial consultation."
  }
];
