"use client";

import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: 'IELTS Preparation',
    subtitle: 'Get Expert Guidance For IELTS With Certified Trainers',
    icon: '📘',
  },
  {
    title: 'College Selection',
    subtitle: 'Check Eligibility, Fees, and Job Prospects With Our Coaches',
    icon: '✅',
  },
  {
    title: 'Loan & Finance',
    subtitle: 'Plan Financials Get Loan Assistance, GIC, Show Funds Etc.',
    icon: '💰',
  },
  {
    title: 'SOP Assistance',
    subtitle: 'SOP Is The Most Important Document That Can Make Or Break Things',
    icon: '✍️',
  },
  {
    title: 'Visa Assistance',
    subtitle: 'Visa Preparation, Documentation and Everything You Need To Know',
    icon: '✈️',
  },
];

const universities = [
  {
    name: 'Memorial University of Newfoundland, St. John\'s, Newfoundland and Labrador',
    logo: '/memorial.jpg',
  },
  {
    name: 'University of Manitoba, Winnipeg, Manitoba',
    logo: '/manitoba.png',
  },
  {
    name: 'Dalhousie University, Halifax, Nova Scotia',
    logo: '/dalhoise.png',
  },
  {
    name: 'University of Victoria, Victoria, British Columbia',
    logo: '/victoria.png',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white">
      {/* 🔵 Wavy top background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg className="w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f1f5f9"
            d="M0,160L80,149.3C160,139,320,117,480,117.3C640,117,800,139,960,160C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-20 pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          End To End Solutions<br />For Your Study Abroad Dreams
        </h2>
        <div className="w-20 h-1 bg-gray-300 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-md rounded-md text-center p-6 hover:shadow-xl transition duration-300 hover:scale-[1.03]"
            >
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 Popular Universities Section */}
      <div className="bg-blue-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">Popular Universities in Canada</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {universities.map((uni, idx) => (
              <div key={idx} className="text-center">
                <Image src={uni.logo} alt={uni.name} width={80} height={80} className="mx-auto mb-2" />
                <p className="text-sm md:text-base font-medium">{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>

    </section>
  );
}
