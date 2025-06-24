import { useState, useRef, useEffect } from "react";
interface ScholarshipItem {
    name: string;
    description: React.ReactNode;
}

const items: ScholarshipItem[] = [
    {
        name: "France",
        description: (
            <div>
                <p>
                    The French government funds approximately 22,000 international students each year. Most of the grants are administered by the Ministry of Foreign Affairs.
                    Scholarships for Indian students are made available under Bilateral Assistance Programs between France and foreign governments or under an Annual Scholarship Program.
                    More than 80% of French government scholarships fall into this category.
                    Scholarship programs have been set up to enable French institutions of higher education to attract the finest international students.
                </p>
            </div>
        ),
    },
];
function Scholarship(){
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
    
    return(
        <>
         <section ref={sectionRef} className="my-20 px-4 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-between p-5 ">
                    {/* Text Block transition from left to right */}
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-5xl font-bold mb-6 text-gray-800">
                                    <b> <span className="text-orange-600 ">Scholarships</span></b> In {item.name}
                                </h1>
                                <div className="text-xl text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    {/* Image transition right to left */}
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        } mt-10 lg:mt-0 lg:w-2/5`}
                    >
                        <img
                            src="/images/Scholarships.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Scholarship;