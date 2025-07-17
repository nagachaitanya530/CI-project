"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const members = [
  { src: "/finan-asst-bnr-img.png" },
  { color: "bg-blue-400" },
  { src: "/study-abrd-dubai.webp" },
  { color: "bg-yellow-300" },
  { src: "/successstory7.avif" },
  { color: "bg-purple-700" },
  { color: "bg-pink-600" },
  { src: "/successstory6.avif" },
  { color: "bg-green-300" },
  { src: "/successstory8.avif" },
  { color: "bg-orange-500" },
  { src: "/successstory6.avif" },
];

export default function NILFamilySection() {
  const [count, setCount] = useState(0);
  const target = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) return prev + 1;
        clearInterval(interval);
        return target;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="relative bg-[#f5f8fd] py-10">
        <div className="grid grid-cols-6 grid-rows-2 gap-1 sm:gap-2 max-w-7xl mx-auto">
          {members.map((item, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden w-full h-full">
              {item.src ? (
                <Image src={item.src} alt={`member-${idx}`} fill className="object-cover" />
              ) : (
                <div className={`w-full h-full ${item.color}`} />
              )}
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white px-6 py-4 rounded-md shadow-lg text-center w-64 sm:w-72">
            <p className="text-xs uppercase tracking-wide text-gray-500">Let's Connect</p>
            <h2 className="text-xl font-bold text-[#0e1d57]">NIL Family</h2>
            <p className="text-lg font-semibold text-gray-800">{count}+K</p>
            <p className="text-xs tracking-wide text-gray-600 uppercase">Members</p>
          </div>
        </div>
      </div>

      <div className="bg-[#05274e] text-white text-center px-6 md:px-12 py-12 max-w-5xl mx-auto mt-12 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">English with NIL</h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          National institute of Language is India’s Premier <span className="text-sky-400 font-medium">Online Institute for Spoken English and Personality Development</span>. We are the most reputed and oldest institute for English Language proficiency tests in India. We have 100% record of getting our students their desired goals. Even if your English Grammar and Communication Skills are not good enough, we have extended programmes for you which include Theoretical English Grammar, <span className="text-sky-400 font-medium">Spoken English</span>, Conversation Practice and Personality Development. You will be trained on all aspects of English and along with that you will be constantly exposed to the newest trends in contemporary English. NIL provides extensive guidance and fulfils the need of all the students.
        </p>
        <button className="bg-[#2a6edc] hover:bg-blue-800 transition text-white text-sm font-semibold px-6 py-2 rounded">
          Talk to our coaches
        </button>
      </div>
    </section>
  );
}
