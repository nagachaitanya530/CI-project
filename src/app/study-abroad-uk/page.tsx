import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";

export default function Study_in_uk() {
    return (
        <>
            <Navigation />
            <div>
               
                <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src="/videoUk.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Study in the UK
                        </h2>
                        <p className="text-base md:text-xl lg:text-2xl text-white max-w-3xl">
                            Unlock your future with world-class education and vibrant student life in the United Kingdom.
                        </p>
                    </div>
                </div>

               
                <div className="px-4 sm:px-6 md:px-10 lg:px-32 py-10 space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-[35px] font-bold text-center text-black drop-shadow-md tracking-wider">
                        Here’s an extensive guide for all Indian students who want<br /> to study in the UK.
                    </h1>

                    <p className="text-sm md:text-base lg:text-lg text-gray-600">
                        One of the most desired study destinations. Recognised for its culture, language, history, and innovation, the UK has an average student retention rate of 82%. With an extensive support system in place for international students, studying in the UK is a life-changing experience.
                    </p>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">High quality education</h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600">
                        The UK is one of the world’s most desired destinations to study higher education, with more than 500,000 international students getting enrolled each year.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                        <li>UK universities are among the finest in the world and consistently perform well in world rankings. They also have a reputation for top-class research.</li>
                        <li>UK higher education degrees and qualifications are acknowledged by employers and academics worldwide.</li>
                        <li>Students get the chance to enhance their skills, knowledge, critical thinking, and build connections to advance their careers.</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Why choose higher education in the UK?</h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600">
                        Being part of a university in the UK is a great way to enhance your knowledge, meet new people, experience a new culture, and enjoy various events. You'll receive strong support from universities and have opportunities to enjoy an organized student lifestyle.
                    </p>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">The benefits:</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                        <li>Select from over 50,000 courses in more than 25 subject areas.</li>
                        <li>UK courses are generally shorter than in other countries, which helps reduce tuition and accommodation costs.</li>
                        <li>You may work while you study — check with UKVI and UKCISA for details.</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">It’s an amazing place to live & study</h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600">
                        The United Kingdom (UK) is made up of England, Scotland, Northern Ireland, and Wales. Each country has unique regions, cities, and countryside settings to explore.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                        <li>The UK is a multicultural society with a rich diversity of cultures, languages, and faiths.</li>
                        <li>Enjoy international sporting events, world cuisine, strong transport links, and famous music festivals.</li>
                    </ul>

                    <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700 text-base md:text-lg">
                        What you end up valuing the most—perhaps even more than your course—are the lifelong friendships you make.
                    </blockquote>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Few things you should know about studying in the UK.</h2>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                        <li>There are 395+ universities and colleges offering over 50,000 undergraduate-level courses across the UK.</li>
                        <li>Applications are made through UCAS.</li>
                        <li>Deadlines vary by course and university, so stay updated on key dates.</li>
                        <li>Tuition fees vary — some financial help or scholarships may be available.</li>
                        <li>Living costs differ by location — London and big cities are generally more expensive.</li>
                        <li>Most international students require a visa and may need English proficiency test scores.</li>
                        <li>Each university sets its English requirements — IELTS or similar tests may be needed.</li>
                        <li>Most first-year students stay in university accommodation, but other options exist too.</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    );
}
