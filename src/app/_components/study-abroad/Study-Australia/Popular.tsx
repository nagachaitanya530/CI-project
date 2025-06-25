import React from "react";

const courses = [
  {
    name: "IT & Data Science",
    image: "/popular-courses/it-img.webp" ,
  },
  {
    name: "Engineering",
    image: "/popular-courses/engrng-img.webp",
  },
  {
    name: "Biotechnology",
    image: "/popular-courses/biology-img (1).webp",
  },
   {
    name: "Nursing & Physiotherapy",
    image: "/popular-courses/healthcare-img.webp",
  },
   {
    name: "Business & Management",
    image: "/popular-courses/mba-img.webp",
  },
   {
    name: "Hospitality",
    image: "/popular-courses/tourism-img.webp",
  },
];

const Popular = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Australia
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
Australia is an educational hub for international students to attain a globally        <br />
      recognized education. Here are the top courses in Australia that are preferred by international students:


      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((course, index) => ( // map function for passing data
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white">
            <img src={course.image} alt={course.name} className="w-full md:h-48 lg:h-56 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;