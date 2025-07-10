'use client';

import { useEffect, useRef, useState, type JSX } from 'react';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'Australia',
        description: (
            <div>
                <p>
                    Australian universities offer scholarships for eligible international students that are entirely based on their merit. Qualified students can get from 10% to 100% scholarships to study in Australia. Often, a student can get up to a 25% fee waiver. <br /><br />
                    There are approximately 1000 scholarships being made available each year for both national and international students who have gained admission to any regional campus to study in Australia. The Australian government has introduced the Destination Australia Program (DAP), which is a new mobility program for both national and international students who wish to study in regional parts of Australia.
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

                    <div className={`transition-all duration-1000 ease-out ${isVisible ?
                        'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800 "><b> <span className=' underline  decoration-red-500 '>Scholarships</span></b> In {item.name}</h1>
                                <div className="text-lg text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className={`transition-all duration-1000 ease-out ${isVisible ?
                        'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} mt-10 lg:mt-0 lg:w-2/5`}>
                        <img
                            src="../Australia-Scholar.jpeg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Scholarships;