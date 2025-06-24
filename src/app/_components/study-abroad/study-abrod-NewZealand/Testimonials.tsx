"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    video: "https://youtu.be/-fO7c9dpRIo",
    quote:
      "I had an amazing experience with Edwise, they were really helpful in choosing the right university for my preferred course.",
    name: "Disha Karmakar",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    univs: "The University of Western, AUS",
  },
  {
    id: 2,
    video: "https://youtu.be/jtv8SNY80SE",
    quote:
      "My experience with Edwise has been great. My counselor helped me tremendously and was always there to clear my doubts.",
    name: "Srikamalesh Rajendraboopathy",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    univs: "Macquarie University, AUS",
  },
  {
    id: 3,
    video: "https://youtu.be/ITs1ZBBCd-U",
    quote:
      "I had a detailed and instructive session with their expert advisor. I fully endorse their services!",
    name: "Sreehati",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    univs: "Bond University, AUS",
  },
];

const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    const id =
      parsed.hostname === "youtu.be"
        ? parsed.pathname.slice(1)
        : new URLSearchParams(parsed.search).get("v");
    return `https://www.youtube.com/embed/${id || ""}`;
  } catch {
    return "";
  }
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goToPrevious = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (index < testimonials.length - 1) setIndex((prev) => prev + 1);
  };

  return (
    <section className="bg-[#d7e4f5] py-12 px-6 rounded-3xl    transition-all duration-500 mt-30">
      <div className="flex justify-between items-center mb-8 p-5">
        <h2 className="text-5xl font-bold text-black">
          <span className="underline decoration-red-500 underline-offset-4">
            Success Stories
          </span>
        </h2>
        <div className="flex gap-3">
          <button
            onClick={goToPrevious}
            disabled={index === 0}
            className={`p-2 rounded-full w-10 h-10 transition ${
              index === 0
                ? "bg-gray-300 text-gray-500 "
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            <MoveLeft />
          </button>
          <button
            onClick={goToNext}
            disabled={index === testimonials.length - 1}
            className={`p-2 rounded-full w-10 h-10 transition ${
              index === testimonials.length - 1
                ? "bg-gray-300 text-gray-500 "
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            <MoveRight />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
  <div
    className="flex transition-transform duration-500 ease-in-out gap-0"
    style={{ transform: `translateX(-${index * 60}%)` }} // tweak 60% for spacing
  >
    {testimonials.map((item, i) => (
      <div
        key={item.id}
        className=" w-[45rem] lg:ml-80 lg:mr-auto h-[25rem]   items-center bg-white flex flex-col md:flex-row rounded-3xl shadow-md p-6 md:p-5 transition-transform duration-500 ease-in-out "
      >
        <iframe
          src={getYoutubeEmbedUrl(item.video)}
          allowFullScreen
          className="rounded-2xl w-full md:w-[60rem] h-[12rem] md:h-[20rem] mb-6 md:mb-0  -ml-50"
        />
        <div className="flex flex-col  p-8   justify-center ">
          <p className="text-gray-800 text-lg  ">{item.quote}</p>
          <div className="flex mt-10 gap-5">
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-semibold ">{item.name}</p>
              <p className="text-sm text-gray-600">{item.univs}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Testimonials;
