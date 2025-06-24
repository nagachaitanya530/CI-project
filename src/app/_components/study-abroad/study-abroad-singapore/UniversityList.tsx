"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const universities = [
  {
    name: "National University of Singapore",
    image: "/study-singapore/national.png",
    popularFor: "Popular for Petroleum Engineering",
    ranking: "8",
  },
  {
    name: "Nanyang Technological University",
    image: "/study-singapore/nanyang.png",
    popularFor: "Popular for Computer Science",
    ranking: "26",
  },
  {
    name: "Curtin Singapore",
    image: "/study-singapore/curtin.png",
    popularFor: "Popular for Supply Chain Management",
    ranking: "183",
  },
  {
    name: "Singapore Management University",
    image: "/study-singapore/management.png",
    popularFor: "Popular for Business Administration",
    ranking: "545",
  },
];

function UniversityList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 280 + 24;
    const totalCards = universities.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalCards;
      container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#e8eff8] py-10 px-4">
      <h2 className="text-3xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          List of Universities
        </span>{" "}
        In Singapore
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Singapore is a top choice for international students seeking a prestigious education.
        <br />
        Here are some top universities where we have successfully placed students.
      </p>

      {/* Centered university cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {universities.map((uni, i) => (
          <div
            key={i}
            className="w-[290px] bg-white rounded-3xl p-6 shadow-md border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={uni.image}
                alt={uni.name}
                width={64}
                height={64}
                className="object-contain border-2 border-blue-600 rounded"
              />
              <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                {uni.name}
              </h3>
            </div>

            <hr className="mb-3 border-gray-300" />

            <div className="flex items-start gap-2 mb-2">
              <span className="text-blue-600 text-xl">🎓</span>
              <div className="text-sm text-gray-800">
                <p className="font-medium">Popular For</p>
                <p className="font-semibold">{uni.popularFor}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">🎖️</span>
              <div className="text-sm text-gray-800">
                <p className="font-medium">QS World Ranking</p>
                <p className="font-semibold">{uni.ranking}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UniversityList;