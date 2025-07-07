"use client"
import { useState, useEffect } from "react"

const techCompanies = [
    { name: "Microsoft", logo: "/home/microsoft.png" },
    { name: "Google", logo: "/home/Google.png" },
    { name: "Amazon", logo: "/home/amazon.png" },
    { name: "IBM", logo: "/home/IBM.png" },
    { name: "Cisco", logo: "/home/Cisco.png" },
    { name: "Facebook", logo: "/home/facebook.png" },
    { name: "Intel", logo: "/home/intel.png" },
]

const financeCompanies = [
    { name: "KPMG", logo: "/home/kpmg.png" },
    { name: "Deloitte", logo: "/home/deloitte.svg.png" },
    { name: "HSBC", logo: "/home/hsbc.png" },
    { name: "Goldman Sachs", logo: "/home/goldmansachs.png" },
    { name: "JPMorgan", logo: "/home/jpmorgan.png" },
    { name: "Morgan Stanley", logo: "/home/morganstanley.png" },
    { name: "PwC", logo: "/home/pwc.png" },
    { name: "EY", logo: "/home/ey.png" },
]

export default function TrustedCompanies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (techCompanies.length + financeCompanies.length));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-10 px-4 bgwhite">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
                    Trusted by learners at top companies worldwide
                </h2>
                <div className="md:hidden">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {[...techCompanies, ...financeCompanies].map((company, index) => (
                                <div key={`${company.name}-${index}`} className="w-full flex-shrink-0 flex items-center justify-center p-8">
                                    <div className=" p-6">
                                        <img
                                            src={company.logo || "/placeholder.svg"}
                                            alt={`${company.name} logo`}
                                            width={120}
                                            height={60}
                                            className="max-w-full h-auto opacity-70"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6 space-x-2">
                        {[...techCompanies, ...financeCompanies].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden md:block space-y-4">
                    <div>
                        <h3 className="text-xl font-medium text-center text-gray-600 mb-6">Technology Leaders</h3>
                        <div className="overflow-hidden relative py-4">
                            <div className="flex items-center">
                                <div className="flex animate-scroll-fast whitespace-nowrap">
                                    {[...techCompanies, ...techCompanies, ...techCompanies].map((company, index) => (
                                        <div
                                            key={`tech-${company.name}-${index}`}
                                            className="inline-flex mx-8 items-center justify-center p-4 bg-white flex-shrink-0"
                                        >
                                            <img
                                                src={company.logo || "/placeholder.svg"}
                                                alt={`${company.name} logo`}
                                                width={140}
                                                height={80}
                                                className="max-w-full h-auto duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden relative -mt-8">
                            <div className="flex items-center">
                                <div className="flex animate-scroll-slow whitespace-nowrap">
                                    {[...financeCompanies, ...financeCompanies, ...financeCompanies].map((company, index) => (
                                        <div
                                            key={`finance-${company.name}-${index}`}
                                            className="inline-flex mx-4 items-center justify-center p-4 bg-white flex-shrink-0"
                                        >
                                            <img
                                                src={company.logo || "/placeholder.svg"}
                                                alt={`${company.name} logo`}
                                                width={180}
                                                height={120}
                                                className="max-w-full h-auto duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scrollFast {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
                @keyframes scrollSlow {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
                .animate-scroll-fast {
                    animation: scrollFast 40s linear infinite;
                    display: flex;
                }
                .animate-scroll-slow {
                    animation: scrollSlow 60s linear infinite;
                    display: flex;
                }
                @media (prefers-reduced-motion) {
                    .animate-scroll-fast,
                    .animate-scroll-slow {
                        animation: none;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    )
}