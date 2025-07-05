function HeroSection({ onFreeConsultClick }: { onFreeConsultClick: () => void }){
    return(
        <>
           <div className="flex flex-col-2 items-center px-20 bg-linear-to-r from-white-500 via-pink-100 to-green-100 justify-center space-x-35 font-[poppins,sans-serif]">
                <div className="py-18 rounded-lg mt-14">
                    <h1 className="text-[52px] leading-17">
                        <span className="font-bold"> Switzerland:</span>The land of precision and perfection
                    </h1>
                    <div className="flex flex-row gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-5">
                       <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
                       
                    </div>
                </div>
                <img src="https://www.edwiseinternational.com/img/study-abrd-swiss.webp" alt="Switzerland Education" className="w-120 h-115 mt-17 z-0 relative" />
            </div>

            <div className="z-10 flex flex-row font-bold justify-center gap-14 rounded-4xl -mt-2 py-12 mx-20 bg-gray-200 relative border-2 border-gray-300">
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">10+</h1>
                    <p className="text-2xl font-semibold">Universities</p>
                </div>
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">CHF 30K-50K</h1>
                    <p className="text-2xl font-semibold">Annual tution fees</p>
                </div>
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">76K+</h1>
                    <p className="text-2xl font-semibold">International Students</p>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-blue-800">NA</h1>
                    <p className="text-lg font-semibold">Post-Study Work Visa</p>
                </div>
            </div>
            </>
    )
}

export default HeroSection;