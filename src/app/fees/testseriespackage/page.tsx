"use client";

import React from "react";
import Navigation from "../../_components/Navigation";
import { Button } from "~/components/ui/button";
import Footer from '../../_components/Footer'
const packages = [
  {
    title1: "IELTS ",
    title2: "Essential",
    price: "₹3990",
    tag: "SHORT",
    features: [
      "5 Full Mock Tests",
      "80 Module Wise Tests",
      "43 Item Wise Exercises",
      "Auto Remedial Tests",
      "2 Feedback Sessions",
    ],
  },
  {
    title1: "IELTS ",
    title2: "Premium",
    price: "₹4990",
    tag: "FULL",
    features: [
      "10 Full Mock Tests",
      "130 Module Wise Tests",
      "83 Item Wise Exercises",
      "Auto Remedial Tests",
      "4 Feedback Sessions",
    ],
  },
];

const IeltsGeneralPage = () => {
  return (
    <>
      <Navigation />

     <section className="bg-[#111111] text-white py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-[500px]">
    {/* Left Text Block */}
    <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
      <p className="text-pink-500 font-semibold text-lg">IELTS Test Series</p>
      <h2 className="text-4xl font-bold mt-2">Self Practice</h2>
      <p className="text-[#b0b0b0] mt-1">CBT Platform with A.I Evaluations</p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:w-2/3">
      {packages.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden bg-white text-black shadow-lg"
        >
          {/* Card Header */}
          <div className="bg-[#25242C] text-white text-center py-10 relative">
            <h3 className="text-4xl font-bold">{item.title1}</h3>
            <h3 className="text-4xl font-bold">{item.title2}</h3>
            <p className="text-pink-400 text-xl mt-2">{item.price}</p>

            {/* Bigger Badge */}
            <div className="absolute top-0 right-0 z-10">
                <div className="bg-pink-500 text-white text-sm font-semibold px-16 py-1 rotate-45 origin-top-right transform translate-x-6 -translate-y-4 shadow-md">
              {item.tag}
            </div>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-200">
            {item.features.map((feature, i) => (
              <div
                key={i}
                className={`text-center py-4 ${
                  i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center py-6 bg-white">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6">
              Buy Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="text-[#111111] bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-[500px]">
    {/* Left Text Block */}
    <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
      <p className="text-pink-500 font-semibold text-lg">IELTS Test Series</p>
      <h2 className="text-4xl font-bold mt-2">Self Practice</h2>
      <p className="text-[#b0b0b0] mt-1">CBT Platform with A.I Evaluations</p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:w-2/3">
      {packages.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden bg-white text-black shadow-lg"
        >
          {/* Card Header */}
          <div className="bg-[#25242C] text-white text-center py-10 relative">
            <h3 className="text-4xl font-bold">{item.title1}</h3>
            <h3 className="text-4xl font-bold">{item.title2}</h3>
            <p className="text-pink-400 text-xl mt-2">{item.price}</p>

            {/* Bigger Badge */}
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-base font-bold px-6 py-2 rotate-45 translate-x-8 -translate-y-5 shadow-md z-10">
              {item.tag}
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-200">
            {item.features.map((feature, i) => (
              <div
                key={i}
                className={`text-center py-4 ${
                  i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center py-6 bg-white">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6">
              Buy Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  <section className="bg-[#111111] text-white py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-[500px]">
    {/* Left Text Block */}
    <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
      <p className="text-pink-500 font-semibold text-lg">IELTS Test Series</p>
      <h2 className="text-4xl font-bold mt-2">Self Practice</h2>
      <p className="text-[#b0b0b0] mt-1">CBT Platform with A.I Evaluations</p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:w-2/3">
      {packages.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden bg-white text-black shadow-lg"
        >
          {/* Card Header */}
          <div className="bg-[#25242C] text-white text-center py-10 relative">
            <h3 className="text-4xl font-bold">{item.title1}</h3>
            <h3 className="text-4xl font-bold">{item.title2}</h3>
            <p className="text-pink-400 text-xl mt-2">{item.price}</p>

            {/* Bigger Badge */}
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-base font-bold px-6 py-2 rotate-45 translate-x-8 -translate-y-5 shadow-md z-10">
              {item.tag}
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-200">
            {item.features.map((feature, i) => (
              <div
                key={i}
                className={`text-center py-4 ${
                  i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center py-6 bg-white">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6">
              Buy Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="text-[#111111] bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-[500px]">
    {/* Left Text Block */}
    <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
      <p className="text-pink-500 font-semibold text-lg">IELTS Test Series</p>
      <h2 className="text-4xl font-bold mt-2">Self Practice</h2>
      <p className="text-[#b0b0b0] mt-1">CBT Platform with A.I Evaluations</p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:w-2/3">
      {packages.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden bg-white text-black shadow-lg"
        >
          {/* Card Header */}
          <div className="bg-[#25242C] text-white text-center py-10 relative">
            <h3 className="text-4xl font-bold">{item.title1}</h3>
            <h3 className="text-4xl font-bold">{item.title2}</h3>
            <p className="text-pink-400 text-xl mt-2">{item.price}</p>

            {/* Bigger Badge */}
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-base font-bold px-6 py-2 rotate-45 translate-x-8 -translate-y-5 shadow-md z-10">
              {item.tag}
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-200">
            {item.features.map((feature, i) => (
              <div
                key={i}
                className={`text-center py-4 ${
                  i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center py-6 bg-white">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6">
              Buy Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 <Footer />
    </>
  );
};

export default IeltsGeneralPage;
