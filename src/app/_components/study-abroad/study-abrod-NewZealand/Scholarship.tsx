'use client';
import { useEffect, useRef, useState, type JSX } from 'react';
interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}
const items: ScholarshipItem[] = [
    {
        name: 'New Zealand',
        description: (
            <div>
                <p>
                    New Zealand Excellence Awards is available for all eligible students.
                    Additionally, there are universities that offer their own scholarships as well.
                    As the number of scholarships in New Zealand are less in number, only students with exceptional grades are considered.
                    New Zealand scholarship for Indian students can go up to NZ$20,000.
                </p>
            </div>
        ),
    },
];
function Scholarships() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className="my-20 px-4 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-between p-5 ">
                    {/* Text Block transiton from left to right */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ?
                        'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800"><b> Scholarships</b> In {item.name}</h1>
                                <div className="text-lg text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Image transiction right to left */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ?
                        'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} mt-10 lg:mt-0 lg:w-2/5`}>
                        <img
                            src="/media/newZealand/scholarship.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Scholarships;