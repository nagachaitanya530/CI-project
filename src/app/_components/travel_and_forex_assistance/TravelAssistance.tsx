"use client";

import React from "react";
import Image from "next/image";
import { Plane, Hotel, Compass } from "lucide-react";

const TravelAssistance = () => {
  return (
    <section
      id="travel-assistance"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Decorative Blur */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#1f3f98]/10 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#1f3f98]/10 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-16 relative z-10 items-start">
        {/* Left: Text then Image */}
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f3f98] leading-snug mb-4">
              Travel Assistance{" "}
              <span className="text-[#3f5fc9]">for Smooth Journeys</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Edwise makes your study abroad dream hassle-free. From{" "}
              <strong>flight bookings</strong> and{" "}
              <strong>trusted accommodation</strong> to{" "}
              <strong>pre-departure tips</strong>, our experts manage every
              detail with care and transparency.
            </p>
            <p className="text-gray-700 text-base">
              Get exclusive student discounts, verified stays, and all the
              guidance you need to confidently land in a new country — ready to
              succeed.
            </p>
          </div>

          {/* Image below text */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/travel_forex/travel.jpg" 
              alt="Travel Assistance"
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
                Flight Booking
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Best airfares with flexible options and personalized support.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Student fare discounts</li>
                <li>Flexible rebooking</li>
                <li>Global airline network</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <Plane size={24} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white p-6 min-w-[280px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col z-10">
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                Accommodation
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Safe, comfortable stays near your campus — arranged in advance.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Verified hostels & apartments</li>
                <li>Flexible lease options</li>
                <li>Local support team</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <Hotel size={24} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white p-6 min-w-[280px] md:min-w-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col z-10">
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">
                Pre-Departure Guidance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Expert tips to settle abroad with ease, plus local do’s and
                don’ts.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-4">
                <li>Cultural orientation</li>
                <li>Document checklist</li>
                <li>Emergency support</li>
              </ul>
              <div className="ml-auto bg-gradient-to-br from-[#1f3f98] to-[#3f5fc9] text-white p-4 rounded-full shadow-lg border-4 border-white relative z-10">
                <Compass size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAssistance;
