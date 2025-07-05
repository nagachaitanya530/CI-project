"use client";
import React, { useState, useEffect } from "react";

const scholarshipSteps = [
  {
    number: 1,
    title: "Merit-based scholarships",
    description:
      "Awarded for academic, athletic, artistic, or extracurricular achievements.",
  },
  {
    number: 2,
    title: "Student-specific scholarships",
    description:
      "Available to applicants of specific genders, races, religions, ethnicities, or medical histories.",
  },
  {
    number: 3,
    title: "Need-based scholarships",
    description: "Awarded to students based on financial need.",
  },
  {
    number: 4,
    title: "Program-based scholarships",
    description:
      "Provided by programs or universities based on academic and personal achievements.",
  },
];

const ScholarshipSteps = () => {
  const [activeCard, setActiveCard] = useState(4);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // scrolling down
        setActiveCard((prev) => Math.min(prev + 1, 4));
      } else if (currentScrollY < prevScrollY) {
        // scrolling up
        setActiveCard((prev) => Math.max(prev - 1, 1));
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div className="steps-main-wrapper flex flex-col lg:flex-row px-6 py-16 bg-white gap-10">
      {/* Steps */}
      <div className="steps-card-wrap flex flex-col gap-6 w-full lg:w-2/3">
        {scholarshipSteps.map((step) => (
          <div
            key={step.number}
            className={`transition-all duration-300 ease-in-out p-6 rounded-lg shadow-md border-l-4 ${
              activeCard === step.number
                ? "bg-blue-50 border-blue-600"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl font-bold">
                {step.number}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h4>
            </div>

            {activeCard === step.number && (
              <div className="mt-4 text-gray-600">
                <p>{step.description}</p>
                <button className="mt-4 text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                  Free Expert Consultation
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="steps-img w-full lg:w-1/3 flex justify-center items-start">
        <img
          src="/scholarship/ss2.jpg"
          alt="Scholarship Steps"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ScholarshipSteps;
