"use client";

import Image from "next/image";
import React from "react";
import InfoStatsBar from "./InfoStatsBar";

const HeroBannerUSA = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-[#fef7f5] py-14 px-4 md:px-20 overflow-hidden font-poppins">

      <h2 className="absolute text-[50px] xs:text-[80px] sm:text-[120px] md:text-[180px] font-bold text-[#fdded6] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none leading-none">
        STUDY IN USA
      </h2>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            <span className="relative inline-block">
              <span className="text-red-600 font-bold">USA</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-300 rounded-full z-[-1]" />
            </span>{" "}
            – The ultimate destination for top-tier education
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto md:mx-0">
            Experience world-class universities, a flexible education system, and
            global career opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-[#1f3f98] text-white font-medium px-6 py-3 rounded-md hover:bg-[#18337e] transition">
              Free Expert Consultation
            </button>
            <button className="bg-white border border-[#1f3f98] text-[#1f3f98] font-medium px-6 py-3 rounded-md hover:bg-[#f1f4ff] transition">
              View & Download Brochure
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <Image
            src="/study-abroad/usa-girl.jpg"
            alt="Happy international student studying in the USA"
            width={420}
            height={420}
            className="object-contain w-full max-w-xs md:max-w-md h-auto"
            priority
          />
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <InfoStatsBar />
      </div>
    </section>
  );
};

export default HeroBannerUSA;
