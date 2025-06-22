import React from "react";

{/*import */}
// import BookConsultationForm from '../_components/study-abroad/BookConsultationForm';

{/*example of how this component should be used */}
     //<section className="flex flex-col lg:flex-row justify-between gap-8 px-6 lg:px-24 py-16">

             //        <div className="lg:w-2/3">       //Left content 
             //            {/* content */}
             //         </div>
            
             //       <BookConsultationForm  />          //Right side - the form section  
     // </section > 
     
const FreeConsultationForm = ({ className = "" }) => {
  return (
    <div
      className={`w-full lg:w-1/3 max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-200 ${className}`}
    >
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

        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Year</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
        </select>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="consent" className="mt-1" />
          <label htmlFor="consent" className="text-xs text-gray-600">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from
            Edwise to assist with this enquiry.
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

export default FreeConsultationForm;
