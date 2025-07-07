'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Clock9, Earth } from 'lucide-react';
import StudyAbroadModal from "../../study-abroad/study-mauritius/StudyAbroadModal";

export type University = {
  id: number;
  name: string;
  location: string;
  date: string; 
  time: string;
  country: string;
  logo: string;
};

export default function UniversityCard({ data }: { data: University[] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full flex flex-wrap gap-6 md:justify-start md:pl-20 justify-center">
      <div className="w-full flex flex-wrap gap-6 justify-center md:justify-start">
        {data.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No universities found.</p>
        ) : (
          data.map((univ) => (
            <div
              key={univ.id}
              className="bg-[#f1f6fe] rounded-3xl shadow-md w-[250px] p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col items-start gap-3 w-full flex-grow">
                <Image
                  src={univ.logo}
                  alt={univ.name}
                  width={120}
                  height={100}
                  className="w-full rounded-md object-contain mx-auto"
                />
                <h2 className="text-[#143B85] text-lg font-semibold text-center break-words">
                  {univ.name}
                </h2>
                <p className="text-sm text-gray-600 font-medium text-center">
                  AT {univ.location.toUpperCase()}
                </p>
                <div className="text-sm text-gray-600 space-y-2 text-left w-full mt-2">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={16} /> {univ.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock9 size={16} /> {univ.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <Earth size={16} /> {univ.country}
                  </p>
                </div>
              </div>
              <button
                className="bg-[#143B85] text-white text-sm py-2 px-4 rounded-md text-lg font-semibold w-full mt-4"
                onClick={() => setShowModal(true)}
              >
                Free Expert Consultation
              </button>
            </div>
          ))
        )}
        {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
