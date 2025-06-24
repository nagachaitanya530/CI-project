import React from "react";

const courses = [
  {
    name: "Education",
    image: "/courses/mba.jpg" , 
  },
  {
    name: "Engineering",
    image: "/courses/engrng.jpg",
  },
  {
    name: "Technology and IT",
    image: "/courses/acc.financ.jpg",
  },
   {
    name: "Medicine",
    image: "/courses/acc.financ.jpg",
  },
   {
    name: "Nursing",
    image: "/courses/acc.financ.jpg",
  },
   {
    name: "Real Estate",
    image: "/courses/acc.financ.jpg",
  },
];

const CareerProspect = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Career Prospect</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In India
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        The employment landscape in India is diverse, offering opportunities across various sectors. Here are some key sectors and industries that presently offer employment opportunities:
        <br />
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

export default CareerProspect;
