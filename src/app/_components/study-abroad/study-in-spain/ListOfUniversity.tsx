"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const universities = [
  {
    name: "Aivancity",
    image: "/images/aivancity.png",
    popularFor: "AI & Business",
    ranking: "Top European School",
  },
  {
    name: "Ascencia Business School",
    image: "/images/ascencia.png",
    popularFor: "Business & Management",
    ranking: "Global Business Focused",
  },
  {
    name: "Ascencia International",
    image: "/images/ascenciainternational.png",
    popularFor: "International Business",
    ranking: "Renowned in Europe",
  },
  {
    name: "Barcelona Technology School",
    image: "/images/barcelona-tech.png",
    popularFor: "Digital Transformation",
    ranking: "Top Tech School in Spain",
  },
  {
    name: "Berlin School of Business and Innovation",
    image: "/images/berlin-biz.png",
    popularFor: "Business Innovation",
    ranking: "Europe's Leading School",
  },
  {
    name: "CS3 Business School",
    image: "/images/cs3.png",
    popularFor: "Business",
    ranking: "QS Rank 101–110",
  },
  {
    name: "Catholic University of Murcia",
    image: "/images/murcia.png",
    popularFor: "Health Sciences",
    ranking: "QS Rank 150+",
  },
  {
    name: "EAE Business School",
    image: "/images/eae.png",
    popularFor: "MBA & Management",
    ranking: "Top 25 in Spain",
  },
  {
    name: "ESEI",
    image: "/images/esei.png",
    popularFor: "Entrepreneurship",
    ranking: "QS Top 300",
  },
  {
    name: "EU Business School",
    image: "/images/eu.png",
    popularFor: "International Business",
    ranking: "QS Global 200",
  },
];

export default function UniversityList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 4) return;

    const cardWidth = 280 + 24; // width + gap
    const totalCards = universities.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > totalCards) {
        currentIndex = 1;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: cardWidth * currentIndex,
          behavior: "smooth",
        });
      }
      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedList =
    universities.length >= 4
      ? [...universities, ...universities.slice(0, 4)]
      : universities;

  return (
    <section className="bg-[#e8eff8] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          <span className="underline decoration-red-500 underline-offset-4">
            List of Universities
          </span>{" "}
          In Spain
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Spain is a top choice for international students seeking a prestigious
          education.
          <br className="hidden sm:block" />
          Here are some top universities where we have successfully placed
          students.
        </p>

        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6 scroll-smooth"
          >
            {duplicatedList.map((uni, i) => (
              <div
                key={i}
                className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    width={48}
                    height={48}
                    className="object-contain rounded"
                    priority={i < 4}
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {uni.name}
                  </h3>
                </div>

                <hr className="mb-3 border-gray-300" />

                <div className="flex items-start gap-2 mb-2">
                  <span className="text-blue-600 text-lg">🎓</span>
                  <div className="text-sm sm:text-base text-gray-800">
                    <p className="font-medium">Popular For</p>
                    <p className="font-semibold">{uni.popularFor}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">🎖</span>
                  <div className="text-sm sm:text-base text-gray-800">
                    <p className="font-medium">QS World Ranking</p>
                    <p className="font-semibold">{uni.ranking}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {universities.length >= 4 && (
            <div className="w-full mt-4 px-5">
              <div className="h-[1px] bg-gray-300 relative overflow-hidden">
                <div
                  className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                  style={{
                    transform: `translateX(${index * 20}%)`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex justify-center mt-10">
            <button className="px-5 py-3 border border-blue-900 text-blue-900 font-semibold rounded-xl hover:bg-blue-900 hover:text-white transition">
              View Our Partnered Universities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
