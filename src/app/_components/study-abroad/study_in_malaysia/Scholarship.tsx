"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ScholarshipsMalaysia() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900">
            <span className="underline decoration-red-500 underline-offset-[6px]">Scholarships</span> In Malaysia
          </h2>

          <p className="text-lg text-gray-700 mt-6 max-w-2xl leading-relaxed">
            The government of Malaysia and private institutions offer Scholarships in Malaysia for international students.
          </p>

          <div className="mt-10 space-y-8 text-gray-800 text-base leading-relaxed">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6 }}>
              <p className="font-bold text-blue-900">1. Malaysia International Scholarship (MIS)</p>
              <p>
                The MIS is awarded by the Malaysian government to international students with outstanding academic records, leadership skills, and a commitment to contribute to their home country post-study.
              </p>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="font-bold text-blue-900">2. Malaysian Technical Cooperation Programme (MTCP)</p>
              <p>
                The MTCP Scholarship supports international students from developing countries in pursuing higher education in Malaysia. It covers tuition fees, living expenses, and round-trip airfare.
              </p>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <p className="font-bold text-blue-900">3. ASEAN Scholarships for Postgraduate Studies</p>
              <p>
                These scholarships are available to ASEAN member country citizens pursuing postgraduate programs in Malaysia. It covers tuition, living expenses, and airfare. Duration: up to 2 years (Master's), up to 3 years (Doctorate).
              </p>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <p className="font-bold text-blue-900">4. Malaysian International Scholarships for Postgraduates</p>
              <p>
                Malaysia also offers scholarships through public and private institutions for international postgraduates in various disciplines, aiming to enhance global education cooperation.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/scholarship.webp"
            alt="Graduation Illustration"
            width={500}
            height={500}
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
