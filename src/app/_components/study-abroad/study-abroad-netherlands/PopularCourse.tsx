import React from "react";

const courses = [
  {
    name: "Engineering",
    image: "/study-abroad-netherlands/engrng-img.webp", 
  },
  {
    name: "Business Administration",
    image: "/study-abroad-netherlands/mba-img.webp", 
  },
  {
    name: "Computer Science & IT",
    image: "/study-abroad-netherlands/it-img.webp", 
  },
   {
    name: "International Relations",
    image: "/study-abroad-netherlands/intln-rel-img.webp", 
  },
   {
    name: "Environmental Science",
    image: "/study-abroad-netherlands/envr-scie-img.webp", 
  },
   {
    name: "Finance & Economics",
    image: "/study-abroad-netherlands/finan-eco-img.webp", 
  },
];

const PopularCoursesSection = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Netherlands
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        The Netherlands is home to some of the oldest and best universities in the world,
        <br />
       offering the best education. Here are the top courses to study in Netherlands for  <br />Indian students:
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