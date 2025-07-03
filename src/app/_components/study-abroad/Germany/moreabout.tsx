"use client";

import type { JSX } from "react";
import TOC from "./TOC";

interface DocumentItem {
  heading: string;
  description: JSX.Element;
}
interface VisaItem {
  heading: string;
  description: JSX.Element;
}

const doc_items: DocumentItem[] = [
  {
    heading: "Documents required to study in Germany",
    description: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Valid Passport</li>
          <li>1 copy of your passport’s data page</li>
          <li>3 passport pictures according to biometric specifications</li>
          <li>Cover letter from applicant explaining purpose and duration of stay</li>
          <li>Letter of admission from German university</li>
          <li>Proof of payment of study fees, if applicable</li>
          <li>Proof of language proficiency in English and/or German</li>
          <li>Proof of other academic qualifications, if applicable</li>
          <li>
            Proof of financial means:
            <ul className="list-disc pl-5 mt-1">
              <li>Confirmation of scholarship/stipend</li>
              <li>“Verpflichtungserklärung” by sponsor living in Germany</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
];

const visa_items: VisaItem[] = [
  {
    heading: "Germany Study Visa Process",
    description: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Apply at least six months prior to your intended start date.</li>
          <li>Apply for APS (Academic Evaluation Centre).</li>
          <li>Offer letter processing: 2-3 weeks (varies by university).</li>
          <li>Pay one year’s tuition fees upon receiving the offer letter.</li>
          <li>Set aside funds for living expenses (Block Account).</li>
          <li>Purchase Travel and Health Insurance.</li>
          <li>Apply for a visa online.</li>
          <li>
            Submit visa application, passport, documents, and 3 photos at VFS and complete biometrics.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function MoreAbout({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
        More About{" "}
        <span className="font-bold underline underline-offset-4 decoration-red-600">
          Germany
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* TOC */}
        <aside className="lg:w-1/3 w-full">
          <div className="sticky top-24">
            <TOC />
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-10">
          {/* Document Section */}
          {doc_items.map((item, i) => (
            <div
              key={i}
              id="document"
              className="border border-gray-300 rounded-2xl p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">{item.heading}</h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.description}
              </div>
              <button
                onClick={onFreeConsultClick}
                className="mt-6 px-5 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow transition"
              >
                Free Expert Consultation
              </button>
            </div>
          ))}

          {/* Visa Section */}
          {visa_items.map((item, i) => (
            <div
              key={i}
              id="visa"
              className="border border-gray-300 rounded-2xl p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">{item.heading}</h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.description}
              </div>
              <button
                onClick={onFreeConsultClick}
                className="mt-6 px-5 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow transition"
              >
                Free Expert Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
