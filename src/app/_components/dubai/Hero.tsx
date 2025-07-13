"use client";

export default function Hero({
  onFreeConsultClick,
}: {
  onFreeConsultClick: () => void;
}) {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24
      flex flex-col-reverse lg:flex-row items-center justify-between gap-10
      bg-gradient-to-r from-white via-[#fff0ef] to-white font-[Poppins,sans-serif]">
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <h1 className="text-[32px] sm:text-4xl md:text-5xl font-medium leading-snug text-[#231F20]">
          <span className="font-extrabold relative inline-block text-[#231F20]">
            Dubai:
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-red-400 rounded-full"></span>
          </span>{" "}
          Discover a unique blend of <br className="hidden sm:block" />
          innovation and luxury
        </h1>

        <button
          onClick={onFreeConsultClick}
          className="inline-block px-6 py-3 bg-[#183D8C] text-white font-semibold rounded-xl hover:bg-[#0f2e6c] transition"
        >
          Free Expert Consultation
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/222.jpg" 
          alt="Study in Dubai"
          className="w-full max-w-[400px] md:max-w-[480px] object-contain"
        />
      </div>
    </section>
  );
}
