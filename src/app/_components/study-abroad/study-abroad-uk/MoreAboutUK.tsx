"use client";
import { useEffect, useRef, useState } from "react";

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
    <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">
      {/* Heading */}
<h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
  <span>More about </span>
  <span className="font-bold underline decoration-red-500">
     UK
  </span>
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
            <h3 className="text-xl font-semibold mb-4">
              Documents required to study in the UK
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <p className="text-black text-xl">Some common documents that international students typically need when applying for a course in the UK:</p>
              <li>Copies of marksheets of Std X, XII and Semester marksheets / Transcripts of the Bachelors degree.</li>
              <li>2 academic Reference letters from professors. One reference in case of UG application.</li>
              <li>If you have work experience, then at least one work recommendation from the employer who can review your professional abilities.</li>
              <li>Statement of Purpose.</li>
              <li>Curriculum Vitae/Resume</li>
              <li>Photocopied score cards of  TOEFL/IELTS/PTE if available / required</li>
              <li>Portfolio (in case of students applying for Art and Design courses & Architecture programs).</li>
              <li>Others (certificates/achievements at the State and National Level and extra curricular activities).</li>
             
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
              UK Study Visa Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <p className="text-black ">The UK (Student Visa) allows international students to study at accredited UK institutions, granted based on meeting eligibility requirements such as course acceptance, finances, and English proficiency. Mentioned below are the general steps for the UK study visa processThe UK (Student Visa) allows international students to study at accredited UK institutions, granted based on meeting eligibility requirements such as course acceptance, finances, and English proficiency. Mentioned below are the general steps for the UK study visa process</p>
              <li>Valid CAS (Confirmation of Acceptance for Study)</li>
              <li>Finance for 12 months tuition fee + maintenance</li>
              <li>Past academic documents</li>
              <li>IHS (International Health Surcharge) cover of GBP 1,164 p.a</li>
              <li>Provision for Priority Visa & Superfast Visa</li>
              <li>Passpost</li>
              
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