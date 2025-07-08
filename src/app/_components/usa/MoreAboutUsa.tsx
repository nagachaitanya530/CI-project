"use client";

import React, { useEffect, useRef, useState } from "react";
import { FileText, BadgeCheck, ArrowRight } from "lucide-react";

const MoreAboutUsa = () => {
  const [activeSection, setActiveSection] = useState("documents");

  const documentsRef = useRef<HTMLDivElement | null>(null);
  const visaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "documents") {
              setActiveSection("documents");
            } else if (entry.target.id === "visa") {
              setActiveSection("visa");
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    const docNode = documentsRef.current;
    const visaNode = visaRef.current;

    if (docNode) observer.observe(docNode);
    if (visaNode) observer.observe(visaNode);

    return () => {
      if (docNode) observer.unobserve(docNode);
      if (visaNode) observer.unobserve(visaNode);
    };
  }, []);

  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="hidden md:block space-y-4 sticky top-24 self-start">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="underline decoration-red-500 decoration-2 underline-offset-4">
              More About
            </span>{" "}
            The USA
          </h2>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => {
                documentsRef.current?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("documents"); 
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-left font-semibold transition ${
                activeSection === "documents"
                  ? "bg-blue-600 text-white border-blue-700 shadow"
                  : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              Documents Required
            </button>

            <button
              onClick={() => {
                visaRef.current?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("visa"); 
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-left font-semibold transition ${
                activeSection === "visa"
                  ? "bg-blue-600 text-white border-blue-700 shadow"
                  : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <BadgeCheck className="w-5 h-5" />
              Visa Process
            </button>
          </div>
        </div>

        <div className="md:hidden mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => {
                documentsRef.current?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("documents");
              }}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeSection === "documents"
                  ? "bg-blue-600 text-white border-blue-700 shadow"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
            >
              Documents
            </button>

            <button
              onClick={() => {
                visaRef.current?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("visa");
              }}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeSection === "visa"
                  ? "bg-blue-600 text-white border-blue-700 shadow"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
            >
              Visa Process
            </button>
          </div>
        </div>

        <div className="md:col-span-3 space-y-16">
          <div ref={documentsRef} id="documents">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Documents required to study in the USA
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              When applying for a course in the USA as an international
              student, you typically need several documents to complete the
              application process. These documents may vary depending on the
              institution and the specific program, but some common ones
              include:
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

          <div ref={visaRef} id="visa">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              USA Study Visa Process
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              All the efforts to study abroad become futile if you do not
              present your case effectively and assertively during visa
              interviews. We provide comprehensive VISA guidance, which includes
              verifying the bank financial statement, latest update on VISA
              TECHNOLOGY & RESEARCH, mock interviews, etc. Here are the general
              steps for the procurement of a study visa in the USA:
            </p>
            <ul className="list-decimal list-inside space-y-1 text-sm text-gray-700 mb-6">
              <li>Obtain I-20 from University / College</li>
              <li>Pay the SEVIS fee & Complete DS-160 form</li>
              <li>Pay Visa Application Fees</li>
              <li>Schedule interview date</li>
              <li>
                Attend scheduled appointment with all the necessary documents
              </li>
            </ul>
            <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
              Free Expert Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUsa;
