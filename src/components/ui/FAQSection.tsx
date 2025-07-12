"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-cormorant font-semibold text-black">{question}</h3>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-black">{answer}</p>
      </div>
    </div>
  );
};

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItemProps[];
  className?: string;
}

const FAQSection = ({
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our legal services.',
  items,
  className = '',
}: FAQSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-black text-center mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-black text-center mb-12">{description}</p>
          )}

          <div className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
