"use client";

import React from "react";

const courses = [
  { name: "Engineering", image: "/eng.jpg" },
  { name: "Business Administration", image: "/BusinessAni.png" },
  { name: "Renewable Energy", image: "/RenewableEnergy.jpg" },
  { name: "Automotive Engineering", image: "/Auto-heading.jpg" },
  { name: "Data Science", image: "/DataScience.jpg" },
  { name: "Computer Science", image: "/ComputerScience.jpg" },
  
];

export default function PopularCoursesSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 text-center w-full max-w-7xl mx-auto">
     
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Germany
      </h2>

      
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
        Germany is recognized for providing a broad array of sought-after courses across different disciplines. Here are the top courses in Germany preferred by international students:
      </p>

      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-blue-100 shadow bg-white transition-transform hover:scale-[1.02]"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="py-4 px-3 text-base sm:text-lg font-semibold text-gray-900">
              {course.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
