import { link } from 'fs';
import { title } from 'process'
import React from 'react'

function Card() {
  const cards = [
    {
      title: 'Advanced 1 Month',
      description: 'This plan includes 1 month of advanced training.',
      image:"../../Untitled-design.webp",
      button:"Enroll Now ",
      link:""
    },
    {
      title: 'Advanced 3 Month',
      description: 'This plan includes 3 months of advanced training.',
      image:"../../Untitled-design.webp",
      button:"Enroll Now ",
      link:""
  
    },
    {
      title: 'Advanced 6 Month',
      description: 'This plan includes 6 months of advanced training.',
      image:"../../Untitled-design.webp",
      button:"Enroll Now ",
      link:""
  
    }
  ];

  return (
    <>
      <div className="flex gap-6 justify-center flex-wrap px-2 sm:px-4 md:px-8 lg:gap-9 mb-10 ">
        {cards.map((item, index) => (
          <div
            key={index}
            className=" sm:w-[18rem] w-[18rem] h-60 border-2 rounded overflow-hidden flex  flex-col hover:shadow-xl shadow-gray-400 hover:border-blue-300 transition-transform duration-300 hover:scale-90"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-60 "
            />
            <div className="text-black text-center z-10 -mt-5 ">
              <h2 className="text-xl font-bold ">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
       
            </div>
                <a href={item.link} className='border-2 w-30 text-center ml-21 mb-6 bg-blue-400  text-white transition-transform duration-300 hover:scale-120  hover:bg-black'>{item.button}</a>
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
