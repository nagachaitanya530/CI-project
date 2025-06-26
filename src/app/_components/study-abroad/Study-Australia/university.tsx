"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const universities = [
  {
    name: "The University of Melbourne",
    image: "/images/the-university-of-melbourne-australia.webp",
    popularFor: "Law & Psychology",
    ranking: "14",
  },
  {
    name: "The University of Sydney",
    image: "/images/sydney-australia.webp",
    popularFor: "Arts, Social Sciences & Architecture",
    ranking: "19",
  },
  {
    name: "University of New South Wales",
    image: "/images/university-of-new-south-wales-australia.webp",
    popularFor: "Mining & Medical Sciences",
    ranking: "19",
  },
  {
    name: "Monash University",
    image: "/images/monash-university-australia.webp",
    popularFor: "Arts and Humanities",
    ranking: "42",
  },
  {
    name: "The University of Queensland",
    image: "/images/the-university-of-queensland-australia.webp",
    popularFor: "Engineering",
    ranking: "43",
  },
  {
    name: "The University of Western Australia",
    image: "/images/the-university-of-western-australia-australia.webp",
    popularFor: "Agriculture and Forestry",
    ranking: "72",
  },
  {
    name: "The University of Adelaide",
    image: "/images/the-university-of-adelaide-australia.webp",
    popularFor: "Health Sciences",
    ranking: "89",
  },
  {
    name: "The University of Technology Sydney (UTS)",
    image: "/images/the-university-of-technology-australia.webp",
    popularFor: "Nursing, Sports and Management",
    ranking: "90",
  },
  {
    name: "RMIT",
    image: "/images/rmit-university-australia.webp",
    popularFor: "Art and Design, Architecture",
    ranking: "140",
  },
  {
    name: "Bond University",
    image: "/images/bond-university-australia.webp",
    popularFor: "Sciences",
    ranking: "567",
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
      if (currentIndex >= totalCards) {
        currentIndex = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: cardWidth * currentIndex,
          behavior: "smooth",
        });
      }

      setIndex(currentIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#e8eff8] py-8 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          List of Universities
        </span>{" "}
        Australia
      </h2>

      <p className="text-center text-gray-600 mt-3 text-sm md:text-base">
        Australia is a top choice for international students seeking a prestigious education.
        <br className="hidden md:block" />
        Here are some top universities where we have successfully placed students.
      </p>

      <div className="relative mt-10">
        <div
  ref={scrollRef}
  className="flex overflow-x-auto lg:overflow-hidden gap-6 scroll-smooth pb-4 scrollbar-hide"
>

          {universities.map((uni, i) => (
            <div
              key={i}
              className="w-[280px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-[0_6px_8px_-4px_rgba(0,0,0,0.2)] border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  width={64}
                  height={64}
                  className="object-contain rounded"
                />
                <h3 className="font-semibold text-sm text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-2 mb-4">
                <span className="text-blue-600 text-xl">🎓</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">Popular For</p>
                  <p className="font-semibold">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">🎖</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">QS World Ranking</p>
                  <p className="font-semibold">{uni.ranking}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {universities.length >= 4 && (
          <div className="w-full mt-6 px-5 relative">
            <div className="h-[2px] bg-gray-300 relative overflow-hidden">
              <div
                className="absolute top-0 h-[2px] w-[30%] bg-blue-600 transition-all duration-700"
                style={{
                  transform: `translateX(${index * 20}%)`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="border-2 px-6 py-3 bg-blue-700 text-white rounded-2xl hover:text-blue-600 hover:bg-white transition font-semibold"
        >
          View Our Partnered Universities
        </a>
      </div>
    </div>
  );
}
