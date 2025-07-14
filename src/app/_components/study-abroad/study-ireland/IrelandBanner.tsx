"use client";
import { useState } from "react";
import Image from "next/image";
import StudyAbroadModal from "../study-mauritius/StudyAbroadModal";

export default function IrelandBanner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className=" bg-gradient-to-br from-white via-red-50 to-green-500 px-4 md:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            <span className="font-bold text-black">Ireland:</span> Learn, explore and <br /> grow in a vibrant <br />international community.
          </h1>
          <button
            className="mt-6 bg-[#143B85] text-white px-6 py-3 rounded-md font-semibold"
            onClick={() => setShowModal(true)}
          >
            Free Expert Consultation
          </button>
              <button
            className="mt-6 ml-4 bg-[#143B85] text-white px-6 py-3 rounded-md font-semibold"
           
          >
            View & Download Brochure
          </button>
        </div>
        <div className="flex-1 relative w-full max-w-sm mx-auto">
          <Image
            src="/study-mauritius1.png"
            alt="Student"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#EDF2FA] mt-10 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">28+</p>
          <p className="text-gray-700 mt-2 font-medium">Universities</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">€7k-€30k</p>
          <p className="text-gray-700 mt-2 font-medium">Annual tuition fees</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">30k+</p>
          <p className="text-gray-700 mt-2 font-medium">International Students</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#143B85]">2 Years</p>
          <p className="text-gray-700 mt-2 font-medium">Post-Study Work Visa</p>
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
