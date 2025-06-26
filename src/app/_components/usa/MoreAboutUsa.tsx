"use client";

import React, { useState } from "react";
import { FileText, BadgeCheck, ArrowRight } from "lucide-react";

const MoreAboutUsa = () => {
  const [activeTab, setActiveTab] = useState("documents");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="underline decoration-red-500 decoration-2 underline-offset-4">
              More About
            </span>{" "}
            The USA
          </h2>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => handleTabClick("documents")}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-left ${
                activeTab === "documents"
                  ? "bg-blue-100 border-blue-600 text-blue-700"
                  : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              Documents Required
            </button>
            <button
              onClick={() => handleTabClick("visa")}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-left ${
                activeTab === "visa"
                  ? "bg-blue-100 border-blue-600 text-blue-700"
                  : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <BadgeCheck className="w-5 h-5" />
              Visa Process
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === "documents" ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Documents required to study in the USA
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                When applying for a course in the USA as an international student, you typically need several documents
                to complete the application process. These documents may vary depending on the institution and the
                specific program, but some common ones include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-6">
                <li>Application Form</li>
                <li>Application Fees</li>
                <li>Statement of Purpose / Essays</li>
                <li>Resume</li>
                <li>Recommendation Letters</li>
                <li>Academic Transcripts</li>
                <li>Marksheets & Certificates</li>
                <li>Bank Certificate</li>
                <li>Declaration Certificate of Finance</li>
                <li>Test Score Report</li>
              </ul>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
                Free Expert Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                USA Study Visa Process
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                All the efforts to study abroad become futile if you do not present your case effectively and assertively during visa interviews. 
                We provide comprehensive VISA guidance, which includes verifying the bank financial statement, latest update on VISA TECHNOLOGY & RESEARCH, 
                mock interviews, etc. Mentioned below are the general steps for the procurement of a study visa in the USA:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-gray-700 mb-6">
                <li>Obtain I-20 from University / College</li>
                <li>Pay the SEVIS fee & Complete DS-160 form</li>
                <li>Pay Visa Application Fees</li>
                <li>Schedule interview date</li>
                <li>Attend scheduled appointment with all the necessary documents</li>
              </ul>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
                Free Expert Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUsa;
