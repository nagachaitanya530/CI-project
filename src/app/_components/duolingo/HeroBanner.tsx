// DuolingoInfo.tsx
"use client";

import Image from "next/image";
import React from "react";

export default function DuolingoInfo() {
  return (
    <div className="bg-[#eaf0f8] px-8 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1c3d91]">
            DUOLINGO – 2025
          </h2>

          <div className="grid grid-cols-2 gap-y-4 text-sm md:text-base text-[#1c3d91]">
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

          <button className="bg-[#1c3d91] hover:bg-[#FFFFFF] transition-colors duration-200 text-[#FFFFFF] font-semibold text-sm px-6 py-3 rounded-xl">
               Free Expert Consultation
          </button>
        </div>

        {/* Right Column */}
        <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/study.png.webp" // Replace with your actual image path
            alt="Duolingo Exam"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-right text-sm italic text-[#1c3d91] mt-4 pr-4">
        Last updated – 5 April ‘24
      </p>
    </div>
  );
}
