import { useEffect, useRef, useState, type JSX } from 'react';
function HeroSection() {
  const [select, Selected] = useState("doc");
  const stats = [
    { title: "25+", description: "Institutions" },
    { title: "NZ$27k–55k", description: "Annual tuition fees" },
    { title: "34k+", description: "International Students" },
    { title: "2–3 Years", description: "Post–Study Work Visa" },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-white via-red-50 to-green-100 px-4 sm:px-6 py-12 flex flex-col-reverse sm:flex-row justify-center align-middle items-center gap-5">
        <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight">
            <span className="font-bold text-black underline decoration-red-500 decoration-4 underline-offset-[14px]">
              New Zealand:
            </span>{" "}
            A premier<br /> destination for world-class<br /> education and research
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-md transition">
              Free Expert Consultation
            </button>
            <button className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-md transition">
              View & Download Brochure
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="/newZealand/hero.avif"
            alt="Student with New Zealand flag"
            className="w-[25rem] object-cover"
          />
        </div>
      </div>

      <div className="bg-[#E9EEF6] rounded-[50px] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mx-auto w-[90%] shadow-sm mt-17">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 text-center px-4 relative"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1E40AF]">{item.title}</h3>
            <p className="text-base md:text-lg mt-1 font-medium text-gray-900">{item.description}</p>
            {index < stats.length - 1 && (
              <span className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
export default HeroSection;