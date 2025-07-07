import React from 'react'

function Univ() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4'>
      <div className="ml-0 md:ml-10 -mt-5 text-gray-800">
        <div className="flex flex-col md:flex-row gap-6 md:gap-15 text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-12 w-full md:w-1/2">
            Get exclusive access to career resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-1/2 mb-3">
            <div className="flex flex-col w-full">
              <div className="text-2xl md:text-3xl pb-3">📄</div>
              <h3 className="text-base font-semibold">Resume Review</h3>
              <p className="text-sm text-gray-600 pb-3">
                Get your resume reviewed for job applications.
              </p>
            </div>

            <div className="flex flex-col w-full">
              <div className="text-2xl md:text-3xl pb-3">📘</div>
              <h3 className="text-base font-semibold">Application Support</h3>
              <p className="text-sm text-gray-600 pb-3">
                Get support for choosing and applying for different colleges and universities.
              </p>
            </div>

            <div className="flex flex-col w-full">
              <div className="text-2xl md:text-3xl pb-3">✈️</div>
              <h3 className="text-base font-semibold">Visa Support</h3>
              <p className="text-sm text-gray-600 pb-3">
                Get assistance in getting a visa and for Visa interview.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-gray-500 my-6" />
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-3">
          <p className="font-semibold text-base md:text-lg">
            Get access to more than 4000 International universities and colleges
          </p>
          <div className="w-full">
            <img src="./home/International-Foundation-Year-Uni-Logo-Bar-01-1.webp"
                 alt="university logo"
                 className="w-full h-auto max-h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Univ;
