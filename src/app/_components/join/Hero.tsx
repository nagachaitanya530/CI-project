"use client";
import Link from "next/link";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bm.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur-md brightness-75"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-stretch justify-between w-full h-full">
        {/* Left - Full-page Woman Image */}
        <div className="w-full lg:w-1/2 relative h-full">
          <Image
            src="/about-bnr-img.png" // Replace with your image path
            alt="Smiling Woman"
            layout="fill"
            objectFit="cover"
            className="rounded-none shadow-2xl"
            priority
          />
        </div>

        {/* Right - Text & Buttons */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 py-10">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Want to practice public speaking?
          </h1>
          <p className="text-lg mb-6">
            Improve communication and build leadership skills. With Toastmasters, break every barrier!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
           <Link href="#pricing" >
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow">
    Become a Member
  </button>
</Link>
           <Link href= "#schedule">
            <button className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100">
              View Schedule
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sunday Events Card */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-3xl bg-white text-center rounded-2xl shadow-2xl border-2 border-blue-500/30 px-10 py-6 backdrop-blur-md bg-opacity-90">
        <h3 className="text-blue-700 text-3xl font-bold mb-2">Sunday Events</h3>
        <p className="text-gray-700 text-md leading-relaxed">
          Enjoy 2-hour sessions every weekend including fun debates, open mics, and free speech.
          Events span throughout the month – keep growing every Sunday!
        </p>
      </div>
    </section>
  );
}
