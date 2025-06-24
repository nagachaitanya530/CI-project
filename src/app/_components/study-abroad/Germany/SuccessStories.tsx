'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Story {
    name: string;
    university: string;
    quote: string;
    image: string;
    video: string;
}

const successStories: Story[] = [
    {
        name: "Gokul Samydurai",
        university: "EU Business School,Germany",
        quote: "Thanks to Edwise,the extensive paperwork procedures necessary for stuying in Germany were made incredibly smooth and easy to navigate.",
        image: "/gokul-samydurai-germany.webp",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        name: "Miral Shah",
        university: "Bournemouth University,UK",
        quote: "Their ongoing support past-study helped me transition smoothly intomy career.",
        image: "/miral-shah-uk.webp",
        video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
        name: "Abhinay Pandit",
        university: "RWTH Aachen University",
        quote: "It is one of the best consulting firms available.",
        image: "/abhinay-pandit-usa.webp",
        video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
        name: "Riya Sharma",
        university: "RWTH Aachen University",
        quote: " I had a very flourishing process with them.",
        image: "/archana-sidhwani-canada.webp",
        video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    // Add more stories if needed
];

export default function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-[#dce3ef] py-10 -mt-6 px-6 lg:px-28 rounded-[60px]">
            <div className="flex justify-between items-center mb-14 ">
                <h2 className="text-5xl font-extrabold text-gray-900">
                    <span className="underline decoration-red-500 underline-offset-[10px]">Success Stories</span>
                </h2>
                <div className="flex gap-4 " >
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-100 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-4xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${successStories.length * 100}%`,
                    }}
                >
                    {successStories.map((story, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 rounded-[40px] shadow-lg flex flex-col md:flex-row items-center gap-10 min-w-full hover:shadow-xl transition duration-500"
                        >
                            <div className="relative w-full md:w-[480px]">
                                <div className="relative overflow-hidden rounded-2xl shadow-md">
                                    <iframe
                                        src={story.video}
                                        className="w-full h-[300px] rounded-2xl hover:scale-[1.02] transition duration-500"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={`Video ${idx + 1}`}
                                    ></iframe>
                                </div>
                            </div>
                            <div className="w-full md:w-[500px] text-left">
                                <p className="text-gray-800 text-lg mb-6 leading-relaxed italic">“{story.quote}”</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-300 shadow-md"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{story.name}</p>
                                        <p className="text-gray-600 text-sm italic">{story.university}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
