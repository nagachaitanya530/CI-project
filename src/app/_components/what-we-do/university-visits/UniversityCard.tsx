<<<<<<< HEAD
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
=======
import React from 'react'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { Earth } from 'lucide-react';
const UniversityCard = () => {
    return (
        <>
            <div className="maincard flex  items-center justify-left  bg-gray-100 p-4">

                <div className="card bg-blue-100 shadow-lg rounded-lg w-[15%] d-flex flex-col b-rounded-lg p-7">
                    <div className="card-header">
                        <Image
                            src="/universitycard1.jpg"
                            alt="University Logo"
                            width={100}
                            height={100}
                            className="card-logo"
                        />
                        <h2 className="card-title">University Of Sheffield</h2>
                    </div>
                    <div className="card-body">
                        <p className="card-description">AT KOLKATA</p>
                        <p className="card-text">

                            <p>       
                                 <span><CalendarDays /></span>
                                <span>
                                    30/06/2025
                                    </span>
                            </p>
                                                   <p>       
                                 <span><Clock9 /></span>
                                <span>
                                 2:00pm-TBC
                                    </span>
                            </p>
                                                        <p>       
                                 <span><Earth /></span>
                                <span>
                               United Kingdom
                                    </span>
                            </p>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="mt-8 bg-[#143B85] text-white px-2 py-4 rounded-md text-sm font-semibold ">Book an appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniversityCard
>>>>>>> cost-of-studying-usa
