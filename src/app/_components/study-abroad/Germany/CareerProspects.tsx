"use client";

import Image from "next/image";
import React from "react";

const sectors = [
  {
    title: "Engineering",
    image: "/engineering-images.jpg",
  },
  {
    title: "Mechanical Engineering",
    image: "/Mechanical_Engineers.jpg",
  },
  {
    title: "Computer Science",
    image: "/1428492.webp",
  },
  {
    title: "Business & Management",
    image: "/wp2019326.webp",
  },
  {
    title: "Data Science",
    image: "/DataScience (2).jpg",
  },
  {
    title: "Automotive Engineering",
    image: "/automotive-engineering.jpg",
  },
];

export default function CareerProspectsSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-10 text-center">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10">Career Prospects</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 rounded-full"></span>
        </span>{" "}
        in Germany
      </h2>

     
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
        The employment landscape in Germany offers various opportunities across sectors.
        <br />
        Here are some key areas that presently offer strong employment prospects:
      </p>

      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <div className="relative w-full h-52 sm:h-56 md:h-60">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="py-4 text-base sm:text-lg font-semibold text-gray-900">
              {sector.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
