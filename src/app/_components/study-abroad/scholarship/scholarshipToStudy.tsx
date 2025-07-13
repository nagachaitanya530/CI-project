"use client";
import React, { useState, useEffect } from 'react';

interface CardData {
  id: number;
  title: string;
  description: string;
  buttonText?: string;
}

const ScrollCardAnimation2: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const cardData: CardData[] = [
    {
      id: 1,
      title: "Merit-based scholarships",
      description: "Awarded for academic, athletic, artistic, or extracurricular achievements.",
      buttonText: "Free Expert Consultation"
    },
    {
      id: 2,
      title: "Student-specific scholarships",
      description: "These foreign scholarship for Indian students are available to applicants of specific genders, races, religions, ethnicities, or medical histories.",
      buttonText: "Free Expert Consultation"
    },
    {
      id: 3,
      title: "Need-based scholarships",
      description: "Awarded to students based on financial need.",
      buttonText: "Free Expert Consultation"
    },
    {
      id: 4,
      title: "Program-based scholarships",
      description: "These study abroad scholarships are provided by individual programs or universities based on academic and personal achievements.",
      buttonText: "Free Expert Consultation"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 to 1)
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / (maxScroll * 0.6), 1); // Use 60% of scroll for animation

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => {
    const baseDelay = index * 0.15;
    const animationProgress = Math.max(0, Math.min(1, (scrollProgress - baseDelay) / 0.7));

    if (scrollProgress === 0) {
      return {
        transform: 'translateY(0px) scale(1)',
        // opacity: 1,
        zIndex: 10 - index,
        marginBottom: index === 0 ? '60px' : '20px' // Extra space after first card
      };
    }

    const translateY = animationProgress * (-index * 60);
    const scale = 1 - (animationProgress * index * 0.05);
    const rotate = index % 2 === 0 ? animationProgress * 2 : -animationProgress * 2;


    return {
      transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,

      zIndex: 10 - index,
      marginBottom: index === 0 ? '120px' : '80px', // Maintain extra space during animation
      transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      boxShadow: `0 ${10 + index * 5}px ${15 + index * 5}px -5px rgba(0, 0, 0, ${0.1 + index * 0.05})`
    };
  };

  return (
    <div className=" bg-blue-50">
      {/* Header */}
      <div className="text-center py-8 relative z-20">
        <h1 className="text-5xl font-bold text-black mb-4 drop-shadow-lg">
          Scholarships To Study Abroad
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-0">
        <div className="flex items-start gap-10 relative">
          {/* Cards Container */}
          <div className="flex-1 relative">
            <div className="space-y-2">
              {cardData.map((card, index) => (
                <div
                  key={card.id}
                  className="relative hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-xl"
                  style={getCardStyle(index)}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl shadow-lg">
                          {card.id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {card.description}
                        </p>
                        {card.buttonText && (
                          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            {card.buttonText}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Image */}
          <div className="flex-1 sticky top-32 h-fit">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/scholarship/scholarship2.jpg"
                    alt="Scholarship"
                    className="max-w-full h-auto rounded-2xl"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                .hover-float:hover {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

        </div>
    );

    </div>
  );

};

export default ScrollCardAnimation2;