"use client";

import React from "react";
import Image from "next/image";

const ScholarshipsUSA = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            <span className="underline decoration-red-500 decoration-2 underline-offset-5">
              Scholarships
            </span>{" "}
            in the USA
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            US scholarships for Indian students are awarded based on merit and
            family needs. Students with strong academics, good performance on
            standardized exams, and impressive extracurricular achievements may be
            eligible for{" "}
            <span className="font-semibold text-gray-900">
              scholarships to study in the USA
            </span>.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            There are several types of scholarships for Indian students in the USA —
            fellowships, assistantships, sports scholarships, and need-based aid,
            among others.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/study-abroad/usa-scholar.jpg"
            alt="Scholarships for Indian Students in the USA"
            width={500}
            height={500}
            className="w-full max-w-xs md:max-w-sm object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsUSA;
