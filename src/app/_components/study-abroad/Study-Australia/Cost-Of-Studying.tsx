import React from 'react'

function CostStudying() {
  return (
    <section className=' bg-blue-50 w-full flex md:p-15 px-7 py-6 rounded-[2rem]  gap-10 lg:flex-row flex-col '>

      <div className='lg:w-2/4 w-full '>
        <h3 className='text-xl md:text-2xl xl:text-4xl xl:pl-3 '><span className='text-2xl xl:text-5xl md:text-3xl xl:pb-4 md:block underline decoration-red-500'>Cost Of Studying </span>In Australia</h3>
        <p className='text-lg xl:p-4'>
          The cost of studying in Australia depends on the location of the university, the courses undertaken,
          and scholarships. Additional costs include living expenses,
          which include rent, personal expenses (recreational costs), travel costs, groceries, etc.
        </p>
      </div>
      <div className=' flex lg:flex flex-col w-full gap-5'>
        <span className=' border-2 p-3  md:px-10 rounded-2xl md:w-fit bg-blue-50'>Tuition fees (Average per annum)</span>
        <div className='border-2 p-2 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>Diplomas and Certificates</span><span className='block'>AUD 18,000 - 24,000</span></div>
        <div className='border-2 p-2 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>Bachelor's</span><span>AUD 18,000 - 45,000</span></div>
        <div className='border-2 p-2 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>Master's</span><span>AUD 25,000 - 55,000</span></div>

        <span className='border-2 p-3 md:px-10 rounded-2xl md:w-fit bg-blue-50'>Living expenses (Average per annum)</span>
        <div className='border-2 p-2 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span></span><span>Approx. AUD 29,710</span></div>

        <span className='border-2 p-3  md:px-10 rounded-2xl md:w-fit bg-blue-50'>Accommodation (Average per month)</span>
        <div className='border-2 p-3 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>On-campus</span><span>AUD 360 – 1,170</span></div>
        <div className='border-2 p-3 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>Off-Campus Rental</span><span>AUD 1,460 – 1,760</span></div>
        <div className='border-2 p-3 md:p-4  rounded-2xl md:flex md:justify-between bg-white'><span className='block'>Hostel/Homestay</span><span>AUD 360 - 600</span></div>
      </div>
    </section>
  )
}

export default CostStudying