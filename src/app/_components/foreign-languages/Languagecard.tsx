import Link from 'next/link';
import React from 'react';

export default function LanguageCard() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
  };
  return (
    <>
      <div className="lg:h-[85vh] bg-sky-400">
        {/* Main Section - Special Programs */}
        <section className="relative pt-12 pb-20 mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
              {/* Left Content */}
              <div className="flex-1 ml-5 pr-12 max-w-lg">
                <h2 className="text-green-800 text-lg font-bold mb-4">
                  Why Choose Our Service?
                </h2>
                <h1 className="text-white text-3xl font-bold mb-6 leading-tight">
                  Special programmes for<br />
                  permanent residency<br />
                  candidates
                </h1>
                <p className="text-white/80 text-base mb-8 leading-relaxed">
                  Get expert guidance for your immigration journey with our specialized programs designed for permanent residency success.
                </p>
                <button className=" onClick={handleWhatsApp} bg-blue-600 hover:bg-purple-600 text-white px-8 py-3 rounded font-medium shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden group hover:cursor-pointer">
                  <span className="relative z-10">CONNECT WITH US</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Right Content - Language Chart */}

              <div className="py-10 px-2">
                <img src="/chart.png" alt="" className='h-120 w-full rounded-xl' />
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* Bottom Section - Language Learning Card positioned to overlap */}
      <div className="relative bottom-20 lg:bottom-30 pb-12 md:mx-20 lg:mx-10">
        <div className="max-w-7xl mx-auto px-2 lg:px-8 ">
          <div className="flex justify-center ">
            <div className="bg-white flex flex-col lg:flex-row justify-between px-2 lg:px-15 py-10 rounded-lg shadow-xl  relative z-10">
              <div className='lg:w-1/2 m-2 lg:m-0'>

                <h2 className="text-sky-400 text-2xl lg:text-4xl font-bold mb-4">
                  Why Foreign Languages With NIL?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  To consider achieving the skill to acquire a foreign language takes time, strength,
                  patience, tenacity, and persistence. Fortunately, there are methods that you
                  can use to accommodate your expanding vision. A linguist that you
                  can use to improve your linguistic skills includes enhancing cognitive abilities
                  and enhancing you will be able to discover more interesting as you go by
                  practicing as best as you can.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Link href="/book-demo">
                  <button className="bg-green-500 hover:bg-orange-500 text-white px-6 py-3 rounded font-medium shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden group hover:cursor-pointer">
                    <span className="relative z-10">BOOK A DEMO</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}