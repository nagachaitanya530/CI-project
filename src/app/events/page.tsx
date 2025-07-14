import GallerySection from "../_components/events/gallerySection";
import HeroSection from "../_components/events/heroSection";
import SectionNav from "../_components/events/sectionNav";
import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import YourJourney from "../_components/study-abroad/your-journey";



export default function Events() {
    return (
        <>
            <NavigationSection />
            <HeroSection />
            <SectionNav/>

            <section id="section1" className="mt-16 test-dtl-sections active animate-fade-in duration-200">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Section */}
                    <div className="lg:w-5xl pl-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            World Education Fair
                        </h3>
                        <div className="text-gray-700 mb-6">
                            <p>
                                Don’t miss the World Education Fair by Edwise International – your
                                gateway to studying abroad! Meet top international university
                                representatives, get expert advice, and have all your study abroad
                                questions answered in one place. Your global future starts here!
                            </p>
                        </div>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                        >
                            Explore Now
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/2">
                        <img
                            src="/events/partner-recruiter-img.png"
                            alt="Partner Recruiter"
                            width={500}
                            height={200}
                            className="rounded-2xl"

                        />
                    </div>
                </div>
            </section>

            <section id="section2" className="mt-18 test-dtl-sections active animate-fade-in duration-200 gap-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="lg:w-5xl pl-8">
                        <h3 className="text-3xl font-semibold mb-4">University Visits</h3>
                        <div className="text-gray-700 mb-10">
                            <p>
                                Connect with delegates of top universities at Edwise offices.
                                Discover firsthand insights into academic programs, scholarship
                                opportunities, and career pathways straight from the university
                                representatives.
                            </p>
                        </div>
                        <a
                            href="/What-we-do/university-visits"
                            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                        >
                            Explore More
                        </a>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2">
                        <img
                            src="/events/partner-univer-img.png"
                            alt="University Visit"
                            width={500}
                            height={200}
                            className="rounded-2xl"

                        />
                    </div>
                </div>
            </section>

            <section id="section3" className="mt-16 test-dtl-sections active animate-fade-in duration-200">
                <GallerySection />
            </section>


            <YourJourney />
            <FooterSection />
        </>
    );

}