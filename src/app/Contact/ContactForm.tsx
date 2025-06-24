'use client';

import React from 'react';
import Link from "next/link";
export default function ContactForm() {
  return (
    <section className=" mx-auto py-12 px-14">
<div className="text-sm text-blue-800 mb-2">
  <Link href="/study-abroad" className="hover:underline text-blue-800">
    Home
  </Link>{" "}
  &gt; <span className="font-semibold">Contact us</span>
</div>

<h1 className="text-3xl md:text-4xl font-medium text-center mb-10">
  Contact Edwise –{" "}
  <span className="font-bold underline decoration-red-500">Unlock</span> Overseas Education Opportunities
</h1>
      <form className=" bg-white p-6 md:p-10 rounded-xl shadow-xl max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100">
        <input type="text" placeholder="First Name" className="border rounded-md px-4 py-2" />
        <input type="text" placeholder="Last Name" className="border rounded-md px-4 py-2" />
        <input type="email" placeholder="Email ID" className="border rounded-md px-4 py-2" />
        <input type="text" placeholder="Mobile Number" className="border rounded-md px-4 py-2" />
        <select className="border rounded-md px-4 py-2 text-gray-500">
          <option>Select Destination</option>
        </select>
        <input type="text" placeholder="Course" className="border rounded-md px-4 py-2" />
        <select className="border rounded-md px-4 py-2 text-gray-500">
          <option>Please Select</option>
        </select>
        <select className="border rounded-md px-4 py-2 text-gray-500">
          <option>Select Year</option>
        </select>

        <div className="md:col-span-2 flex items-start gap-2">
          <input type="checkbox" defaultChecked />
          <p className="text-sm">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
          </p>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-white text-blue-700 border border-blue-700 px-6 py-2 rounded-md hover:bg-blue-50 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
