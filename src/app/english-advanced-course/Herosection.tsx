import {  ChevronRight, House } from 'lucide-react';
import React from 'react'

function Herosection() {
     const Rating = 
  [
        {
           videoLink: 'https://youtu.be/PHSNcKCAJrE',
             rating: '4.7 ★(15,629 Ratings)' ,
             title:'Advanced English Course',
             description: 'Comprehensive Advanced Level Course for more advanced learning',  
              title1: 'Intermediate Level' ,
              description1: 'Recommended Experience',
                duration: 'Up to 3 months / 66 hours'
          },  
          ]
  return (
    <>
<div className="flex flex-wrap items-center gap-2 text-sm  px-4 py-2 xl:ml-50">
  <House className="w-5 h-5 text-gray-700" />
  <ChevronRight className="w-4 h-4 text-gray-700" />
  <span className="text-gray-700">Courses</span>
  <ChevronRight className="w-4 h-4 text-gray-700" />
  <span className="text-gray-700">IELTS Courses</span>
  <ChevronRight className="w-4 h-4 text-gray-700" />
  <span className="text-gray-700 font-medium">IELTS Foundation</span>
</div>

    <div className="w-full px-4 py-8 bg-blue-100">
      
  <div className="bg-blue-100 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
    <div className="w-full md:w-1/2">
      <div className="pb-4 flex justify-center md:justify-start">
        <img
          src="../../bg.j"
          alt="Description of image"
          className=" max-w-xs md:max-w-none"
        />
      </div>

      <div className="text-center md:text-left">
        <span className="text-2xl sm:text-3xl md:text-3xl font-semibold block">
          ENGLISH ADVANCED COURSE: 
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold block">
          Personal Training.
        </span>

        <p className="mt-3 text-sm sm:text-base">
          This course is intended to provide training for Advanced Level English from initial level. <br />
          Comprises of general to advanced level English language training with personality development.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            className="w-16"
            src="../../Certified-Trainers-100x100.webp"
            alt="Certified Trainers"
          />
          <div>
            <div className="font-semibold border-b-2 border-black inline-block">
              Instructors:
            </div>
            <p className="mt-1">NIL Trained & British Council Certified</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5  ">
          <button className="bg-blue-500 w-52 h-12 rounded-md text-white ml-6 -md:ml-9 ">
            ENROLL NOW
          </button>
          <div className="text-sm mr-8 sm:-w-5">(Credit/Debit EMI Available)</div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-lg">
          <div className="text-[#8B4513] font-bold">₹17490</div>
          <div className="flex gap-2">
            <span className="font-medium">29,313</span>
            <span>already enrolled</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-[28rem] h-auto md:h-[35rem] bg-white rounded-b-2xl shadow-xl/30 overflow-hidden">
      {Rating.map((item, index) => (
        <div key={index}>
          <div className="w-full h-60 border-b-4 border-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${item.videoLink.split('/').pop()}`}
              allowFullScreen
              title={`video-${index}`}
            ></iframe>
          </div>
          <div className="p-4">
            <div className="text-blue-500 text-lg mb-2">{item.rating}</div>
            <div className="text-2xl font-semibold mb-2">{item.title}</div>
            <p className="mb-3">{item.description}</p>
            <hr className="border border-black my-2" />
            <div>
              <div className="text-lg font-medium">{item.title1}</div>
              <p>{item.description1}</p>
            </div>
            <hr className="border border-black my-2" />
            <p className="text-lg">{item.duration}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
</>
  )
}

export default Herosection;

