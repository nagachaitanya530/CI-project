import React from "react";

const scholarshipTypes = [
  {
    number: "01",
    title: "Indian Scholarships",
    description:
      "Aimed at empowering talented Indian students to reach their full academic potential. Eligibility based on financial need.",
    image: "img/scholar-img.webp",
  },
  {
    number: "02",
    title: "University Scholarships",
    description:
      "University Scholarships are grants, tuition waivers, etc., awarded by the institution based on preferences. They target students focused on specific study areas.",
    image: "img/scholar-img.webp",
  },
  {
    number: "03",
    title: "Need-based Scholarships",
    description:
      "Granted based on the income/assets of the prospective student and their family. Academic scores matter less.",
    image: "img/scholar-img.webp",
  },
];

const ScholarshipScrollCards = () => {
  return (
    <div className="w-full px-6 py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Types of <span className="text-blue-600">Scholarships</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Scholarships can be broadly categorized into three main types:
        </p>
      </div>

      {/* Layout */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sticky Left Image */}
        <div className="lg:w-1/2 w-full h-full flex justify-center">
          <div >
            <img
              src="/scholarship/types.jpg"
              alt="Scholarship"
              className="rounded-xl shadow-md max-w-sm w-full "
            />
          </div>
        </div>

        {/* Scrollable Cards */}
       <div className="lg:w-1/2 w-full max-h-[70vh] overflow-y-auto pr-2 space-y-8 scroll-hide">
  {scholarshipTypes.map((item, idx) => (
    <div
      key={idx}
      className="bg-white border border-gray-200 rounded-3xl shadow-sm p-20"
    >
      <div className="text-red-500 text-3xl font-extrabold tracking-widest mb-2">
        {item.number}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {item.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default ScholarshipScrollCards;
