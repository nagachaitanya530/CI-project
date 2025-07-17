"use client";

import Image from "next/image";

export default function EventSection() {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-20 space-y-20">
      {/* TOP IMAGE + TEXT SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left: Stacked Images */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <Image src="/biz-admin-blog-2.png" alt="Debate Topic" width={400} height={250} className="rounded-2xl object-cover" />
          <Image src="/itpro.jpg" alt="Speaker" width={400} height={250} className="rounded-2xl object-cover" />
          <Image src="/cael.jpg" alt="Free Speech" width={400} height={250} className="rounded-2xl object-cover" />
          <Image src="/step7.jpg" alt="Conference" width={400} height={250} className="rounded-2xl object-cover" />
          <Image src="/softskillcard.jpg" alt="Happy Woman" width={400} height={250} className="rounded-2xl object-cover col-span-2" />
        </div>

        {/* Right: Text Block */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            We have understood the importance of communication skills in the modern world.
            <br />
            <br />
            and for that we are determined to create a platform to bring the talent to the fore.
          </p>

          <div className="h-1 w-40 bg-gradient-to-r from-pink-400 to-pink-200 rounded-full mb-6" />

          <div>
            <p className="text-lg italic font-signature">Aditi Dwivedi</p>
            <p className="text-gray-600 text-sm mt-1">Event Organiser</p>
          </div>
        </div>
      </div>

     
<div id="schedule" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Where is the event */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <span role="img" aria-label="location">📍</span>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">WHERE IS THE EVENT :</h4>
            <p className="text-sm text-gray-600">IT'S EVERYWHERE. Participate online with people from across the globe.</p>
          </div>
        </div>

        {/* When is the event */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <span role="img" aria-label="calendar">🗓️</span>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">WHEN IS THE EVENT :</h4>
            <p className="text-sm text-gray-600">
              Every Sunday: 11:00 AM, 02:00 PM, 05:00 PM.
              <br />
              (You can be put in any of these slots.)
            </p>
          </div>
        </div>
      </div>

      {/* HOW DOES IT WORK SECTION */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How does it work?</h2>
        <p className="text-gray-600 mb-10">
          Become more confident speaker with National Institute of Language Toastmasters Club.
          Take on meeting roles and learn a great deal with hands-on experience.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-300 mb-2">01</p>
            <h4 className="font-semibold mb-1">SPEECHES</h4>
            <p className="text-sm text-gray-600">Members give speeches and participate in discussions on various topics.</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-300 mb-2">02</p>
            <h4 className="font-semibold mb-1">MEETING ROLES</h4>
            <p className="text-sm text-gray-600">Members are promoted to/given roles in the club depending upon their skills/experience.</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-300 mb-2">03</p>
            <h4 className="font-semibold mb-1">LEARN</h4>
            <p className="text-sm text-gray-600">With practice on public platform along with help from other members you learn a lot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
