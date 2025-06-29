"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  allowMultipleOpen?: boolean;
  searchable?: boolean;
  categories?: string[];
  className?: string;
}

function FAQ({ 
  faqs, 
  title = "Frequently Asked Questions",
  allowMultipleOpen = false,
  searchable = false,
  categories = [],
  className = ""
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Memoized filtered FAQs for better performance
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = !searchTerm || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || 
        faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchTerm, selectedCategory]);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      
      if (allowMultipleOpen) {
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
      } else {
        // Single open mode
        if (newSet.has(index)) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(index);
        }
      }
      
      return newSet;
    });
  }, [allowMultipleOpen]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("all");
  }, []);

  // Generate structured data for SEO
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }), [filteredFAQs]);

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className={`max-w-4xl mx-auto p-6 ${className}`}>
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          {faqs.length > 0 && (
            <p className="text-gray-600">
              {filteredFAQs.length} of {faqs.length} questions
            </p>
          )}
        </header>

        {/* Search and Filter Controls */}
        {(searchable || categories.length > 0) && (
          <div className="mb-8 space-y-4">
            {searchable && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  aria-label="Search FAQ questions"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}

            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Categories
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* FAQ Items */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchTerm || selectedCategory !== "all" 
                ? "No questions match your search criteria." 
                : "No questions available."}
            </p>
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={clearSearch}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4" role="presentation">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIndices.has(index);
              const faqId = faq.id || `faq-${index}`;
              
              return (
                <article
                  key={`${faqId}-${index}`}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-blue-300"
                >
                  <h2>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200 hover:bg-gray-50"
                      aria-expanded={isOpen}
                      aria-controls={`${faqId}-answer`}
                      id={`${faqId}-question`}
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-out ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  </h2>

                  <div
                    id={`${faqId}-answer`}
                    role="region"
                    aria-labelledby={`${faqId}-question`}
                    className={`transition-all duration-300 ease-out ${
                      isOpen
                        ? 'max-h-screen opacity-100 pb-6'
                        : 'max-h-0 opacity-0 pb-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6">
                      <div 
                        className="text-gray-700 leading-relaxed prose prose-gray max-w-none"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                      {faq.category && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Quick Actions */}
        {filteredFAQs.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                if (openIndices.size === filteredFAQs.length) {
                  setOpenIndices(new Set());
                } else {
                  setOpenIndices(new Set(filteredFAQs.map((_, index) => index)));
                }
              }}
              className="px-6 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {openIndices.size === filteredFAQs.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FAQ;