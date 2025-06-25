"use client";

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, title = "FAQs" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        {title}
      </h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <div className="relative w-6 h-6">
                  <div
                    className={`absolute inset-0 transition-transform duration-500 ease-out ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-gray-400"></div>
                      <div
                        className={`absolute w-0.5 h-3 bg-gray-400 transition-opacity duration-500 ease-out ${
                          openIndex === index ? 'opacity-0' : 'opacity-100'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            
            <div
              className={`transition-all duration-500 ease-out ${
                openIndex === index
                  ? 'max-h-96 opacity-100 pb-5'
                  : 'max-h-0 opacity-0 pb-0'
              } overflow-hidden`}
            >
              <div className="px-6">
                <div className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;