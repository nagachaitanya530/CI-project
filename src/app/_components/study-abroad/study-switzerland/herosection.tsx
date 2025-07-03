function HeroSection({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
return (
    <>
     <div className="flex flex-col lg:flex-row items-center px-6 lg:px-20 bg-gradient-to-r from-white via-pink-100 to-green-100 justify-center lg:space-x-10 space-y-10 lg:space-y-0 font-[poppins,sans-serif]">
        <div className="py-6 lg:py-18 rounded-lg mt-6 lg:mt-14 text-center lg:text-left">
         <h1 className="text-3xl lg:text-[52px] leading-8 lg:leading-[4.5rem]">
            <span className="font-bold">Switzerland:</span> The land of precision and perfection
         </h1>
         <div className="flex justify-center lg:justify-start mt-6 lg:mt-10">
            <button
             onClick={onFreeConsultClick}
             className="px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
            >
             Free Expert Consultation
            </button>
         </div>
        </div>
        <img
         src="https://img.freepik.com/free-photo/young-woman-working-laptop-floor-white-background_231208-9495.jpg"
         alt="Switzerland Education"
         className="w-80 h-80 lg:w-120 lg:h-115 mt-4 lg:mt-17 z-0 relative"
        />
     </div>

     <div className="z-10 flex flex-col lg:flex-row font-bold justify-center gap-6 lg:gap-14 rounded-4xl -mt-2 py-6 lg:py-12 mx-6 lg:mx-20 bg-gray-200 relative border-2 border-gray-300">
        <div className="text-center border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 pb-6 lg:pb-0 lg:pr-10">
         <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">10+</h1>
         <p className="text-lg lg:text-2xl font-semibold">Universities</p>
        </div>
        <div className="text-center border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 pb-6 lg:pb-0 lg:pr-10">
         <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">CHF 30K-50K</h1>
         <p className="text-lg lg:text-2xl font-semibold">Annual tuition fees</p>
        </div>
        <div className="text-center border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 pb-6 lg:pb-0 lg:pr-10">
         <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">76K+</h1>
         <p className="text-lg lg:text-2xl font-semibold">International Students</p>
        </div>
        <div className="text-center">
         <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">NA</h1>
         <p className="text-sm lg:text-lg font-semibold">Post-Study Work Visa</p>
        </div>
     </div>
    </>
);
}

export default HeroSection;