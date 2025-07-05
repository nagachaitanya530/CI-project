"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BadgeCheck } from "lucide-react";

export default function MoreAboutSwitzerland({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  const [tab, setTab] = useState("documents");

  const tabs = [
    { id: "documents", name: "Documents", icon: <FileText size={18} /> },
    { id: "visa", name: "Visa", icon: <BadgeCheck size={18} /> },
  ];

  return (
    <section className="py-28 px-6 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
        More About <span className="underline decoration-red-500 underline-offset-[6px]">Switzerland</span>
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
                Documents required to study in Switzerland
              </h3>
              <p className="text-gray-700 mb-4">
                Some common documents that international students typically need when applying for a course in Switzerland:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Copies of mark sheets of Std X, XII and all the semesters of the Bachelor's degree.</li>
                <li>Academic Transcripts and Certificates</li>
                <li>If you have work experience, then at least one work recommendation from the employer who knows you well and can comment on your professional abilities.</li>
                <li>Statement of Purpose.</li>
                <li>Curriculum Vitae/Resume.</li>
                <li>Photocopy of the score cards of GMAT/IELTS/TOEFL/PTE if available/required.</li>
                <li>Other certificates/achievements at the State and National Level and extra curricular activities.</li>
               
              </ul>
              <div className="mt-6 text-left">
               <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Switzerland Study Visa Process
              </h3>
              <p className="text-gray-700 mb-4">
              <strong>If you want to study in Switzerland, you need a student visa. This is the procedure to apply for a student visa in Switzerland, step by step.</strong>
              </p>
             
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Upon receiving acceptance from a Swiss university, contact your country's Swiss Consulate.</li>
                <li>Complete the Visa Application Form and book an appointment at the Swiss Visa Application Center.</li>
                <li>Attend the embassy or consulate at the appointed time with the completed application form and all necessary documents.</li>
                <li>To obtain a Swiss student visa, Indian students need to submit required documents and pay a fee of 160 CHF.</li>
                <li>Obtain the acknowledgment receipt and await approval. Short visas (under three months) typically take 10-15 days, while longer-term visas (over three months) for student visas may take up to 10 weeks.</li>
              </ul>
              <div className="mt-6 text-left">
                <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
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