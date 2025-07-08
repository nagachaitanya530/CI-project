"use client";

import React from "react";
import { CheckCircle, Clock3, Users, BookOpenCheck } from "lucide-react";

const features = [
  "30 hours of intensive and comprehensive training",
  "Faculty trained by ETS",
  "Maximum 10–15 students per batch for personalized sessions",
  "Equal focus on Listening, Reading, Writing, and Speaking",
  "Guidance on all question types with sufficient practice tests",
  "Training by qualified, experienced, and certified faculty",
  "5 full-length mock tests for real test experience",
  "TOEFL Princeton courseware provided",
  "Flexibility to shift across any Edwise branch in India",
  "Online and Offline sessions available",
];

const timings = [
  {
    mode: "Weekdays",
    detail: "Tuesday to Friday – 2 hours per day",
  },
  {
    mode: "Weekends",
    detail: "Saturday and Sunday – 4 hours per day",
  },
  {
    mode: "Fast Track",
    detail: "Tuesday to Sunday – 4 hours per day",
  },
];

const TOEFLTraining = () => {
  return (
    <section id="training" className="scroll-mt-32 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f98]">
            TOEFL Training at Edwise
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Boost your TOEFL preparation with comprehensive training by ETS-certified faculty at Edwise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {features.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-gray-50 hover:bg-gray-100 transition p-5 rounded-xl border border-gray-200 shadow-sm"
            >
              <CheckCircle className="text-green-600 mt-1" size={22} />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-[#1f3f98] p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Clock3 className="text-[#1f3f98]" size={24} />
            <h3 className="text-xl font-semibold text-[#1f3f98]">Training Schedule</h3>
          </div>
          <ul className="text-gray-700 space-y-2 pl-6 list-disc">
            {timings.map((slot, index) => (
              <li key={index}>
                <strong>{slot.mode}:</strong> {slot.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TOEFLTraining;
