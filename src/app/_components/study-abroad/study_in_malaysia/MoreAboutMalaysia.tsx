"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, BadgeCheck } from "lucide-react";

type Props = {
  onConsultClick: () => void;
};

export default function MoreAboutMalaysia({ onConsultClick }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>("documents");

  const documentRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);

  // Observe which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    const doc = documentRef.current;
    const visa = visaRef.current;

    if (doc) observer.observe(doc);
    if (visa) observer.observe(visa);

    return () => {
      if (doc) observer.unobserve(doc);
      if (visa) observer.unobserve(visa);
    };
  }, []);

  const tabs = [
    { id: "documents", name: "Documents", icon: <FileText size={18} /> },
    { id: "visa", name: "Visa", icon: <BadgeCheck size={18} /> },
  ];

  return (
    <section className="py-28 px-6 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
        More About{" "}
        <span className="underline decoration-red-500 underline-offset-[6px]">
          Malaysia
        </span>
      </h2>

      <div className="grid lg:grid-cols-4 gap-10">
        {/* Sticky Left Tabs */}
        <div className="flex lg:flex-col gap-4 lg:col-span-1 justify-start sticky top-32 h-fit">
          {tabs.map((t) => (
            <div
              key={t.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeSection === t.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-blue-100 text-blue-900"
              }`}
            >
              {t.icon} {t.name}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3 space-y-16">
          {/* Documents Section */}
          <motion.div
            id="documents"
            ref={documentRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-50 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Documents required to study in Malaysia
            </h3>
            <p className="text-gray-700 mb-4">
              To study in Malaysia, international students typically need...
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Letter of Acceptance</li>
              <li>Academic Transcripts and Certificates</li>
              <li>English-language proficiency</li>
              <li>Health examination report</li>
              <li>Financial documents</li>
              <li>Visa application form</li>
              <li>Statement of Purpose</li>
              <li>Passport-size photographs</li>
            </ul>
            <div className="mt-6 text-left">
              <button
                onClick={onConsultClick}
                className="px-6 py-3 bg-white text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                Free Expert Consultation
              </button>
            </div>
          </motion.div>

          {/* Visa Section */}
          <motion.div
            id="visa"
            ref={visaRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-50 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Malaysia Study Visa Process
            </h3>
            <p className="text-gray-700 mb-4">
              All applications for a Malaysian student visa...
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Two passport-size photographs</li>
              <li>Two photocopies of passport</li>
              <li>“Personal Bond” signed by institution</li>
              <li>Student Pass application form (IMM14)</li>
              <li>Letter of Acceptance</li>
            </ul>
            <div className="mt-6 text-left">
              <button
                onClick={onConsultClick}
                className="px-6 py-3 bg-white text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                Free Expert Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
