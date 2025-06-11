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
                        <div className="h-1/2 w-full object-cover -mt-4 flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="justify-items-end mr-4">
                            <p className="bg-blue-500 flex place-items-center-safe text-center justify-center rounded-3xl h-[55px] w-[70px] ">
                                {work.price}
                            </p>
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