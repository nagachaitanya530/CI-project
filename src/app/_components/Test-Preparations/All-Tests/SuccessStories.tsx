"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  text: string;
  name: string;
  exam: string;
  profile: string;
}

interface SuccessStoriesProps {
  title?: string;
  testimonials: Testimonial[];
}

export default function SuccessStories({
  title = "Success Stories",
  testimonials,
}: SuccessStoriesProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#d5deeb] py-12 px-4 md:px-20 rounded-[40px]">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-3xl font-extrabold text-black relative text-center md:text-left">
          <span className="inline-block relative z-10">
            {title}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-400 z-[-1] rounded-full transform translate-y-2"></span>
          </span>
        </h2>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center py-3 md:justify-end gap-3 mb-8 ">
        <button
          onClick={() => scroll(-400)}
          className="p-2 bg-[#1e3a8a] text-white rounded-md shadow-md hover:bg-[#1a347a]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll(400)}
          className="p-2 bg-[#1e3a8a] text-white rounded-md shadow-md hover:bg-[#1a347a]"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Testimonials Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {testimonials.map((story, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[47%] lg:w-[30%] flex-shrink-0 bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-[0_4px_60px_0_rgba(0,0,0,0.05)]"
          >
            <p className="text-gray-800 text-[16px] leading-relaxed mb-5 whitespace-normal break-words">
              {story.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={story.profile}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold">{story.name}</p>
                <p className="text-sm text-gray-500">{story.exam}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
