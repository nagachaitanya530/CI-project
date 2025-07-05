'use client'
import { useState } from "react";

function HeroSection() {
  const paragraphStyle: React.CSSProperties = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-slate-50 to-amber-100">
      <div className="px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Edwise represents over
            <strong className="underline decoration-red-600"> 950+ Universities</strong>
            <br />
            across <strong>16 Countries</strong>
          </h1>

          <p
            style={isOpen ? undefined : paragraphStyle}
            className="text-base mt-4 text-gray-700"
          >
            Edwise has partnered with some of the best universities to study abroad giving students the option to choose from the best of the best for making their dreams come true. With an impressive roster of more than 950 foreign universities, we offer Indian students excellent opportunities for studying abroad.
            <br />
            <br />
            We have partnered with universities from more than 16 countries which ensures that the student gets to choose from a wide range of options and select from the study abroad universities of their choice. Contact us now and one of our expert counselors will guide you according to your specific needs and suggest a list with the best universities abroad for Indian students.
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-gray-400 py-2 px-4 mt-4 rounded-lg hover:bg-cyan-600 transition"
          >
            {isOpen ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* rightside: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/man-uni.png"
            alt="Student"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
