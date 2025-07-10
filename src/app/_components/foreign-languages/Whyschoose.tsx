import React from 'react';
import { Check, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col  md:flex-row w-full h-[70vh] min-h-[600px]">
      {/* Left Side */}
      <div className="bg-[#73C8EF] w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 py-8 md:py-12 text-white">
        <h3 className="text-green-800 text-lg md:text-xl font-bold mb-3">Why Choose Us</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
          Learning on the <br /> international standards
        </h1>
        <p className="text-sm md:text-base text-white mb-4 md:mb-6 max-w-md leading-relaxed">
          National Institute of language prides its self on the quality training and strict adherence to the
          international standards set by the authority. Expert guidance along with excellent support system makes
          for a comprehensive learning experience.
        </p>
        <ul className="space-y-2 md:space-y-3 text-white">
          <li className="flex items-center">
            <span className="text-green-400 text-xl md:text-2xl mr-2">✔</span>
            <span className="text-sm md:text-base">Constant Improvement</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-400 text-xl md:text-2xl mr-2">✔</span>
            <span className="text-sm md:text-base">Commitment to Quality</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-400 text-xl md:text-2xl mr-2">✔</span>
            <span className="text-sm md:text-base">Best Quality Courses</span>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="bg-blue-50 w-full md:w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="../../home/professorTeach.avif"
          alt="Student"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;