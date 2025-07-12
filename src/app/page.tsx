import React, { Suspense } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Carousel } from '@/components/ui/Carousel';
import { OrnamentHeading } from '@/components/ui/OrnamentHeading';
import { Disclaimer } from '@/components/ui/Disclaimer';
import { FadeIn } from '@/components/ui/Motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

// Static import for critical above-the-fold components
import { FounderMessage } from '@/components/sections/home/FounderMessage';

// Import client components with dynamic imports
import { 
  PracticeAreas,
  StatsSection,
  TestimonialCarousel,
  AwardsSection,
  CallToAction
} from '@/components/sections/home/DynamicSections';

export default function Home() {
  const expertiseItems = [
    {
      id: 1,
      icon: 'fas fa-landmark',
      title: 'Corporate & Commercial Law',
      description: 'Expert guidance on investments, entry strategies, and commercial contracts for businesses in India.'
    },
    {
      id: 2,
      icon: 'fas fa-gavel',
      title: 'Litigation & Dispute Resolution',
      description: 'Strategic representation across all levels of Indian courts and tribunals with a focus on timely justice.'
    },
    {
      id: 3,
      icon: 'fas fa-balance-scale',
      title: 'Insolvency & Restructuring',
      description: 'Specialized services in debt restructuring and distressed asset cases under the Insolvency and Bankruptcy Code.'
    },
    {
      id: 4,
      icon: 'fas fa-briefcase',
      title: 'Employment Laws',
      description: 'Comprehensive guidance on HR policies, labor law compliance, and industrial relations matters.'
    },
    {
      id: 5,
      icon: 'fas fa-user-shield',
      title: 'Consumer Laws',
      description: 'Expert representation in consumer commissions and assistance in resolving consumer disputes.'
    }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Insolvency and Bankruptcy Code',
      date: 'July 5, 2025',
      image: '/assets/images/blog-1.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus...'
    },
    {
      id: 2,
      title: 'Corporate Law Updates: July 2025',
      date: 'July 2, 2025',
      image: '/assets/images/blog-2.jpg',
      excerpt: 'Nam at magna vel urna commodo pulvinar. Sed a lectus vitae felis efficitur vehicula eget sit amet lectus. Nulla facilisi...'
    },
    {
      id: 3,
      title: 'Legal Implications of Recent Supreme Court Judgments',
      date: 'June 28, 2025',
      image: '/assets/images/blog-3.jpg',
      excerpt: 'Mauris venenatis sem vel nisl tincidunt, at commodo sem efficitur. Curabitur sit amet turpis eros...'
    },
    {
      id: 4,
      title: 'Navigating Employment Law Changes in 2025',
      date: 'June 20, 2025',
      image: '/assets/images/blog-4.jpg',
      excerpt: 'Integer at arcu nec est iaculis imperdiet. Ut vestibulum nulla vel tortor tincidunt, a finibus magna finibus...'
    },
    {
      id: 5,
      title: 'Key Considerations in Commercial Contract Drafting',
      date: 'June 15, 2025',
      image: '/assets/images/blog-5.jpg',
      excerpt: 'Maecenas sed orci eu justo dignissim finibus. Praesent lobortis eros sed est rhoncus, id congue nisl sagittis...'
    }
  ];
  
  return (
    <>
      {/* Founder's Message Section */}
      <FadeIn>
        <FounderMessage />
      </FadeIn>
      
      {/* Stats Section */}
      <FadeIn>
        <StatsSection />
      </FadeIn>
      
      {/* Practice Areas Section */}
      <FadeIn>
        <PracticeAreas />
      </FadeIn>
      
      {/* Expertise Carousel Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <OrnamentHeading
              title="Our Expertise"
              center
            />
          </FadeIn>
          
          <FadeIn delay={200}>
            <Carousel
              itemsPerView={3}
              carouselId="expertise"
            >
              {expertiseItems.map(item => (
                <Card key={item.id} variant="expertise" className="text-center">
                  <div className="text-5xl text-accent mb-5">
                    <i className={item.icon}></i>
                  </div>
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardContent className="pt-0 text-text-light">
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </FadeIn>
          
          <div className="text-center mt-10">
            <Button variant="outlined" href="/services">
              View All Practice Areas
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <FadeIn>
        <TestimonialCarousel />
      </FadeIn>
      
      {/* Blog Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <FadeIn>
            <OrnamentHeading
              title="Blogs"
              center
            />
          </FadeIn>
          
          <FadeIn delay={200}>
            <Carousel
              itemsPerView={3}
              carouselId="blog"
            >
              {blogPosts.map(post => (
                <Card key={post.id} variant="blog" className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <OptimizedImage 
                      src={post.image} 
                      alt={post.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-playfair text-primary mb-2">
                      {post.title}
                    </h3>
                    <div className="text-sm text-text-light mb-4">
                      <span className="flex items-center gap-1.5">
                        <i className="far fa-calendar"></i> {post.date}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <a href="#" className="text-accent font-semibold inline-flex items-center gap-1 hover:text-primary transition-colors">
                      Read More <i className="fas fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </Card>
              ))}
            </Carousel>
          </FadeIn>
          
          <div className="text-center mt-10">
            <Button variant="outlined" href="/blog">
              View All Blogs
            </Button>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <FadeIn>
        <AwardsSection />
      </FadeIn>
      
      {/* Call to Action Section */}
      <FadeIn>
        <CallToAction />
      </FadeIn>
      
      {/* Disclaimer Section */}
      <Disclaimer />
    </>
  );
}
