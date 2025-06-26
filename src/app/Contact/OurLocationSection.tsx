"use client";
import { Search } from 'lucide-react';

import { MapPin } from 'lucide-react';
import React, { useState } from "react";
import Image from "next/image";

type Location = {
  title: string;
  address: string;
};

const locations: Location[] = [
  {
    title: "Edwise – Head Office, Mumbai",
    address:
      "Jer Mahal, Ground Floor, Dhobi Talao, Opp. Metro Cinema, Mumbai - 400 002, Maharashtra, India.",
  },
  {
    title: "Edwise – Marine Lines, Mumbai",
    address:
      "2, Sethna Building, 1st Floor, 216, Princess Street, Near Parsi Dairy Farm, Marine Lines, Mumbai - 400 002, Maharashtra, India.",
  },
  {
    title: "Edwise – Santacruz, Mumbai",
    address:
      "123 Example Road, Santacruz West, Mumbai - 400054, Maharashtra, India.",
  },
  {
    title: "Edwise – Malad, Mumbai",
    address:
      "456 ABC Avenue, Malad East, Mumbai - 400097, Maharashtra, India.",
  },
  {
    title: "Edwise – Thane, Mumbai",
    address:
      "101 XYZ Plaza, Gokhale Road, Thane West, Mumbai - 400601, Maharashtra, India.",
  },
  {
    title: "Edwise – Vashi, Mumbai",
    address:
      "7th Floor, Palm Court, Sector 17, Vashi, Navi Mumbai - 400703, Maharashtra, India.",
  },
  {
    title: "Edwise – Ahmedabad",
    address:
      "B-101, Shivalik Corporate Park, Near Satellite Cross Road, Ahmedabad - 380015, Gujarat, India.",
  },
];

export default function OurLocationSection() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = locations.filter((loc) =>
    loc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className=" bg-[#173F96] text-white rounded-t-[40px] py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline decoration-red-500">
        Our Location
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        {/* LEFT PANEL */}
        <div className="flex-1">
          {/* SEARCH BOX */}
        <div className="relative mb-6">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search Location"
    className="w-full pl-10 pr-4 py-3  rounded-md text-gray-900 focus:outline-none border border-white/30 bg-white/10 placeholder:text-gray-400 focus:border-red-900 transition"
  />
</div>

          {/* SCROLLABLE LIST */}
          <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10 contactusscrool">
            {filtered.map((loc, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  className="w-full text-left font-semibold"
                >
            <span className="flex items-center gap-2">
  <MapPin className="w-4 h-4" />
  {loc.title}
</span>
                </button>

                {activeIndex === index && (
                  <div className="mt-1 text-sm text-white/90">
                    <p>{loc.address}</p>
                    <button className="mt-2 px-4 py-1 border border-white rounded-md hover:bg-white hover:text-[#173F96] transition">
                      Reach Us
                    </button>
                  </div>
                )}

                <hr className="border-white/30 mt-3" />
              </div>
            ))}

            {filtered.length === 0 && (
              <p className="text-sm text-white/60">No locations found.</p>
            )}
          </div>
        </div>

        {/* RIGHT MAP IMAGE */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/contactmap.jpg"
            alt="India Locations"
            width={500}
            height={500}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
