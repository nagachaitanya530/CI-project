"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Make sure these images are inside /public/images/team/
const teamImages = [
  "/Teams/1.jpg",
  "/Teams/2.jpg",
  "/Teams/3.jpg",
  "/Teams/4.jpg",
  "/Teams/5.webp",
  "/Teams/6.webp",
  "/Teams/7.webp",
  "/Teams/8.webp",
  "/Teams/9.webp",
  "/Teams/10.avif",
  "/Teams/11.webp",
  "/Teams/12.webp",
  

   
  
   
     
   
   
  
];

export default function OurTeamCarousel() {
  return (
    <section className="bg-white py-16 px-4 lg:px-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our <span className="underline decoration-red-500">Team Moments</span>
      </h2>

      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.5}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!overflow-visible"
        >
          {teamImages.map((src, index) => (
            <SwiperSlide key={index} className="!flex justify-center">
              <Image
                src={src}
                alt={`Team ${index + 1}`}
                width={500}
                height={350}
                className="rounded-xl object-cover shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
