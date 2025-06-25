import React from "react";

const courses = [
  {
    name: "MBA",
    image: "/courses/mba.jpg.png" , // Replace with your actual image path
  },
  {
    name: "Engineering",
    image: "/courses/engineering.jpg.webp",
  },
  {
    name: "Accounts & Finance",
    image: "/courses/finance.jpg.webp",
  },
   {
    name: "Tourism & Hospitality",
    image: "/courses/tourism-img.webp",
  },
   {
    name: "Architecture",
    image: "/courses/architecture-img.webp",
  },
   {
    name: "Aviation",
    image: "/courses/aviation-img.webp",
  },
];

const PopularCoursesSection = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Dubai
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Studying in Dubai gives international students great options for a global education.
        <br />
        Here are the top courses in Dubai that are preferred by international students:
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white"
          >
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCoursesSection ;
