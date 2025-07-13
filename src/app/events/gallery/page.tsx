
import GallerySection from "~/app/_components/events/gallery/gallerySection";
import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";

function EventGallery() {
    return (
        <>
            <NavigationSection />
            <>

                <div className="pl-5">
                    <ul className="flex flex-wrap items-center text-sm text-gray-600 space-x-2 blog-breadcrumb">
                        <li>
                            <a href="/" className="hover:underline text-blue-600">Home</a>
                        </li>
                        <span>/</span>
                        <li>
                            <a href="/events" className="hover:underline text-blue-600">Events</a>
                        </li>
                        <span>/</span>
                        <li>
                            <span className="text-gray-800 font-medium">Event's Gallery</span>
                        </li>
                    </ul>
                </div>
                <section className="pl-10 mt-16 test-dtl-sections active animate-fade-in duration-200">
                    <div className="blogs-hdr-sec mb-20">
                        <h1 className="page-hdr-title text-4xl font-bold">
                            <strong>
                                Events <span className="highlighter text-blue-600">Gallery</span>
                            </strong>
                        </h1>
                    </div>
                </section>
            </>
            <GallerySection />
            <YourJourney />
            <FooterSection />

        </>
    )
}
export default EventGallery;