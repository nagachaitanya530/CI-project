import React from "react";

const BookConsultationForm = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200 ml-48">
      <h3 className="text-gray-800 text-base font-semibold mb-6 leading-tight">
        Book your Free Consultation<br />
        <span className="text-blue-600">with Trustworthy Counsellors</span>
      </h3>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Preferred Course"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Year</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
        </select>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            required
            className="mt-1"
          />
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
