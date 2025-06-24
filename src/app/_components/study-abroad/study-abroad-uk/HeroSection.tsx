import Link from "next/link";

function HeroSection(){
    return (
        <section>
             <div className="inner-hero study-hero" data-aos="fade-in" data-duration="0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-600">UK:</span> Join a legacy of excellence that inspires and transforms your future
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="openPopup"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Free Expert Consultation
              </button>
              <a
                href="../brochure/UK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition text-center"
              >
                View & Download Brochure
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <img
              src="https://www.edwiseinternational.com/img/study-abrd-uk.webp"
              alt="Study in UK"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
        </section>
          
    );
}

export default HeroSection;