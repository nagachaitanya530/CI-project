import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />
            )}
            <div className="flex flex-wrap md:flex-nowrap items-center px-2 sm:px-4 md:px-20 bg-gradient-to-r from-white via-pink-100 to-green-100 justify-center md:space-x-16 font-[poppins,sans-serif]">
                <div className="py-6 rounded-lg mt-6 md:mt-14 w-full md:w-1/2 flex flex-col">
                    <h1 className="text-2xl sm:text-3xl md:text-[52px] leading-tight md:leading-[4.25rem]">
                        <span className="font-bold text-orange-600 text-3xl sm:text-4xl md:text-6xl">
                            France:
                        </span>{" "}
                        A world leader in education, arts, culture, and humanities
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-3 sm:p-4 md:p-5">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-900 rounded-2xl border-2 hover:bg-white hover:text-blue-800 hover:cursor-pointer mt-3 sm:mt-4 text-white py-2 text-md font-semibold px-4 sm:px-6 transition"
                        >
                            Free Expert Consultation
                        </button>
                        <button className="bg-blue-900 rounded-2xl border-2 hover:bg-white hover:text-blue-800 hover:cursor-pointer mt-3 sm:mt-4 text-white py-2 text-md font-semibold px-4 sm:px-6 transition">
                            View & Download Brochure
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-center mt-6 md:mt-0">
                    <img
                        src="/france.jpg"
                        alt="France Education"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-[30rem] h-auto z-0 relative object-contain"
                    />
                </div>
            </div>

            <div className="z-10 flex flex-wrap md:flex-nowrap font-bold justify-center gap-6 sm:gap-8 md:gap-14 rounded-4xl -mt-2 py-6 sm:py-8 md:py-12 mx-1 sm:mx-2 md:mx-20 bg-gray-200 relative border-2 border-gray-300">
                <div className="flex-1 min-w-[140px] text-center md:border-r-2 border-gray-300 md:pr-10 md:mb-0 mb-6 last:md:border-r-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">
                        100+
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">Universities</p>
                </div>
                <div className="flex-1 min-w-[140px] text-center md:border-r-2 border-gray-300 md:pr-10 md:mb-0 mb-6 last:md:border-r-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">
                        €3K-€10K
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                        Annual tuition fees
                    </p>
                </div>
                <div className="flex-1 min-w-[140px] text-center md:border-r-2 border-gray-300 md:pr-10 md:mb-0 mb-6 last:md:border-r-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">
                        400K+
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                        International Students
                    </p>
                </div>
                <div className="flex-1 min-w-[140px] text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">
                        2 years
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                        Post-Study Work Visa
                    </p>
                </div>
            </div>
        </>
    );
}

export default HeroSection;