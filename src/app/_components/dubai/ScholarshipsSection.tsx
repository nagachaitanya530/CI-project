"use client";
import Image from "next/image";
import React from "react";

const ScholarshipsSection = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="flex-1 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-black leading-snug">
            <span className="relative inline-block">
              <span className="relative z-10 text-black">Scholarships</span>
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
            </span>{" "}
            In Dubai
          </h2>

          <p className="mt-6 text-gray-800 leading-relaxed text-base">
            Dubai, the gleaming gem of the Middle East, recognises aspiring scholars with a treasure
            trove of scholarship opportunities that transcends conventional boundaries. Among these
            are merit-based scholarships, which cover up to 40% of the tuition fees. You can find out
            all about scholarship in the UAE for Indian students below.
          </p>
          <div className="mt-6 space-y-2 text-base break-words text-left">
            <a
              href="http://www.uaecd.org/sponsors-introduction"
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uaecd.org/sponsors-introduction
            </a>
            <a
              href="https://www.mbrsg.ae/home/programs/scholarships.aspx"
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.mbrsg.ae/home/programs/scholarships.aspx
            </a>
            <a
              href="https://scholarship.aud.edu/senior/"
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              scholarship.aud.edu/senior/
            </a>
            <a
              href="https://ascholarship.com/uae-dubai-scholarships-2023-study-for-free-in-u-a-e/"
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ascholarship.com/uae-dubai-scholarships-2023-study-for-free-in-u-a-e/
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md">
          <Image
            src="/www.jpg"
            alt="Scholarship Student"
            width={500}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
