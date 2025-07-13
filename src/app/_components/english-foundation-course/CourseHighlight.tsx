"use client";

import React from "react";
import Image from "next/image";

const CourseHighlight = () => {
  return (
    <section className="bg-white py-14 px-4 md:px-20">
      <div className="flex flex-col md:flex-row gap-8 items-center border rounded-xl p-8 shadow-lg">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join industry-leading course
          </h2>
          <p className="text-gray-600 text-base mb-6">
            National Institute of Language provides top quality trainers with updated curriculum for best outcomes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>Learn from British Council and Cambridge certified trainers.</li>
            <li>Engage in conversation activities with trainers and other students to improve your fluency.</li>
            <li>Get proper assessment and detailed feedback on your performance.</li>
            <li>Engage in community activities to make connections for your future study, professional and Migration programmes.</li>
          </ul>
        </div>
         <div className="md:w-1/2 w-full">
          <div className="rounded-lg overflow-hidden mb-4">
            <Image
              src="/english-course/second.jpg"
              alt="Student"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-3 text-center text-sm md:text-base border-t pt-4">
            <div>
              <p className="font-bold text-lg md:text-xl">60000+</p>
              <p className="text-gray-600">Students trained over the years</p>
            </div>
            <div className="border-l border-r px-4">
              <p className="font-bold text-lg md:text-xl">19000+</p>
              <p className="text-gray-600">British Council Certificates and counting</p>
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl">95%</p>
              <p className="text-gray-600">
                Success rate in <strong>industry leaders</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlight;
