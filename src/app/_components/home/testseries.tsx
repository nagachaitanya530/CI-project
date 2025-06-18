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
            image: '../../home/IELTS.jpg', // use public folder path
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @ ₹1499',
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
            image: '/home/TOEFL.jpg',
            url: 'https://www.youtube.com',
            More: 'Computer Delivered | iBT',
            price: 'Start @ ₹2599'
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
            image: '/home/PTE.jpg',
            url: 'https://www.google.com',
            More: 'CBT | A.I',
            price: 'Start @ ₹1999'
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
            image: '/home/CELPIP.jpg',
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @ ₹1999'
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
            image: '../../home/OET.jpg',
            url: 'https://www.google.com',
            More: 'Computer Delivered | A.I',
            price: 'Start @ ₹1999'
        },
    ];

    const handleCardClick = (url: string) => {
        const finalUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 max-w-7xl mx-auto place-items-start text-white text-start mb-4 ml-44">
                <h1 className="text-3xl font-bold ">Test Series</h1>
                <h3>IELTS TOEFL PTE OET CELPIP</h3>
                <p>A.I Powered Test Portal. Feels exactly like the real test. Take a look</p>
            </div>
            <div className="flex justify-end mb-4 mr-48 -mt-12">
                <p className="text-2xl font-normal
                 text-white">Explore Test Platform</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
                {series.slice(0, 3).map((work, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(work.url)}
                        className="bg-white rounded-xl overflow-hidden shadow-lg w-full  flex flex-col"
                        style={{ height: "600px" }}
                    >
                        {/* Image section with price tag */}
                        <div className="relative h-1/2 w-full cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={work.image}
                                alt={work.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute top-2 right-2">
                                <span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-full">
                                    {work.price}
                                </span>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="p-5 flex flex-col justify-between h-1/2">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">{work.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {work.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm mt-4 text-center text-gray-700">{work.More}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" justify-items-center lg:ml-80 gap-8 mt-4 max-w-7xl mx-auto grid md:grid-cols-3">
                {series.slice(3, 5).map((work, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(work.url)}
                        className="bg-white rounded-xl overflow-hidden shadow-lg w-full  flex flex-col"
                        style={{ height: "600px" }}
                    >
                        {/* Image section with price tag */}
                        <div className="relative h-1/2 w-full cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={work.image}
                                alt={work.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute top-2 right-2">
                                <span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-full">
                                    {work.price}
                                </span>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="p-5 flex flex-col justify-between h-1/2">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">{work.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {work.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm mt-4 text-center text-gray-300">{work.More}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Testseries;
