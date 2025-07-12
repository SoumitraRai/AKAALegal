"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { NavLink } from '@/components/ui/NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-400',
      isSticky 
        ? 'bg-white shadow-lg py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black' 
        : 'bg-white'
    )}>
      {/* Top Bar */}
      <div className={cn(
        'bg-white text-black py-3 text-sm transition-all duration-400',
        isSticky ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      )}>
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-black"></div>
        
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-8">
            <span className="flex items-center gap-2.5 text-black transition-colors group">
              <span className="w-8 h-8 bg-white border border-black rounded-sm flex items-center justify-center group-hover:bg-black transition-all">
                <i className="fas fa-phone text-black text-xs group-hover:text-white"></i>
              </span>
              <span className="group-hover:translate-x-1 transition-transform">+91-9999-91-1598, +91-9990-48-0909</span>
            </span>
            <span className="hidden sm:flex items-center gap-2.5 text-black transition-colors group">
              <span className="w-8 h-8 bg-white border border-black rounded-sm flex items-center justify-center group-hover:bg-black transition-all">
                <i className="fas fa-envelope text-black text-xs group-hover:text-white"></i>
              </span>
              <span className="group-hover:translate-x-1 transition-transform">office@ualegal.in</span>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center bg-white border border-black rounded-sm hover:bg-black hover:text-white transition-all transform hover:scale-105">
              <i className="fab fa-linkedin text-sm"></i>
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center bg-white border border-black rounded-sm hover:bg-black hover:text-white transition-all transform hover:scale-105">
              <i className="fab fa-twitter text-sm"></i>
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center bg-white border border-black rounded-sm hover:bg-black hover:text-white transition-all transform hover:scale-105">
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-300 border-b border-black bg-white",
        isSticky ? "py-3" : "py-5"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className={cn(
                "relative overflow-hidden transition-all duration-400 p-1.5 rounded-sm bg-white border border-black",
                isSticky ? "h-12 w-12" : "h-14 w-14"
              )}>
                <img 
                  src="/assets/images/logo.png" 
                  alt="UA Legal Logo" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 rounded-sm"></div>
                
                {/* Corner accent */}
                <div className="absolute -top-[1px] -right-[1px] w-4 h-4">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-black border-r-black"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold text-black tracking-wide group-hover:text-black transition-colors">
                  UA Legal
                </span>
                <div className="flex items-center mt-0.5">
                  <div className="relative h-px w-10">
                    <span className="absolute top-0 left-0 w-full h-[1px] bg-black"></span>
                    <span className="absolute bottom-[2px] left-1 w-6 h-[1px] bg-black"></span>
                  </div>
                  <span className="text-xs text-black uppercase tracking-wider ml-2 letter-spacing-wider">Premier Law Firm</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="flex md:hidden flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span className={cn(
              "block w-6 h-0.5 bg-black transition-transform duration-300",
              isMenuOpen && "rotate-45 translate-y-2"
            )} aria-hidden="true"></span>
            <span className={cn(
              "block w-6 h-0.5 bg-black transition-opacity duration-300",
              isMenuOpen && "opacity-0"
            )} aria-hidden="true"></span>
            <span className={cn(
              "block w-6 h-0.5 bg-black transition-transform duration-300",
              isMenuOpen && "-rotate-45 -translate-y-2"
            )} aria-hidden="true"></span>
            
            {/* Hover effect */}
            <span className="absolute inset-0 border border-black/0 rounded-sm transition-all group-hover:border-black/30" aria-hidden="true"></span>
          </button>
          
          {/* Navigation Menu */}
          <nav aria-label="Main Navigation">
            <ul id="main-navigation" className={cn(
              "fixed md:static top-[89px] left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:items-center gap-0 md:gap-8 transition-all duration-300 md:h-auto md:opacity-100 shadow-lg md:shadow-none z-50 overflow-hidden",
              isMenuOpen ? "h-auto opacity-100 py-6" : "h-0 opacity-0 md:opacity-100"
            )}>
              <li>
                <NavLink 
                  href="/" 
                  className="font-medium text-black hover:text-black py-2.5 px-6 md:px-0 block md:inline-block relative group transition-colors duration-300"
                >
                  <span className="relative pb-1.5 font-montserrat tracking-wide">Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-in-out md:block hidden"></span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  href="/about" 
                  className="font-medium text-black hover:text-black py-2.5 px-6 md:px-0 block md:inline-block relative group transition-colors duration-300"
                >
                  <span className="relative pb-1.5 font-montserrat tracking-wide">About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-in-out md:block hidden"></span>
                  </span>
                </NavLink>
              </li>
            <li>
              <NavLink 
                href="/services" 
                className="font-medium text-black hover:text-black py-2.5 px-6 md:px-0 block md:inline-block relative group transition-colors duration-300"
              >
                <span className="relative pb-1.5 font-montserrat tracking-wide">Practice Areas
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-in-out md:block hidden"></span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/team" 
                className="font-medium text-black hover:text-black py-2.5 px-6 md:px-0 block md:inline-block relative group transition-colors duration-300"
              >
                <span className="relative pb-1.5 font-montserrat tracking-wide">Our Team
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-in-out md:block hidden"></span>
                </span>
              </NavLink>
            </li>
            <li className="md:ml-4">
              <NavLink 
                href="/contact" 
                className="font-medium text-black py-2.5 px-6 block md:inline-block relative group transition-all duration-300"
              >
                <span className="md:px-6 md:py-2.5 md:bg-white md:border md:border-black md:hover:bg-black md:hover:text-white md:rounded-sm md:shadow-button md:transition-all md:flex md:items-center relative overflow-hidden">
                  <i className="fas fa-envelope mr-2 hidden md:inline-block text-black group-hover:text-white text-xs transition-colors"></i>
                  <span className="relative z-10 font-montserrat tracking-wide">Contact</span>
                  <div className="absolute inset-0 w-0 bg-black md:group-hover:w-full transition-all duration-400 -z-0"></div>
                </span>
              </NavLink>
            </li>
          </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
