import React from "react";

const courses = [
  {
    name: "Business & Management",
    image: "/study-singapore/mba-img.png" , // Replace with your actual image path
  },
 
  {
    name: "Engineering",
    image: "/study-singapore/engrng-img.png", // Replace with your actual image path
  },
   {
    name: "IT & Computer Science",
    image: "/study-singapore/it-img.png",
  },
   {
    name: "Hospitality & Tourism",
    image: "/study-singapore/hospitality-img.png", // Replace with your actual image path
  },
   {
    name: "Architecture",
    image: "/study-singapore/architecture-img.png", // Replace with your actual image path
  },
   {
    name: "Environmental Science",
    image: "/study-singapore/environmental-img.png", // Replace with your actual image path
  },
];

const PopularCoursesSection = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-6xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Singapore
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Studying in Singapore gives international students great options for a global education.
        <br />
        Here are the top courses in Singapore that are preferred by international students:
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