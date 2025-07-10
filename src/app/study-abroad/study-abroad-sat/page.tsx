import Link from "next/link";
import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import TestimonialsCarousel from "~/app/_components/study-abroad/ietls-preparation/TestimonialsCarousel";
import HeroSection2 from "~/app/_components/study-abroad/study-abroad-sat/HeroSection";
import SectionNav from "~/app/_components/study-abroad/study-abroad-sat/Sections";
import YourJourney from "~/app/_components/study-abroad/your-journey";

function Sat() {

    return (
        <div>
            <NavigationSection />
            <div className="mx-25">
                <section className="text-blue-700 my-10 text-lg">
                    <p>
                        <Link href={"/"}>Home</Link> &gt;&nbsp;
                        <Link href={"/"}>Test Preparation</Link> &gt;&nbsp;
                        <strong>SAT </strong>
                    </p>
                </section>
            </div>
            <HeroSection2 />
            <SectionNav />
            <TestimonialsCarousel />
            <YourJourney />
            <FooterSection />
        </div>
    )

}
export default Sat;