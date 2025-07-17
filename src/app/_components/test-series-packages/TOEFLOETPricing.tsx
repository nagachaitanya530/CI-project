'use client';

import React from 'react';

const plans = [
  {
    title: 'TOEFL',
    price: '₹2990',
    tag: 'SHORT',
    features: [
      '6 Mock Tests',
      '46 Module Wise Tests',
      
    ],
    highlighted: false,
  },
  {
    title: 'OTE',
    price: '₹2990',
    tag: 'FULL',
    features: [
      '3 Full Mock Tests',
      '30 Module Wise Tests',
      ,
    ],
    highlighted: true,
  },
];

const TOEFLEOETPricing = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h4 className="text-[#E34393] text-lg font-medium mb-2">
            TOEFL / OET
          </h4>
          <h2 className="text-5xl font-bold mb-4">Self Practice</h2>
          <p className="text-[#B0B0B0] text-lg">
            CBT Platform with A.I Evaluations
          </p>
        </div>
        <div className="lg:w-2/2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] border border-gray-700 rounded-lg relative transform transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-[#E34393]/30 hover:scale-105"
            >
              <div className="absolute top-0 right-0 bg-[#E34393] text-white text-xs font-semibold px-2 py-1 rounded-bl-md">
                {plan.tag}
              </div>
              <div className="text-center py-6 border-b border-[#E34393] ">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-xl text-[#FF6D91] mt-1">{plan.price}</p>
              </div>
              <ul className="divide-y divide-gray-700 bg-gray-500">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-center py-3 text-sm md:text-base text-gray-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="p-4 text-center bg-white">
                <a
                  href="/enrollment"
                  target="_blank"
                  className="bg-[#FF6D91] hover:bg-[#e75b7f] text-white font-semibold py-2 px-6 rounded-md transition duration-300">
                  BUY NOW
                
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TOEFLEOETPricing;
