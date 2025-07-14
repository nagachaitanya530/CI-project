"use client";
import Image from "next/image";
import StudyAbroadModal from '../study-mauritius/StudyAbroadModal';
import { useState } from "react";
function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="bg-gradient-to-br from-white via-red-50 to-green-300 px-4 md:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            <span className="font-bold text-blue-600">India:</span> Grow and prosper
 <br /> in the motherland
          </h1>
          <button className="mt-6 bg-[#143B85] text-white px-6 py-3 rounded-md font-semibold"
          onClick={() => setShowModal(true)}>
            Free Expert Consultation
          </button>
        </div>
        <div className="flex-1 relative w-full max-w-sm mx-auto">
          <Image
            src="/study-abroad/study-abrd-india.webp" 
            alt="Student"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}

export default HeroSection;