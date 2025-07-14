"use client"
import React from "react";
import StudyAbroadModal from '../study-mauritius/StudyAbroadModal';
import { useState } from "react";
const ScholarHeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="inner-hero-wrap scholar-hero-wrap flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100">
      {/* Left Content */}
      <div className="inner-hero-left md:w-1/2 mb-8 md:mb-0">
        <h2 className="hero-title-txt text-3xl md:text-4xl font-bold text-gray-900">
          Total Study Abroad Scholarship Edwise Students have Received{" "}
          <span className="highlighter text-red-600">9 crore+</span>
        </h2>

        <div className="comm-para mt-6">
          {/* Uncomment below if paragraph is needed */}
          {/* <p className="text-gray-700">Edwise’s expert guidance is here to help you secure the best scholarship for Indian students to study abroad.</p> */}
          <button
            id="openPopup"
            className="button open-popup bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
             onClick={() => setShowModal(true)}>
          
            Free Expert Consultation
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="inner-hero-right md:w-1/2 flex justify-center rounded-2xl">
        <img
          src="/scholarship/herosection.jpg"
          alt="Scholarship"
          className="max-w-full h-auto rounded-2xl"
        />
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ScholarHeroSection;