"use client";


/**
 * @param {{ onFreeConsultClick: () => void }} props
 */
function HeroSection({ onFreeConsultClick }){
    return(
        <>
           <div className="flex flex-col-2 items-center px-20 bg-linear-to-r from-white-500 via-pink-100 to-green-100 justify-center space-x-35 font-[poppins,sans-serif]">
                <div className="py-18 rounded-lg mt-14">
                    <h1 className="text-[52px] leading-17">
                        Explore Edwise: <br /> What  <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">We</span> Do
                    </h1>
                    <br />
                    <ul className="list-disc list-inside text-gray-700 text-[18px] text-gray-600">
                Ready to experience the full spectrum of student services at Edwise?
            </ul>
                    <div className="flex flex-row gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-5">
                        <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
                       
                    </div>
                </div>
                <img src="https://www.edwiseinternational.com/img/whatwedo-bnr-img.png" alt="" className="w-120 h-115 mt-17 z-0 relative" />
            </div>













            
            </>
    )
}

export default HeroSection;