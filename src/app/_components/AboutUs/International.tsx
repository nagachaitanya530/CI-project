"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamImages = [
  "/Teams/1.jpg",
  "/Teams/2.jpg",
  "/Teams/3.jpg",
  "/Teams/4.jpg",
  "/Teams/5.jpg",
  "/Teams/6.jpg",
  "/Teams/7.jpg",
  "/Teams/8.jpg",
  "/Teams/9.jpg",
  "/Teams/10.jpg",
  "/Teams/11.jpg",
  "/Teams/12.jpg",
];

export default function OurTeamCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-white py-16 px-4 lg:px-20 overflow-x-hidden">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our <span className="underline decoration-red-500">Team Moments</span>
      </h2>

      <div className="max-w-7xl mx-auto w-full">
        <Swiper
          modules={[Navigation]}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== "boolean" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="overflow-hidden"
        >
          {teamImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full max-w-[350px] h-[200px] sm:h-[250px]">
                <Image
                  src={src}
                  alt={`Team ${index + 1}`}
                  width={350}
                  height={250}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-6 space-x-6">
          <button
            ref={prevRef}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
