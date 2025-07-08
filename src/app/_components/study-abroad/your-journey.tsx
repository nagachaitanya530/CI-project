"use client";

import React from "react";
import Image from "next/image";

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
    blog: "https://blogger.com",
  },
}) => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-4 sm:py-6 md:py-10 px-4">
      <div className="relative w-full max-w-7xl">
        {/* Mobile Image - Positioned above container */}
        <div className="flex justify-center lg:hidden mb-4 sm:mb-6 z-30">
          <Image
            src={girlImageSrc}
            alt="Student with globe"
            width={160}
            height={160}
            className="object-contain"
            priority
            quality={85}
          />
        </div>

        {/* Blue Container */}
        <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] border-2 sm:border-4 border-white w-full max-w-[95vw] sm:max-w-[90vw] z-10">
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full">
            {/* Left Content */}
            <div className="flex-1 text-white pr-0 lg:pr-8">
              <div className="max-w-[500px]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-2 sm:mb-3">
                  Get Ready To Begin
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold relative inline-block">
                    Your Journey
                    <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-red-500 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6 max-w-md">
                  Explore more, stay informed, and start your journey to academic excellence.
                </p>

                {/* Contact Button */}
                <div className="mb-4 sm:mb-6">
                  <button
                    onClick={onContactClick}
                    className="relative overflow-hidden bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold border-none cursor-pointer group transition-all duration-500 hover:shadow-lg hover:shadow-black/30"
                  >
                    <div className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                      <span className="transform group-hover:scale-105 transition-transform duration-300">
                        Contact Us
                      </span>
                      <svg
                        className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Social icons stay unchanged */}
                {/* ... (your social icon JSX remains untouched here) */}
              </div>
            </div>
          </div>
        </div>

        {/* Girl Image - Desktop */}
        <div
          className="absolute top-0 z-20 hidden lg:block"
          style={{
            left: "70%",
            transform: "translate(-45%, -10%)",
            filter: "drop-shadow(0 15px 10px rgba(0, 0, 0, 0.25))",
          }}
        >
          <img
            src={girlImageSrc}
            alt="Student with globe"
            className="w-[550px] h-[470px] object-contain animate-float -mt-10"
          />
        </div>

        {/* Mobile Image - Centered below content */}
        <div className="flex justify-center lg:hidden mt-6 z-20">
          <img
            src={girlImageSrc}
            alt="Student with globe"
            width={550}
            height={470}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default YourJourney;
