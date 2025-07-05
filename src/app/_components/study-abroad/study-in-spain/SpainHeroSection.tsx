'use client';

import Image from "next/image";

export default function SpainHeroSection({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50 to-green-300">
      {/* -------- Hero -------- */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-snug text-black">
            <span className="font-bold text-black relative inline-block">
              Spain:
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500 translate-y-2" />
            </span>{" "}
            Study at world class universities while immersed in a vibrant culture
          </h1>
          <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/spain_student_flag.png"
            alt="Student holding Spanish flag"
            width={480}
            height={520}
            className="relative z-10 object-contain"
            priority
          />
        </div>
      </div>

      {/* -------- Stats -------- */}
      <div className="bg-[#e9eef5] border border-[#d3dcea] rounded-3xl shadow-sm max-w-6xl mx-auto px-6 sm:px-12 py-10 z-20 relative">
        <div className="flex flex-col sm:flex-row justify-around text-center divide-y sm:divide-y-0 sm:divide-x divide-[#c3cbd9]">
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
    <div className="py-4 px-4 sm:px-6 flex-1">
      <p className="text-2xl font-extrabold text-[#183D8C]">{value}</p>
      <p className="mt-1 text-sm sm:text-base text-gray-800">{label}</p>
    </div>
  );
}
