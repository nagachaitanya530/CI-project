"use client";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-white via-red-50 to-green-100 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl text-gray-800 leading-tight md:leading-snug">
            <span className="font-bold text-black underline decoration-red-500 decoration-4 underline-offset-[14px]">
              Netherlands:
            </span>{" "}
            Where<br /> modern education and<br /> tradition meet
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-md">
              Free Expert Consultation
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <img
            className="max-w-full h-auto object-contain"
            src="/study-abroad-netherlands/study-abrd-netherland.webp"
            alt="student"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
