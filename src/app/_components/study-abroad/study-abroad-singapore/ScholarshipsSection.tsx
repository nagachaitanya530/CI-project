import React from "react";
import scholarImg from "../img/scholar-img.webp"; // adjust path if needed

const ScholarshipsSection = () => {
  return (
    <div className="comm-section py-2" data-aos="fade-in" data-duration="0">
      <div className="container mx-auto px-2 pl-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="lg:w-2/2">
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">Scholarships</span> in Singapore
            </h3>
            <div className="text-justify text-gray-700 space-y-3">
              <p>
                The MOE Tuition Grant is a grant provided by the Government of Singapore to help students
                manage the costs of full-time tertiary education in Singapore. International
                students enrolled in full-time undergraduate programs at autonomous universities may be
                eligible for this opportunity, provided they sign a bond agreeing to work for a
                Singapore-based company for three years upon graduation.
              </p>
              <p>
                Bursaries and scholarships vary by institution and range from SGD 1,500 up to 75%
                of tuition fees.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/3">
            <img
              src="/study-singapore/scholar-img.png"
              alt="Scholarships to Study Abroad"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsSection;
