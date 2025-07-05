"use client";
import Image from "next/image";
import { useState } from "react";
import StudyAbroadModal from "../../study-abroad/study-mauritius/StudyAbroadModal";
export default function UniversityBanner() {
      const [showModal, setShowModal] = useState(false);
  return (
    <section className="bg-gradient-to-r from-white to-[#fef5f5] px-4 md:px-20 py-16">
      <div className="min-h-[80vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight space-y-3">
            <div>
              University{" "}
              <span className="font-extrabold underline decoration-red-500 underline-offset-4">
                Visits
              </span>
            </div>
          </h1>

               <button
            className="mt-8 bg-[#143B85] text-white px-7 py-4 rounded-md text-lg font-semibold"
            onClick={() => setShowModal(true)}
          >
         Free Expert Consultation
          </button>
        </div>

        <div className="flex-1 relative w-full max-w-md md:max-w-lg mx-auto">
          <Image
            src="/universityvisithero1.jpeg"
            alt="University Visit"
            width={480}
            height={480}
            className="w-full h-auto scale-105"
          />
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
