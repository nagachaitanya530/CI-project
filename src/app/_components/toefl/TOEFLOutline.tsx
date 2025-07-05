"use client";

import { GraduationCap, BookOpen, Globe2 } from "lucide-react";
import React from "react";

const TOEFLOutline = () => {
  return (
    <section id="overview" className="scroll-mt-32 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f98]">
            TOEFL Overview
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            TOEFL (Test of English as a Foreign Language) is an internationally recognized English proficiency exam required by most universities in the USA and other countries for academic admissions.
          </p>
        </div>

        <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-6 md:p-10 shadow-sm mb-14">
          <p className="text-gray-700 text-lg leading-relaxed">
            TOEFL assesses core English skills in <strong>Listening, Reading, Writing</strong> and <strong>Speaking</strong>. Offered 30–40 times annually, it is accepted by over 11,500 institutions across 160+ countries including the USA, UK, and Canada for both undergraduate and postgraduate studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <Globe2 className="text-[#1f3f98] mr-3" size={28} />
              <h3 className="text-xl font-semibold text-[#1f3f98]">
                TOEFL Internet-Based Test (TOEFL iBT)
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base pl-2">
              <li>Can be taken at a test center or from home.</li>
              <li>Offered over 170 times a year globally.</li>
              <li>24/7 at-home testing available 4 days a week.</li>
              <li>Accepted by 11,500+ institutions in 160+ countries.</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="text-[#1f3f98] mr-3" size={28} />
              <h3 className="text-xl font-semibold text-[#1f3f98]">
                TOEFL Essentials
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base pl-2">
              <li>90-minute test with shorter, everyday English content.</li>
              <li>Focuses on real-life English usage.</li>
              <li>Accepted by 500+ institutions globally.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TOEFLOutline;
