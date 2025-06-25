"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BadgeCheck } from "lucide-react";

export default function MoreAboutMalaysia() {
  const [tab, setTab] = useState("documents");

  const tabs = [
    { id: "documents", name: "Documents", icon: <FileText size={18} /> },
    { id: "visa", name: "Visa", icon: <BadgeCheck size={18} /> },
  ];

  return (
    <section className="py-28 px-6 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
        More About <span className="underline decoration-red-500 underline-offset-[6px]">Malaysia</span>
      </h2>

      <div className="grid lg:grid-cols-4 gap-10">
        <div className="flex lg:flex-col gap-4 lg:col-span-1 justify-start">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                tab === t.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-blue-100 text-blue-900 hover:bg-blue-200 hover:text-blue-900"
              }`}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 bg-gray-50 p-10 rounded-3xl shadow-lg"
        >
          {tab === "documents" ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents required to study in Malaysia
              </h3>
              <p className="text-gray-700 mb-4">
                To study in Malaysia, international students typically need to prepare and submit several documents for admission and visa purposes. The exact requirements may vary depending on the institution and the specific program of study. However, common documents required to study in Malaysia include:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Letter of Acceptance</li>
                <li>Academic Transcripts and Certificates</li>
                <li>English-language proficiency</li>
                <li>Health examination report</li>
                <li>Financial documents</li>
                <li>Visa application form</li>
                <li>Study plan or Statement of Purpose</li>
                <li>Two Passport-size photographs</li>
                <li>Additional documents, if required</li>
              </ul>
              <div className="mt-6 text-left">
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                  Free Expert Consultation
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Malaysia Study Visa Process
              </h3>
              <p className="text-gray-700 mb-4">
                All applications for a Malaysian student visa for international students are arranged through Malaysian educational institutions. The next-stage of processing, approval, and issuance of student passes and visas is carried out by the immigration department in Malaysia.
              </p>
              <p className="text-gray-700 mb-4">
                Applications will be submitted to the educational institutions to the directors of the pass and permit division, Malaysia. The prospective student will be informed of their application status by the immigration department of Malaysia through their educational institutions. This information is imparted within 7 days of application, regardless of whether the application has been successful or not.
              </p>
              <p className="text-gray-700 mb-4">
                The educational institutions that enrol the students are responsible for making the necessary arrangements pertaining to immigration matters.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Two passport-size photographs of the applicant</li>
                <li>Two photocopies of the student’s passport or travel document</li>
                <li>The educational institution is required to sign a “Personal Bond” on behalf of the student (no fee charged)</li>
                <li>Student Pass application form (IMM14) in duplicate</li>
                <li>An Offer Letter or letter of acceptance from the institution</li>
              </ul>
              <div className="mt-6 text-left">
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                  Free Expert Consultation
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}