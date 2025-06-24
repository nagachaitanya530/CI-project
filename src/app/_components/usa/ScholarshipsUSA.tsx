"use client";

import Image from "next/image";
import React from "react";

const ScholarshipsUSA = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
            <span className="underline decoration-red-500 decoration-2 underline-offset-5">
              Scholarships
            </span>{" "}
            In The USA
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            US scholarships for Indian students are awarded on the criteria of merit & family needs. Candidates with strong academics, good performance on standardized exams and extra-curricular achievements are eligible for{" "}
            <span className="font-semibold text-gray-900">
              scholarships to study in usa
            </span>.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            There are several different types of scholarships for Indian students to study in USA – Fellowships, Assistantships, Sports, Need Based, etc.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/study-abroad/usa-girl2.webp"
            alt="Scholarships for Indian Students in the USA"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsUSA;
