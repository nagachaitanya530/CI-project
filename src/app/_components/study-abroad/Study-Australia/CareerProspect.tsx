import React from "react";

const courses = [
  {
    name: "Engineering",
    image: "/Australia-popular-courses2.jpeg",
  },
  {
    name: "Digital Services & IT",
    image: "/Australia-popular-courses.jpeg",
  },
  {
    name: "Education & training",
    image: "/Australia-carer-courses1.jpeg",
  },
  {
    name: "Mining & Resources",
    image: "/Australia-carer-courses2.jpeg",
  },
  {
    name: "Agriculture",
    image: "/Australia-carer-courses3.jpeg",
  },
  {
    name: "Healthcare",
    image: "/Australia-popular-courses4.jpeg",
  },
];

const CareerProspect = () => {
  return (
    <>
      <div className="py-12 px-4 text-center">
        <h2 className="text-5xl  text-gray-900">
          <span className="relative inline-block">
            <span className="relative z-10 text-black font-semibold underline decoration-red-500 underline-offset-4">
              Career Prospects
            </span>
          </span>{" "}
          In Australia
        </h2>

        <p className="text-gray-700 mt-4 text-xl mx-auto">
          The employment landscape in Australia offers opportunities across various sectors.<br />
          Here are some key sectors and industries that presently offer employment <br />
          opportunities:
        </p>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 text-xl mx-auto">
        
       The employment landscape in Australia offers opportunities across various sectors.<br/>
      
       Here are some key sectors and industries that presently offer employment <br/>
       opportunities:
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white hover:scale-105 transition-transform duration-300"
          >
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
          </div>
        ))}
      </div>
       </div>
    </>
  );
};

export default CareerProspect;