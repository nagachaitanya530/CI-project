"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Replace this with your actual data
const universities = [
  {
    name: "Mediadesign Hochschule",
    image: "/Mediadesign-Hochschule.webp",
    popularFor: "Art & Design",
    ranking: "3",
  },
  {
    name: "EU Business School",
    image: "/EU-Business-School-logo.webp",
    popularFor: "MBA",
    ranking: "151",
  },
  {
    name: "mdh University Applied Sciences",
    image: "/mdh-University-of-Applied-Sciences.webp",
    popularFor: "Media, Design , and Management",
    ranking: "164",
  },
  {
    name: "Munich Business School",
    image: "/Munich-Business-School-logo.webp",
    popularFor: "Innovation and Entrepreneurship",
    ranking: "91",
  },
];

export default function UniversityListFrance() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 4) return;

    const cardWidth = 305 + 24; // card width + gap
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= universities.length) {
        currentIndex = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
      }
      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#e8eff8] py-10 px-4">
      <h2 className="text-4xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          List of Universities{" "}
        </span>
        In France
      </h2>
      <p className="text-center text-lg mt-2">
        France is a top choice for international students seeking a prestigious education.
        <br />
        Here are some top universities where we have successfully placed students.
      </p>

      <div className="relative mt-10">
        <div ref={scrollRef} className="flex overflow-x-hidden gap-6 scroll-smooth">
          {universities.map((uni, i) => (
            <div
              key={i}
              className="w-[305px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-blue-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={uni.image || "/placeholder.jpg"}
                  alt={uni.name}
                  width={64}
                  height={64}
                  className="object-contain rounded"
                />
                <h3 className="font-semibold text-[18px] text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-4 mb-3">
                <span className="text-blue-600 text-xl">🎓</span>
                <div className="text-gray-800 text-base">
                  <p className="text-[16px] font-medium">Popular For</p>
                  <p className="font-semibold text-lg">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-xl">🎖</span>
                <div className="text-gray-800 text-base">
                  <p className="text-[16px] font-medium">QS World Ranking</p>
                  <p className="font-semibold text-lg">{uni.ranking}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {universities.length >= 4 && (
          <div className="w-full mt-4 px-5 relative">
            <div className="h-[1px] bg-gray-300 relative overflow-hidden">
              <div
                className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                style={{
                  transform: `translateX(${index * 20}%)`,
                }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 my-12">
          <button className="px-5 py-3 rounded-xl font-semibold text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition">
            View Our Partnered Universities
          </button>
        </div>
      </div>
    </div>
  );
}
