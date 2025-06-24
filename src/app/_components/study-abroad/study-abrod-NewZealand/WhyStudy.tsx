'use client'
import { FileBadge2, FileText, IdCardLanyard } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';
import BookConsultationForm from '../BookConsultationForm';


function WhyStudy()
{
return(
<>

{/* main section */}

<div className="ml-20 p-6 md:flex md:justify-between md:items-start gap-10 max-w-6xl mx-auto">
    {/* left content */}
    <div className="md:w-2/3 mt-10">
        <h1 className="text-4xl md:text-5xl font-lightl mb-6">
           Why <span className="text-black font-semibold">Study In New Zealand?
             </span> 
        </h1>
            <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> GLOBAL RECOGNITION
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                Students who have studied at the universities in New Zealand are earning a reputation as
                innovative thinkers and are being addressed as “The New World Class”. Qualifications are
                recognized internationally.
                </p>
            </section>
            <hr className="border-t border-gray-300" />

             <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> BEST OF BOTH WORLDS QUALIFICATION
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                Coupled with lower costs and international recognition, New Zealand essentially offers the Best of Both Worlds. New Zealand's qualifications have a reputation for being both practical and modern.
                </p>
            </section>
            <hr className="border-t border-gray-300" />

            <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> MIGRATION AND JOB SEARCH OPPORTUNITY
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                Students are given a visa to search for a job after completion of their course and also have a good opportunity to immigrate. They also get 2-3 years of post-study work visa if they study in New Zealand.
                </p>
            </section>
            <hr className="border-t border-gray-300" />

            <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> INSTITUTIONS AND COURSES ACCREDITED BY NZQA
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                The New Zealand Quality Assurance Framework (NZQA) assures the quality of the programs offered by state institutions and private establishments, which in turn ensures that New Zealand offers programs of international standards.
                </p>
            </section>
            <hr className="border-t border-gray-300" />

             <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> 1 - 3 YEARS OF POST STUDY WORK VISA
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                You can apply for PSW if you have currently finished your studies in New Zealand. It allows you to stay and work for up to 3 years depending on the course you have undertaken.
                 </p>
            </section>
            <hr className="border-t border-gray-300" />

            <section className="mb-6 mt-10">
                <h2 className="font-bold text-2xl flex items-center gap-2 top-5">
                <span><FileBadge2 /></span> LOW TUITION FEES
                </h2>
                <p className="text-xl text-gray-700 mt-5 text justify-center ml-10">
                The cost for students who wish to study abroad in New Zealand, including accommodation, food, and transportation, is relatively lower compared to many other study destinations. This makes studying in New Zealand more financially feasible for many students.                 </p>
            </section>

            <hr className="border-t border-gray-300" />
            
    </div>
 {/* right section */}

    <div className="w-300 mx-auto  bg-white shadow-lg rounded-3xl p-6 border border-gray-200 mt-10 lg:w-1/3 ml-auto gap-20">
    
      <h3 className="text-blue-900 text-lg font-semibold mb-4 leading-snug">
        Book your Free Consultation with <br /> Trustworthy Counsellors
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Preferred Course"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
        </select>

        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Year</option>
          <option>2025</option>
          <option>2026</option>
        </select>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="consent" className="mt-1" />
          <label htmlFor="consent" className="text-xs text-gray-600">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-700 border border-blue-700 rounded-md py-2 font-medium hover:bg-blue-700 hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  
    
    
  
    


</div>



</>

    )

}
export default WhyStudy;


