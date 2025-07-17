"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";
import { useRouter } from "next/navigation";

type University = {
  name: string;
  image: string;
  popularFor: string;
  ranking: string;
};

export default function UniversityList({
  universities,
  country,
}: {
  universities: University[];
  country: string;
}) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 4) return;

    const cardWidth = 280 + 24;
    const totalCards = universities.length;

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > totalCards) {
        currentIndex = 1;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
      }

      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [universities]);

  const duplicatedList =
    universities.length >= 4 ? [...universities, ...universities.slice(0, 4)] : universities;

  return (
    <div className="bg-[#e8eff8] py-10 px-4">
      <h2 className="text-3xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          List of Universities
        </span>{" "}
        In {country}
      </h2>
      <p className="text-center text-gray-600 mt-2">
        {country} is a top choice for international students seeking a prestigious education.
        <br />
        Here are some top universities where we have successfully placed students.
      </p>

      <div className="relative mt-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 scroll-smooth"
        >
          {duplicatedList.map((uni, i) => (
            <div
              key={i}
              className="w-[290px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  width={64}
                  height={64}
                  className="object-contain rounded"
                />
                <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-2 mb-2">
                <span className="text-blue-600 text-xl"><GraduationCap /></span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">Popular For</p>
                  <p className="font-semibold">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl"><Award /></span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">QS World Ranking</p>
                  <p className="font-semibold">{uni.ranking}</p>
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
                style={{ transform: `translateX(${index * 20}%)` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
    onClick={() =>
  router.push(`/study-abroad/partnered-universities?country=${country.toLowerCase()}`)
}
          className="mt-6 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-200"
        >
          View Partnered Universities in {country}
        </button>
      </div>
    </div>
  );
}
