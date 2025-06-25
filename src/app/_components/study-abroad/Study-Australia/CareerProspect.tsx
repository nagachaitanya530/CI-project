import React from "react";

const courses = [
  {
    name: "Engineering",
    image: "/popular-courses/engrng-img.webp" , 
  },
  {
    name: "Digital Services & IT",
    image: "/popular-courses/it-img.webp",
  },
  {
    name: "Education & training",
    image: "/popular-courses/educ-img.webp",
  },
   {
    name: "Mining & Resources",
    image: "/popular-courses/mining-img.webp",
  },
   {
    name: "Agriculture",
    image: "/popular-courses/agriculture-img.webp",
  },
   {
    name: "Healthcare",
    image: "/popular-courses/healthcare-img.webp",
  },
];

const CareerProspect = () => {
  return (
    <>
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-5xl  text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black font-semibold underline decoration-red-500 underline-offset-4">
  Career Prospects
</span>

          
        </span>{" "}
        In Australia
      </h2>

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

export default CareerProspect ;