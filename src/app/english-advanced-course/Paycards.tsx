import { link } from 'fs';
import { title } from 'process'
import React from 'react'

function Card() {
  const cards = [
    {
      title: 'Advanced 1 Month',
      description: 'This plan includes 1 month of advanced training.',
      image: "3months.jpg",
      button: "Enroll Now ",
      link: "/enrollment"
    },
    {
      title: 'Advanced 3 Month',
      description: 'This plan includes 3 months of advanced training.',
      image: "6months.jpg",
      button: "Enroll Now ",
      link: "/enrollment"

    },
    {
      title: 'Advanced 6 Month',
      description: 'This plan includes 6 months of advanced training.',
      image: "9months.jpg",
      button: "Enroll Now ",
      link: "/enrollment"

    }
  ];

  return (
    <>

      <div className="flex gap-6 justify-center flex-wrap px-2 sm:px-4 md:px-8 lg:gap-9 mb-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative sm:w-[18rem] w-[18rem] h-60 border-2 rounded overflow-hidden flex flex-col hover:shadow-lg shadow-gray-400  transition-transform duration-300 hover:scale-99"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-950 px-4 text-center z-10 mt-30">
              <h2 className="text-xl font-bold mb-1">{item.title}</h2>
              <p className="text-sm mb-3">{item.description}</p>
              <a
                href={item.link}
                className="border-2 px-4 py-1 text-sm rounded bg-blue-400 text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-800"
              >
                {item.button}
              </a>
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