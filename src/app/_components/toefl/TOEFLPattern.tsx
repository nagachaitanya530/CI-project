"use client";

import React from "react";
import { LayoutList } from "lucide-react";

const TOEFLPattern = () => {
  return (
    <section id="pattern" className="scroll-mt-32 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
<<<<<<< HEAD

=======
        {/* Heading */}
>>>>>>> cost-of-studying-usa
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 text-[#1f3f98]">
            <LayoutList size={30} />
            <h2 className="text-3xl md:text-4xl font-bold">TOEFL Exam Pattern</h2>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The Internet-Based TOEFL Test (iBT) evaluates four key English language skills – Reading, Listening, Speaking, and Writing. Here's the detailed format:
          </p>
        </div>

<<<<<<< HEAD
=======
        {/* Table */}
>>>>>>> cost-of-studying-usa
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-[#1f3f98] to-blue-700 text-white text-left text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Section</th>
                <th className="px-6 py-4 font-semibold">Timing</th>
                <th className="px-6 py-4 font-semibold">Questions / Tasks</th>
                <th className="px-6 py-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-base divide-y divide-gray-100">
              {[
                {
                  section: "Reading",
                  time: "35 minutes",
                  tasks: "20 questions",
                  desc: "Read passages and respond to questions",
                },
                {
                  section: "Listening",
                  time: "36 minutes",
                  tasks: "28 questions",
                  desc: "Answer questions about brief lectures or discussions",
                },
                {
                  section: "Speaking",
                  time: "16 minutes",
                  tasks: "4 tasks",
                  desc: "Talk about familiar topics and discuss content read/heard",
                },
                {
                  section: "Writing",
                  time: "29 minutes",
                  tasks: "2 tasks",
                  desc: "Read, listen, and write responses; state and support opinions",
                },
              ].map((row, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="px-6 py-5 font-medium">{row.section}</td>
                  <td className="px-6 py-5">{row.time}</td>
                  <td className="px-6 py-5">{row.tasks}</td>
                  <td className="px-6 py-5">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

<<<<<<< HEAD
=======
        {/* Note */}
>>>>>>> cost-of-studying-usa
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl px-6 py-4 text-gray-700 text-base">
          <p>
            <strong>Total Duration:</strong> Approx. 2 hours
          </p>
          <p>
            <strong>Test Mode:</strong> Internet-Based Test (iBT)
          </p>
        </div>
      </div>
    </section>
  );
};

export default TOEFLPattern;
