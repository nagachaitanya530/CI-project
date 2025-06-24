"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  ShieldCheck,
  Sun,
  Globe2,
  BookOpen,
  MapPin
} from "lucide-react";

const reasons = [
  {
    title: "Affordable Cost Of Studying",
    description:
      "International students who choose to study in Malaysia can benefit from its affordable tuition fees as compared to other nations. This makes education more feasible.",
    icon: <DollarSign size={24} className="text-blue-600" />
  },
  {
    title: "Safe And Welcoming Environment",
    description:
      "Malaysia is known for its hospitality and welcoming environment. This creates a safe and welcoming atmosphere for international students who wish to study in Malaysia.",
    icon: <ShieldCheck size={24} className="text-blue-600" />
  },
  {
    title: "Tropically Balanced Climate",
    description:
      "The country has a tropical climate and so best suited for students all year long. The rain and heat are balanced perfectly.",
    icon: <Sun size={24} className="text-blue-600" />
  },
  {
    title: "A Unique Cultural Experience",
    description:
      "Malaysia is a country where international students get the opportunity to study in a multicultural environment with a vibrant confluence of Asian cultures. This boosts personal experience and perspectives.",
    icon: <Globe2 size={24} className="text-blue-600" />
  },
  {
    title: "Top-notch Education",
    description:
      "Universities in Malaysia offer accredited courses that have global recognition. This ensures that international students get a high-quality education in Malaysia.",
    icon: <BookOpen size={24} className="text-blue-600" />
  },
  {
    title: "Strategic Location",
    description:
      "Malaysia has a strategic location in the Asia-Pacific region, which makes the country a gateway to a diverse market. This means that the Malaysian market has a lot of job opportunities and can offer the students a highly valued international perspective.",
    icon: <MapPin size={24} className="text-blue-600" />
  }
];

export default function WhyStudyInMalaysia() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white mt-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">
            Why{" "}
            <span className="relative">
              Study In Malaysia?
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-500 rounded-md" />
            </span>
          </h2>

          <div className="space-y-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-b border-gray-200 pb-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-black text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-1/3 bg-white border border-gray-300 rounded-xl p-6 shadow-sm self-start"
        >
          <h3 className="text-black text-lg font-semibold mb-4">
            Book your Free Consultation with Trustworthy Counsellors
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-300 p-3 rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Preferred Course"
              className="border border-gray-300 p-3 rounded-md text-sm"
            />
            <select className="border border-gray-300 p-3 rounded-md text-sm">
              <option value="" disabled selected>
                Select Month
              </option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ].map((month) => (
                <option key={month} value={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>
            <select className="border border-gray-300 p-3 rounded-md text-sm">
              <option value="" disabled selected>
                Select Year
              </option>
              {[2025, 2026, 2027].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label className="flex gap-2 items-start text-sm text-black">
              <input type="checkbox" className="accent-blue-600 mt-1" />
              <span>
                I consent to receiving Calls, WhatsApp, Email and Google RCS
                from Edwise to assist with this enquiry.
              </span>
            </label>
            <input
  type="submit"
  value="Submit"
  className="w-fit py-2 px-5 font-bold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white cursor-pointer transition duration-300"
/>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
