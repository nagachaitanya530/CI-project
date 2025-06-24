"use client";

import React, { useState, useEffect } from 'react';

const AIEvaluationSection = () => {
  // Typing animation state
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['AI Evaluation', 'Smart Analysis', 'Instant Feedback'];
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length] || '';
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 1000 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const cards = [
    {
      id: 1,
      title: 'AI-Powered Scoring',
      subtitle: 'Advanced Algorithm',
      description: 'Our proprietary AI technology evaluates your IELTS performance with precision matching human examiners.',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      accentColor: 'text-blue-600',
      icon: 'brain'
    },
    {
      id: 2,
      title: 'Real-time Feedback',
      subtitle: 'Instant Analysis',
      description: 'Get immediate detailed feedback on your speaking, writing, reading and listening performance.',
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      accentColor: 'text-green-600',
      icon: 'zap'
    },
    {
      id: 3,
      title: 'Personalized Learning',
      subtitle: 'Adaptive Technology',
      description: 'AI adapts to your learning style and identifies areas for improvement with customized recommendations.',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      accentColor: 'text-purple-600',
      icon: 'target'
    },
    {
      id: 4,
      title: 'Global Standards',
      subtitle: 'Certified Accuracy',
      description: 'Our AI evaluation meets international IELTS standards with 99.7% accuracy rate verified by Cambridge.',
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      accentColor: 'text-orange-600',
      icon: 'globe'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Fixed Content */}
          <div className="lg:sticky lg:top-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-white text-lg sm:text-xl">🤖</span>
              </div>
              <span className="text-sm sm:text-base text-gray-600 font-medium">Best AI-Powered IELTS Platform</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="block mb-2">{displayText}</span>
              <span className="animate-pulse text-blue-500">|</span>
            </h2>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 italic">
                Certified Expert Technology
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Experience cutting-edge AI evaluation technology that provides accurate IELTS scoring with 
                real-time feedback. Our advanced algorithms are trained on millions of IELTS responses 
                to deliver precise assessment and personalized improvement recommendations.
              </p>
            </div>
            
            <button className="group bg-gray-900 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Try AI Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
          
          {/* Right Side - Scrollable Cards */}
          <div className="relative">
            <div className="overflow-y-auto scrollbar-hide max-h-screen">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pr-2">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`group ${card.bgColor} rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-white/50 backdrop-blur-sm ${
                      index >= 2 ? 'animate-fade-in-up' : ''
                    }`}
                    style={{
                      animationDelay: index >= 2 ? `${(index - 2) * 300}ms` : '0ms'
                    }}
                  >
                    {/* Browser-style header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">AI-Tech</div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 ${card.accentColor.replace('text-', 'bg-').replace('-600', '-500')} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {card.icon === 'brain' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.33 12.91c.09-.16.67-1.14.67-2.41 0-1.25-.56-2.25-.67-2.41-.08-.13-.17-.26-.26-.4-.09-.14-.18-.28-.26-.42-.08-.14-.16-.28-.24-.42-.08-.14-.16-.28-.24-.42C19.67 5.04 18.5 4 17 4c-.52 0-1.04.2-1.41.59-.16.16-.3.35-.41.55-.11.21-.19.43-.24.66-.05.23-.07.47-.05.7.02.24.08.47.17.69.09.22.21.42.36.6.15.18.33.34.53.47.2.13.42.23.65.29.23.06.47.08.71.05.24-.03.47-.1.68-.21.21-.11.4-.25.56-.42.16-.17.29-.36.38-.57.09-.21.14-.43.14-.66 0-.23-.05-.45-.14-.66-.09-.21-.22-.4-.38-.57-.16-.17-.35-.31-.56-.42-.21-.11-.44-.18-.68-.21-.24-.03-.48-.01-.71.05-.23.06-.45.16-.65.29-.2.13-.38.29-.53.47-.15.18-.27.38-.36.6-.09.22-.15.45-.17.69-.02.23 0 .47.05.7.05.23.13.45.24.66.11.2.25.39.41.55.37.39.89.59 1.41.59 1.5 0 2.67-1.04 3.33-2.43.08-.14.16-.28.24-.42.08-.14.16-.28.24-.42.08-.14.17-.28.26-.42.09-.14.18-.27.26-.4z"/>
                          </svg>
                        )}
                        {card.icon === 'zap' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                          </svg>
                        )}
                        {card.icon === 'target' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        )}
                        {card.icon === 'globe' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                          {card.title}
                        </h3>
                        <p className={`text-sm sm:text-base font-semibold ${card.accentColor}`}>
                          {card.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                      
                      <div className={`flex items-center ${card.accentColor} hover:opacity-80 cursor-pointer group/link mt-4`}>
                        <span className="text-sm sm:text-base font-medium">Explore Feature</span>
                        <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AIEvaluationSection;