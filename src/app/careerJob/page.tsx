
'use client';
import React, { useMemo } from 'react'

import { useSearchParams } from 'next/navigation';
import Navigation from '../_components/Navigation'
import Footer from '../_components/Footer'

import JobApplicationForm from './JobApplicationForm';
import "./style.css";
import {JobDescription} from './JobDescription';
const page = () => {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const jobId = ref ? Number(atob(ref)) : null;

  const job = useMemo(() => {
    return jobId ? JobDescription.find((j) => j.id === jobId) : null;
  }, [jobId]);

  if (!job) return <p className="text-center text-red-500">Job not found</p>;
  return (

    <>
      <Navigation />

      <div className="main  flex flex-col gap-5 sm:flex-row p-6 max-w-7xl mx-auto">
 
        <div className="hero   sm:w-4/5">

          <div className="bg-cover bg-center bg-no-repeat  w-full rounded-lg "
            style={{
              backgroundImage:
                "url('https://nationalinstituteoflanguage.in/wp-content/uploads/2023/08/Rect-Light-4.svg')",
            }}
          >
    <div className=" flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-20 md:py-20 gap-10">
      
      {/* <!-- Left Text --> */}
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-orange-500 font-semibold text-sm mb-4">Careers at CI</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          We are pleased<br />
          to know that<br />
          you are here
        </h1>
      </div>

      {/* <!-- Image in Center --> */}
      <div className=" md:w-20 md:h-20 flex-shrink-0">
        <img src="\home\writing-girl.jpg" alt="Team" className="rounded-md w-full h-full object-cover" />
      </div>

      {/* <!-- Right Text --> */}
      <div className="md:w-1/3 text-sm md:text-base text-gray-300 max-w-md text-center md:text-left">
        <p>
          At CI we work like a <span className="font-semibold text-white">Family</span> and we have a
          culture which supports your personal and professional growth.
          Let’s connect to discover what are opportunities are waiting for you.
        </p>
      </div>
    </div>
          </div>
          <div className="jobdes flex flex-col gap-5 sm:flex-row p-6 max-w-7xl mx-auto">

 <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 space-y-4 text-gray-800 sm:w-4/5">
      <h1 className="text-2xl font-bold text-blue-700">{job.title}</h1>
      <p className="italic text-sm text-gray-600">{job.company}</p>
      <p className="text-xs text-gray-500">{job.posted}</p>

      <p className="text-base">{job.fullDetails}</p>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Responsibilities:</h2>
        <ul className="list-disc list-inside space-y-1">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Requirements:</h2>
        <ul className="list-disc list-inside space-y-1">
          {job.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Timing & Compensation:</h2>
        <ul className="list-disc list-inside space-y-1">
          {job.timingAndCompensation.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm">
        <p><span className="font-semibold">Location:</span> {job.location}</p>
        <p><span className="font-semibold">Type:</span> {job.type}</p>
        <p><span className="font-semibold">Experience:</span> {job.experience}</p>
        <p><span className="font-semibold">Department:</span> {job.department}</p>
      </div>
    </div>

            <div className="newopenings h-auto self-start  shadow-lg rounded-lg sm:w-2/5 ">
              <div className="figure">

                <img
                  src="/img1.jpeg"
                  alt="Woman working on laptop"
                  className="w-[300px] h-[250px] object-cover shadow-lg rounded-tr-lg rounded-tl-lg"
                />
              </div>
              <div className="openingdes p-5">

                <h2 className="text-[2.5rem] mb-[23px] tracking-[-0.24px] ">Looking for something else</h2>
                <div className="ha-card-text">
                  <p>Have a look at other opportunities available at your disposal.</p>
                </div>
                <div className='my-5'><a href="/career" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors ">New Openings</a></div>
              </div>
            </div>
          
          
          </div>

      
        </div>
        <div className="asideright  sm:w-1/5">
          <div className="recentdis border-2 border-gray-300 p-4 rounded-lg">
            <h2 className='text-[1.25rem] mb-[23px] tracking-[-0.24px] font-semibold'>Recent Discussions</h2>
            <ul>

              <li>

                <div className="bbp-topic-info">
                  <a className="bbp-forum-title hover:text-blue-500 text-sm font-medium" href="https://nationalinstituteoflanguage.in/forums/discussion/essay-negative-impacts-of-social-media/">Essay -Negative impacts of Social Media</a>


                </div>

              </li>
              <li>

                <div className="bbp-topic-info">
                  <a className="bbp-forum-title" href="https://nationalinstituteoflanguage.in/forums/discussion/essay-on-neighbors/">Essay on neighbors</a>


                </div>

              </li>
              <li><div className="bbp-topic-info">
                <a className="bbp-forum-title" href="https://nationalinstituteoflanguage.in/forums/discussion/double-question-essay/">Double Question Essay</a>


              </div></li>
              <li className="bbp-topic-no-avatar">


                <div className="bbp-topic-info">
                  <a className="bbp-forum-title" href="https://nationalinstituteoflanguage.in/forums/discussion/ielts-essay-on-learning-a-language/">IELTS ESSAY on learning a language</a>


                </div>
              </li>
              <li className="bbp-topic-no-avatar">


                <div className="bbp-topic-info">
                  <a className="bbp-forum-title" href="https://nationalinstituteoflanguage.in/forums/discussion/health-problems/">Health Problems</a>


                </div>
              </li>
            </ul>
          </div>

          <div className="whosonline border-2 border-gray-300 p-4 rounded-lg mt-6">

            <h2 className="text-[1.25rem] mb-[23px] tracking-[-0.24px] font-semibold ">Who’s Online<a href="" className="bs-widget-reload bs-heartbeat-reload hide " title="reload"><i className="bb-icon-spin6"></i></a></h2>		<div className="item-options bb-online-members-tabs" id="who-online-members-list-options">
              <a href="javascript:void(0);" id="online-members" data-content="boss_whos_online_widget_heartbeat" className="online-members-count">
                Online				<span className="widget-num-count">0</span>
              </a>
            </div>
            <div className="widget-content bb-online-status-who-is-online-members-tab" id="boss_whos_online_widget_heartbeat" data-max="15">			<div className="widget-error widget-error-users">
              There are no users currently online			</div>
            </div>


          </div>
        </div>

        
      </div>
    <div className="applicationform w-full max-w-5xl mx-auto px-4 py-8">
        <JobApplicationForm/>
    </div>
      <Footer />

    </>
  )
}

export default page