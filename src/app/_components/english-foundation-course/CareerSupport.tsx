"use client";

import React from "react";
import { FileText, BookOpen, PlaneTakeoff } from "lucide-react";

const CareerSupport = () => {
  return (
    <section className="bg-white py-14 px-4 md:px-20 border-t">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Get exclusive access to <br /> career resources
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-center md:text-left mb-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <FileText className="text-indigo-600 mb-2" size={32} />
          <p className="font-semibold text-gray-800">Resume Review</p>
          <p className="text-gray-600 text-sm">
            Get your resume reviewed for job applications.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <BookOpen className="text-indigo-600 mb-2" size={32} />
          <p className="font-semibold text-gray-800">Application Support</p>
          <p className="text-gray-600 text-sm">
            Get support for choosing and applying for different colleges and universities.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <PlaneTakeoff className="text-indigo-600 mb-2" size={32} />
          <p className="font-semibold text-gray-800">Visa Support</p>
          <p className="text-gray-600 text-sm">
            Get assistance in getting a visa and for Visa interview.
          </p>
        </div>
      </div>
      <div className="border-t pt-8 text-center">
        <p className="font-semibold text-lg text-gray-800 mb-6">
          Get access to more than 4000 International universities and colleges
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
  <img src="/english-course/1.jpg" alt="Sheffield Hallam University" className="h-10 md:h-14" />
  <img src="/english-course/2.png" alt="University of Salford" className="h-10 md:h-14" />
  <img src="/english-course/3.jpg" alt="Leeds Beckett University" className="h-10 md:h-14" />
  <img src="/english-course/4.jpg" alt="University of Huddersfield" className="h-10 md:h-14" />
  <img src="/english-course/5.jpg" alt="Liverpool John Moores University" className="h-10 md:h-14" />
</div>
      </div>
    </section>
  );
};

export default CareerSupport;
