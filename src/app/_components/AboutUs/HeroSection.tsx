import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-r from-white via-pink-50 to-white">
        <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-[#231F20]">
          Explore Edwise: <br />
          Who <span className="text-black underline decoration-red-400 decoration-4">We</span> Are
        </h1>
        <button className="bg-blue-900 hover:bg-[#FFFFFF] transition-colors duration-300  text-blue-200 px-6 py-3 rounded-md">
  Free Expert Consultation
</button>



        </div>

         <div className="mt-10 md:mt-0">
        <Image
          src="/R.webp" 
          alt="Woman"
          width={400}
          height={400}
        />
      </div>

    </div>
  );
};
export default HeroSection;