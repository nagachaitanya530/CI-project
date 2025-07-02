"use client";

import Image from "next/image";

export default function VisaAssistanceBanner({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (
    <section
      className="
        max-w-7xl mx-auto
        flex flex-col-reverse lg:flex-row items-center
        gap-8 md:gap-12
        px-4 sm:px-6 lg:px-8
        py-12 md:py-16
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        from-[#ffe4e6] via-[#fff1f2] to-white
      "
    >
      {/* Left Content */}
      <div
        className="
          flex-1 w-full
          max-w-2xl
          space-y-5 sm:space-y-6 md:space-y-8
          text-center lg:text-left
          lg:pl-12
        "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
          Seamless{" "}
          <span className="font-bold relative">
            Visa
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500"></span>
          </span>
          <br />
          <span className="inline-block mt-2">Assistance</span>
        </h1>

        <button
          onClick={onFreeConsultClick}
          className="
            w-full sm:w-auto
            px-6 py-3
            bg-[#183D8C] hover:bg-[#102b6a]
            text-white font-semibold
            rounded-xl
            shadow-md
            transition
          "
        >
          Free Expert Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0">
        <Image
          src="/visa-assistance-image.jpg"
          alt="Visa Expert"
          width={500}
          height={500}
          priority
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
