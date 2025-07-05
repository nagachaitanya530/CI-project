"use client";

import { useRef } from "react";

export default function ScrollTabs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
       
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          ACT{" "}
          <span className="relative inline-block font-bold">
            <span className="relative z-10">Overview</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-[6px] border-red-500 z-0 rounded-sm"></span>
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-800 mt-4">
          The ACT test is a curriculum and standards-based educational and career planning tool that assesses students’ academic readiness for college-level studies. The ACT exam is conducted 7 times per year in India. The exam is conducted in the months of September, October, December, February, April, June, and July.
          <br />
          <br />
          It is administered by ACT, Inc. It is a standardized test that is required to be taken by students looking for admission to undergraduate schools based primarily in the US and Canada.
        </p>

       
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Types Of <span className="underline decoration-red-500">ACT Test Exam</span>
          </h2>

        
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2">
              ACT as Pen & Paper Test (Testing Center)
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              It is a paper-and-pencil test. You will write your essay in pencil (no mechanical pencils or ink pens) on the lined pages of an answer folder that will be provided to you.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2">
              ACT as Computer Delivered (Outside US only)
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              The ACT consists of four multiple-choice tests in English, mathematics, reading, and science. Computer-based exam started in 2021.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
