"use client";

import Link from "next/link";
import Image from "next/image";

export default function ACTPage({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (
    <div className="bg-white">

      <nav className="text-sm text-gray-600 px-4 sm:px-6 md:px-16 pt-6 pb-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        &nbsp;&gt;&nbsp;
        <Link href="/test-preparation" className="hover:underline">
          Test Preparation
        </Link>
        &nbsp;&gt;&nbsp;
        <span className="text-blue-800 font-bold">ACT</span>
      </nav>


      <section className="bg-[#e8eff8] w-full py-10 px-4 sm:px-6 md:px-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          ACT – 2025
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="space-y-6">

            <div className="flex flex-col sm:flex-row gap-8 text-blue-900">

              <div>
                <p className="font-semibold text-lg">Test Format :</p>
                <p className="mt-1">English, Mathematics, Reading, and Science</p>
              </div>


              <div>
                <p className="font-semibold text-lg">Duration :</p>
                <p className="mt-1">2 Hours 55 minutes</p>
              </div>
            </div>


            <div>
              <p className="font-semibold text-lg">Mode :</p>
              <p className="text-blue-900 mt-1">Pen & Paper / Computer Based</p>
            </div>


            <button
              onClick={onFreeConsultClick}
              className="w-full sm:w-auto mt-4 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
            >
              Free Expert Consultation
            </button>
          </div>


          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/study-session.jpg"
                alt="ACT Preparation"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

       
        <p className="text-right text-xs sm:text-sm italic text-gray-500 mt-6">
          Last updated – 5 April '24
        </p>
      </section>
    </div>
  );
}
