import React from 'react';
import Navigation from "../_components/Navigation";
const BookDemoPage = () => {
  // Generate a grid of placeholder avatars
  const avatars = Array.from({ length: 120 }, (_, i) => (
    <div
      key={i}
      className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm flex items-center justify-center text-xs font-medium text-white"
      style={{
        backgroundImage: `linear-gradient(${Math.random() * 360}deg, 
          hsl(${Math.random() * 360}, 70%, 60%), 
          hsl(${Math.random() * 360}, 70%, 40%))`,
      }}
    >
      {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
    </div>
  ));

  return (
    <div>
    <Navigation/>
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Start bringing
            <br />
            <span className="text-white">your dreams to life</span>
          </h1>
        </div>

        {/* Content Section with Orange Arrow and Student Grid */}
        <div className="flex items-center justify-center w-full max-w-7xl">
          
          {/* Orange Arrow Shape */}
          <div className="relative mr-8">
            <div 
              className="w-80 h-96 bg-gradient-to-br from-orange-400 to-orange-600"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
              }}
            />
          </div>

          {/* Student Photos Grid with Overlay Text */}
          <div className="relative">
            {/* Grid of Student Photos */}
            <div className="grid grid-cols-12 gap-1 w-96 h-64 rounded-lg overflow-hidden">
              {avatars.slice(0, 96).map((avatar, index) => (
                <div key={index} className="aspect-square">
                  {avatar}
                </div>
              ))}
            </div>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-slate-900 bg-opacity-40 flex items-center justify-center rounded-lg">
              <div className="text-center px-6">
                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                  At NIL we are proud to be serving a huge community of
                  <br />
                  students by helping them achieve their goals in life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
    </div>
  );
};

export default BookDemoPage;