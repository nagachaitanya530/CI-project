"use client";

import { useState } from "react";
import { FaRegFileAlt, FaPassport } from "react-icons/fa";

type TabType = "Documents" | "Visa";

interface TabContent {
  title: string;
  list: string[];
}

const tabData: Record<TabType, TabContent> = {
  Documents: {
    title: "Documents required to study in Dubai",
    list: [
      "Passport photocopy",
      "Statement of Purpose",
      "Resume",
      "Degree/Provisional Certificate",
      "Offer Letter from College",
      "2 Letters of Recommendation",
      "Marksheets (from Grade 10 to the most recent qualification)",
    ],
  },
  Visa: {
    title: "Dubai study visa process",
    list: [
      "Students can apply 60 days prior to their visa.",
      "All documents must be submitted in sets of two",
      "Documents required:- Unconditional offer letter and Visa fee receipt",
    ],
  },
};

export default function MoreAboutDubai() {
  const [activeTab, setActiveTab] = useState<TabType>("Documents");

  return (
    <div className="bg-white py-12 px-4 md:px-20">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-12 font-poppins">
        More About{" "}
        <span className="font-bold underline decoration-red-500 underline-offset-4">
          Dubai
        </span>
      </h2>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* Sticky Left Tabs */}
        <div className="sticky top-24 flex flex-col bg-white border border-gray-200 rounded-full p-1 w-[180px] items-center shadow-sm z-10">
          {(["Documents", "Visa"] as TabType[]).map((tab) => (
            <button
              key={tab}
              className={`w-full flex items-center gap-2 justify-center text-[16px] px-4 py-3 font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-[#1f449b] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Documents" ? (
                <FaRegFileAlt className="text-[18px]" />
              ) : (
                <FaPassport className="text-[18px]" />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="flex-1 max-w-2xl bg-white border border-gray-200 rounded-3xl p-8 shadow-md">
          <h3 className="text-xl font-bold mb-5">
            {tabData[activeTab].title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[16px] leading-relaxed">
            {tabData[activeTab].list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="text-[#1f449b] font-semibold text-base border border-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
              Free Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
