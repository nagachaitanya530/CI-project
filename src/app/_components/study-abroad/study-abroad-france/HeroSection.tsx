import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

function HeroSection(){
    const [isOpen, setIsOpen] = useState(false);

    return(

        <>
           {isOpen && <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />}
           <div className="flex flex-col-2 items-center px-20 bg-linear-to-r from-white-500 via-pink-100 to-green-100 justify-center  space-x-35 font-[poppins,sans-serif]">
                <div className="py-18 rounded-lg mt-14">
                    <h1 className="text-[52px] leading-17">
                        <span className="font-bold text-orange-600 text-6xl"> France:</span> A world leader in education, arts, culture, and humanities
                    </h1>
                    <div className="flex flex-row gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-5">
                        <button  onClick={()=> setIsOpen(true)} className="bg-blue-900 text-blue-600 rounded-2xl border-2 hover:bg-white hover:text-blue-800 hover:cursor-pointer mt-4 hover:bg-red-500 text-white py-2 text-md font-semibold px-6">
                            Free Expert Consultation
                        </button>
                        <button className="bg-blue-900 text-blue-600 rounded-2xl border-2 hover:bg-white hover:text-blue-800 hover:cursor-pointer mt-4 hover:bg-red-500 text-white py-2 text-md font-semibold px-6">
                            View & Download Brochure
                        </button>
                    </div>
                </div>
                <img src="/france.jpg" alt="France Education" className="w-120 h-115 mt-17 z-0 relative" />
            </div>

            <div className="z-10 flex flex-row font-bold justify-center gap-14 rounded-4xl -mt-2 py-12 mx-20 bg-gray-200 relative border-2 border-gray-300">
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">100+</h1>
                    <p className="text-2xl font-semibold">Universities</p>
                </div>
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">€3K-€10K</h1>
                    <p className="text-2xl font-semibold">Annual tution fees</p>
                </div>
                <div className="text-center border-r-2 border-gray-300 pr-20">
                    <h1 className="text-4xl font-semibold text-blue-800">400K+</h1>
                    <p className="text-2xl font-semibold">International Students</p>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-blue-800">2 years</h1>
                    <p className="text-lg font-semibold">Post-Study Work Visa</p>
                </div>
            </div>
            </>
    )
}

export default HeroSection;