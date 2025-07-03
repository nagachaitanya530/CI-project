
'use client'
import React from "react";

const Cards = () => {
    const Learn = [
        {
            logo: '',
            title: 'Ace every language test with CI Test Prep Platform.',
            description: 'Crack tests such as IELTS, TOEFL, PTE, OET and Cambridge Assessment with our Test Prep Platform.',
            image: '../../home/graduated-girl.png',
            bgColor: 'bg-blue-200',
            url: 'https://www.google.com',
        },
        {
            logo: '',
            title: 'Learn Foreign Languages to widen your horizon.',
            description: 'Learn languages like French, Spanish and German on the international CEFR standards with our platform.',
            image: '../../home/writing-girl.jpg',
            bgColor: 'bg-violet-950',
            url: 'https://www.youtube.com'
        },
        {
            logo: '',
            title: 'Want to study abroad? Talk to us.',
            description: 'Overseas helps you get through the process of getting admissions in top International universities.',
            image: '../../home/learning-Girl.jpg',
            bgColor: 'bg-gray-400',
            url: 'https://www.google.com'
        }
    ];

    const handleLinkClick = (url: string) => {
        const finalUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
    };
    return (
        <section className=" py-10 px-4 sm:px-6 lg:px-8 ">
            <div className="bg-gray-200 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto ">
                {Learn.map((work, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl overflow-hidden shadow-lg ${work.bgColor} text-white h-[600px] shadow-md hover:shadow-xl transition-all duration-300`}
                    >
                        <div className="p-8 flex flex-col h-full relative z-10">                          
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                                <p className="mb-6">{work.description}</p>
                            </div>
                            <div >
                                <button
                                    onClick={() => handleLinkClick(work.url)}
                                    className="inline-flex items-center text-white hover:text-blue-500 focus:outline-none cursor-pointer transition-all duration-200 font-medium bg-transparent border-none p-0 text-left"
                                >
                                    Learn More... →
                                </button>
                            </div>
                        </div>                      
                        <div className="absolute bottom-0 right-0 left-0 top-0 flex items-end justify-center p-4">
                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="max-w-4xl max-h-[60%] -mb-4 object-contain object-bottom"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Cards;