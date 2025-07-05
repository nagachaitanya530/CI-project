"use client";

import React from "react";
import Image from "next/image";
import { DollarSign, ShieldCheck, Globe } from "lucide-react";

const ForexAssistance = () => {
  const cards = [
    {
      title: "Competitive Exchange Rates",
      desc: "Leverage our trusted currency partners to get better rates than traditional banks and outlets.",
      points: ["Low transaction fees", "Better-than-bank rates", "Secure fund transfers"],
      icon: <DollarSign size={24} />,
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges — know your rates and fees upfront, with complete peace of mind.",
      points: ["Clear exchange fees", "No surprises", "Detailed rate breakdowns"],
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Ongoing Assistance",
      desc: "Get personal guidance for tuition, accommodation, or daily expenses while you study abroad.",
      points: ["Tailored forex plans", "24/7 support", "Expert advice anytime"],
      icon: <Globe size={24} />,
    },
  ];

  return (
    <section
      id="forex-assistance"
      className="relative overflow-x-hidden overflow-y-hidden py-20 md:py-24 bg-gradient-to-b from-white to-blue-50"
    >

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1f3f98]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1f3f98]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f3f98] leading-tight mb-4">
              Forex Assistance{" "}
              <span className="text-[#3f5fc9]">for Smart Finances</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              Studying abroad means planning finances wisely. Our trusted Forex
              services help you get the best currency exchange rates, saving you money
              for tuition, living expenses, and daily needs — all without hidden fees.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              With clear pricing and reliable partners, you can confidently manage
              your funds and focus on your academic journey.
            </p>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/travel_forex/forex.jpg"
                alt="Student using forex assistance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1f3f98] to-transparent z-0" />

          <div className="flex md:flex-col gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth -ml-4 pl-4 md:pl-0 md:ml-0">
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

export default ForexAssistance;
