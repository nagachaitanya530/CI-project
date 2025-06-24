"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const careers = [
  {
    title: "Healthcare & Biotechnology",
    image: "/healthcare.webp",
  },
  {
    title: "Engineering",
    image: "/engineering.webp",
  },
  {
    title: "Finance & Banking",
    image: "/finance.webp",
  },
  {
    title: "Information Technology",
    image: "/it and cs.webp",
  },
  {
    title: "Oil & Gas Industry",
    image: "/oil gas.webp",
  },
  {
    title: "Education & Training",
    image: "/education.webp",
  },
];

export default function CareerProspectsMalaysia() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          <span className="underline decoration-red-500 underline-offset-[6px]">
            Career Prospects
          </span>{" "}
          in Malaysia
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
          Malaysia's growing industries offer international students excellent
          post-study work opportunities. Here are the top sectors with high
          career potential:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {careers.map((career, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={career.image}
              alt={career.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {career.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
