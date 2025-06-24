'use client';

import { useEffect, useRef, useState, type JSX } from 'react';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'UK',
        description: (
            <div>
                <p>
                   Universities give international students scholarships to study in the UK and have certain awards which are given to students based on their merits as well as performance during the course. UK universities also have special awards for individual academic departments.

Another important source of 
UK scholarships for Indian students
 are the ones sponsored by the British Government. These are the Chevening Scholarship Commonwealth Scholarship and DFID scholarship.
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
            <section ref={sectionRef} className="my-20 px-4 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between p-5 ">
                    {/* Text Block transiton from left to right */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                    'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-5xl mb-6 text-gray-800"><b> Scholarships</b> In {item.name}</h1>
                                <div className="text-lg text-black  max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Image transiction right to left */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} mt-10 md:mt-0 md:w-2/5`}>
                        <img
                            src="https://www.edwiseinternational.com/img/scholar-img.webp"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </section>
 </>
    );
}

export default Scholarships;