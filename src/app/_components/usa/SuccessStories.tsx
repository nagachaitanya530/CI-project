"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Mehta",
    course: "MS in Data Science, New York University",
    image: "/students/aarav.jpg",
    quote:
      "CI helped me throughout the entire process – from choosing the right university to visa interview prep. I’m living my dream now!",
  },
  {
    name: "Sneha Kapoor",
    course: "MBA, University of Chicago",
    image: "/students/sneha.jpg",
    quote:
      "Thanks to their expert counselling, I got into a top B-school with a scholarship. Couldn’t have done it without their guidance!",
  },
  {
    name: "Rohan Sharma",
    course: "BS in Mechanical Engineering, Purdue University",
    image: "/students/rohan.jpg",
    quote:
      "From profile building to visa documentation, everything was taken care of. I’m forever grateful to the CI team!",
  },
  {
    name: "Meera Iyer",
    course: "Masters in Public Health, Johns Hopkins University",
    image: "/students/meera.jpg",
    quote:
      "What stood out was their personalized attention to my goals. Their team truly empowered me to chase my passion.",
  },
  {
    name: "Ankit Verma",
    course: "MS in Computer Science, Carnegie Mellon University",
    image: "/students/ankit.jpg",
    quote:
      "CI made every complex step seem simple. From SOP reviews to mock interviews, their support was invaluable.",
  },
  {
    name: "Divya Patel",
    course: "BBA, University of California, Berkeley",
    image: "/students/divya.jpg",
    quote:
      "They helped me shortlist the best-fit universities and build a strong profile. CI was the best decision I made.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-[#f0f4fa] py-20 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            Success Stories
          </span>{" "}
          from Our Students
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
          Hear how CI helped students fulfill their dreams of studying in the USA.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((student, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {student.name}
                    </h4>
                    <p className="text-sm text-gray-500">{student.course}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">“{student.quote}”</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots Below Cards */}
        <div className="swiper-pagination-custom mt-8 flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default SuccessStories;