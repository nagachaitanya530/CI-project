"use client";
import Image from "next/image";
import { Award } from 'lucide-react';

export default function WhyStudySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 gap-10 py-12 md:px-20 bg-white ">
      <div className="grid md:grid-cols-3 gap-10 items-start px-4">
        {/* Left - Reasons */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why <span className="font-bold text-black underline decoration-red-500">Study In UK?</span>
          </h2>

          <ul className="space-y-6">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border-b pb-6">
                <div className="w-10 h-10 rounded-full bg-[#EDF2FA] flex items-center justify-center">
                  {/* Replace with actual icon if needed */}
                  <item.icon className="w-5 h-5 text-blue-700" />

                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Form */}
<<<<<<< HEAD
<<<<<<< Updated upstream
       
=======
        <div className="border border-blue-200 rounded-3xl p-6 shadow-sm md:col-span-1">
          <h3 className="text-lg font-semibold text-[#143B85] mb-4">
            Book your Free Consultation <br /> with Trustworthy Counsellors
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Preferred Course" className="w-full px-4 py-2 border rounded-md" />
            <select className="w-full px-4 py-2 border rounded-md">
              <option>Select Month</option>
              <option>January</option>
              <option>May</option>
              <option>September</option>
            </select>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>Select Year</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
            </select>
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
            </label>
            <button type="submit" className="bg-[#143B85] text-white w-full py-2 rounded-md font-semibold">
              Submit
            </button>
          </form>
        </div>
>>>>>>> Stashed changes
=======
       
>>>>>>> cost-of-studying-usa
      </div>
    </section>
  );
}


const reasons = [
  {
    title: "Prestigious Universities",
    description:
      "The top universities in the UK are some of the world's oldest and most prestigious universities, attracting international students for centuries.",
    icon: Award,
  },
  {
    title: "Sandwich Programs",
    description:
      "Sandwich programs offer a unique opportunity for students to learn in college and attain practical experience through college based placement.",
    icon: Award,
  },
  {
    title: "Fifteen of the World's Top 100 Universities",
    description:
      "The UK is home to fifteen universities that rank amongst the top 100 universities in the world according to the QS World Ranking. The prestigious universities in the UK provide students with a rich academic tradition and access to innovative research across various disciplines.",
    icon: Award,
  },
  {
    title: "Gateway to Europe",
    description:
      "Many European countries are within close proximity to the UK and are easily accessible through the local transport systems.",
    icon: Award,
  },
  {
    title: "Working Hours",
    description:
      "UK universities offer on-campus and off-campus job options up to 20 hours/week during study & 40 hours during vacation.",
    icon: Award,
  },
  {
    title: "Shorter Degrees",
    description:
      "Courses in UK for international students are usually shorter than other countries. Bachelor's- 3 years. Master's- 1 year.",
    icon: Award,
  },
];