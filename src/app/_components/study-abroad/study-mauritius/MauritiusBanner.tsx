"use client";
import { useState } from "react";
import Image from "next/image";
import StudyAbroadModal from "./StudyAbroadModal";

export default function MauritiusBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className=" bg-gradient-to-br from-white via-red-50 to-green-500 px-4 md:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            <span className="font-bold text-black">Mauritius:</span> Take a deep dive <br /> into your dream education
          </h1>
          <button
            className="mt-6 bg-[#143B85] text-white px-6 py-3 rounded-md font-semibold"
            onClick={() => setShowModal(true)}
          >
            Free Expert Consultation
          </button>
        </div>

        <div className="flex-1 relative w-full max-w-sm mx-auto">
          <Image
            src="/heroimg1.webp"
            alt="Student"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-[#EDF2FA] mt-10 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">9+</p>
          <p className="text-gray-700 mt-2 font-medium">Universities</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">MUR 25k–30k</p>
          <p className="text-gray-700 mt-2 font-medium">Annual tuition fees</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">3k+</p>
          <p className="text-gray-700 mt-2 font-medium">International Students</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">3 Years</p>
          <p className="text-gray-700 mt-2 font-medium">Post-Study Work Visa</p>
        </div>
      </div>

      {/* Modal component */}
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
