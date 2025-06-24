"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const successStories = [
  {
    name: "Miral Shah",
    university: "Bournemouth University, UK",
    video: "https://www.youtube.com/embed/UUOisVFYt3I",
    quote:
      "Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career. The best decision for my academic journey!",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
  {
    name: "Abhinay Pandit",
    university: "New York Film Academy, USA",
    video: "https://www.youtube.com/embed/dbMNMvG4p3E",
    quote:
      "It is one of the best consulting firms available and they are genuinely committed to assisting the students. The counselors are very approachable.",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
  {
    name: "Archana Sidhwani",
    university: "Sheridan College, Canada",
    video: "https://www.youtube.com/embed/l-y-V03y1JU",
    quote:
      "Wonderful consultant. I had a very flourishing process with them. They were very knowledgeable and knew what they were doing.",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },

];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <section className="bg-[#dce3ef] py-24 px-6 lg:px-28 rounded-t-[60px]">
      <div className="flex justify-between items-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900">
           <span className="text-orange-600 justify-center align-center">Success Stories</span>
        </h2>
        <div className="flex gap-4 hover:cursor-pointer">
          <button
            onClick={prevSlide}
            className="w-12 h-12 hover:cursor-pointer rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-100 transition"
          >
            <ArrowLeft size={20} />
          </button>
            <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full hover:cursor-pointer bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition"
            >
            <ArrowRight size={20} />
            </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${successStories.length * 100}%`
          }}
        >
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[40px]  shadow-lg flex flex-col md:flex-row items-center gap-10 min-w-full hover:shadow-xl transition duration-500"
            >
              <div className="relative w-full md:w-[480px]">
                <div className="relative overflow-hidden rounded-2xl shadow-md">
                  <iframe
                    src={story.video}
                    className="w-full h-[300px] rounded-2xl hover:scale-[1.02] transition duration-500"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video ${idx + 1}`}
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-[500px] text-left">
                <p className="text-gray-800 text-lg mb-6 leading-relaxed italic">“{story.quote}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full hover:cursor-pointer object-cover border-2 border-blue-300 shadow-md"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{story.name}</p>
                    <p className="text-gray-600 text-sm italic">{story.university}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}