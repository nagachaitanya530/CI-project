"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaBlogger,
} from "react-icons/fa6";

const GetStartedBanner = () => {
  const router = useRouter();

  return (
    <section className="max-w-5xl bg-[#173F96] text-white rounded-[40px] my-10 px-4 md:px-10 mx-auto overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-14 py-3 md:py-5">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Get Ready To Begin <br />
            <span className="relative inline-block font-bold">
              Your Journey
              <span className="absolute left-0 bottom-0 h-[5px] w-full bg-red-400 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#d3d3d3]">
            Explore more, stay informed, and start your journey to academic excellence.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => router.push("/Contact")}
              className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Contact Us
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl text-[#173F96]">
              <FaInstagram className="hover:scale-110 transition" />
              <FaYoutube className="hover:scale-110 transition" />
              <FaLinkedin className="hover:scale-110 transition" />
              <FaFacebook className="hover:scale-110 transition" />
              <FaXTwitter className="hover:scale-110 transition" />
              <FaBlogger className="hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 relative w-full flex justify-center">
          <Image
            src="/contactusimg1.png"
            alt="Student with globe"
            width={400}
            height={400}
            className="object-contain max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedBanner;
