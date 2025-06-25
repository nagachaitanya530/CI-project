"use client";
import React from "react";
import Navigation from "../_components/navigation1";

const MainSection = () => {
  return (
    <div className="bg-slate-900">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <main className="relative bg-gradient-to-br from-blue-900 via-black to-blue-900 py-8 md:py-16">
        {/* Background geometric shape */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-r-full opacity-90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-8">
                Start bringing
                <br />
                your dreams to life
              </h1>
            </div>

            {/* Right Content - Student Grid */}
            <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
              <div className="relative">
                {/* Student photos grid */}
                <div className="grid grid-cols-8 md:grid-cols-12 gap-1 md:gap-1 max-w-xs sm:max-w-sm md:max-w-2xl">
                  {Array.from({ length: 144 }, (_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(${Math.random() * 360}deg, 
                          hsl(${Math.random() * 360}, 70%, 60%), 
                          hsl(${Math.random() * 360}, 70%, 60%))`,
                      }}
                    />
                  ))}
                </div>

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="bg-gradient-to-br    to-blue-100 bg-opacity-60 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl max-w-xs md:max-w-md text-center">

                    <p className="text-red text-sm md:text-lg font-medium leading-relaxed">
                      At NIL we are proud to be serving a huge community of students by helping them achieve their goals</p>

                    


                  <div className="bg-black bg-opacity-60 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl max-w-xs md:max-w-md text-center">
                    <p className="text-white text-sm md:text-lg font-medium leading-relaxed">
                      At CI we are proud to be serving a huge community of students by helping them achieve their goals in life.
                    </p>


                    <div className="bg-gradient-to-br    to-blue-100 bg-opacity-60 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl max-w-xs md:max-w-md text-center">
                      <p className="text-red text-sm md:text-lg font-medium leading-relaxed">
                        At NIL we are proud to be serving a huge community of students by helping them achieve their goals

                      </p>

                      <div className="bg-black bg-opacity-60 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl max-w-xs md:max-w-md text-center">
                        <p className="text-white text-sm md:text-lg font-medium leading-relaxed">
                          At CI we are proud to be serving a huge community of students by helping them achieve their goals

                          in life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-500 rounded-full opacity-20 hidden md:block"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-30 hidden md:block"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-25 hidden md:block"></div>
      </main>
    </div>



);

  )


};



export default MainSection;

 



