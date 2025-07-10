import Link from 'next/link'
import React from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

function Cards() {
  const cards3 = [
    {
      image: "../Cost-of-Study3-Ausis.webp",
      heading: "MBA Degree in Australia for Indian Students",
      button: "Read More",
      click: "/cost-of-studying/australia",
    },
    {
      image: "../Cost-of-Study4-Ausis.webp",
      heading: "Cost of Studying in Australia for Indian Students",
      button: "Read More",
      click: "/cost-of-studying/cost-study",
    },
    {
      image: "../Cost-of-Study8-Ausis.webp",
      heading: "Scholarships to Study in Australia for Indian Students",
      button: "Read More",
      click: "/cost-of-studying/scholarship",
    }
  ]

  return (
    <>
      <div className=' sm:grid grid-cols-2   flex flex-col xl:flex xl:flex-row items-center py-10 gap-5  justify-center px-5  lg:px-15'>
        {
          cards3.map((items, index) => (

            <div key={index} className='   lg:w-[25rem] border-2 rounded-2xl  shadow-md hover:shadow-xl transition duration-300 overflow-hidden'>
              <div>
                {items.image && <img src={items.image} alt="Image" className={`h-[15rem] rounded-2xl w-full object-cover`} />}
                <p className='p-3  py-4 text-2xl'>{items.heading}</p>
                {items.button &&
                  <Link
                    href={items.click}
                    className='m-5 p-2 rounded-md border-1 inline-block hover:text-white hover:bg-blue-800 bg-white text-blue-900 border-gray-700 '>Read More</Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cards