"use client";
import React from "react";
import { Hourglass, GraduationCap } from "lucide-react";

const CourseDuration = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="relative text-center text-3xl md:text-4xl font-bold text-[#284c87] mb-14 group">
          Course Duration & Methodology
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
        </h2>


        <div className="grid md:grid-cols-2 gap-10 text-gray-800">

          <div className="p-6 bg-[#f1f5f9] rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4 flex items-center gap-2">
              <Hourglass className="w-6 h-6 text-[#1e3a8a]" />
              Duration
            </h3>
            <p className="text-lg leading-relaxed">
              The program runs for <strong>12–16 weeks</strong>, structured in a modular format based on your proficiency level.
              Live sessions are conducted <strong>4–5 times a week</strong> with weekend support and revision classes.
            </p>
          </div>

          {/* Methodology */}
          <div className="p-6 bg-[#f1f5f9] rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#1e3a8a]" />
              Methodology
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>Live interactive classes with certified language experts</li>
              <li>AI-powered speech & grammar evaluations</li>
              <li>Role-play, group discussions & personalized coaching</li>
              <li>Weekly assignments with detailed feedback</li>
              <li>Progress reports and performance tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDuration;
