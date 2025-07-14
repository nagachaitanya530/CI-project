import StudyAbroadModal from "../study-mauritius/StudyAbroadModal";
import { useState } from "react";

function HeroSection() {

  const [showModal, setShowModal] = useState(false);


    const stats = [
    {
      value: "40+",
      label: "Institutions",
    },
    {
      value: "S$10k–S$20k",
      label: "Annual tuition fees",
    },
    {
      value: "65K+",
      label: "International Students",
    },
    {
      value: "NA",
      label: "Post-Study Work Visa",
    },
  ];

  return (
     <section>
      <div className="bg-pink-50 inner-hero study-hero animate-fade-in duration-0 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold leading-snug text-gray-900">
              <span className="text-blue-600">Singapore:</span> Pursue your
              education in the <br className="hidden sm:inline" />
              gateway to Asia
            </h2>

            <div className="mt-6">
              <div className="flex flex-wrap gap-4">
                <button
                  id="openPopup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition cursor-pointer"
                              onClick={() => setShowModal(true)} >
                  Free Expert Consultation
                </button>
                {/* <a
                  href="../brochure/Singapore.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-300 transition cursor-pointer"
                >
                  View & Download Brochure
                </a> */}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/study-singapore/study-abrd-singapore.png"
              alt="Study in Singapore"
              className="max-w-full h-auto rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>

      <div className="bg-gray-200 py-12 rounded-full" data-aos="fade-in" data-duration="0" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
                <h4 className="text-gray-700 mt-2">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
export default HeroSection;