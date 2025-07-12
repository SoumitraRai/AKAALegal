import { AwardItem } from '@/components/ui/AwardItem';

interface Award {
  id: number;
  name: string;
  year: string;
  issuer: string;
  imageSrc: string;
}



export const AwardsSection: React.FC = () => {
  const awards: Award[] = [
    {
      id: 1,
      name: "Best Corporate Law Firm",
      year: "2023",
      issuer: "Legal Excellence Awards",
      imageSrc: "/assets/images/awards/award-1.png",
    },
    {
      id: 2,
      name: "Top 50 Law Firms",
      year: "2022-2023",
      issuer: "National Legal Directory",
      imageSrc: "/assets/images/awards/award-2.png",
    },
    {
      id: 3,
      name: "Excellence in Client Service",
      year: "2023",
      issuer: "Business Law Association",
      imageSrc: "/assets/images/awards/award-3.png",
    },
    {
      id: 4,
      name: "Distinguished Service Award",
      year: "2021",
      issuer: "Bar Association",
      imageSrc: "/assets/images/awards/award-4.png",
    },
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-80"></div>
      <div className="absolute right-0 top-10 w-72 h-72 bg-[url('/assets/textures/subtle-pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-navy relative inline-block">
            Awards & Recognition
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-light font-montserrat">
            Our commitment to excellence has been recognized by leading institutions in the legal industry.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {awards.map((award) => (
            <AwardItem key={award.id} {...award} />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="max-w-3xl bg-cream p-6 rounded-lg border-l-4 border-gold">
            <p className="text-text font-montserrat italic">
              "UA Legal consistently demonstrates exceptional legal expertise and an unwavering commitment to 
              client success, making them one of the most respected firms in their practice areas."
            </p>
            <p className="text-right mt-4 text-navy font-semibold">— Legal Excellence Committee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
