"use client";
import { FileText, IdCardLanyard } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function More() {
  const [select, Selected] = useState("doc");

  const docRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);

  const handleClick = (section: "doc" | "vis") => {
    Selected(section);
    if (section === "doc") {
      docRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      visaRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Automatically update button highlight when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "doc-section") {
              Selected("doc");
            } else if (entry.target.id === "visa-section") {
              Selected("vis");
            }
          }
        });
      },
      { threshold: 1 } // Fires when 50% of the section is visible
    );

    if (docRef.current) observer.observe(docRef.current);
    if (visaRef.current) observer.observe(visaRef.current);

    return () => {
      if (docRef.current) observer.unobserve(docRef.current);
      if (visaRef.current) observer.unobserve(visaRef.current);
    };
  }, []);

  return (
    <>
      <h1 className="text-xl sm:text-5xl text-center xl:text-5xl mb-10">
        More about <span className=" font-semibold  decoration-red-500 underline">Australia</span>
      </h1>

      <div className="relative sm:px-5 flex flex-col lg:flex-row gap-10 justify-center sm:m-10 p-4">
        {/* Sidebar Buttons */}
        <div className="hidden lg:flex flex-col gap-4 md:sticky top-20 h-fit">
          <button
            onClick={() => handleClick("doc")}
            className={`text-2xl border-2 p-2 rounded-full w-[22rem] flex justify-center items-center gap-2 ${
              select === "doc"
                ? "bg-blue-800 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
          >
            <FileText className="w-6 h-7" />
            Documents
          </button>

          <button
            onClick={() => handleClick("vis")}
            className={`text-2xl border-2 p-2 rounded-full w-[22rem] flex justify-center items-center gap-2 ${
              select === "vis"
                ? "bg-blue-800 text-white"
                : "bg-white text-black hover:bg-blue-800 hover:text-white"
            }`}
          >
            <IdCardLanyard className="w-6 h-7" />
            Visa
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-10 items-center w-full scroll-smooth max-w-3xl">
          {/* Documents Section */}
          <div
            ref={docRef}
            id="doc-section"
            className="border-2 rounded-4xl p-10 scroll-mt-20 w-full"
          >
            <h2 className="sm:text-3xl text-xl font-semibold">
              Documents required to study in Australia
            </h2>
            <p className="text-xl mt-5">
              Here are some of the common documents required to study in
              Australia:
            </p>
            <ul className="sm:text-xl ml-5 list-disc text-md text-gray-500 space-y-2 mb-10 mt-4">
              <li>Confirmation of Enrollment (CoE)</li>
              <li>Student visa</li>
              <li>Academic transcripts and certificates</li>
              <li>Statement of Purpose</li>
              <li>Letter of Recommendation</li>
              <li>
                English language proficiency test scores (IELTS, TOEFL, PTE)
              </li>
              <li>A valid passport</li>
              <li>Visa application fee</li>
              <li>Financial Documents</li>
              <li>Work Documents (If any)</li>
            </ul>
            <a
              href="#"
              className="border-1 p-2 sm:p-3 rounded-xl border-blue-700 hover:text-white hover:bg-blue-800"
            >
              Free Expert Consultation
            </a>
          </div>

          {/* Visa Section */}
          <div
            ref={visaRef}
            id="visa-section"
            className="border-2 rounded-4xl p-9 w-full max-w-3xl scroll-mt-20"
          >
            <h1 className="text-3xl font-semibold">Australia study visa process</h1>
            <ul className="list-disc text-md text-gray-500 ml-5 mb-10 mt-4 space-y-2">
              <li>Valid OSHC (Overseas Student Health Cover)</li>
              <li>
                All academic documents, including resumes, are needed for
                admission processes.
              </li>
              <li>Relevant work experience (in case of a gap in education)</li>
              <li>
                Proof of Genuine Student (GS) covering all relevant points.
              </li>
              <li>
                Funds covering your Tuition Fee, Living Expenses, and Tickets.
              </li>
              <li>Usually, the visa processing time is 2 to 6 weeks.</li>
            </ul>
            <a
              href="#"
              className="border-1 p-3 rounded-xl border-blue-700 hover:text-white hover:bg-blue-800"
            >
              Free Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
