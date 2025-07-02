"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { ChevronLeft, ChevronRight } from "lucide-react";

const timelineData = [
  {
    year: "1991",
    title: "Edwise International is Founded",
    image: "/timeline/1.jpg",
  },
  {
    year: "1997",
    title: "Global Tie-Ups : UK, USA, Canada, New Zealand...",
    image: "/timeline/2.webp",
  },
  {
    year: "2002",
    title: "Launched Test Preparation Division",
    image: "/timeline/3.webp",
  },
  {
    year: "2008",
    title: "Pioneered the World Education Fair in India",
    image: "/timeline/4.jpg",
  },
  {
    year: "2016",
    title:" Celebrated our 25th Anniversary",


    image: "/timeline/5.png",
  },
  {
    year: "2019",
    title: "Local Presence : 24 Branches across India",



    image: "/timeline/6.webp",
  },
  {
    year: "2020",
    title: "Won  Agency of the Year Award  from AIRC",

    image: "/timeline/8.webp",
  },
  {
    year: "2021",
    title: "Partnered with 900+ institutions worldwide",

    image: "/timeline/9.png",
  },
  {
    year: "2024",
    title:" Successfully completed 33 years of Excellence",


    image: "/timeline/10.webp",
  },
  
];

export default function TimelineCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className="bg-[#1D438D] py-12 relative rounded-3xl">
      {/* Centered Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl font-light text-white relative">
          Our{" "}
          <span className="font-bold relative inline-block text-white">
            Journey
            <svg
              className="absolute bottom-0 left-0 w-full h-3 transform translate-y-2"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 C20,10 40,0 60,5 C80,10 100,0 100,5"
                stroke="#ff4b2b"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Swiper Carousel */}
      {navReady && (
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-4 mx-2">
                <div className="text-center text-blue-800 text-xl font-bold mb-2">
                  {item.year}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-black text-center mt-3">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Bottom Arrow Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          ref={prevRef}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="text-blue-800" />
        </button>
        <button
          ref={nextRef}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="text-blue-800" />
        </button>
      </div>
    </div>
  );
}
