"use client";
import { useEffect, useRef, useState } from "react";
import { File, BookOpenText } from "lucide-react";

export default function StudyTabs() {
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
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        <span>More about </span>
        <span className="font-bold underline decoration-red-500">Mauritius</span>
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
              Documents required to study in Mauritius
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Application form</li>
              <li>Proof of language proficiency</li>
              <li>Educational documents</li>
              <li>Passport</li>
              <li>Health insurance</li>
              <li>Financial documents</li>
              <li>Statement of Purpose/Personal Statement</li>
              <li>Letter of Recommendation</li>
              <li>Visa documents</li>
            </ul>
            <button className="mt-6 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Free Expert Consultation
            </button>
          </div>
          <div
            id="visa"
            ref={visaRef}
            className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
          >
            <h3 className="text-xl font-semibold mb-4">
              Mauritius study visa process
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Submit a filled-in application form</li>
              <li>Accommodation details</li>
              <li>Bank statement of parents (MUR 10,000 ≈ ₹2L)</li>
              <li>4 passport-sized photos</li>
              <li>Passport biodata photocopy</li>
              <li>Offer letter with course details</li>
              <li><strong>Processing time:</strong> ~4 weeks</li>
            </ul>
            <button className="mt-6 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Free Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
