

export default function Hero({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {

    return (

        <div className="flex flex-col-2 items-center px-20 bg-linear-to-r from-white-500 via-pink-100 to-green-100 justify-center space-x-35 font-[poppins,sans-serif]">
            <div className=" py-18  rounded-lg  mt-14">
                <h1 className="text-[52px] leading-17"><span className="font-bold"> Germany:</span>Study in the
                    Land of Ideas</h1>
                <div className="w-[600px] flex flex-row gap-8 shadow-[10px_10px_10px_-14px_rgba(0,_0,_0,_0.3)] p-5">
                    <button
                        onClick={onFreeConsultClick}
                        className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
                    >
                        Free Expert Consultation
                    </button>
                    <button className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all">View & Download Brochure</button>
                </div>
            </div>
            <img src="/study-abrd-germany.webp" alt="France Education" className="w-120 h-115 mt-17 z-0 relative" />

        </div>
    )
}