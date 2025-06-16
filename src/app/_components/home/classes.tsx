"use client";
import React from "react";

const Classes = () => {
    const Learn = [
        {

            title: 'Kids English Classes',
            description: 'Give your kids a new experience with Our online English Communication Classes with Interpersonal Skills included.',
            image: '../../home/kids-english-classes.jpg',
            url: 'https://www.google.com',
            More: 'Personal Training',
            price: 'Start @  ₹1499',
        },
        {

            title: 'Foreign Languages',
            description: 'Learning a Foreign Language brings new opportunities and experiences. It also serves as an additional skill in your resume. Have fun with French, Spanish and German.',
            image: '../../home/languages.jpg',
            url: 'https://www.youtube.com',
            More: 'Certification',
            price: 'Start @  ₹2599'
        },
        {

            title: 'Foreign Language -Kids',
            description: 'It’s a great time for your kids to learn a new language. Science says learning new languages help the brain develop quickly.',
            image: '../../home/languages-for-kids.jpg',
            url: 'https://www.google.com',
            More: 'Group Classes',
            price: 'Start @  ₹1999'
        }
    ];

    const handleCardClick = (url: string) => {
        // Ensure URL has proper protocol
        const finalUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {Learn.map((work, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(work.url)}
                        className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-50 text-white h-[600px] cursor-pointer group`}
                    >
                        {/* Image positioned at top */}
                        <div className="relative h-1/2 w-full cursor-pointer transition-transform hover:scale-105">

                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                                <span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-full">
                                    {work.price}
                                </span>
                            </div>
                        </div>
                        {/* Content positioned below image */}
                        <div className="p-8 flex flex-col h-1/2 relative z-10 ">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-black mb-3 ">{work.title}</h3>
                                <p className="mb-6 text-sm  text-gray-400">{work.description}</p>
                            </div>

                            <div className="mt-auto text-center ">
                                <p className="text-sm font-thin text-gray-400"> {work.More}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Classes;