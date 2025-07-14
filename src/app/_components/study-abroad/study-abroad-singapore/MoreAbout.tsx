"use client";
import { useEffect, useRef, useState } from "react";
import { File, BookOpenText } from "lucide-react";
import StudyAbroadModal from "../study-mauritius/StudyAbroadModal";
 function StudyTabs() {

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("documents");
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
          if (topMost) setActiveTab(topMost);
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
    <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">

      {/* Heading */}
<h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
  <span>More about </span>
  <span className="font-bold underline decoration-red-500">
      Singapore
  </span>
</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[300px] shrink-0 h-fit md:sticky md:top-20 self-start z-10 bg-white">
          <div className="flex md:flex-col gap-4">
            <button
              onClick={() => scrollToSection(documentsRef)}
              className={`py-2 px-4 rounded-full text-left border flex items-center gap-2 ${
                activeTab === "documents"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <File className="w-4 h-4" />
              <span>Documents</span>
            </button>
            <button
              onClick={() => scrollToSection(visaRef)}
              className={`py-2 px-4 rounded-full text-left border flex items-center gap-2 ${
                activeTab === "visa"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <BookOpenText className="w-4 h-4" />
              <span>Visa</span>
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-12 pr-2">
          <div
            id="documents"
            ref={documentsRef}
            className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
          >
            <h3 className="text-xl font-semibold mb-4">
              Documents required to study in Singapore
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>A valid passport</li>
              <li>Proof of funds</li>
              <li>Completed Application Form</li>
              <li>Passport</li>
              <li>Health insurance</li>
              <li>Financial documents</li>
              <li>Statement of Purpose/Personal Statement</li>
              <li>Letter of Recommendation</li>
              <li>Visa Documents</li>
            </ul>
            <button className="mt-6 border border-blue-600 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50" onClick={() => setShowModal(true)}>
              Free Expert Consultation
            </button>
          </div>
          <div
            id="visa"
            ref={visaRef}
            className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
          >
            <h3 className="text-xl font-semibold mb-4">
              Singapore study visa process
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>All academic documents, including a copy of your passport, need to be submitted to the university.</li>
              <li>To initiate the student visa process, the student must mandatorily hold an unconditional offer letter in hand.</li>
              <li>The university will apply for a visa on the student’s behalf.</li>
              <li>Financial documents are required as per the university requirements.</li>
              <li>Proof of a gap in education (if any)</li>
              <li>Usually, the visa processing time takes 2 to 3 weeks</li>
            </ul>
            <button className="mt-6 border border-blue-900 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50" onClick={() => setShowModal(true)}>
              Free Expert Consultation
            </button>
          </div>
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
export default StudyTabs; 