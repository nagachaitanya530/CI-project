"use client";

import Image from "next/image";
import React from "react";

export default function DuolingoInfo() {
  return (
    <div className="bg-blue-50 px-4 sm:px-6 md:px-8 py-8 md:py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600">
            DUOLINGO – 2025
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-3 md:gap-y-4 text-sm md:text-base text-blue-600">
            <div>
              <p className="font-semibold text-black">Test Format :</p>
              <p>Quick Setup, Adaptive Test, Video Interview</p>
            </div>
            <div>
              <p className="font-semibold text-black">Duration :</p>
              <p>1 Hours</p>
            </div>
            <div>
              <p className="font-semibold text-black">Mode :</p>
              <p>Computer Based Online</p>
            </div>
          </div>

          <button className="bg-[#1c3d91] hover:bg-gray-50 transition-colors duration-200 text-white hover:text-blue-600 font-semibold text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl">
            Free Expert Consultation
          </button>
        </div>

        {/* Right Column */}
        <div className="rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/writing-the-notes.jpg"
            alt="ACT Preparation"
            width={300}
            height={300}
            className="object-cover w-96 h-auto opacity-85"
            priority
            sizes="(max-width: 500px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-right text-xs sm:text-sm italic text-blue-600 mt-3 md:mt-4 pr-2 sm:pr-4">
        Last updated – 5 April ‘25
      </p>
    </div>
  );
}