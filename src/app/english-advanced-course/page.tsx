"use client";




import Navigation from '../_components/navigation1';
import Chat from './Barchat'
import Footer from '../_components/footer1';
import { Key } from 'lucide-react';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { behaviorSubject } from '@trpc/server/observable';

import Herosection from './Herosection'
import Curriculum from './Dropbox'
import React, { useRef, useState } from 'react';

import Univ from './univ';
import Testimonials from './Testimonials';
import Link from 'next/link';

import Threecards from './Cards';
import { Bar, BarChart } from 'recharts';
import AboutEnglish from './AboutEnglish';
import Joinndustry from './Join-ndustry';
import Paycards from './Paycards';

function EnglishAdvance() {

  return (

    <div>


      <Navigation />






      <Herosection />


      <div className=" sticky top-17 bg-white shadow-[-4px_5px_15px_rgba(0,0,0,0.5)]   h-13  ">

        {/* Nav Bar After Hero Section */}
        <section className=" ">
          <div className="hidden lg:flex items-center space-x-6 h-15  bg-white shadow-md  md:pl-50 sm:hidden">

            <Link href="#about" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 hover:border-b-2   transition-all duration-300">About</Link>
            <Link href="#Outcomes" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Outcomes</Link>
            <Link href="#Testimonials" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Testimonials</Link>
            <Link href="#Additional" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Additional Facilities</Link>
            <Link href="#Enrollment " className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300 ">Enrollment</Link>
          </div>
        </section>
      </div >


      <AboutEnglish />



      <Curriculum />

      <Joinndustry />
      <Chat />



      <Univ />

      <Testimonials />



      <Threecards />





      <Paycards />


      {/* /* bottomsticky bar */}

      <div id='Enrollment' className="sticky bottom-0 h-auto py-2 bg-red-500 w-full px-4 sm:px-6 md:px-8 z-50">
        <div className='flex flex-col sm:flex-row justify-evenly gap-3 lg:gap-140'>

          <div className='text-center sm:text-left flex justify-evenly'>
            <button className="text-sm sm:text-base font-semibold text-white">
              English Business Course ₹17490
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
    </div>
  )
}



export default EnglishAdvance;