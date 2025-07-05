import Image from "next/image";

function HeroSection() {

  return (
     <section className="bg-gray-100 py-12" data-aos="fade-in" data-duration="0">
      <div className="container mx-auto px-6 lg:px-20"> 
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-xl w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">CAEL - 2025</h1>

            <div className="space-y-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-22">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Test Format :</h4>
                  <p className="text-gray-600">Listening, Reading, Writing, Speaking</p>
                </div>
                <div className="border-l pl-6">
                  <h4 className="text-lg font-semibold text-gray-700">Duration :</h4>
                  <p className="text-gray-600">3.5 Hours (Approximately)</p>
                </div>
              </div>

              {/* Mode */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Mode :</h4>
                <p className="text-gray-600">Online from home/At the test center</p>
              </div>
            </div>

            <button
              id="openPopup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition cursor-pointer"
            >
              Free Expert Consultation
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3">
            <Image
              src="/tp-cael/hs-test-bnr.png"
              alt="CAEL Test"
              width={500}
              height={200}
              className="rounded-md shadow"
            />
            <p className="text-sm text-gray-500 mt-8 text-center lg:text-right">Last updated - 5 April '24</p>
          </div>
        </div>
      </div>
    </section>

    
  );
}
export default HeroSection;