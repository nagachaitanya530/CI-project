'use client';

import { useEffect, useRef, useState, type JSX } from 'react';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'Switzerland',
        description: (
            <div>
                <p>
                    Scholarships in Switzerland for international students includes both governmental and non-governmental scholarships which are available to assist international students in paying for their education. The information about a few of the best scholarships are provided below:</p>
<br></br>
<p>
<strong>Swiss Excellence Scholarships for Foreign Students </strong>
<br></br>
Post-graduate researchers or Ph.D./Doctorate students in any subject.
Advantages: Covers cost of living, tuition fees, insurance, travel costs, and more.
</p>
<br></br>
<p>

<strong>Geneva Academy of International Humanitarian Law and Human Rights Scholarships</strong>
<br></br>
International students seeking a Master of Advanced Studies in Transitional Justice, Human Rights, and the Rule of Law and an LLM in International Humanitarian Law and Human Rights.

Advantages: Full scholarships provided for ten months of living expenses in Geneva in addition to tuition. Tuition is partially covered by scholarships.</p>
<br></br>
<p>

Nestle MBA Scholarships for Women from Developing Countries
Female students obtaining an MBA from developing countries can avail up to CHF 25,000 through this scholarship.


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
                            src="https://www.edwiseinternational.com/img/scholar-img.webp"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </section>
 </>
    );
}

export default Scholarships;