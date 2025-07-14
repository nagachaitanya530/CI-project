"use client";

import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    resume: null as File | null,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted!");
    console.log(formData);
  };

  return (
    <section className="w-full bg-[#1c3d92] text-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/study-abroad-home/graduation-girls.jpg" // Replace with your actual image path
            alt="Professional People"
            className="max-w-[500px] w-full object-contain"
          />
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <h2 className="text-4xl font-bold tracking-wide relative w-fit">
            <span className="border-b-4 border-red-500 pb-1">Apply</span> For This Job
          </h2>

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm block mb-1">First Name</label>
              <input
                name="firstName"
                placeholder="First Name..."
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Last Name</label>
              <input
                name="lastName"
                placeholder="Last Name..."
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm block mb-1">Email ID</label>
              <input
                name="email"
                type="email"
                placeholder="Email ID..."
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Mobile Number</label>
              <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number..."
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="text-sm block mb-1">Upload Resume (PDF Only.....)</label>
            <input
              type="file"
              accept=".pdf"
              name="resume"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-white bg-transparent text-white file:bg-white file:text-[#1c3d92] file:font-medium file:border-0 file:rounded file:px-4 file:py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Type Message..."
              onChange={handleChange}
              className="w-full px-4 py-3 h-32 rounded resize-none border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border border-white text-white font-semibold py-3 rounded-full transition duration-300 hover:bg-white hover:text-[#1c3d92]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
