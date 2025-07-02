"use client";

export default function Hero({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 
      flex flex-col-reverse lg:flex-row items-center justify-between 
      gap-8 bg-gradient-to-r from-white via-pink-100 to-green-100 font-[Poppins,sans-serif]"
    >
     
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="font-bold text-blue-800">Germany:</span> Study in the Land of Ideas
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
          <button
            onClick={onFreeConsultClick}
            className="w-full sm:w-auto px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition"
          >
            Free Expert Consultation
          </button>
          <button
            className="w-full sm:w-auto px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition"
          >
            View & Download Brochure
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/Study-in-Germany-Onlinemacha.jpg"
          alt="Germany Education"
          className="rounded-xl w-full max-w-md h-auto object-cover"
        />
      </div>
    </section>
  );
}
