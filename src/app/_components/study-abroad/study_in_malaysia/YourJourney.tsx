"use client";

import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaBlogger,
} from "react-icons/fa6";

const JourneyCTA = () => {
  return (
    <section className="bg-[#123C8C] text-white py-16 px-6 lg:px-24 rounded-t-[60px] overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Get Ready To Begin <br />
            <span className="relative inline-block text-white font-bold">
              Your Journey
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-400 rounded-full -z-10" />
            </span>
          </h2>

          <p className="text-gray-200 text-base mb-6 max-w-md">
            Explore more, stay informed, and start your journey to academic excellence.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-white text-[#123C8C] font-semibold px-6 py-3 rounded-full hover:bg-[#f1f4ff] transition-all shadow-md">
              Contact Us
            </button>

            <div className="flex gap-3 bg-white px-4 py-2 rounded-full shadow-md">
              <FaInstagram className="text-[#C13584] hover:scale-110 transition-transform cursor-pointer" />
              <FaYoutube className="text-[#FF0000] hover:scale-110 transition-transform cursor-pointer" />
              <FaLinkedinIn className="text-[#0077B5] hover:scale-110 transition-transform cursor-pointer" />
              <FaFacebookF className="text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />
              <FaXTwitter className="text-black hover:scale-110 transition-transform cursor-pointer" />
              <FaBlogger className="text-orange-600 hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>


        <div className="flex justify-center relative">
          <Image
            src="/cta.png"
            alt="Journey to Study in USA"
            width={500}
            height={500}
            className="object-contain max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneyCTA;