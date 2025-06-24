import React from "react";

const careerData = [
  { title: "Engineering & Manufacturing", img: "/study-singapore/engrng-img.png" },
  { title: "Healthcare & Pharmaceuticals", img: "/study-singapore/healthcare-img.png" },
  { title: "Banking", img: "/study-singapore/acc-financ-img.png" },
  { title: "Information Technology", img: "/study-singapore/it-img.png" },
  { title: "Business", img: "/study-singapore/mba-img.png" },
  { title: "Hotel & Catering", img: "/study-singapore/hotel-img.png" },
];

const CareerProspectSection = () => {
  return (
    
    <>
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-6xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Career Prospect</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        in Singapore
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        The job market in Singapore is diverse, offering opportunities across various sectors.  
        <br />
       Here are some key sectors and industries that presently offer employment opportunities:  
      </p>


        {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {careerData.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white"
          >
            <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{course.title}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default CareerProspectSection;
