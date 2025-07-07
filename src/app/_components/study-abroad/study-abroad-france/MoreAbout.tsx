"use client";
import { useEffect, useRef, useState } from "react";
import ConsultationForm from "./ConsultationForm";

function MoreAbout() {
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
      {isopen && <ConsultationForm show={isopen} onClose={() => setIsOpen(false)} />}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">

        <h2 className=" md:text-4xl font-semibold mb-10 text-center">
          <span className="font-bold text-5xl text-orange-600 ">More about </span>
          <span className="font-bold text-5xl  ">
            France
          </span>
        </h2>
      <div className="flex flex-col md:flex-row gap-6">
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
        <div className="flex-1 space-y-12 pr-2">
          <div
            id="documents"
            ref={documentsRef}
            className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents required to study in France
              </h3>
              <p className="text-gray-700 mb-4">
               To study in France as an international student, there are specific requirements for documents that depend on the course of study and the institution. Here is a list of documents that are commonly required to study in France:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Application form</li>
                <li>Identity Proof</li>
                <li>Educational documents like high school or secondary school academic transcripts, Bachelor’s Degree
                 (if pursuing a Master's), various Diplomas or Degree certificates.</li>
                <li>Letter of Motivation and Statement of Purpose</li>
                <li>Curriculum Vitae (CV) or Resume</li>
                <li>Letters of Recommendation</li>
                <li>Financial documents</li>
                <li>Visa documents</li>
                <li>Health insurance</li>
              </ul>
              <div className="mt-6 text-left">
                <button onClick= {()=> setIsOpen(true)} className="px-6 py-3 bg-white text-blue-900 hover:cursor-pointer font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
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
                 France study visa process
               </h3>
               <p className="text-gray-700 mb-4">
                 France has a very simple procedure for student visas. Students must complete the Campus France visa application process prior to applying for the French visa. An interview will be conducted by Campus France and after getting an NOC, they need to book a visa appointment with the VFS.
               </p>            
               <div className="mt-6 text-left">
                 <button onClick={()=> setIsOpen(true)} className="px-6 py-3 bg-white hover:cursor-pointer text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
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

