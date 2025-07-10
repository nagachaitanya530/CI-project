function HeroSection(){
    return(
        <>
        <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between inner-hero-wrap gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 inner-hero-left partner-hero-left text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 hero-title-txt">
            <span className="text-blue-600 highlighter">Events</span>
          </h1>
          <div className="mb-6 comm-para">
            <p className="text-gray-700 leading-relaxed">
              Find out all you need to know about the upcoming events, education fairs and university visits organized by Edwise. Connect with top university representatives and resolve all your study abroad queries firsthand!
            </p>
          </div>
          <div className="hero-btns">
            <a
              id="openPopup"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition open-popup"
              style={{ cursor: "pointer" }}
            >
              Free Expert Consultation
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 inner-hero-right">
          <img
            src="/events/events-bnr-img.png"
            alt="Events Banner"
            width={600}
            height={150}
          />
        </div>
      </div>
    </div>
    </>
    );
}
export default HeroSection;