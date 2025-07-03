import React from "react";
const courses = [
  {
    name: "Information Technology",
    image: "/newZealand/IT.jpg",
  },
  {
    name: "Healthcare",
    image: "/newZealand/Health.webp",
  },
  {
    name: "Education",
    image: "/newZealand/education.jpg",
  },
  {
    name: "Hospitality & Tourism",
    image: "/newZealand/hospitalityTourism.webp",
  },
  {
    name: "Agriculture",
    image: "/newZealand/agri.jpg",
  },
  {
    name: "Engineering",
    image: "/newZealand/engg.jpg",
  },
];
const CareerProspect = () => {
  return (
    <>
      <div className="py-12 px-4 text-center">
        <h2 className="text-5xl  text-gray-900">
          <span className="relative inline-block">
            <span className="relative z-10 text-black font-semibold">Career Prospects</span>
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
          </span>{" "}
          In New Zealand
        </h2>
        <p className="text-gray-700 mt-4 text-xl mx-auto">
          The job market in New Zealand is diverse, offering opportunities across various <br />
          sectors.
          Here are some key sectors and industries that presently offer employment <br />
          opportunities:
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
    </>
  );
};
export default CareerProspect;