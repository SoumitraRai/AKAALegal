"use client";

import React from 'react';
import PageBanner from '@/components/ui/PageBanner';
import FAQSection from '@/components/ui/FAQSection';

// Metadata is now defined in layout.tsx

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <PageBanner 
        title="Our Practice Areas"
        backgroundImage="/assets/images/services-banner.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* Services Navigation Tabs */}
      <section className="sticky top-20 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap overflow-x-auto py-4 services-tabs">
            {services.map((service, index) => (
              <button 
                key={index} 
                className={`service-tab whitespace-nowrap px-5 py-2 mx-2 font-medium border-b-2 ${index === 0 ? 'border-gold text-navy-900' : 'border-transparent text-navy-600 hover:text-navy-900'}`}
                onClick={() => {}} // Will implement with useState in full version
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Law Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 mb-6">
                Corporate Law
              </h2>
              <p className="mb-4 text-lg">
                Our Corporate Law practice offers comprehensive legal solutions for businesses of all sizes,
                from startups to established corporations. We provide strategic guidance on business formation,
                mergers and acquisitions, corporate governance, and regulatory compliance.
              </p>
              <p className="mb-8">
                With our deep understanding of corporate structures and business operations, we help clients
                navigate complex legal challenges while maintaining focus on their business objectives.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Business Formation & Structuring",
                  "Corporate Governance",
                  "Mergers & Acquisitions",
                  "Joint Ventures",
                  "Corporate Restructuring",
                  "Regulatory Compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/corporate-law.jpg" 
                  alt="Corporate Law Services" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-6 mt-6">
                <h4 className="text-xl font-cormorant font-semibold mb-4">Need Corporate Legal Assistance?</h4>
                <p className="mb-4">Our experienced team is ready to help you navigate complex corporate legal matters.</p>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-gold text-navy-900 font-medium rounded hover:bg-gold/90 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-black mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-12">
            We take pride in achieving successful outcomes for our clients across diverse legal challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Successful Corporate Restructuring",
                icon: "⚖️",
                description: "Helped a manufacturing company restructure operations across multiple states, reducing legal liabilities and improving operational efficiency."
              },
              {
                title: "Complex Litigation Resolution",
                icon: "🏛️",
                description: "Successfully resolved a multi-year litigation case for a technology client, resulting in favorable settlement terms and protection of intellectual property."
              },
              {
                title: "Regulatory Compliance Overhaul",
                icon: "📝",
                description: "Implemented comprehensive regulatory compliance systems for a financial services firm, preventing potential penalties and ensuring ongoing adherence to changing regulations."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{story.icon}</div>
                <h3 className="text-xl font-cormorant font-semibold mb-3">{story.title}</h3>
                <p className="text-navy-600 mb-4">{story.description}</p>
                <div className="text-sm text-navy-500 italic">
                  — Client in {["Delhi NCR", "Mumbai", "Bangalore"][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        items={serviceFaqs}
        title="Frequently Asked Questions About Our Services"
        description="Find answers to common questions about our legal practice areas and services."
      />
    </main>
  );
}

const serviceFaqs = [
  {
    question: "What types of businesses do you typically work with?",
    answer: "We work with a diverse range of businesses, from startups to established corporations, across various industries including technology, manufacturing, real estate, healthcare, finance, and retail. Our clients range from small local businesses to multinational corporations."
  },
  {
    question: "How does your firm handle conflict of interest situations?",
    answer: "We take conflicts of interest very seriously. Before taking on any new client, we conduct a thorough conflict check. If a potential conflict is identified, we promptly disclose it and discuss appropriate steps. In some cases, we may obtain waivers where permissible, or we may decline representation if the conflict cannot be resolved."
  },
  {
    question: "Do you offer fixed fee arrangements for your services?",
    answer: "Yes, we offer various fee structures including fixed fees for certain well-defined services. Our approach to billing is flexible and client-focused. During initial consultations, we discuss fee structures and determine the most appropriate arrangement based on the scope and nature of your legal needs."
  },
  {
    question: "How do you stay current with changing laws and regulations?",
    answer: "Our attorneys participate in ongoing legal education programs, subscribe to legal publications, and are active members of various legal associations. We also have dedicated teams that monitor legislative and regulatory changes in each practice area, ensuring that our advice always reflects the most current legal landscape."
  },
  {
    question: "Can you represent me if my legal matter is in another state or country?",
    answer: "Yes, our firm has a network of associated lawyers across India and internationally. For matters requiring specific jurisdictional expertise, we collaborate with trusted local counsel while maintaining oversight of your case. This approach ensures both local expertise and consistent service quality."
  }
];

const services = [
  { title: "Corporate Law", slug: "corporate-law" },
  { title: "Litigation", slug: "litigation" },
  { title: "Intellectual Property", slug: "intellectual-property" },
  { title: "Insolvency & Bankruptcy", slug: "insolvency-bankruptcy" },
  { title: "Real Estate", slug: "real-estate" },
  { title: "Taxation", slug: "taxation" },
  { title: "Labor & Employment", slug: "labor-employment" },
  { title: "Banking & Finance", slug: "banking-finance" },
];
