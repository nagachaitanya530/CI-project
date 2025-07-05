"use client";

import React from 'react';

interface SocialLinks {
  instagram: string;
  youtube: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  blog: string;
}

interface JourneyHeroProps {
  girlImageSrc?: string;
  onContactClick?: () => void;
  socialLinks?: SocialLinks;
}

const YourJourney: React.FC<JourneyHeroProps> = ({ 
  girlImageSrc = "/study-abroad/btm-bnr-img.png",
  onContactClick = () => console.log("Contact Us clicked"),
  socialLinks = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    blog: "https://blogger.com"
  }
}) => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-10 px-4">
      <div className="relative w-full max-w-7xl">
        {/* Blue Container */}
        <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-6 md:p-8 min-h-[280px] border-4 border-white w-full max-w-[90vw] z-10">
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full">
            {/* Left Content */}
            <div className="flex-1 text-white pr-0 lg:pr-8">
              <div className="max-w-[500px]">
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-3">
                  Get Ready To Begin
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold relative inline-block">
                    Your Journey
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded-full"></div>
                  </span>
                </h1>
                
                <p className="text-base md:text-lg opacity-90 mb-6 max-w-md">
                  Explore more, stay informed, and start your journey to academic excellence.
                </p>

                {/* Contact Button */}
                <div className="mb-6">
                  <button 
                    onClick={onContactClick}
                    className="relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-base font-semibold border-none cursor-pointer group transition-all duration-500 hover:shadow-lg hover:shadow-black/30"
                  >
                    <div className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                      <span className="transform group-hover:scale-105 transition-transform duration-300">
                        Contact Us
                      </span>
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Social Media Icons */}
                <div className="bg-white rounded-2xl p-3 inline-flex space-x-2 shadow-lg">
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={socialLinks.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-red-500 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-blue-500 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={socialLinks.blog} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-orange-400 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm11 6.5h-2.5v7h-3v-7H8V7h2.5V5.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V7H16v2.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Girl Image */}
<div className="absolute top-0 z-20 hidden lg:block " 
     style={{ 
       left: '70%', 
       transform: 'translate(-45%, -10%)',
       filter: 'drop-shadow(0 15px 10px rgba(0, 0, 0, 0.25))'
     }}>
  <img 
    src={girlImageSrc}
    alt="Student with globe"

    className="w-[550px] h-[470px] object-contain animate-float -m-10" 

    className="w-[550px] h-[470px] object-contain animate-float -mt-10 " 

  />
</div>

        {/* Mobile Image - Centered below content */}
        <div className="flex justify-center lg:hidden mt-6 z-20">
          <img 
            src={girlImageSrc}
            alt="Student with globe"
            className="w-56 h-56 object-contain animate-float"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default YourJourney;