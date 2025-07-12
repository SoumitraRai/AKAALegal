import React from 'react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const ContactForm = ({
  title = 'Get In Touch',
  subtitle = 'We\'re here to help with your legal needs. Fill out the form below, and our team will get back to you promptly.',
  showImage = true,
  imageSrc = '/assets/images/office-building.jpg',
  imageAlt = 'UA Legal Office',
  className = '',
}: ContactFormProps) => {
  return (
    <div className={`max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden relative ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
      
      <div className="p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-navy-900 mb-4">
            {title}
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {showImage && (
            <div className="md:col-span-2 relative">
              <div className="h-full rounded-lg overflow-hidden">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-navy-900/80 p-4 text-white text-center">
                <p className="font-cormorant text-lg">Visit Our Office</p>
              </div>
            </div>
          )}
          
          <form className={showImage ? "md:col-span-3" : "md:col-span-5"} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-2">
                  Service Required
                </label>
                <div className="relative">
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Litigation</option>
                    <option value="intellectual-property">Intellectual Property</option>
                    <option value="insolvency">Insolvency & Bankruptcy</option>
                    <option value="other">Other Services</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-navy-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Please describe how we can assist you"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  className="w-4 h-4 accent-gold" 
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-navy-600">
                  I agree to the <a href="/privacy-policy" className="text-gold hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="px-8 py-3 bg-gold text-navy-900 font-medium rounded-lg hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
