"use client";

import React from "react";
import { Info, CreditCard, CalendarDays, RefreshCcw } from "lucide-react";

const miscDetails = [
  {
    icon: Info,
    title: "Score Validity",
    value: "2 years",
  },
  {
    icon: CreditCard,
    title: "Registration Mode",
    value: "Edwise Centre / Online",
  },
  {
    icon: CreditCard,
    title: "Mode of Payment",
    value: "Debit Card / Credit Card / UPI",
  },
  {
    icon: CalendarDays,
    title: "Test Frequency",
    value: "Multiple times a month",
  },
  {
    icon: RefreshCcw,
    title: "Retake Policy",
    value: "Next available date",
  },
  {
    icon: CalendarDays,
    title: "Score Reporting Time",
    value: "Approximately 4–8 calendar days",
  },
];

const feeDetails = [
  {
    type: "Test Fee",
    amount: "₹16,900/-",
  },
  {
    type: "Rescheduling Fee",
    amount: "₹5,900/-",
  },
  {
    type: "Extra Score Reporting Fee",
    amount: "₹1,950/-",
  },
];

const TOEFLMisc = () => {
  return (
    <section id="misc" className="scroll-mt-32 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
<<<<<<< HEAD
=======
        {/* Heading */}
>>>>>>> cost-of-studying-usa
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f98]">
            Miscellaneous Details
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Additional important information and applicable TOEFL exam-related charges.
          </p>
        </div>

<<<<<<< HEAD
=======
        {/* Info Cards */}
>>>>>>> cost-of-studying-usa
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {miscDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="text-[#1f3f98]" size={24} />
                <h4 className="text-lg font-semibold text-[#1f3f98]">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700">{item.value}</p>
            </div>
          ))}
        </div>

<<<<<<< HEAD
=======
        {/* Fees Section */}
>>>>>>> cost-of-studying-usa
        <div className="bg-white border-l-4 border-[#1f3f98] p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#1f3f98] mb-4">
            TOEFL Exam Fees
          </h3>
          <ul className="space-y-3 text-gray-700">
            {feeDetails.map((fee, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-2 last:border-none"
              >
                <span>{fee.type}</span>
                <span className="font-medium text-gray-900">{fee.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TOEFLMisc;
