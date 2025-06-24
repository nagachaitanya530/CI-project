import Image from "next/image";
import React from "react";

const HeroSectiondubaipage  = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-[#fff] via-[#fef6f4] to-[#fff] ml-8 mr-8 mb-8 mt-8">
      {/* Left Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h1 className="text-4xl font-sans-serif ...font-poppins ... text-[#231F20] ...">
          <span className=" font-extrabold  text-[#231F20] underline decoration-red-500 decoration-4 underline-offset-2">
            Dubai:
          </span>{" "}
          Discover a unique blend of innovation and luxury
        </h1>
        <button className="mt-6 bg-blue-800 text-[#FFFFFF] px-6 py-3 rounded-lg text-sm font-semibold hover:text-[#FFFFFF] transition">
          Free Expert Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="mb-8 md:m-0">
        <Image
          src="/study-abrd-dubai.webp" // Replace with the actual image path or use static import
          alt="Student with UAE flag"
          width={400}
          height={400}
          className="object-contain mt-20"
        />
      </div>
    </div>
  );
};

export default  HeroSectiondubaipage ;
