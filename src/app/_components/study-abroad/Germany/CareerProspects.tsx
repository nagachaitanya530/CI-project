import Image from "next/image";
import React from "react";

const sectors = [
  {
    title: "Engineering",
    image: "/engrng-img.webp",
  },
  {
    title: "Mechanical Engineering",
    image: "/mech-eng-img.webp",
  },
  {
    title: "Computer Science",
    image: "/comp-scie-img.webp",
  },
  {
    title: "Business &..",
    image: "/mba-img.webp",
  },
  {
    title: "Data Science",
    image: "/data-scie-img.webp",
  },
  {
    title: "Automotive Engineering",
    image: "/automotive-img.webp",
  },
];

const CareerProspectsSection = () => {
  return (
    <div className="bg-white py-14 px-6 md:px-20 lg:px-28 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Career Prospects</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Germany
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
        The employment landscape in Germany offers various opportunities across various sectors.
        <br />
        Here are some key sectors and industries that presently offer employment opportunities:
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
          >
            <Image
              src={sector.image}
              alt={sector.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover rounded-t-3xl"
            />
            <div className="py-4 text-lg font-semibold text-gray-900">
              {sector.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerProspectsSection;