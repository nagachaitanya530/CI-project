import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const stories = [
  {
    name: "Miral Shah",
    university: "Bournemouth University, UK",
    video: "https://www.youtube.com/watch?v=UUOisVFYt3I",
    image: "https://www.edwiseinternational.com/img/testim/bournemouth-university-uk-student-review.webp",
    quote:
      "Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career. The best decision for my academic journey!",
    profilePic: "https://www.edwiseinternational.com/img/testim/miral-shah-uk.webp",
  },
  {
    name: "Afreen Jamadar",
    university: "Aston University, UK",
    video: "https://www.youtube.com/watch?v=EaECvqALy6s",
    image: "https://www.edwiseinternational.com/img/testim/aston-university-uk-student-review.webp",
    quote:
      "Edwise was extremely helpful in selecting the course, preparing my documents, & finishing all the paper work. Thank you Edwise for guiding me.",
    profilePic: "https://www.edwiseinternational.com/img/testim/afreen-jamadar-uk.webp",
  },
  {
    name: "Priyanshu Kamble",
    university: "Nottingham Trent University, UK",
    video: "https://www.youtube.com/watch?v=pL2AICzgOIk",
    image: "https://www.edwiseinternational.com/img/testim/nottingham-trent-university-uk-student-review.webp",
    quote:
      "My interactions with Edwise has been completely fulfilling and satisfying. I thank my lucky stars that I came across this excellent consultancy.",
    profilePic: "https://www.edwiseinternational.com/img/testim/priyanshu-kamble-uk.webp",
  },
];

const SuccessStories = () => {
  const scrollRef = useRef();

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -1000 : 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#e9eff6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">
            <span className="text-blue-600 underline decoration-red-500">Success Stories</span>
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto pb-4 scrollbar-hide"
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="min-w-[950px] bg-white rounded-xl shadow-md overflow-hidden"
            >
              <a href={story.video} target="_blank" rel="noopener noreferrer" className="relative block">
                <img src={story.image} alt={story.university} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <Play className="text-blue-600 w-6 h-6" />
                  </div>
                </div>
              </a>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{story.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={story.profilePic}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{story.name}</h4>
                    <h5 className="text-sm text-gray-600">{story.university}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
