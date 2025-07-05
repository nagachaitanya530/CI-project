"use client";

import React from "react";
import Image from "next/image";
import { Plane, Hotel, Compass } from "lucide-react";

const TravelAssistance = () => {
  const cards = [
    {
      title: "Flight Booking",
      desc: "Best airfares with flexible options and personalized support.",
      points: ["Student fare discounts", "Flexible rebooking", "Global airline network"],
      icon: <Plane size={24} />,
    },
    {
      title: "Accommodation",
      desc: "Safe, comfortable stays near your campus — arranged in advance.",
      points: ["Verified hostels & apartments", "Flexible lease options", "Local support team"],
      icon: <Hotel size={24} />,
    },
    {
      title: "Pre-Departure Guidance",
      desc: "Expert tips to settle abroad with ease, plus local do’s and don’ts.",
      points: ["Cultural orientation", "Document checklist", "Emergency support"],
      icon: <Compass size={24} />,
    },
  ];

  return (
    <section
      id="travel-assistance"
      className="relative overflow-x-hidden py-20 md:py-24 bg-gradient-to-b from-white to-blue-50"
    >

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1f3f98]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#1f3f98]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f3f98] leading-tight mb-4 break-words">
              Travel Assistance{" "}
              <span className="text-[#3f5fc9]">for Smooth Journeys</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              Edwise makes your study abroad dream hassle-free. From{" "}
              <strong>flight bookings</strong> and{" "}
              <strong>trusted accommodation</strong> to{" "}
              <strong>pre-departure tips</strong>, our experts manage every
              detail with care and transparency.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Get exclusive student discounts, verified stays, and all the
              guidance you need to confidently land in a new country — ready to
              succeed.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/travel_forex/travel.jpg"
                alt="Student planning travel abroad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>


        <div className="relative w-full">

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1f3f98] to-transparent z-0"></div>

          <div className="flex md:flex-col gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth -ml-4 pl-4 md:ml-0 md:pl-0">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 flex-shrink-0 min-w-[280px] sm:min-w-[300px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col snap-start z-10"
              >
                <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{card.desc}</p>
                <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAssistance;
