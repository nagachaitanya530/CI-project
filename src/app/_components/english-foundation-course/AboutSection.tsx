import React from "react";
import Image from 'next/image';
import Link from 'next/link';
const AboutSection = () => {
  return (
    <section className="bg-white py-10 px-6">

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Foundation Grammar",
                desc: "You will learn basic concepts of English grammar and how to use them in writing and speaking.",
              },
              {
                title: "Advanced Grammar",
                desc: "You will also learn advanced level concepts like conditional sentences, passive sentences, etc. and their utilisation for a specific purpose of more advanced communication.",
              },
              {
                title: "Interpersonal Skills",
                desc: "You will learn how to communicate in different circumstances with different people in various settings.",
              },
              {
                title: "Vocabulary",
                desc: "Possessing extensive and impressive vocabulary is essential for advanced communication.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                  <span className="text-lg">✔️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="relative w-full h-64 sm:h-72 md:h-80">
            <Image
              src="/english-course/first.webp"
              alt="Course"
              fill
              className=" object-cover rounded"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full shadow text-gray-800 font-semibold">
              Group Courses
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Want something more advanced?</h3>
            <p className="text-gray-700 mb-4">Check our Business English Course.</p>
            <Link href="/fees/ieltsturbo">
            <button
              className="bg-[#284c87] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Business English
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
