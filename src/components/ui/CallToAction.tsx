import Link from 'next/link';

interface CtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
}

export const CallToAction: React.FC<CtaProps> = ({
  title = "Ready to Work with Expert Legal Counsel?",
  subtitle = "Our team of experienced attorneys is ready to provide the legal guidance you need.",
  buttonText = "Schedule a Consultation",
  buttonLink = "/contact",
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';
  
  const bgClasses = isPrimary 
    ? "bg-navy" 
    : "bg-cream";
    
  const titleClasses = isPrimary 
    ? "text-white" 
    : "text-navy";
    
  const subtitleClasses = isPrimary 
    ? "text-white/80" 
    : "text-text-light";
    
  const buttonClasses = isPrimary
    ? "bg-gold text-navy hover:bg-gold-light"
    : "bg-navy text-white hover:bg-navy-light";
    
  return (
    <section className={`py-16 md:py-20 relative ${bgClasses}`}>
      {/* Decorative elements */}
      {isPrimary ? (
        <>
          <div className="absolute inset-0 bg-[url('/assets/textures/legal-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light"></div>
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-gold to-gold-light"></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold opacity-5 -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold opacity-5 -mr-20 -mb-20"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold mb-4 ${titleClasses}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 font-montserrat ${subtitleClasses}`}>
            {subtitle}
          </p>
          <Link 
            href={buttonLink}
            className={`inline-flex items-center px-8 py-4 rounded shadow-md font-medium transition-all duration-300 ${buttonClasses}`}
          >
            <span>{buttonText}</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
