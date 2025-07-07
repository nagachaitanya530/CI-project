"use client";
import Image from "next/image";
import { Award } from 'lucide-react';

export default function WhyStudySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 gap-10 py-12 md:px-20 bg-white ">
      <div className="grid md:grid-cols-3 gap-10 items-start px-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why <span className="font-bold text-black underline decoration-red-500">Study In Mauritius?</span>
          </h2>

          <ul className="space-y-6">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border-b pb-6">
                <div className="w-10 h-10 rounded-full bg-[#EDF2FA] flex items-center justify-center">
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


=======
   
>>>>>>> cost-of-studying-usa
      </div>
    </section>
  );
}


const reasons = [
  {
    title: "Affordable Education",
    description:
      "Compared to other western nations, the universities in Mauritius offer lower tuition fees. Additionally, scholarships and financial aid programs significantly reduce the financial burden.",
    icon: Award,
  },
  {
    title: "Better Job Opportunities",
    description:
      "International students are permitted to work while studying in Mauritius and are eligible to work post-study if they meet the set criteria. This allows all the students to gain work experience.",
    icon: Award,
  },
  {
    title: "Easy Visa Process",
    description:
      "The application process and the visa process for studying in Mauritius are quite seamless for all international students.",
    icon: Award,
  },
  {
    title: "Internationally Recognised Qualification",
    description:
      "The programs offered by the universities in Mauritius are accredited and globally recognised. This means that the degree holds weightage worldwide.",
    icon: Award,
  },
  {
    title: "Culturally Diverse",
    description:
      "Mauritius is a melting pot of all cultures that provides students with a diverse environment and friendly people.",
    icon: Award,
  },
  {
    title: "Beautiful Surroundings",
    description:
      "With its tropical climate, beautiful beaches, and lush green vegetation, Mauritius is a beautiful nation to study in.",
    icon: Award,
  },
];


