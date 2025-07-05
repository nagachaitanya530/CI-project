"use client"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

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
    {
        id: 1,
        quote:
            "Choosing Edwise was a game changer when I decided to study abroad. The staff and my counselor were super friendly and every step became seamless.",
        author: {
            name: "Vaibhavee Modi",
            institution: "Confederation College, Canada",
            avatar: "/api/placeholder/60/60",
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
            "The guidance I received from Edwise was exceptional. They made my dream of studying in the UK a reality with their comprehensive support system.",
        author: {
            name: "Rahul Sharma",
            institution: "University of Manchester, UK",
            avatar: "/api/placeholder/60/60",
        },
        media: {
            type: "video",
            src: "/dummy-video.mp4",
            alt: "Student in library",
        },
    },
    {
        id: 3,
        quote:
            "From visa processing to accommodation, Edwise took care of everything. I couldn't have asked for better support during my journey to the USA.",
        author: {
            name: "Priya Patel",
            institution: "Stanford University, USA",
            avatar: "/api/placeholder/60/60",
        },
        media: {
            type: "video",
            src: "/dummy-video.mp4",
            alt: "Student in laboratory",
        },
    },
]
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
                <div className="relative md:left-15 lg:left-40 rounded-2xl">
                    <video
                        ref={videoRef}
                        src={media.src}
                        playsInline
                        muted
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center  cursor-pointer"
                            onClick={handlePlay}
                        >
                            <div className="bg-white/90 rounded-full p-4 shadow-lg">
                                <Play className="w-8 h-8 text-gray-700" fill="currentColor" />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Image
                    src={media.src || "/api/placeholder/400/250"}
                    alt={media.alt}
                    className="w-full h-full object-cover"
                    width={500} height={300}
                />
            )}
        </div>
    );
};

function SuccessStory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className=" bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 py-8 px-4 my-15 rounded-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-start mb-16">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-4">Success Stories</h1>
                            <div className="w-32 h-1 bg-orange-400 rounded-full"></div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={goToPrevious}
                                className="rounded-full w-14 h-14 bg-white hover:bg-gray-50 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                aria-label="Previous story"
                            >
                                <ChevronLeft className="w-7 h-7 text-gray-700" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                                aria-label="Next story"
                            >
                                <ChevronRight className="w-7 h-7 text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className="flex-shrink-0 w-full flex justify-start">
                                    <div className="rounded-3xl shadow- overflow-visible w-[1100px] mx-4">
                                        <div className="flex flex-col md:flex-row items-center   ">
                                            <div className="w-3/4 lg:w-2/5 h-28 lg:h-64  ">
                                                <MediaComponent media={review.media} className="w-full h-64 " />
                                            </div>
                                            <div className="lg:w-3/5 lg:h-90 p-8 bg-white rounded-2xl flex justify-center lg:justify-end">
                                                <div className="flex flex-col items-end w-3/4 justify-between">
                                                    <blockquote className="text-gray-800 text-base leading-relaxed mb-8 font-normal">
                                                        "{review.quote}"
                                                    </blockquote>

                                                    <div className="flex items-center gap-4">
                                                        <Image
                                                            src={review.author.avatar}
                                                            alt={review.author.name}
                                                            className="w-16 h-16 rounded-full object-cover"
                                                            width={500} height={300}
                                                        />
                                                        <div>
                                                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                                                {review.author.name}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm">
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
                    <div className="flex justify-center gap-3 mt-16">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuccessStory;
