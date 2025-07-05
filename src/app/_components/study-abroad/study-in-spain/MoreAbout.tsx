"use client";
import { useEffect, useRef, useState } from "react";
import ConsultationForm from "./ConsultationForm";

function MoreAbout({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  const [activeTab, setActiveTab] = useState("documents");
  const [isopen, setIsOpen] = useState(false);

  const documentsRef = useRef<HTMLDivElement | null>(null);
  const visaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const topMost = visibleSections[0]?.target?.id;
          if (topMost) {
            setActiveTab(topMost);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    if (documentsRef.current) observer.observe(documentsRef.current);
    if (visaRef.current) observer.observe(visaRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {isopen && (
        <ConsultationForm show={isopen} onClose={() => setIsOpen(false)} />
      )}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          <span>More about </span>
          <span className="font-bold underline decoration-red-500">Spain</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full md:w-[300px] shrink-0 h-fit md:sticky md:top-20 self-start z-10 bg-white">
            <div className="flex md:flex-col gap-4">
              <button
                onClick={() => scrollToSection(documentsRef)}
                className={`py-2 px-4 rounded-full text-left border ${
                  activeTab === "documents"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                📄 Documents
              </button>
              <button
                onClick={() => scrollToSection(visaRef)}
                className={`py-2 px-4 rounded-full text-left border ${
                  activeTab === "visa"
                    ? "bg-blue-700 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                🛂 Visa
              </button>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 space-y-12 pr-2">
            <div
              id="documents"
              ref={documentsRef}
              className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents required to study in Spain
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Proof of earning your Bachelor’s degree or High School diploma
                </li>
                <li>A copy of your passport</li>
                <li>A copy of your transcripts</li>
                <li>2 Letter of Recommendations</li>
                <li>Statement of Purpose</li>
                <li>English Language Proficiency</li>
                <li>Updated Resume</li>
              </ul>
              <div className="mt-6 text-left">
                <button
                  onClick={onFreeConsultClick}
                  className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
                >
                  Free Expert Consultation
                </button>
              </div>
            </div>

            <div
              id="visa"
              ref={visaRef}
              className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spain study visa process
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Visa application form</li>
                <li>Photograph</li>
                <li>Valid and unexpired passport</li>
                <li>Proof of acceptance of study</li>
                <li>Proof of Financial Means</li>
                <li>Health Insurance (approved by Spanish Government)</li>
                <li>Criminal record and check certificate</li>
                <li>Medical Certificate</li>
                <li>
                  Proof of representatives identity and capacity (If minor)
                </li>
                <li>Authorization of legal representatives (If minor)</li>
                <li>Payment of Visa Fees</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The visa application process can take several weeks, so it is
                advisable to apply well in advance of your intended travel date.
              </p>
              <div className="mt-6 text-left">
                <button
                  onClick={onFreeConsultClick}
                  className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
                >
                  Free Expert Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MoreAbout;
