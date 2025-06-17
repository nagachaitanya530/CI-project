"use client";

import Image from 'next/image';
import React from 'react';

const steps = [
  { title: 'Prepare For The Test', subtitle: 'IELTS Prep If needed', img: '/step1.jpg' },
  { title: 'Consult With Experts', subtitle: 'Get your profile evaluated', img: '/step2.jpg' },
  { title: 'Shortlist Universities', subtitle: 'Best options for your budget', img: '/step3.jpg' },
  { title: 'Start Applying', subtitle: 'With help of experts', img: '/step4.jpg' },
  { title: 'SOP Assistance', subtitle: 'The most important process', img: '/step5.jpg' },
  { title: 'Get offer Letter', subtitle: "Let's get going", img: '/step6.jpg' },
  { title: 'Plan Your Travel', subtitle: 'Flights, accommodation etc.', img: '/step7.jpg' },
  { title: 'Fly to University', subtitle: 'Begin your study journey', img: '/step8.jpg' },
];

export default function TimelineSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#778fd8] via-[#c471ed] to-[#f64f59] animate-gradient-x overflow-hidden">
      {/* 🔮 Wavy Background Overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg className="w-full h-56 md:h-72 lg:h-80" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff22" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,144C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#741C87] -translate-x-1/2 z-0" />

        <div className="space-y-20 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center justify-between md:gap-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty space for alignment */}
              <div className="hidden md:block w-1/2" />

              <div className="relative w-full md:w-[45%] bg-white shadow-xl rounded-sm border-[6px] border-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={500}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black group-hover:text-purple-700 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{step.subtitle}</p>
                </div>
              </div>

              {/* Dot in the middle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#741C87] rounded-full border-4 border-white z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Animation class for gradient
/*
<style jsx global>{`
  @keyframes gradient-x {
    0%, 100% { background-position: left center; }
    50% { background-position: right center; }
  }

  .animate-gradient-x {
    background-size: 300% 300%;
    animation: gradient-x 15s ease infinite;
  }
`}</style>*/