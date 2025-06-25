const HeroSection = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center px-6 md:px-20 overflow-hidden bg-sky-300"
        style={{
          backgroundImage: `linear-gradient(135deg, #7dd3fc 0%, #93c5fd 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(255,255,255,0.1)'/%3E%3Cstop offset='100%25' style='stop-color:rgba(255,255,255,0)'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='100' fill='url(%23a)'/%3E%3Ccircle cx='800' cy='300' r='150' fill='url(%23a)'/%3E%3Ccircle cx='300' cy='700' r='80' fill='url(%23a)'/%3E%3Ccircle cx='700' cy='800' r='120' fill='url(%23a)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat'
        }}
      >
        <div className="relative w-full max-w-7xl flex items-center justify-between">
          {/* Left Text */}
          <div className="text-white max-w-2xl z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight font-sans">
              Learn Foreign
              <br />
              Languages with
              <br />
              <span className="font-black text-white">
                National Institute of
                <br />
                Language
              </span>
            </h1>
            <a href="/book-demo">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 text-white font-bold px-8 py-4 rounded-xl text-base border-0 backdrop-blur-sm font-sans hover:cursor-pointer">
                BOOK FREE DEMO
              </button>
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <img
              src="https://nationalinstituteoflanguage.in/wp-content/uploads/2022/02/hero-87P2JB5.png"
              alt="Hero"
              className="max-w-lg w-full h-auto object-contain z-10"
            />
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="bg-blue-300 px-6 py-16 flex justify-between items-center flex-wrap gap-6">
        {/* Left Text Block */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Learn Foreign <br />
            Languages with <br />
            <span className="font-extrabold">National Institute of Language</span>
          </h1>
          <button className="bg-green-500 hover:bg-zinc-800 transition duration-300 ease-in-out transform hover:-translate-y-2 text-white font-semibold px-6 py-3 rounded-md">
            BOOK FREE DEMO
          </button>
        </div>

        {/* Right Enroll Card */}
        <div className="bg-gray-800 text-white p-8 w-80 rounded-2xl shadow-2xl z-20">
          <h3 className="text-3xl font-black mb-6 leading-tight tracking-tight font-sans">
            French <br />
            Spanish <br />
            German
          </h3>
          <p className="text-base mb-6 text-gray-300 font-medium font-sans">
            Live online classes with expert trainers and CEFR standards.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-orange-500 hover:to-red-500 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 text-white font-bold w-full py-4 rounded-xl text-lg border-0 backdrop-blur-sm font-sans hover:cursor-pointer">
            ENROL NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
