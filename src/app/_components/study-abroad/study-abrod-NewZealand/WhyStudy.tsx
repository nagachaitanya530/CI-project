'use client'
import { FileBadge2, FileText, IdCardLanyard } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';
import BookConsultationForm from '../BookConsultationForm';
function WhyStudy() {
  return (
    <>

      <div className="ml-20 p-6 md:flex md:justify-between md:items-start gap-10 max-w-6xl mx-auto">
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
      </div>
    </>
  )
}
export default WhyStudy;