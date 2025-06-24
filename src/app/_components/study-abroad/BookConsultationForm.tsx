import React from "react";

const BookConsultationForm = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-blue-900 text-sm font-semibold mb-4 leading-snug">
        Book your Free Consultation with <br /> Trustworthy Counsellors
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Preferred Course"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
        </select>

        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Year</option>
          <option>2025</option>
          <option>2026</option>
        </select>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="consent" className="mt-1" />
          <label htmlFor="consent" className="text-xs text-gray-600">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-700 border border-blue-700 rounded-md py-2 font-medium hover:bg-blue-700 hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookConsultationForm;