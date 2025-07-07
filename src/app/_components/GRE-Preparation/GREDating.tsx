'use client'
import React, { useRef } from "react";
<<<<<<< HEAD
const GreDating = () => {
  return (
    <>
      <div id="dates" className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          GRE <span className="relative inline-block">
            <span className="z-10 relative">Dates</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-red-400 transform -translate-y-1" />
          </span>
        </h2>
        <p className="text-lg text-gray-900 mb-2">
          Prometric® exam centres offer computer-based testing throughout the year. The General Test may be available on particular days at testing locations outside the Prometric network. Please refer to the official website of GRE test for the list of exam venues and dates.
          Test takers are suggested to view the seat availability for your desired date and location and register early to secure their favoured exam venue and date.
        </p>
      </div>
      <div id="training" className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
        <h1 className="text-4xl font-bold mb-6">
          GRE <span className="text-black underline decoration-red-500 decoration-4">Training</span>
        </h1>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Salient Features of GRE training @ Edwise
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-10">
          <li>100 hours of intensive and comprehensive GRE preparation coaching.</li>
          <li>
            Mathematics for MBA by RS Agarwal, GRE Official Guide and Princeton GRE issued as courseware
          </li>
          <li>The GRE coaching is done by qualified, experienced and trained faculties</li>
          <li>
            Maximum 10-15 students per batch, ensuring individual attention to everyone attending the GRE test prep coaching.
          </li>
          <li>Strong focus on building fundamental knowledge in Math.</li>
          <li>10 full-length GRE mock tests</li>
          <li>Facility of shifting to any branch throughout India</li>
          <li>We conduct both online and offline sessions</li>
        </ul>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Timing</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Weekdays: Tuesday to Friday, 2 hours per day</li>
          <li>Weekends: Saturday and Sunday, 4 hours per day</li>
          <li>Fast track mode: Tuesday to Sunday, 4 hours per day</li>
        </ul>
      </div>
      <div className=" text-gray-800 px-6 py-12 md:px-20 bg-white scroll-mt-30">
        <h2 className="text-4xl font-light mb-4">
          Miscellaneous{" "}
          <span className="font-bold relative inline-block">
            Details
            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-400 rounded-full -mb-1 z-[-1]"></span>
          </span>
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Score Validity : 5 years</li>
          <li>Registration Mode : Online</li>
          <li>Mode of payment : Credit card / Debit Card</li>
          <li>Score Reporting time : approximately 8–10 working days</li>
          <li>Official Website : www.etsindia.org/gre/</li>
          <li>Test Administration Frequency : Daily</li>
          <li>
            Test Repetition policy : 21 days Max 5 times a calendar year
          </li>
        </ul>
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-2">Fees :</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Test Fee ₹22,550</li>
          <li>Extra Score Reporting Fee ₹2,900</li>
          <li>Rescheduling Fee ₹5,000</li>
        </ul>
      </div>
    </>
  );
};
=======

const GreDating = () => {
 

  return (
    <>
    <div id="dates" className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
      {/* GRE Overview Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        GRE <span className="relative inline-block">
          <span className="z-10 relative">Dates</span>
          <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-red-400 transform -translate-y-1" />
        </span>
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-900 mb-2">
      Prometric® exam centres offer computer-based testing throughout the year. The General Test may be available on particular days at testing locations outside the Prometric network. Please refer to the official website of GRE test for the list of exam venues and dates.
Test takers are suggested to view the seat availability for your desired date and location and register early to secure their favoured exam venue and date.
      </p>
    

{/* GRE Training     */}
    </div>
    <div id="training" className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">
        GRE <span className="text-black underline decoration-red-500 decoration-4">Training</span>
      </h1>

      {/* Salient Features */}
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        Salient Features of GRE training @ Edwise
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-10">
        <li>100 hours of intensive and comprehensive GRE preparation coaching.</li>
        <li>
          Mathematics for MBA by RS Agarwal, GRE Official Guide and Princeton GRE issued as courseware
        </li>
        <li>The GRE coaching is done by qualified, experienced and trained faculties</li>
        <li>
          Maximum 10-15 students per batch, ensuring individual attention to everyone attending the GRE test prep coaching.
        </li>
        <li>Strong focus on building fundamental knowledge in Math.</li>
        <li>10 full-length GRE mock tests</li>
        <li>Facility of shifting to any branch throughout India</li>
        <li>We conduct both online and offline sessions</li>
      </ul>

      {/* Timing */}
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Timing</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Weekdays: Tuesday to Friday, 2 hours per day</li>
        <li>Weekends: Saturday and Sunday, 4 hours per day</li>
        <li>Fast track mode: Tuesday to Sunday, 4 hours per day</li>
      </ul>
      </div>

{/* GRE mis */}
    <div id="fee" className="p-6 bg-white text-gray-800 ml-15 scroll-mt-30">
      <h2 className="text-4xl font-light mb-4">
        Miscellaneous{" "}
        <span className="font-bold relative inline-block">
          Details
          <span className="absolute left-0 bottom-0 w-full h-1 bg-red-400 rounded-full -mb-1 z-[-1]"></span>
        </span>
      </h2>

      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Score Validity : 5 years</li>
        <li>Registration Mode : Online</li>
        <li>Mode of payment : Credit card / Debit Card</li>
        <li>Score Reporting time : approximately 8–10 working days</li>
        <li>Official Website : www.etsindia.org/gre/</li>
        <li>Test Administration Frequency : Daily</li>
        <li>
          Test Repetition policy : 21 days Max 5 times a calendar year
        </li>
      </ul>

      <h3 className="text-xl font-bold text-blue-800 mt-6 mb-2">Fees :</h3>

      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Test Fee ₹22,550</li>
        <li>Extra Score Reporting Fee ₹2,900</li>
        <li>Rescheduling Fee ₹5,000</li>
      </ul>
    </div>

    </>
    
  );
};

>>>>>>> cost-of-studying-usa
export default GreDating;
