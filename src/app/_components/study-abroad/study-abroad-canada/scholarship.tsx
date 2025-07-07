'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type JSX } from 'react';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'Canada',
        description: (
            <div>
                <p>
                    Scholarships to study in Canada are available to international students who excel in their studies.
                    Canadian scholarships for international students may not cover all expenses, however they may provide
                    significant support towards education and living costs. Securing scholarships in Canada is very competitive,
                    requiring separate applications to each university. While community colleges, career colleges typically offer
                    bare minimum scholarships, exploring available opportunities is key to finding financial assistance.
                </p>
            </div>
        ),
    },
];

function Scholarships() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(true);

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
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-5 ">
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                    'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800"><b> Scholarships</b> In {item.name}</h1>
                                <div className="text-lg text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} mb-10 lg:mb-0 lg:w-2/5`}>
                        <Image
                            src="/scholar-man.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"
                            width={500} height={300}  />
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="my-20 px-4 lg:px-20 ">

                <div className="flex flex-col lg:flex-row items-center justify-between p-5 ">
                    <div className={`transition-all duration-1000 ease-out ${isVisible ?
                             'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} mb-10 lg:mb-0 lg:w-2/5`}>
                        <Image
                            src="/home/women_talking.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"
                            width={500} height={300}  />
                    </div>
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                            <div >
                                <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800"><b>Co-operative Work term</b></h1>
                                <div className="text-lg text-gray-700 max-w-3xl">Co-op is a work term that is a part of the course.
                                    It gives students a chance to get real-world experience in their field. They can work and study simultaneously.
                                    Co-op jobs are full-time and last 12 to 17 weeks. Co-op programs mix different subjects with relevant work,
                                    helping students start their careers. This helps international students connect with the Canadian job market
                                    and build a network with Canadian companies.
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Scholarships;

