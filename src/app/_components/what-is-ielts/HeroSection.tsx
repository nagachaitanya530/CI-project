function HeroSectionIelts()
{
    return(
        <section>
        <div className="relative bg-[#12191D] text-white overflow-hidden">

     

          {/* Bottom White Curve */}

          <div className="absolute bottom-0 w-full pointer-events-none z-0">
            <svg
              className="w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,186.7C672,181,768,171,864,186.7C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>


 

          {/* Main Content */}

          <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-52 grid md:grid-cols-2 gap-16">
            {/* Left Side Heading */}
            <div className="border-l-4 border-green-500 pl-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FDEBD0]">
                IELTS Makes <br /> The World Go <br /> Round
              </h1>
            </div>


            

            {/* Right Side Features */}

            <div className="grid grid-cols-1 gap-5 text-lg md:text-xl">
              {[
                "10000+ Institutions",
                "140+ Countries",
                "1100+ Test Centres",
                "1.4 Million Test Takers",
                "14000+ Evaluators",
                "No. 1 Language Test in The World",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-orange-500 mr-4 text-2xl mt-1">✔</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}
export default HeroSectionIelts;