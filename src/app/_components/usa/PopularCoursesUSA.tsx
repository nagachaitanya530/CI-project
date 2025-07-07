"use client";

import React from "react";
import {
  Briefcase,
  Stethoscope,
  Cpu,
  Building2,
  FlaskConical,
  Palette,
  Globe2,
  Rocket,
} from "lucide-react";

const courses = [
  { icon: Briefcase, title: "Business & Management" },
  { icon: Stethoscope, title: "Health & Medicine" },
  { icon: Cpu, title: "Computer Science & IT" },
  { icon: Building2, title: "Engineering & Technology" },
  { icon: FlaskConical, title: "Natural Sciences" },
  { icon: Palette, title: "Art & Design" },
  { icon: Globe2, title: "Social Sciences" },
  { icon: Rocket, title: "Aerospace & Aviation" },
];

const PopularCoursesUSA = () => {
  return (
    <section className="bg-[#f9fbff] py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            Popular Courses
          </span>{" "}
          in the USA
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Discover the top courses international students choose to study in the
          United States — offering world-class education and excellent career prospects.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courses.map(({ icon: Icon, title }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-[#dbe3ef] text-center hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-8 h-8 text-blue-700" aria-hidden="true" />
            </div>
            <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCoursesUSA;
