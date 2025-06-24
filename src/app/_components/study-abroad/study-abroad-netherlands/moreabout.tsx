"use client";

import React, { useState } from "react";
import { FileText, IdCardLanyard } from "lucide-react";

const MoreAbout: React.FC = () => {
  const [select, setSelect] = useState("doc");

  return (
    <section>
      <h1 className="text-center text-5xl font-bold mb-12">
        More about <span className="text-blue-800">Netherlands</span>
      </h1>

      <div className="relative sm:px-5 flex flex-col md:flex-row gap-10 justify-center sm:m-10 p-4">
        {/* Right Side – Navigation */}
        <div className="hidden lg:flex flex-col gap-4 md:sticky top-10 h-fit justify-center">
          <a
            href="#doc"
            onClick={() => setSelect("doc")}
            className={`text-lg border-2 p-2 rounded-full w-[22rem] flex justify-center items-center gap-2 ${
              select === "doc"
                ? "bg-blue-900 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
          >
            <FileText className="w-6 h-7" />
            Documents
          </a>

          <a
            href="#vis"
            onClick={() => setSelect("vis")}
            className={`text-lg border-2 p-2 rounded-full w-[22rem] flex justify-center items-center gap-2 ${
              select === "vis"
                ? "bg-blue-900 text-white"
                : "bg-white text-black hover:bg-blue-900 hover:text-white"
            }`}
          >
            <IdCardLanyard className="w-6 h-7" />
            Visa
          </a>
        </div>

        {/* Left Side – Content */}
        <div className="flex flex-col gap-10 w-full max-w-3xl">
          {/* Documents Section */}
          <div id="doc" className="border-2 rounded-4xl p-10">
            <h2 className="text-3xl font-semibold">
              Documents required to study in Netherlands
            </h2>
            <p className="text-xl mt-5">
              Here are the documents required to study in Netherlands:
            </p>
            <ul className="text-xl ml-5 list-disc text-gray-500 space-y-2 mb-10">
              <li>Completed Application Form</li>
              <li>Passport</li>
              <li>Academic Transcripts</li>
              <li>English Language Proficiency</li>
              <li>Letter of Recommendation</li>
              <li>Statement of Purpose (SOP) or Personal Statement</li>
              <li>CV/Resume</li>
              <li>Portfolio (if applicable)</li>
              <li>Financial Documentation</li>
              <li>Health and Medical Insurance</li>
            </ul>
            <a
              href="#"
              className="border border-blue-900 p-3 rounded-xl hover:text-white hover:bg-blue-900"
            >
              Free Expert Consultation
            </a>
          </div>

          {/* Visa Section */}
          <div id="vis" className="border-2 rounded-4xl p-9 w-full">
            <h2 className="text-3xl font-semibold mb-5">
              Netherlands Study Visa Process
            </h2>
            <ul className="list-disc text-md text-gray-500 ml-5 mb-10 space-y-2">
              <li>A candidate must have an unconditional Offer Letter</li>
              <li>
                Financial proof for the next 12 months covering tuition fees and
                living expenses
              </li>
              <li>
                All relevant academic documents along with resume
              </li>
              <li>Medical insurance is mandatory</li>
              <li>Police clearance certificate</li>
            </ul>
            <a
              href="#"
              className="border border-blue-900 p-3 rounded-xl hover:text-white hover:bg-blue-900"
            >
              Free Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
