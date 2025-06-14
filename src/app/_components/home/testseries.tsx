"use client";
import React from "react";

const Testseries = () => {
    const series = [
        {
            title: 'IELTS Test Series',
            description: [
                'Full Mock Tests',
                'Individual Practice Tests',
                'Item-wise Tests',
                'Auto-generated Remedial Tests',
                'Speaking Tests',
            ],
            image: '../../home/kids-english-classes.jpg',
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @  ₹1499',
        },
        {
            title: 'TOEFL Test Series',
            description: [
                'Full iBT Mock Tests',
                'Individual Practice Tests',
                'Item-wise Tests',
                'Auto-generated Remedial Tests',
                'Speaking Tests'
            ],
            image: '../../home/languages.jpg',
            url: 'https://www.youtube.com',
            More: 'Computer Delivered | iBT',
            price: 'Start @  ₹2599'
        },
        {
            title: 'PTE Test Series',
            description: [
                'Full Scored Mock Tests',
                'Individual Practice Tests',
                'Item-wise Tests',
                'Auto-generated Remedial Tests',
                'A.I Speaking Tests'
            ],
            image: '../../home/languages-for-kids.jpg',
            url: 'https://www.google.com',
            More: 'CBT | A.I',
            price: 'Start @  ₹1999'
        },
        {
            title: 'CELPIP Test Series',
            description: [
                'Full Mock Tests',
                'Individual Practice Tests',
                'Item-wise Tests',
                'Auto-generated Remedial Tests',
                'Speaking Tests'
            ],
            image: '../../home/languages-for-kids.jpg',
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @  ₹1999'
        },
        {
            title: 'OET Test Series',
            description: [
                'Full Mock Tests',
                'Individual Practice Tests',
                'Item-wise Tests',
                'Auto-generated Remedial Tests',
                'Speaking Tests'
            ],
            image: '../../home/languages-for-kids.jpg',
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @  ₹1999'
        },
    ];

    const handleCardClick = (url: string) => {
        const finalUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 justify-items-center gap-8 max-w-7xl mx-auto">
                {series.map((work, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(work.url)}
                        className="relative rounded-xl overflow-hidden shadow-lg bg-gray-50 text-white h-[600px] cursor-pointer group"
                    >
                        {/* Image section */}
                        <div className="h-1/2 w-full -mt-4 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Price tag */}
                        <div className="justify-items-end mr-4 mt-2">
                            <p className="bg-blue-500 text-white text-center rounded-3xl h-[55px] w-[100px] flex items-center justify-center">
                                {work.price}
                            </p>
                        </div>

                        {/* Content section */}
                        <div className="p-8 flex flex-col h-1/2 relative z-10 text-black">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-3">{work.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {work.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto text-center">
                                <p className="text-sm font-light text-gray-900">{work.More}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testseries;
