"use client";
import React from "react";

const Classes = () => {
    const Learn = [
        {
            logo: '',
            title: 'Kids English Classes',
            description: 'Give your kids a new experience with Our online English Communication Classes with Interpersonal Skills included.',
            image: '../../home/graduated-girl.png',
            bgColor: 'bg-red-400',
            url: 'https://www.google.com',
        },
        {
            logo: '',
            title: 'Foreign Languages',
            description: 'Learning a Foreign Language brings new opportunities and experiences. It also serves as an additional skill in your resume. Have fun with French, Spanish and German.',
            image: '../../home/writing-girl.jpg',
            bgColor: 'bg-blue-900',
            url: 'https://www.youtube.com'
        },
        {
            logo: '',
            title: 'Foreign Language -Kids',
            description: 'It’s a great time for your kids to learn a new language. Science says learning new languages help the brain develop quickly.',
            image: '../../home/learning-Girl.jpg',
            bgColor: 'bg-gray-300',
            url: 'https://www.google.com'
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
                        className={`relative rounded-xl overflow-hidden shadow-lg ${work.bgColor} text-white h-[600px] cursor-pointer group`}
                    >
                        {/* Image positioned at top */}
                        <div className="h-1/2 w-full flex items-center justify-center p-4">
                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Content positioned below image */}
                        <div className="p-8 flex flex-col h-1/2 relative z-10">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-3 group-hover:underline">{work.title}</h3>
                                <p className="mb-6">{work.description}</p>
                            </div>

                            <div className="mt-auto">
                                <span className="inline-flex items-center text-white group-hover:text-yellow-300 group-hover:underline transition-all duration-200 font-medium">
                                    Learn More... →
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Classes;