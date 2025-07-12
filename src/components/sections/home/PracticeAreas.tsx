import Image from 'next/image';
import Link from 'next/link';
import { FaBalanceScale, FaGavel, FaHandshake, FaLandmark, FaUserTie } from 'react-icons/fa';

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ title, description, icon, href }) => {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gold-light/20">
        <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500"></div>
        <div className="p-8">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream text-gold text-3xl">
            {icon}
          </div>
          <h3 className="mb-3 font-playfair text-xl font-semibold text-navy">{title}</h3>
          <p className="text-text-light font-montserrat text-sm">{description}</p>
          <div className="mt-4 flex items-center text-gold text-sm font-medium">
            <span>Learn more</span>
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance on business formation, mergers and acquisitions, and corporate governance.',
      icon: <FaLandmark />,
      href: '/services#corporate',
    },
    {
      title: 'Civil Litigation',
      description: 'Skilled representation in complex civil disputes, contract issues, and tort claims.',
      icon: <FaGavel />,
      href: '/services#litigation',
    },
    {
      title: 'Intellectual Property',
      description: 'Protection for your innovations, trademarks, copyrights, and creative assets.',
      icon: <FaBalanceScale />,
      href: '/services#ip',
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive legal solutions for property transactions, leasing, and disputes.',
      icon: <FaHandshake />,
      href: '/services#realestate',
    },
    {
      title: 'Estate Planning',
      description: 'Personalized strategies for asset protection, succession planning, and wealth preservation.',
      icon: <FaUserTie />,
      href: '/services#estate',
    }
  ];

  return (
    <section className="relative bg-cream py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('/assets/textures/marble-light.png')] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-16 bg-[url('/assets/textures/marble-light.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy relative inline-block">
            Our Practice Areas
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-light font-montserrat">
            UA Legal offers comprehensive legal services across various practice areas, delivering 
            exceptional representation with a client-centered approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeArea key={index} {...area} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center px-8 py-4 bg-navy text-white font-montserrat font-medium rounded-md transition-all duration-300 hover:bg-navy-light hover:shadow-lg group">
            <span>View All Services</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
