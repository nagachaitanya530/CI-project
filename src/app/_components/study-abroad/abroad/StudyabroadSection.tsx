import React from 'react';
import Image from "next/image";

const allCountries = [
  { name: "UK", img: "/Tower_Bridge_Uk_Feb_2006.jpg" },
  { name: "USA", img: "/Statue_Usa1.jpg" },
  { name: "Canada", img: "/Canada_pic.jpg" },
  { name: "Australia", img: "/Sydney_Bridge.jpg" },
  { name: "New Zealand", img: "/New-zeland-view.jpg" },
  { name: "Singapore", img: "/Singapore_view.jpg" },
  { name: "Ireland", img: "/Nw_Ireland-study.svg" },
  { name: "France", img: "/France-abroad.avif" },
  { name: "Germany", img: "/Germany-abroad.webp" },
  { name: "Switzerland", img: "/Switzerland-study.jpg" },
  { name: "Dubai", img: "/Dubai.jpg" },
  { name: "Spain", img: "/Spaine-study.avif" },
  { name: "Malaysia", img: "/Malasiya-study.jpg" },
  { name: "Mauritius", img: "/Mauritius-view.webp" },
  { name: "Italy", img: "/Italy-views.jpg" },
  { name: "Netherlands", img: "/Netherland-view.jpg" },
  { name: "India", img: "/India-fort.webp" },
];

const media = [
  {
    type: "image",
    src: "/Abroad_graduation1.jpg",
    alt: "University Graduate at Liverpool",
  },
  {
    type: "video",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Woman_Smiling_Outdoor.jpg",
    alt: "Female graduate outdoor",
     video: 'https://www.youtube.com/embed/dummy2',
  },
  {
    type: "video",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/58/Graduate_gown_and_hat.jpg",
    alt: "Graduate with certificate",
    video: 'https://www.youtube.com/embed/dummy1',
  },
  {
    type: "image",
    src: "/Abroad_graduation2.jpg",
    alt: "Graduation crowd",
    
  },
];


const students = [
  {
    name: 'Pryaag',
    university: 'University of Sydney, Australia',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Graduate_gown_and_hat.jpg',
    video: 'https://www.youtube.com/embed/dummy1',
  },
  {
    name: 'Archana Sidhwani',
    university: 'Sheridan College, Canada',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Woman_Smiling_Outdoor.jpg',
    video: 'https://www.youtube.com/embed/dummy2',
  },
  {
    name: 'Kariveda Rukhmini Reddy',
    university: 'Bradley University, USA',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Graduation_in_red_seats.jpg',
    video: 'https://www.youtube.com/embed/dummy3',
  },
];


export default function StudyabroadSection() {
  return (
    <>
   {/* HERO SECTION */}
<section className="-mt-20">
  <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center py-12">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left ml-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Study{" "}
            <span className="text-blue-600 relative inline-block">
              Abroad
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 ">
            Studying abroad leads to personal growth, global awareness, and unique career opportunities. Gain cross-cultural skills, expand your network, and broaden your horizons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-700 hover:bg-blue-800 hover:scale-105 transform transition text-white px-8 py-4 rounded-lg font-semibold shadow-lg duration-300">
              Free Expert Consultation
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transform transition text-white px-8 py-4 rounded-lg font-semibold shadow-lg duration-300">
              View & Download Brochure
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://www.edwiseinternational.com/img/study-abroad-bnr-img.png"
            alt="Study Abroad Student"
            className="w-full max-w-[500px] h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* WINNING STREAK SECTION */}
  <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600 relative inline-block">Winning Streak
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-400 rounded-full"></span>
            </span>
          </h2>
          <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed list-disc pl-5">
            <li>900+ top international university partnerships across 20+ countries</li>
            <li>India’s Leading Overseas Education Consultancy since 1991</li>
            <li>24 branches across India with more to come</li>
            <li>350+ experienced and trained counselors</li>
            <li>Over 33 years experience of turning students’ dreams into reality</li>
            <li>200,000+ student lives transformed</li>
            <li>99% visa success rate – highest in the industry</li>
            <li>Awarded ‘Agency of the Year’ in 2020 by AIRC</li>
          </ul>
          <button className="mt-8 px-6 py-3 border border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition">
            Book a Free Consultation
          </button>
        </div>

        {/* Right Media Grid */}
        <div className="grid grid-cols-2 gap-4">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md group h-[220px]"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="relative w-full h-full">
                  <iframe
                    src={item.src}
                    title={item.alt}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-30 transition-all duration-300">
                    <svg
                      className="w-12 h-12 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="bg-[#e6ecf5] py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Your <span className="font-bold text-black">Dream Study Abroad Destination</span> Awaits
      </h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto text-sm md:text-base">
        Explore the countries with best education in the world! Learn more about top universities,
        scholarships, cost of living, post-study work rights and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {allCountries.map((country) => (
          <div
            key={country.name}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={country.img}
                alt={country.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="py-3">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Study in {country.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-2 px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition">
        Book a Free Consultation
      </button>
    </section>

     <section className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Meet Our <span className="relative inline-block text-red-600">
          Students
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-400 rounded-full"></span>
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {students.map((student, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 transition hover:shadow-md">
            <div className="relative rounded-2xl overflow-hidden h-[260px] w-full">
              <img
                src={student.thumbnail}
                alt={student.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition">
                <button className="bg-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4 text-left px-2">
              <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
              <p className="text-sm text-blue-800">{student.university}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-3 border border-blue-900 text-blue-900 font-medium rounded-full hover:bg-blue-900 hover:text-white transition">
        Book a Free Consultation
      </button>
    </section>
  
    </>
  );
}
