"use client";

import React from 'react';
import Navigation from '../_components/Navigation';
import Chat from './Barchat';
import Footer from '../_components/Footer';
import Herosection from './Herosection';
import Curriculum from './Dropbox';
import Univ from './univ';
import Testimonials from './Testimonials';
import Link from 'next/link';
import Threecards from './Cards';
import AboutEnglish from './AboutEnglish';
import Joinndustry from './Join-ndustry';
import Paycards from './Paycards';

function EnglishAdvance() {
  return (
    <>
      <Navigation />
      <Herosection />

      {/* Sticky Navigation Bar (Visible only on sm and above) */}
      <div className="hidden sm:sticky sm:top-16 sm:bg-white sm:shadow-[-4px_5px_15px_rgba(0,0,0,0.5)] sm:z-10 sm:block">
        <section>
          <div className="hidden lg:flex items-center space-x-6 h-14 xl:ml-30 pl-8 gap-10">
            <Link href="#about" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 hover:border-b-2 transition-all duration-300">About</Link>
            <Link href="#Outcomes" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Outcomes</Link>
            <Link href="#Testimonials" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Testimonials</Link>
            <Link href="#Additional" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Additional Facilities</Link>
            <Link href="#Enrollment" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Enrollment</Link>
          </div>
        </section>
      </div>

      {/* Page Sections */}
      <AboutEnglish />
      <Curriculum />
      <Joinndustry />
      <Chat />
      <Univ />
      <Testimonials />
      <Threecards />
      <Paycards />

      {/* Bottom Sticky Enrollment Bar */}
      <div id="Enrollment" className="sticky bottom-0 h-auto py-2 bg-blue-500 w-full px-4 sm:px-6 md:px-8 z-50">
        <div className="flex flex-col sm:flex-row justify-evenly gap-3 lg:gap-140">
          <div className="text-center sm:text-left flex justify-evenly">
            <button className="text-sm sm:text-base font-semibold text-white">
              English Business Course ₹17,490
            </button>
          </div>
          <a
            href="#"
            className="bg-gray-300 h-8 px-4 rounded text-sm flex items-center justify-center w-full sm:w-[5rem] font-medium text-black hover:bg-gray-400 transition-colors duration-200"
          >
            ENROLL
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EnglishAdvance;
