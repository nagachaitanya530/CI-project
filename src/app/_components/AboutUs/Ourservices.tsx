"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  UserCheck,
  ListChecks,
  GraduationCap,
  Stamp,
  Plane,
  CircleDollarSign,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "EXPERT GUIDANCE",
    description:
      "Top university delegates and our expert counselors will help you choose the ideal university and course.",
    icon: <UserCheck className="w-20 h-20 text-white" />,
  },
  {
    title: "TEST PREP",
    description:
      "Comprehensive coaching for international tests like TOEFL, PTE, IELTS, GRE, GMAT, SAT, etc.",
    icon: <ListChecks className="w-20 h-20 text-white" />,
  },
  {
    title: "FINANCIAL AID",
    description:
      "Our partner banks give you the best rates to secure an education loan with low interest rates.",
    icon: <GraduationCap className="w-20 h-20 text-white" />,
  },
  {
    title: "VISA SUPPORT",
    description:
      "Ensuring a seamless visa application process with a 99% approval rate.",
    icon: <Stamp className="w-20 h-20 text-white" />,
  },
  {
    title: "TRAVEL SUPPORT",
    description:
      "We help with advance flight booking so that you can travel at the lowest prices.",
    icon: <Plane className="w-20 h-20 text-white" />,
  },
  {
    title: "FOREX SERVICE",
    description:
      "We facilitate wire transfer, currency exchange, and help with acquiring an international debit card.",
    icon: <CircleDollarSign className="w-20 h-20 text-white" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Our{" "}
        <span className="font-bold underline decoration-red-500 decoration-2 underline-offset-4">
          Services
        </span>
        ?
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#e9eff7] p-6 rounded-2xl shadow-md flex flex-col items-center h-full">
              <div className="bg-blue-900 rounded-full p-5 mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900">{service.title}</h3>
              <p className="text-sm text-gray-700 mt-3">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="swiper-prev bg-white border border-blue-700 text-blue-700 p-3 rounded-lg hover:bg-blue-700 hover:text-white transition">
          <ArrowLeft />
        </button>
        <button className="swiper-next bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
