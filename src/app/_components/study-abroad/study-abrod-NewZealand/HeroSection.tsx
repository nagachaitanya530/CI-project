import { useEffect, useRef, useState, type JSX } from 'react';
import StudyAbroadModal from '../study-mauritius/StudyAbroadModal';
function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [select, Selected] = useState("doc");
  const stats = [
    { title: "25+", description: "Institutions" },
    { title: "NZ$27k–55k", description: "Annual tuition fees" },
    { title: "34k+", description: "International Students" },
    { title: "2–3 Years", description: "Post–Study Work Visa" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row items-center px-2 sm:px-4 md:px-10 lg:px-20 bg-gradient-to-r from-white via-red-50 to-green-100 justify-center md:space-x-8 lg:space-x-16 font-[poppins,sans-serif]">
        <div className="py-6 rounded-lg mt-6 md:mt-10 lg:mt-14 w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3.25rem] leading-tight md:leading-[3rem] lg:leading-[4.25rem]">
            <span className="font-bold text-orange-600 md:text-5xl lg:text-6xl">
              New Zealand:
            </span>{" "}
            A premier destination for world-class education and research
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-md transition"
              onClick={() => setShowModal(true)}
            >
              Free Expert Consultation
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-md transition">
              View & Download Brochure
            </a>

          </div>
        </div>
        <div className="">
          <img
            src="../heronewzeland.jpg"
            alt="Student with New Zealand flag"
            className="w-[25rem] object-cover"
          />
        </div>
      </div>
      <div className="z-10 flex flex-col sm:flex-row flex-wrap md:flex-nowrap font-bold justify-center gap-6 sm:gap-8 md:gap-8 lg:gap-14 rounded-4xl -mt-2 py-6 sm:py-8 md:py-10 lg:py-12 mx-1 sm:mx-2 md:mx-10 lg:mx-20 bg-gray-200 relative border-2 border-gray-300">
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
        {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  )
}
export default HeroSection;