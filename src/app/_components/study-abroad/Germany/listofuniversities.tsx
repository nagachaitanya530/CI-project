"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const universities = [
  {
    name: "Mediadesign Hochschule",
    image: "/logo1.png",
    popularFor: "Art & Design",
    ranking: "3",
  },
  {
    name: "EU Business School",
    image: "/logo2.png",
    popularFor: "MBA",
    ranking: "151",
  },
  {
    name: "mdh University Applied Sciences",
    image: "/logo3.png",
    popularFor: "Media, Design, and Management",
    ranking: "164",
  },
  {
    name: "Munich Business School",
    image: "/logo4.png",
    popularFor: "Innovation and Entrepreneurship",
    ranking: "91",
  },
];

export default function UniversityListFrance() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 2) return;

    const interval = setInterval(() => {
      if (!container) return;
      const cardWidth = container.scrollWidth / universities.length;
      setIndex((prev) => {
        const nextIndex = (prev + 1) % universities.length;
        container.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#e8eff8] py-12 px-4 sm:px-6 lg:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          List of Universities{" "}
        </span>
        in France
      </h2>
      <p className="text-center text-base sm:text-lg mt-2 max-w-2xl mx-auto">
        France is a top choice for international students seeking a prestigious
        education. Here are some top universities where we have successfully
        placed students.
      </p>

      <div className="relative mt-10">
       
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {universities.map((uni, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-2xl p-5 shadow border border-blue-200 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  width={48}
                  height={48}
                  className="object-contain rounded"
                />
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-3 mb-3">
                <span className="text-blue-600 text-lg">🎓</span>
                <div className="text-gray-800">
                  <p className="text-sm font-medium">Popular For</p>
                  <p className="font-semibold text-base">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-lg">🎖</span>
                <div className="text-gray-800">
                  <p className="text-sm font-medium">QS World Ranking</p>
                  <p className="font-semibold text-base">{uni.ranking}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        {universities.length >= 2 && (
          <div className="w-full mt-4 px-5">
            <div className="h-[2px] bg-gray-300 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 h-full w-[25%] bg-blue-600 transition-transform duration-700"
                style={{
                  transform: `translateX(${index * 100}%)`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      
    </section>
  );
}
