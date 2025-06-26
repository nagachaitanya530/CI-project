"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Review {
    id: number
    quote: string
    author: {
        name: string
        institution: string
        avatar: string
    }
    media: {
        type: "image" | "video"
        src: string
        alt: string
    }
}

const reviews: Review[] = [
    // ... (same as before)
    {
        id: 1,
        quote:
            "TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.",
        author: {
            name: "THANESHVAR",
            institution: "TOEFL",
            avatar: "/miral-shah-uk.webp",
        },
        media: {
            type: "video",
            src: "/videoUk.mp4",
            alt: "Student cooking in kitchen",
        },
    },
    {
        id: 2,
        quote:
            "I have taken IELTS test &  Glad to say that the teachers here are very supportive, attentive and helpful.<br/>All thanks to my teacher that I scored a total of 7 bands.",
        author: {
            name: "Jaspreet Kaur Chauhan",
            institution: "IELTS",
            avatar: "/priyanshu-kamble-uk.webp",
        },
        media: {
            type: "video",
            src: "/usa.mp4",
            alt: "Student in library",
        },
    },
    {
        id: 3,
        quote:
            "I am very much satisfied with the  methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.",
        author: {
            name: "Varuneswar K V",
            institution: "PTE",
            avatar:"/afreen-jamadar-uk.webp",
        },
        media: {
            type: "video",
            src: "/uk.mp4",
            alt: "Student in laboratory",
        },
    },
    {
        id: 4,
        quote:
            "Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university. ",
        author: {
            name: "Pragatheesh",
            institution: "IELTS",
            avatar:"/afreen-jamadar-uk.webp",
        },
        media: {
            type: "video",
            src: "/uk.mp4",
            alt: "Student in laboratory",
        },
    },
    {
        id: 5,
        quote:
            "I studied GRE at Edwise, and the coaching was excellent. The Quant faculty solved every problem, clarified doubts, covered all topics, and provided many practice tests. ",
        author: {
            name: "HARISH M",
            institution: "GRE",
            avatar:"/afreen-jamadar-uk.webp",
        },
        media: {
            type: "video",
            src: "/uk.mp4",
            alt: "Student in laboratory",
        },
    },
]

function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const MediaComponent = ({
        media,
        className,
    }: {
        media: { type: "image" | "video"; src: string; alt: string };
        className?: string;
    }) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        const [isPlaying, setIsPlaying] = useState(false);

        const handlePlay = () => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        };

        return (
            <div className={`relative ${className}`}>
                {media.type === "video" ? (
                    <div className="relative rounded-2xl">
                        <video
                            ref={videoRef}
                            src={media.src}
                            playsInline
                            muted
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                onClick={handlePlay}
                            >
                                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                                    <Play className="w-8 h-8 text-gray-700" fill="currentColor" />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <img
                        src={media.src || "/api/placeholder/400/250"}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        );
    };

    return (
        <div className="min-h- bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 py-8 px-2 sm:px-4 mb-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h1>
                        <div className="w-20 sm:w-32 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                        <button
                            onClick={goToPrevious}
                            className="rounded-full w-10 h-10 sm:w-14 sm:h-14 bg-white hover:bg-gray-50 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="rounded-full w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                            aria-label="Next story"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                        </button>
                    </div>
                </div>

                {/* Cards Container - Horizontal Scroll */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div key={review.id} className="flex-shrink-0 w-full flex justify-center">
                                <div className="rounded-3xl shadow- overflow-visible w-full sm:w-[700px] lg:w-[1100px] mx-0 sm:mx-4">
                                    <div className="flex flex-col md:flex-row justify-end">
                                        {/* Left Media Section */}
                                        <div className="w-full md:w-2/5 p-2 sm:p-6 mt-2 sm:mt-6">
                                            <MediaComponent media={review.media} className="w-full h-48 sm:h-64" />
                                        </div>
                                        {/* Right Content Section */}
                                        <div className="w-full md:w-3/5 h-auto md:h-80 p-4 sm:p-8 bg-white rounded-2xl flex justify-end">
                                            <div className="flex flex-col items-end w-full md:w-3/4 justify-between">
                                                <blockquote className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 sm:mb-8 font-normal">
                                                    "{review.quote}"
                                                </blockquote>
                                                <div className="flex items-center gap-2 sm:gap-4">
                                                    <img
                                                        src={review.author.avatar}
                                                        alt={review.author.name}
                                                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                                                            {review.author.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-xs sm:text-sm">
                                                            {review.author.institution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-16">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-blue-600 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SuccessStories;
