"use client";

import React, { useState, useEffect } from 'react';

// Hero Section Component with Typing Animation
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const textLines = ['IELTS Makes', 'The World Go', 'Round'];
  
  useEffect(() => {
    if (currentLineIndex < textLines.length) {
      const currentLine = textLines[currentLineIndex] || '';
      
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const lines = prev.split('\n');
            lines[currentLineIndex] = (lines[currentLineIndex] || '') + currentLine[currentCharIndex];
            return lines.join('\n');
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 100); // Typing speed
        
        return () => clearTimeout(timer);
      } else {
        // Move to next line
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          if (currentLineIndex === textLines.length - 1) {
            setDisplayText(prev => prev);
          } else {
            setDisplayText(prev => prev + '\n');
          }
        }, 200); // Pause between lines
        
        return () => clearTimeout(timer);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [currentCharIndex, currentLineIndex, textLines]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 bg-white rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px] transform rotate-1"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-slate-600 rounded-full opacity-10 transform translate-x-16 translate-y-16 sm:translate-x-24 sm:translate-y-24 md:translate-x-32 md:translate-y-32"></div>
        <div className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-slate-600 rounded-full opacity-5 sm:top-15 sm:left-8 md:top-20 md:left-10"></div>
      </div>

      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="text-white order-1 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <div className="w-1 h-12 sm:h-14 md:h-16 bg-green-500 mb-4 sm:mb-5 md:mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 min-h-[120px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[220px]">
                {displayText.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < displayText.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                {!isTypingComplete && (
                  <span className="animate-pulse text-green-500">|</span>
                )}
              </h1>
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div className={`text-white order-2 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 transition-opacity duration-1000 ${
            isTypingComplete ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">10000+ Institutions</span>
              </div>
              
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">140+ Countries</span>
              </div>
              
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">1100+ Test Centres</span>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">1.4 Million Test Takers</span>
              </div>
              
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">14000+ Evaluators</span>
              </div>
              
              <div className="flex items-center space-x-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg md:text-xl font-medium">No. 1 Language Test in The World</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const IELTSPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Additional content can be added here */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Ready to Take Your IELTS Test?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Join millions of test takers worldwide and open doors to international opportunities with IELTS.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IELTSPage;