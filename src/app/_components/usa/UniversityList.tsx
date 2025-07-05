"use client";

import { GraduationCap, Medal } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const universities = [
  {
    name: "John Hopkins University",
    logo: "/study-abroad/jhu.png",
    popularFor: "Biology",
    rank: 28,
  },
  {
    name: "New York University",
    logo: "/study-abroad/nyu.png",
    popularFor: "Sciences & Engineering",
    rank: 38,
  },
  {
    name: "Carnegie Mellon University",
    logo: "/study-abroad/cmu.png",
    popularFor: "Information Systems",
    rank: 52,
  },
  {
    name: "Michigan State University",
    logo: "/study-abroad/mst.png",
    popularFor: "Business Management",
    rank: 136,
  },
  {
    name: "Stanford University",
    logo: "/study-abroad/su.jpg",
    popularFor: "AI & Engineering",
    rank: 3,
  },
  {
    name: "Harvard University",
    logo: "/study-abroad/hu.png",
    popularFor: "Law & Business",
    rank: 1,
  },
];

const UniversityList = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(universities.length / itemsPerPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIdx = page * itemsPerPage;
  const visibleUnis = universities.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="bg-[#eaf0f9] py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            List Of Universities
          </span>{" "}
          In The USA
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
          The USA is a top choice for international students seeking a
          prestigious education. Here are some{" "}
          <strong>top universities in the USA</strong> where we have successfully
          placed students.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {visibleUnis.map((uni) => (
          <article
            key={uni.name}
            className="bg-white rounded-3xl border border-[#c7d2e5] p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">
              <Image
                src={uni.logo}
                alt={`${uni.name} Logo`}
                width={160}
                height={40}
                className="object-contain h-[30px] mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                {uni.name}
              </h3>
            </div>
            <hr className="my-3 border-[#d6e0ee]" />
            <div className="flex items-start gap-2 text-sm text-gray-700 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-700 mt-[2px]" />
              <span>
                <strong>Popular For</strong> <br />
                {uni.popularFor}
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <Medal className="w-4 h-4 text-blue-700 mt-[2px]" />
              <span>
                <strong>QS World Ranking</strong> <br />
                {uni.rank}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            aria-label={`View universities ${i * itemsPerPage + 1} - ${
              Math.min((i + 1) * itemsPerPage, universities.length)
            }`}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === page ? "bg-blue-700 w-5" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default UniversityList;
