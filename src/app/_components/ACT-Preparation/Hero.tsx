"use client";

import Link from "next/link";
import Image from "next/image";

export default function ACTPage({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 px-4 sm:px-6 md:px-16 pt-4 md:pt-6 pb-2">
        <Link href="/" className="hover:underline">Home</Link> &nbsp;&gt;&nbsp;
        <Link href="/test-preparation" className="hover:underline">Test Preparation</Link> &nbsp;&gt;&nbsp;
        <span className="text-blue-800 font-bold">ACT</span>
      </nav>

      {/* Main Section */}
      <div className="bg-[#e8eff8] h-auto px-4 sm:px-6 md:px-16 py-8 md:py-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
          ACT – 2025
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Test Format & Duration */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-blue-900">
              {/* Test Format */}
              <div>
                <p className="font-semibold text-lg">Test Format :</p>
                <p>English, Mathematics, Reading, and Science</p>
              </div>
              {/* Duration */}
              <div>
                <p className="font-semibold text-lg">Duration :</p>
                <p>2 Hours 55 minutes</p>
              </div>
            </div>

            {/* Mode */}
            <div>
              <p className="font-semibold text-lg">Mode :</p>
              <p className="text-blue-900 mt-1">Pen & Paper / Computer Based</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onFreeConsultClick}
              className="mt-4 w-full sm:w-auto px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all text-center"
            >
              Free Expert Consultation
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/study-session.jpg"
                alt="ACT Preparation"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Last updated */}
        <p className="text-right text-sm italic text-gray-500 mt-6">
          Last updated – 5 April '24
        </p>
      </div>
    </div>
  );
}
