"use client";

import { useState } from 'react';

interface ContactFormProps {
  variant?: 'primary' | 'secondary';
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export const PremiumContactForm: React.FC<ContactFormProps> = ({
  variant = 'primary',
  showTitle = true,
  title = "Contact Us",
  subtitle = "Complete the form below and our team will be in touch shortly.",
  fullWidth = false,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const isPrimary = variant === 'primary';
  
  const formClasses = isPrimary 
    ? "bg-white shadow-xl border border-black rounded-lg p-6 md:p-8" 
    : "bg-white rounded-lg p-6 md:p-8";
    
  const inputClasses = isPrimary
    ? "w-full border border-black rounded-md px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black/30 focus:border-black transition-colors"
    : "w-full bg-white border border-black rounded-md px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black/30 focus:border-black transition-colors";
  
  const buttonClasses = isPrimary
    ? "w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium text-center"
    : "w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium text-center";
    
  return (
    <div className={fullWidth ? "w-full" : "max-w-2xl mx-auto"}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-black">{title}</h2>
          <p className="mt-2 text-black font-montserrat">{subtitle}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={formClasses}>
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6 text-green-800">
            Thank you for your message! We will be in touch shortly.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 text-red-800">
            There was an error sending your message. Please try again.
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className={inputClasses}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className={inputClasses}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-black">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Your phone number (optional)"
              className={inputClasses}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-black">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className={inputClasses}
            >
              <option value="">Select a topic</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Civil Litigation">Civil Litigation</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Real Estate Law">Real Estate Law</option>
              <option value="Estate Planning">Estate Planning</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-black">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help you?"
            className={inputClasses}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonClasses} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>
        
        <div className="mt-4 text-center text-xs text-black">
          By submitting this form, you agree to our <a href="/privacy-policy" className="text-black font-medium hover:underline">Privacy Policy</a>.
        </div>
      </form>
    </div>
  );
};

export default PremiumContactForm;
