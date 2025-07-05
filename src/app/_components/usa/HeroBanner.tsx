"use client";

import Image from "next/image";
import React from "react";
import InfoStatsBar from "./InfoStatsBar";

const HeroBannerUSA = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#fff] to-[#fef7f5] py-16 px-4 md:px-20 overflow-hidden font-poppins">
      {/* Faded Background Text */}
      <h2 className="absolute text-[120px] md:text-[180px] font-bold text-[#fdded6] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
        STUDY IN USA
      </h2>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug mb-6">
            <span className="relative inline-block">
              <span className="text-red-600 font-bold">USA</span>
              <span className="absolute left-0 bottom-[-5px] w-full h-[5px] bg-red-300 rounded-full z-[-1]" />
            </span>{" "}
            – The ultimate destination for top-tier education and limitless potential
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            Experience world-class universities, a flexible education system, and global career opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1f3f98] text-white font-medium px-6 py-3 rounded-md hover:bg-[#18337e] transition-all">
              Free Expert Consultation
            </button>
            <button className="bg-white border border-[#1f3f98] text-[#1f3f98] font-medium px-6 py-3 rounded-md hover:bg-[#f1f4ff] transition-all">
              View & Download Brochure
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center relative z-10 -mb-16 md:-mb-20">
          <Image
            src="/study-abroad/usa-girl.jpg"
            alt="Study in USA Girl"
            width={500}
            height={500}
            className="object-contain max-w-[420px] w-full"
          />
        </div>
      </div>
      <InfoStatsBar />
    </section>
  );
};

export default HeroBannerUSA;
