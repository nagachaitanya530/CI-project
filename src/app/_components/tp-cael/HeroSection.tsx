"use client"
import Image from "next/image";
import StudyAbroadModal from "../study-abroad/study-mauritius/StudyAbroadModal";
import { useState } from "react";

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gray-100 py-12" data-aos="fade-in" data-duration="0">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
          <div className="max-w-xl w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">CAEL - 2025</h1>
            <div className="space-y-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-22">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Test Format :</h4>
                  <p className="text-gray-600">Listening, Reading, Writing, Speaking</p>
                </div>
                <div className="border-l pl-6">
                  <h4 className="text-lg font-semibold text-gray-700">Duration :</h4>
                  <p className="text-gray-600">3.5 Hours (Approximately)</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Mode :</h4>
                <p className="text-gray-600">Online from home/At the test center</p>
              </div>
            </div>

            <button
              id="openPopup"
              className="bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition cursor-pointer"
                onClick={() => setShowModal(true)} >
              Free Expert Consultation
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/cael.jpg"
              alt="ACT Preparation"
              width={500}
              height={300}
              className="object-cover w-96 h-auto opacity-85"
              priority
              sizes="(max-width: 500px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
export default HeroSection;