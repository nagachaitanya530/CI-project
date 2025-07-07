"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const successStories = [
  {
    image: "/successstory5.avif",
    name: "Miral Shah",
    university: "Bournemouth University, UK",
    text: `Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career. The best decision for my academic journey!`,
    profile: "/successstory5.avif",
  },
  {
    image: "/successstory6.avif",
    name: "Abhinay Pandit",
    university: "New York Film Academy, US",
    text: `It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.`,
    profile: "/successstory6.avif",
  },
    {
    image: "/successstory7.avif",
    name: "Abhinay Pandit",
    university: "New York Film Academy, US",
    text: `It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.`,
    profile: "/successstory7.avif",
  },
    {
    image: "/successstory8.avif",
    name: "Abhinay Pandit",
    university: "New York Film Academy, US",
    text: `It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.`,
    profile: "/successstory8.avif",
  },

];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#d5deeb] py-12 px-4 md:px-20 rounded-b-[40px] succrss">
      <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <span className="font-bold underline decoration-red-500">Success Stories </span> 
        </h2>
        <div className="space-x-2 hidden md:block">
          <button
            onClick={() => scroll(-400)}
            className="p-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll(400)}
            className="p-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide-mauritius scroll-smooth"
      >
        {successStories.map((story, index) => (
          <div
            key={index}
            className="min-w-[85vw] md:min-w-[600px] bg-white/70 rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden"
          >
            <div className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-auto">
              <Image
                src={story.image}
                alt={story.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-md">
                  <Play className="text-blue-700" />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 w-full md:w-[55%]">
              <p className="text-gray-700 text-sm mb-4">{story.text}</p>
<div className="flex items-center gap-3">
  <div className="w-16 h-16 relative">
    <Image
      src={story.profile}
      alt={story.name}
      fill 
      className="rounded-full object-cover"
    />
  </div>
  <div>
    <p className="font-semibold text-sm">{story.name}</p>
    <p className="text-gray-600 text-xs">{story.university}</p>
  </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
