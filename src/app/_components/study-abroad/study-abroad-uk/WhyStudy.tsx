"use client";
import Image from "next/image";
import { Award } from 'lucide-react';

export default function WhyStudySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 gap-10 py-12 md:px-20 bg-white">
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
