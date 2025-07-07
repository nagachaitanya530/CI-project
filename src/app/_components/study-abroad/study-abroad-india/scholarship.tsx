'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Image from 'next/image';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'India',
        description: (
            <div className="space-y-4">
                <p className="leading-relaxed">
                    Scholarship is an incentive as well as an encouragement for students, who are talented, but do not have the means to study further. There are a variety of scholarships – merit-based, need-based, student-specific, career-specific and college-specific.
                </p>
                <p className="leading-relaxed">
                    Study in India Scholarship is administered by The Ministry of Human Resource Development, Department of Higher Education offers National Scholarship and also facilitates in the nomination process for the External Scholarships offered by various countries, to the meritorious and eligible students.
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
                        // Unobserve after first intersection for performance
                        observer.unobserve(entry.target);
                    }
                });
            },
            { 
                threshold: 0.2,
                rootMargin: '50px 0px -50px 0px' // Trigger animation slightly before/after element comes into view
            }
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
        <section ref={sectionRef} className="my-20 px-4 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-5">
                {/* Text Block - slides in from left */}
                <div className={`
                    flex-1 max-w-3xl
                    transition-all duration-1000 ease-out transform
                    ${isVisible ? 
                        'opacity-100 translate-x-0' : 
                        'opacity-0 -translate-x-20'
                    }
                `}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800 font-bold leading-tight">
                                Scholarships In {item.name}
                            </h1>
                            <div className="text-lg text-gray-700 leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image - slides in from right */}
                <div className={`
                    flex-shrink-0 lg:w-2/5 w-full max-w-lg
                    transition-all duration-1000 ease-out transform
                    ${isVisible ? 
                        'opacity-100 translate-x-0' : 
                        'opacity-0 translate-x-20'
                    }
                `}>
                    <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src="/scholar-man.jpg"
                            alt="Student with scholarships and educational opportunities"
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            priority={false} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Scholarships;