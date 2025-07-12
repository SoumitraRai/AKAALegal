import React from 'react';
import { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';

export const metadata: Metadata = {
  title: 'Our Team | UA Legal | Premier Law Firm in India',
  description: 'Meet the accomplished legal team at UA Legal. Our attorneys combine expertise, experience, and dedication to deliver exceptional legal counsel across India.',
  keywords: 'UA Legal team, law firm attorneys, Indian lawyers, legal experts, top lawyers in India',
};

export default function TeamPage() {
  return (
    <main className="pt-24">
      <PageBanner 
        title="Our Legal Team"
        backgroundImage="/assets/images/team-banner.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Team' }
        ]}
      />
      
      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 mb-6">
            <span className="relative inline-block">
              Meet Our Attorneys
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            Our team includes qualified Insolvency Resolution Professionals, Company Secretaries, 
            and lawyers with extensive experience across judicial and quasi-judicial forums throughout India.
          </p>
          
          {/* Practice Area Filter */}
          <div className="mb-12">
            <div className="inline-flex flex-wrap justify-center bg-gray-100 rounded-full p-1 mb-8">
              {["All", "Corporate", "Litigation", "Intellectual Property", "Insolvency"].map((area, index) => (
                <button 
                  key={index} 
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? 'bg-gold text-navy-900' : 'text-navy-600 hover:text-navy-900'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-cormorant font-semibold text-center mb-10">
            Leadership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all flex gap-4 justify-center">
                    {member.social.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-navy-900 hover:bg-gold transition-colors"
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 bg-gold text-navy-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl">
                    Leadership
                  </div>
                  <h4 className="text-xl font-cormorant font-semibold mb-1">{member.name}</h4>
                  <p className="text-gold mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.credentials}</p>
                  <p className="text-navy-600 text-sm mb-4">{member.bio}</p>
                  <button className="text-navy-800 font-medium text-sm hover:text-gold transition-colors flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Associates Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-cormorant font-semibold text-center mb-10">
            Associates
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associatesTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden group">
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-cormorant font-semibold mb-1">{member.name}</h4>
                  <p className="text-gold text-sm mb-2">{member.title}</p>
                  <p className="text-navy-600 text-xs mb-3">{member.practice}</p>
                  <button className="text-navy-800 text-xs font-medium hover:text-gold transition-colors flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const leadershipTeam = [
  {
    name: "Aditya Dhawan",
    title: "Founder & Managing Partner",
    credentials: "LL.B., PGDM (Finance), Insolvency Professional",
    bio: "Mr. Dhawan brings over 15 years of experience in corporate law and insolvency matters, having represented clients before the Supreme Court and various High Courts.",
    image: "/assets/images/team/aditya-dhawan.jpg",
    social: [
      { icon: "linkedin", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "envelope", link: "#" }
    ],
    practice: ["Corporate", "Insolvency"]
  },
  {
    name: "Neha Sharma",
    title: "Senior Partner",
    credentials: "LL.M. (Corporate Law), CS",
    bio: "Ms. Sharma specializes in mergers & acquisitions and corporate restructuring with significant experience in cross-border transactions.",
    image: "/assets/images/team/neha-sharma.jpg",
    social: [
      { icon: "linkedin", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "envelope", link: "#" }
    ],
    practice: ["Corporate", "M&A"]
  },
  {
    name: "Rajiv Mehta",
    title: "Partner, Litigation",
    credentials: "LL.B., LL.M. (Dispute Resolution)",
    bio: "Mr. Mehta has successfully represented clients in complex litigation matters before the Supreme Court, High Courts and various Tribunals.",
    image: "/assets/images/team/rajiv-mehta.jpg",
    social: [
      { icon: "linkedin", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "envelope", link: "#" }
    ],
    practice: ["Litigation", "Dispute Resolution"]
  }
];

const associatesTeam = [
  {
    name: "Priya Kapoor",
    title: "Senior Associate",
    practice: "Intellectual Property",
    image: "/assets/images/team/associate1.jpg"
  },
  {
    name: "Arjun Singh",
    title: "Associate",
    practice: "Corporate Law",
    image: "/assets/images/team/associate2.jpg"
  },
  {
    name: "Leela Nair",
    title: "Associate",
    practice: "Litigation",
    image: "/assets/images/team/associate3.jpg"
  },
  {
    name: "Vikram Reddy",
    title: "Associate",
    practice: "Insolvency",
    image: "/assets/images/team/associate4.jpg"
  }
];
