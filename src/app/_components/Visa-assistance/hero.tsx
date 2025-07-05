"use client";

import Image from "next/image";

export default function VisaAssistanceBanner({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  return (
    <section
      className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 
    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
    from-[#ffe4e6] via-[#fff1f2] to-white"
    >


      {/* Left Content */}
      <div className="max-w-3xl space-y-10">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800">
          Seamless{" "}
          <span className="font-bold relative">
            Visa
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500"></span>
          </span>
          <br />
          <span className="inline-block mt-4">Assistance</span>
        </h1>


        <button
          onClick={onFreeConsultClick}
          className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
        >
          Free Expert Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 relative">
        <Image
          src="/visa-asst-bnr-img.png" // Place your image in public folder as visa-expert.png
          alt="Visa Expert"
          width={400}
          height={400}
          className="rounded-xl"
        />

      </div>
    </section>
  );
}
