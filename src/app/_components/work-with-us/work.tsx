"use client";

import { useState } from "react";
import { Building2, ChevronDown } from "lucide-react";

type Job = {
  title: string;
  location: string;
  experience: string;
  positions: number;
};

const jobData: Job[] = [
  { title: "Marketing Executive", location: "BANGALORE", experience: "0–5 years", positions: 2 },
  { title: "Academic Counselor", location: "VIZAG", experience: "0–5 years", positions: 1 },
  { title: "Front Office Executive", location: "VADODARA", experience: "Freshers with good communication in English", positions: 1 },
  { title: "Telecalling Executive", location: "SURAT", experience: "Freshers with good communication in English", positions: 1 },
  { title: "Front Office Executive", location: "SURAT", experience: "Freshers with good communication in English", positions: 1 },

 { title: "UI/UX Designer", location: "DELHI", experience: "2–4 years", positions: 1 },
  { title: "HR Executive", location: "KOLKATA", experience: "1–3 years", positions: 1 },
  { title: "Content Writer", location: "KOLKATA", experience: "0–5 years", positions: 2 },
  { title: "Social Media Manager", location: "INDORE", experience: "3–5 years", positions: 1 },
    { title: "Graphic Designer", location: "MUMBAI", experience: "1–3 years", positions: 1 },
 { title: "Digital Marketing Executive", location: "DUBAI", experience: "2–4 years", positions: 2 },
  { title: "Full Stack Developer", location: "PUNE", experience: "3–6 years", positions: 1 },
   { title: "QA Tester", location: "INDORE", experience: "0–3 years", positions: 2 },
  { title: "IT Support Executive", location: "HYDERABAD", experience: "1–3 years", positions: 1 }
];
export default function WorkWithUs() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");

  const uniqueLocations = Array.from(new Set(jobData.map((job) => job.location))).sort();
  const uniquePositions = Array.from(new Set(jobData.map((job) => job.title))).sort();

  const filteredJobs = jobData.filter(
    (job) =>
      (!location || job.location === location) &&
      (!position || job.title === position)
  );

  
  return (
    <div className="min-h-screen bg-white text-gray-1000 px-8 sm:px-16 py-10 mt-10">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <h1 className="text-5xl font-bold mb-4 sm:mb-0">Work With Us</h1>

        <div className="flex flex-wrap gap-4 justify-end">
          <div className="relative w-[280px]">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-blue-300 rounded-full px-5 py-3 appearance-none focus:outline-none"
            >
              <option value="">Select Location</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
          </div>

          <div className="relative w-[280px]">
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border border-blue-300 rounded-full px-5 py-3 appearance-none focus:outline-none"
            >
              <option value="">Select Position</option>
              {uniquePositions.map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
          </div>

          <button
            onClick={() => {
              setLocation("");
              setPosition("");
            }}
            className="w-[150px] bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-blue-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-blue-800" size={20} />
                <h3 className="text-lg font-medium text-blue-800">{job.title}</h3>
              </div>
              <hr className="border-gray-200 mb-4" />
              <span className="inline-block bg-blue-50 border border-blue-300 text-blue-800 text-xs px-3 py-1 rounded-full mb-4">
                {job.location}
              </span>
              <p className="text-sm text-gray-600 h-[48px]">
                Candidates with {job.experience} of work experience — {job.positions} Position{job.positions > 1 ? "s" : ""}
              </p>
              <div className="mt-6 flex gap-4">
                {["Apply Now", "More Info..."].map((label, i) => (
                  <button
                    key={i}
                    className="flex-1 border border-blue-800 text-blue-800 py-2 rounded-lg text-sm hover:bg-blue-800 hover:text-white transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
