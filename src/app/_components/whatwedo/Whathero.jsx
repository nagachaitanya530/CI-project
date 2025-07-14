"use client";

/**
* @param {{ onFreeConsultClick: () => void }} props
*/
function HeroSection({ onFreeConsultClick }) {
return (
    <>
     <div className="flex flex-col lg:flex-row items-center px-6 lg:px-20 bg-gradient-to-r from-white via-pink-100 to-green-100 justify-center lg:space-x-10 space-y-10 lg:space-y-0 font-[poppins,sans-serif]">
        <div className="py-6 lg:py-18 rounded-lg mt-6 lg:mt-14 text-center lg:text-left">
         <h1 className="text-3xl lg:text-[52px] leading-8 lg:leading-[4.5rem]">
            Explore CI:
            <br />
What{" "}
            <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
             We
            </span>{" "}
            Do
         </h1>
        

         <ul className="list-disc list-inside text-gray-700 text-sm lg:text-[18px] text-gray-600">
            Ready to experience the full spectrum of student services at CI?
         </ul>
         <div className="flex justify-center lg:justify-start flex-row gap-4 lg:gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-5">
            <button
             onClick={onFreeConsultClick}
             className="mt-6 lg:mt-10 px-4 lg:px-6 py-2 lg:py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
            >
             Free Expert Consultation
            </button>
         </div>
        </div>
        <img
         src="https://img.freepik.com/free-photo/young-casual-woman-sitting-down-smiling-holding-laptop-isolated-white-wall_231208-11484.jpg?semt=ais_hybrid&w=740"
         alt=""
         className="w-80 h-80 lg:w-120 lg:h-115 mt-4 lg:mt-17 z-0 relative"
        />
     </div>
    </>
);
}

export default HeroSection;