import React from 'react'

function Herosection() {
  return (
    


<>



{/* Hero */}
           <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center gap-10  xl:justify-between px-6 md:px-12 lg:px-10 xl:px-26 py-10 xl:py-0 bg-gradient-to-r from-white via-pink-100 to-green-100 font-[poppins,sans-serif]">
  <div className="rounded-lg text-center lg:text-left">
    <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl leading-snug xl:w-[38rem] w-full  mb-6">
      <span className="font-bold text-3xl md:text-3xl lg:text-6xl  underline decoration-red-500">Australia:</span> A top choice for students seeking high-quality education and vibrant lifestyle
    </h1>

    <div className="flex flex-col  xl:flex-row gap-5 justify-center  ">
      <button className="bg-blue-900   rounded-2xl border-2 text-white  py-3 px-6 font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
        Free Expert Consultation
      </button>
      <button className="bg-blue-900 rounded-2xl border-2 text-white py-3 px-6 font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
        View & Download Brochure
      </button>
    </div>
  </div>

  <img
    src="../images/study-abrd-aus.jpg"
    alt="Australia Education"
    className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[30rem] h-auto mt-10 lg:mt-0 rounded-xl "
  />
</div>


            <div className="z-10 p-10  gap-10 lg:flex justify-center align-middle md:grid md:grid-cols-2   font-bold  md:gap-14 rounded-4xl  py-12 xl:mx-20 md:mx-8 bg-gray-200 relative border-2 border-gray-300">
                <div className="text-center mb-10 sm:mb-0 lg:pr-5 sm:border-r-2 border-gray-300 ">
                    <h1 className="text-xl md:text-4xl  font-semibold text-blue-800">42+</h1>
                    <p className="md:text-2xl font-semibold">Universities</p>
                </div>
                <div className="text-center mb-10 sm:mb-0 lg:border-r-2 border-gray-300 lg:pr-5  ">
                    <h1 className="text-xl md:text-4xl  font-semibold text-blue-800">A$30k-A$60k</h1>
                    <p className="md:text-2xl font-semibold">Annual tution fees</p>
                </div>
                <div className="text-center mb-10 sm:mb-0 sm:border-r-2 border-gray-300 lg:pr-5 ">
                    <h1 className="text-xl md:text-4xl  font-semibold text-blue-800">700k+</h1>
                    <p className="md:text-2xl font-semibold">International Students</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-4xl  font-semibold text-blue-800">2-4 Years</h1>
                    <p className="md:text-lg font-semibold">Post-Study Work Visa</p>
                </div>
            </div>







</>





  )
}

export default Herosection