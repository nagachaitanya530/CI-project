"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Business Management",
    image: "/business management.webp",
  },
  {
    title: "Engineering",
    image: "/engineering.webp",
  },
  {
    title: "IT & Computer Science",
    image: "/it and cs.webp",
  },
  {
    title: "Hospitality & Tourism",
    image: "/hospitality and tourism.webp",
  },
  {
    title: "Medicine",
    image: "/medicine.webp",
  },
  {
    title: "Accounting",
    image: "/accounting.webp",
  },
];

export default function PopularCoursesMalaysia() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="underline decoration-red-500 underline-offset-[6px]"> Popular Courses</span> In Malaysia
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          Malaysia attracts many students from all over the world for educational purposes.
          Here are some highly sought-after programs offered by Malaysian universities:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-56 w-full relative">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 text-center">
                {course.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
