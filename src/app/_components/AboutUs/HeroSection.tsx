import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-pink-50 to-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231F20] leading-snug">
            Explore Edwise: <br />
            Who{" "}
            <span className="text-black underline decoration-red-400 decoration-4">
              We
            </span>{" "}
            Are
          </h1>

          <button className="bg-blue-900 text-blue-100 hover:bg-white hover:text-blue-900 border border-blue-900 transition-colors duration-300 px-6 py-3 rounded-md text-sm font-medium">
            Free Expert Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/R.webp"
            alt="Woman"
            width={400}
            height={400}
            className="object-contain w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
