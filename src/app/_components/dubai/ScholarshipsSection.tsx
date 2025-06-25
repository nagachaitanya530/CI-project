import Image from "next/image";
import React from "react";

const ScholarshipsSection = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20 lg:px-28 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold text-black">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Scholarships</span>
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
          </span>{" "}
          In Dubai
        </h2>

        <p className="mt-6 text-gray-800 leading-relaxed">
          Dubai, the gleaming gem of the Middle East, recognises aspiring scholars with a treasure
          trove of scholarship opportunities that transcends conventional boundaries. Among these
          are merit-based scholarships, which cover up to 40% of the tuition fees. You can find out
          all about scholarship in the UAE for Indian students below.
        </p>

        {/* Links */}
        <div className="mt-6 space-y-2 text-gray-700 text-base">
          <p>http://www.uaecd.org/sponsors-introduction</p>
          <p>https://www.mbrsg.ae/home/programs/scholarships.aspx</p>
          <p>https://scholarship.aud.edu/senior/</p>
          <p>
            https://ascholarship.com/uae-dubai-scholarships-2023-study-for-free-in-u-a-e/
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <Image
           src="/scholar-img.webp"
 
          alt="Scholarship Student"
          width={600}
          height={400}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ScholarshipsSection;
