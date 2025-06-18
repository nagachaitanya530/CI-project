import { title } from 'process'
import React from 'react'

function Card() {
  const cards = [
    {
      title: 'Advanced 1 Month',
      description: 'This plan includes 1 month of advanced training.',
      image:"../../Untitled-design.webp"
    },
    {
      title: 'Advanced 3 Month',
      description: 'This plan includes 3 months of advanced training.',
      image:"../../Untitled-design.webp"
  
    },
    {
      title: 'Advanced 6 Month',
      description: 'This plan includes 6 months of advanced training.',
      image:"../../Untitled-design.webp"
  
    }
  ];

  return (
    <>
      <div className="flex gap-6 justify-center flex-wrap px-2 sm:px-4 md:px-8 lg:gap-9 mb-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[18rem] md:w-[20rem] h-60 border-2 rounded overflow-hidden flex items-center justify-center hover:shadow-xl shadow-gray-400 hover:border-blue-300 transition-all"
          >
            {/* Image as background */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-60 transition-transform duration-300 hover:scale-90"
            />

            {/* Text in front */}
            <div className="text-black -ml-60">
              <h2 className="text-xl font-bold mb-1">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Paycards() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl text-gray-700 mb-4  p-10 text-center px-2">
        Choose from below options.
      </h1>
      <Card />
    </>
  );
}

export default Paycards;
