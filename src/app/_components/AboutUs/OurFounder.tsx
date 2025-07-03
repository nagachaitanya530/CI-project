"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="bg-white py-16 px-4 lg:px-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        About{" "}
        <span className="font-bold underline decoration-red-500 underline-offset-4">
          Our Founder
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-full max-w-[350px]">
            <Image
              src="/founder-img.jpg"
              alt="Founder Image"
              width={500}
              height={600}
              className="rounded-lg object-cover w-full"
            />

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
              <div>
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  Sushil Sukhwani
                  <a
                    href="https://www.linkedin.com/in/sushil-sukhwani-518073b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-gray-400 rounded-md hover:bg-blue-100"
                  >
                    <FaLinkedinIn className="text-gray-500 text-xl" />
                  </a>
                </h3>
                <p className="text-gray-600 text-base">(Founder and CEO)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 text-gray-800 text-[15px] leading-relaxed mt-10 lg:mt-0">
          <p>
            <strong>Sushil Sukhwani</strong>, Owner and Founding Director of Edwise
            International, has been at the helm of the international education industry
            for over three decades. He pursued his Master’s in Business Administration
            from the University of Bond in Australia. This experience inspired him to
            establish Edwise in 1991 which became a trailblazer in the field of global
            education, providing a cutting edge service and firsthand guidance to
            students with the desire to study abroad. He is also an elected Member of
            the Board of Directors of the American International Recruitment Council
            (AIRC) which promotes ethical, standard-based international recruitment
            strategies.
          </p>

          <p className="mt-4">
            Edwise was born out of his conviction in the talent and potential of Indian
            students to excel on the global stage. As the visionary architect behind the
            company, he has built the organization from scratch with a focus on enabling
            the student’s success from the very beginning of their journey. His
            unparalleled industry expertise ensures that Edwise always has a hand on the
            pulse of the ever-evolving world of global education. Central to the
            company’s mission is a commitment to ethical consulting with counselors who
            are there to guide the student at every step to reach your dream destination.
            Through his hands-on approach to running the organisation he has pioneered a
            transformative model for international education that truly changes lives and
            acts as a springboard to every student who wants to study abroad.
          </p>
        </div>
      </div>
    </section>
  );
}
