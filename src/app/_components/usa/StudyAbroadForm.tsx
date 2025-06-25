"use client";

import React from "react";

const StudyAbroadForm = () => {
  return (
    <form className="bg-white shadow-sm rounded-3xl border border-[#dbe3ef] p-6 md:p-8 space-y-4 w-full max-w-md">
      <h2 className="text-[18px] md:text-xl font-semibold text-[#1f3f98] mb-2 leading-snug">
        Book your Free Consultation<br />
        with Trustworthy Counsellors
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl placeholder-[#b0c1db] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl placeholder-[#b0c1db] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Mobile Number"
        className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl placeholder-[#b0c1db] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]"
      />

      {/* Preferred Course */}
      <input
        type="text"
        placeholder="Preferred Course"
        className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl placeholder-[#b0c1db] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]"
      />

      {/* Month */}
      <select className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl text-[#1f3f98] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]">
        <option>Select Month</option>
        <option>January</option>
        <option>May</option>
        <option>September</option>
      </select>

      {/* Year */}
      <select className="w-full px-4 py-3 border border-[#dbe3ef] text-sm rounded-xl text-[#1f3f98] focus:outline-none focus:ring-2 focus:ring-[#1f3f98]">
        <option>Select Year</option>
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
      </select>

      {/* Consent */}
      <label className="flex items-start gap-2 text-sm text-[#1f3f98] leading-tight">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 accent-[#1f3f98]"
          defaultChecked
        />
        I consent to receiving Calls, WhatsApp, Email and Google RCS from CI to
        assist with this enquiry.
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#1f3f98] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#18337e] transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default StudyAbroadForm;
