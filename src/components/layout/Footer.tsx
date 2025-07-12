"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-gradient-to-b from-navy-dark via-navy-dark to-primary text-white relative overflow-hidden", className)}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-2 border-accent/30"></div>
        <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-accent/20"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-accent/10"></div>
        <div className="absolute bottom-20 left-1/2 w-40 h-40 rounded-full border border-accent/20"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full border border-accent/10"></div>
      </div>
      
      {/* Top footer decorative bar */}
      <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-accent to-gold-light relative z-10"></div>
      
      {/* Subtle diagonal pattern background */}
      <div className="absolute inset-0 bg-diagonal-pattern opacity-5"></div>
      
      {/* Main footer content */}
      <div className="pt-24 pb-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About the Firm */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative p-1.5 rounded-sm bg-white/10 h-14 w-14 shadow-inner-light backdrop-blur-sm">
                  <img src="/assets/images/logo-light.png" alt="UA Legal" className="h-full w-full object-contain" />
                  <div className="absolute inset-0 border border-accent/20 rounded-sm"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute -top-1 -right-1 w-4 h-4">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-accent border-r-accent"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair text-2xl font-bold text-white tracking-wide">UA Legal</span>
                  <div className="flex items-center mt-0.5">
                    <div className="relative h-px w-10">
                      <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/80 to-transparent"></span>
                      <span className="absolute bottom-[2px] left-1 w-6 h-[1px] bg-gradient-to-r from-accent/40 to-transparent"></span>
                    </div>
                    <span className="text-xs text-white/70 uppercase tracking-wider ml-2 letter-spacing-wider">Premier Law Firm</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-accent/30"></div>
                <p className="text-white/80 mb-8 leading-relaxed pl-4">
                  Providing exceptional legal services across India with integrity, expertise, and dedication to client success. Our experienced team delivers strategic solutions tailored to meet your specific legal needs.
                </p>
              </div>
              
              <div className="flex gap-5 mb-8">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-accent flex items-center justify-center transition-all group shadow-inner-light hover:shadow-gold-sm">
                  <i className="fab fa-linkedin text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-accent flex items-center justify-center transition-all group shadow-inner-light hover:shadow-gold-sm">
                  <i className="fab fa-twitter text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-accent flex items-center justify-center transition-all group shadow-inner-light hover:shadow-gold-sm">
                  <i className="fab fa-facebook-f text-lg group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xl font-playfair font-semibold mb-8 pb-4 border-b border-accent/30 relative">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent"></div>
                  <span>Quick Links</span>
                </div>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent"></span>
                <span className="absolute bottom-0 left-0 w-32 h-[1px] bg-accent/40"></span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-white/80 hover:text-accent transition-all flex items-center group">
                    <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-white/5 mr-3 text-accent group-hover:bg-accent/30 transition-all">
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </span> 
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/80 hover:text-accent transition-all flex items-center group">
                    <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-white/5 mr-3 text-accent group-hover:bg-accent/30 transition-all">
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </span> 
                    <span className="group-hover:translate-x-1 transition-transform">Practice Areas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/80 hover:text-accent transition-all flex items-center group">
                    <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-white/5 mr-3 text-accent group-hover:bg-accent/30 transition-all">
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </span> 
                    <span className="group-hover:translate-x-1 transition-transform">Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-accent transition-all flex items-center group">
                    <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-white/5 mr-3 text-accent group-hover:bg-accent/30 transition-all">
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </span> 
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-white text-xl font-playfair font-semibold mb-8 pb-4 border-b border-accent/30 relative">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent"></div>
                  <span>Contact Us</span>
                </div>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent"></span>
                <span className="absolute bottom-0 left-0 w-32 h-[1px] bg-accent/40"></span>
              </h4>
              <address className="not-italic space-y-5 text-white/80">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="pt-1">
                    <p>155, Block-B, Safdarjung Enclave,</p>
                    <p>New Delhi - 110029</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="pt-1">
                    <p>UGF, 140/16, Faridabad,</p>
                    <p>Haryana - 121002</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="pt-1">
                    <p>+91-9999-91-1598</p>
                    <p>+91-9990-48-0909</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="pt-1">
                    <a href="mailto:office@ualegal.in" className="hover:text-accent transition-colors hover-underline block">office@ualegal.in</a>
                    <a href="mailto:aditya@ualegal.in" className="hover:text-accent transition-colors hover-underline block">aditya@ualegal.in</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
          
          {/* Decorative divider */}
          <div className="divider mb-6">
            <div className="h-px w-24 bg-accent/50 mx-auto relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-2 border-accent/80 bg-navy-dark"></div>
            </div>
          </div>
          
          {/* Copyright and Social Links */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              &copy; 2025 UA Legal. All Rights Reserved.
            </div>
            <div className="text-sm text-white/60 flex items-center gap-2">
              <i className="fas fa-star-of-life text-accent/60 text-xs animate-pulse-slow"></i>
              <span>Designed for Premium Legal Experience</span>
              <i className="fas fa-star-of-life text-accent/60 text-xs animate-pulse-slow"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
