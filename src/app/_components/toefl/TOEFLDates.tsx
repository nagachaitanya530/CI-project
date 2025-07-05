"use client";

import React from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const dateEvents = [
  {
    title: "TOEFL Registration Opens",
    date: "January 2025",
    description: "Candidates can begin registering for TOEFL iBT or Essentials online.",
  },
  {
    title: "TOEFL Test Dates",
    date: "Multiple Dates: Feb – Dec 2025",
    description: "Tests conducted 60+ times yearly. Choose available dates in your region.",
  },
  {
    title: "Last Date to Register",
    date: "7 Days Before Test",
    description: "Registration closes 7 days before your selected test date.",
  },
  {
    title: "Score Availability",
    date: "Within 6 Days of Test",
    description: "TOEFL scores are released online within 6 days after the test date.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const TOEFLDates = () => {
  return (
    <section id="dates" className="scroll-mt-32 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f98]">
            Important TOEFL Dates
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed about registration deadlines, test schedules, and score release timelines.
          </p>
        </div>

        <div className="relative border-l-4 border-[#1f3f98]/30 pl-6 space-y-10">
          {dateEvents.map((event, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-5 md:p-6 relative"
            >
              <div className="absolute -left-[22px] top-6 bg-[#1f3f98] text-white rounded-full p-1.5">
                <CalendarDays size={18} />
              </div>
              <h3 className="text-xl font-semibold text-[#1f3f98]">{event.title}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-2 font-medium">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TOEFLDates;
