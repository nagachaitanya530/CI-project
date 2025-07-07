"use client";
import Image from "next/image";

export default function SpainHeroSection({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (

    <section className="relative bg-gradient-to-br from-white via-red-50 to-green-300">
      {/* -------- Hero -------- */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}

    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-snug text-black">
            <span className="relative font-bold">
              Spain:
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500" />
            </span>{" "}
            Study at world-class universities while immersed in a vibrant
            culture
          </h1>
          <button
            onClick={onFreeConsultClick}
            className="mt-8 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow transition"
          >
            Free Expert Consultation
          </button>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/spain-girl-globe.png"
            alt="Student holding Spanish flag"
            width={480}
            height={520}
            sizes="(max-width: 768px) 80vw, 480px"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="bg-[#e9eef5] border border-[#d3dcea] rounded-3xl shadow-sm max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-10">
        <div className="flex flex-wrap justify-around text-center divide-y sm:divide-y-0 sm:divide-x divide-[#c3cbd9]">
          <StatItem value="80+" label="Universities" />
          <StatItem value="€5k–€18k" label="Annual tuition fees" />
          <StatItem value="220K+" label="International Students" />
          <StatItem value="1 Year" label="Post-Study Work Visa" />
        </div>
      </div>
    </section>
  );
}
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-full sm:w-auto flex-1 py-4 px-4 sm:px-6">
      <p className="text-xl md:text-2xl font-extrabold text-[#183D8C]">
        {value}
      </p>
      <p className="mt-1 text-sm md:text-base text-gray-800">{label}</p>
    </div>
  );
}
