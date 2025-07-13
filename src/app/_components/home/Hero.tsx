// src/app/_components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#284c87] to-[#4cc4dd] px-6 pt-10 pb-6 min-h-[460px]">
      {/* Left Text */}
      <div className="flex-1 ml-4 md:ml-20 text-white max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow leading-tight">
          Turning Your Dreams Into Reality
        </h1>
        <p className="mb-8 text-lg font-medium drop-shadow">
          CI is the top online education platform to learn English, French, Spanish and German along with IELTS preparation.
        </p>
        <Link
          href="/book-demo"
          className="inline-block bg-[#b8925b] hover:bg-[#965a6d] transition px-7 py-3 text-lg font-bold rounded shadow-md text-white"
        >
          Book a demo
        </Link>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 flex justify-center lg:justify-end mt-6 md:mt-0 w-full">
        <div className="rounded-lg w-full max-w-[500px] lg:max-w-[900px] h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden">
          <Image
            src="/home/professional-women.png"
            alt="Professional woman in business attire"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 900px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
