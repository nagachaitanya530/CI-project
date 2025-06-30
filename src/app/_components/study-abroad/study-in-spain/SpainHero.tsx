// components/SpainHero.tsx
"use client";

import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaBlogger,
} from "react-icons/fa";

const SpainHero = () => {
  return (
    <section className="relative mt-30 mx-4 md:mx-12 overflow-visible">
      {/* Blue Card */}
      <div className="bg-[#0d47a1] text-white px-6 md:px-16 py-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Get Ready To Begin{" "}
            <span className="text-white border-b-4 border-red-500 inline-block">
              Your Journey
            </span>
          </h1>
          <p className="text-gray-200 mt-4">
            Explore more, stay informed, and start your journey to academic excellence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="bg-white text-[#0d47a1] font-semibold px-5 py-2 rounded-full shadow">
              Contact Us
            </button>
            <div className="flex items-center gap-3 text-white text-2xl">
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
              <FaFacebook />
              <FaBlogger />
            </div>
          </div>
        </div>

        {/* Right Image with overflow */}
        <div className="flex-1 relative h-[300px] md:h-auto mt-62">
          <img
            src="/images/spain-girl-globe.png"
            alt="Student with globe"
            className="w-[280px] md:w-[320px] absolute right-[-40px] bottom-0 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpainHero;
