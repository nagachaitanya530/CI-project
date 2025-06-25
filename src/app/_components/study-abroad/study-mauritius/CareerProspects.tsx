"use client";
import MauritiusCard from "./MauritiusCard";

const careerOptions = [
  {
    title: "Tourism & Hospitality",
   image: "/hospitality-img.webp",
  },
  {
    title: "Financial Services",
    image: "/Financial.webp",
  },
  {
    title: "Information Technology",
   image: "/InformationTechnology.webp",
  },
  {
    title: "Manufacturing",
    image: "/Manufacturing.webp",
  },
  {
    title: "Professional Services",
    image: "/Professional.webp",
  },
  {
    title: "Renewable Energy",
    image: "/Renewable.webp",
  },
];

export default function CareerProspects() {
  return (
    <section className="px-4 md:px-20 py-12 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <span className="font-bold underline decoration-red-500">Career Prospects</span> In Mauritius
        </h2>
        <p className="text-gray-600 mb-10">
          Mauritius has a wide range of job opportunities across various industries.
          <br />
          Here are some job prospects that can be considered after studying in Mauritius:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {careerOptions.map((career, index) => (
            <MauritiusCard key={index} title={career.title} image={career.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
