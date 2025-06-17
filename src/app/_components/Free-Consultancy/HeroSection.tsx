'use client';

import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* ✅ HERO BACKGROUND SECTION */}
      <section className="relative h-[75vh] sm:h-[85vh] overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 text-center text-white drop-shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-3">
            CI Overseas – Best Study Abroad Consultancy in Lucknow
          </h1>
          <p className="text-md sm:text-xl font-medium text-white">
          </p>
        </div>

        {/* ✅ Cards Positioned at Bottom */}
        <div className="absolute w-full bottom-[-240px] z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4">
            {[
              {
                img: '/card1.jpg',
                title: 'CI Overseas',
                subtitle: 'Study Visa Experts',
                borderColor: 'border-orange-500',
              },
              {
                img: '/card2.jpg',
                title: '10000+ Courses',
                subtitle: 'Across 20+ Countries',
                borderColor: 'border-yellow-400',
              },
              {
                img: '/card3.jpg',
                title: 'Post Landing Help',
                subtitle: 'Accommodation, Pickup, SIM',
                borderColor: 'border-green-600',
              },
              {
                img: '/card4.jpg',
                title: 'SOP & Visa',
                subtitle: 'Expert Guidance for Success',
                borderColor: 'border-blue-500',
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`w-[250px] sm:w-[280px] border-4 ${card.borderColor} rounded-xl bg-white overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300`}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={320}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ White Section to Receive Hanging Cards */}
      <section className="bg-white pt-[280px] pb-[100px]" />
    </>
  );
};

export default HeroSection;
