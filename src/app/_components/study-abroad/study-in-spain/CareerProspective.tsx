"use client";

import Image from "next/image";

const sectors = [
  { title: "Financial Services", img: "/spain/financial.jpg" },
  { title: "Architecture", img: "/spain/architecture.jpg" },
  { title: "Hospitality", img: "/spain/hospitality.jpg" },
  { title: "Data Analytics", img: "/spain/data-analytics.jpg" },
  { title: "Sports", img: "/spain/sports.jpg" },
  { title: "Creative Designing", img: "/spain/creative.jpg" },
];

export default function CareerProspectsSpain() {
  return (
    <section className="bg-[#f5f8fc] py-16 px-4 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          <span className="underline decoration-red-500">Career Prospects</span> In Spain
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Spain is an emerging study abroad destination among many international students.
          <br />
          Here are some key sectors and industries that presently offer employment opportunities:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <div key={sector.title} className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src={sector.img}
              alt={sector.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-blue-900">
                {sector.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
