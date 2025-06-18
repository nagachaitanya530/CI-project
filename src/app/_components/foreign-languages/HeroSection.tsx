const HeroSection = () => {
  return (
    <section className="bg-blue-300 px-6 py-16 flex">
      {/* First part of Page */}
      <div className="text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Learn Foreign <br />
          Languages with <br />
          <span className="font-extrabold">National Institute of Language</span>
        </h1>
        <button className="bg-green-500 hover:bg-zinc-800 transition duration-300 ease-in-out transform hover:-translate-y-2 text-white font-semibold px-6 py-3 rounded-md">BOOK FREE DEMO</button>
      </div>
      {/* Image part */}
      <div className="h-[400px] w-[250px] bg-white rounded-lg shadow-2xl flex items-center justify-center text-black">
        Image Placeholder
      </div>

      {/* Second part of page */}
      <div className="text-white absolute bottom-[3rem] right-[1.5rem] w-[250px] p-5 z-20 rounded-xl shadow-xl ring ring-white bg-zinc-800">
        <h3 className="font-bold text-xl mb-2">
          French <br />Spanish <br />German
        </h3>
        <p className="text-sm mb-4">
          Live online classes with expert trainers and CEFR standards.
        </p>
        <button className="transition duration-300 ease-in-out transform hover:-translate-y-2 bg-green-500 hover:bg-sky-300 text-white font-semibold w-full py-2 rounded-md">
          ENROL NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
