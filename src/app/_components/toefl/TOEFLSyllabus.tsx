"use client";

import React from "react";
import { NotebookPen } from "lucide-react";

const TOEFLSyllabus = () => {
  return (
    <section id="syllabus" className="scroll-mt-32 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 text-[#1f3f98]">
            <NotebookPen size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">TOEFL Syllabus</h2>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The TOEFL test is divided into four main sections – Reading, Listening, Writing, and Speaking. Here's a detailed breakdown of each component:
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
          <table className="min-w-full divide-y divide-gray-200 text-base text-left bg-white">
            <thead className="bg-gradient-to-r from-[#1f3f98] to-blue-700 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Section</th>
                <th className="px-6 py-4 font-semibold">Format</th>
                <th className="px-6 py-4 font-semibold">Tasks</th>
                <th className="px-6 py-4 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-5 font-medium">Reading</td>
                <td className="px-6 py-5">2 passages, 10 questions each</td>
                <td className="px-6 py-5">20</td>
                <td className="px-6 py-5">35 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-5 font-medium">Listening</td>
                <td className="px-6 py-5">
                  3 lectures (3–5 min) <br />
                  2 conversations (3 min)
                </td>
                <td className="px-6 py-5">28</td>
                <td className="px-6 py-5">36 minutes</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-medium" rowSpan={2}>Writing</td>
                <td className="px-6 py-5">Integrated Task – Read (3 min), Listen (2 min), Write (15 min)</td>
                <td className="px-6 py-5">1</td>
                <td className="px-6 py-5">20 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-5">Academic Discussion Task</td>
                <td className="px-6 py-5">1</td>
                <td className="px-6 py-5">10 minutes</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-medium" rowSpan={2}>Speaking</td>
                <td className="px-6 py-5">
                  Independent Task <br />
                  (Prep: 15–30 sec, Speak: 45–60 sec)
                </td>
                <td className="px-6 py-5">1</td>
                <td className="px-6 py-5" rowSpan={2}>16 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-5">
                  3 Integrated Tasks – Read / Listen / Speak <br />
                  (Prep: 15–30 sec, Speak: 45–60 sec)
                </td>
                <td className="px-6 py-5">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TOEFLSyllabus;
