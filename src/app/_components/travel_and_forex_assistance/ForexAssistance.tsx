"use client";

import React from "react";
import Image from "next/image";
import { DollarSign, ShieldCheck, Globe } from "lucide-react";

const ForexAssistance = () => {
  return (
    <section
      id="forex-assistance"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Decorative Blur */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#1f3f98]/10 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#1f3f98]/10 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-16 relative z-10 items-start">
        {/* Left: Text + Image */}
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f3f98] leading-snug mb-4">
              Forex Assistance{" "}
              <span className="text-[#3f5fc9]">for Smart Finances</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Studying abroad means planning finances wisely. Edwise’s trusted Forex
              services help you get the best currency exchange rates, saving you money
              for tuition, living expenses, and daily needs — all without hidden fees.
            </p>
            <p className="text-gray-700 text-base">
              With our clear pricing and reliable partners, you can confidently manage
              your funds and focus on your academic journey.
            </p>
          </div>

          {/* Image below text */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/travel_forex/forex.jpg"
              alt="Forex Assistance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Scrollable Cards */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute right-1/2 translate-x-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-[#1f3f98] to-transparent z-0"></div>

          {/* Scroll Container */}
          <div className="flex md:flex-col gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {/* Card 1 */}
            <div className="relative bg-white p-6 min-w-[280px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col z-10">
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                Competitive Exchange Rates
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Leverage our trusted currency partners to get better rates than traditional banks and outlets.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Low transaction fees</li>
                <li>Better-than-bank rates</li>
                <li>Secure fund transfers</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <DollarSign size={24} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white p-6 min-w-[280px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col z-10">
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                No hidden charges — know your rates and fees upfront, with complete peace of mind.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Clear exchange fees</li>
                <li>No surprises</li>
                <li>Detailed rate breakdowns</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <ShieldCheck size={24} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white p-6 min-w-[280px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col z-10">
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                Ongoing Assistance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Get personal guidance for tuition, accommodation, or daily expenses while you study abroad.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Tailored forex plans</li>
                <li>24/7 support</li>
                <li>Expert advice anytime</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <Globe size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexAssistance;
