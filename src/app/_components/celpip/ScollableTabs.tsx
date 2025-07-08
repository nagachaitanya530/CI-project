import { useEffect, useState } from 'react';


function ScrollableTabs() {

    const sections = [
        { label: 'Overview', id: 'overview' },
        { label: 'Pattern', id: 'pattern' },
        { label: 'Syllabus', id: 'syllabus' },
        { label: 'Scores', id: 'scores' },
        { label: 'Dates', id: 'dates' },
        { label: 'Training', id: 'training' },
        { label: 'Miscellaneous', id: 'fee' },
        { label: 'FAQ', id: 'faqs' },
        
       
    ];const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(entry => entry.isIntersecting);
                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

return(
    <>
 {/* NavBar  */}

            <section className="sticky top-16  z-50 bg-cyan-50 border border-cyan-200 rounded-3xl mx-4 my-6 md:mx-25 lg:mx-40 px-2 py-3 shadow-md overflow-hidden">
                <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 px-2 scroll-smooth scrollbar-hide">
                    {sections.map(({ label, id }, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm flex-shrink-0 transition duration-300 border ${activeSection === id
                                    ? 'bg-cyan-700 text-white border-cyan-700'
                                    : 'bg-white text-cyan-700 border-cyan-300 hover:bg-cyan-100'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ScrollableTabs;