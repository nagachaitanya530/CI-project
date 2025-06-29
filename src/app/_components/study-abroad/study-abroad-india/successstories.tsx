"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
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
            avatar: "/testimonials/vaibhavee-modi.jpg",
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
            avatar: "/testimonials/rahul-sharma.jpg",
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
            avatar: "/testimonials/priya-patel.jpg",
        },
        media: {
            type: "image",
            src: "/testimonials/priya-laboratory.jpg",
            alt: "Student in laboratory",
        },
    },
]

export default function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
            }, 5000) // Change slide every 5 seconds
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying])

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
        setIsAutoPlaying(false) // Stop auto-play when user interacts
    }, [])

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
        setIsAutoPlaying(false) // Stop auto-play when user interacts
    }, [])

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false) // Stop auto-play when user interacts
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                goToPrevious()
            } else if (event.key === 'ArrowRight') {
                goToNext()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [goToPrevious, goToNext])

    const MediaComponent = ({
        media,
        className,
    }: {
        media: { type: "image" | "video"; src: string; alt: string }
        className?: string
    }) => {
        const videoRef = useRef<HTMLVideoElement>(null)
        const [isPlaying, setIsPlaying] = useState(false)
        const [isLoading, setIsLoading] = useState(true)

        const handlePlayPause = () => {
            if (videoRef.current) {
                if (isPlaying) {
                    videoRef.current.pause()
                    setIsPlaying(false)
                } else {
                    videoRef.current.play()
                    setIsPlaying(true)
                }
            }
        }

        const handleVideoLoad = () => {
            setIsLoading(false)
        }

        const handleVideoEnd = () => {
            setIsPlaying(false)
        }

        return (
            <div className={`relative ${className}`}>
                {media.type === "video" ? (
                    <div className="relative left-40 rounded-2xl overflow-hidden shadow-lg">
                        <video
                            ref={videoRef}
                            src={media.src}
                            playsInline
                            muted
                            preload="metadata"
                            onLoadedData={handleVideoLoad}
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover rounded-2xl"
                            aria-label={media.alt}
                        />

                        {/* Loading state */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            </div>
                        )}

                        {/* Play/Pause button overlay */}
                        {!isLoading && (
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                                onClick={handlePlayPause}
                            >
                                <div className="bg-white/90 group-hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 group-hover:scale-110">
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8 text-gray-700" fill="currentColor" />
                                    ) : (
                                        <Play className="w-8 h-8 text-gray-700" fill="currentColor" />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="relative left-40 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            priority={currentIndex === 0} // Only prioritize first image
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 py-8 px-4 mb-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Success Stories
                        </h1>
                        <div className="w-32 h-1 bg-orange-400 rounded-full"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={goToPrevious}
                            className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Next story"
                        >
                            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
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
                        {reviews.map((review, index) => (
                            <div key={review.id} className="flex-shrink-0 w-full flex justify-center">
                                <div className="rounded-3xl overflow-visible w-full max-w-[1100px] mx-4">
                                    <div className="flex flex-col lg:flex-row justify-end">
                                        {/* Left Media Section */}
                                        <div className="w-full lg:w-2/5 p-6 mt-6 order-2 lg:order-1">
                                            <MediaComponent media={review.media} className="w-full h-64" />
                                        </div>

                                        {/* Right Content Section */}
                                        <div className="w-full lg:w-3/5 h-auto lg:h-80 p-8 bg-white rounded-2xl flex justify-center lg:justify-end order-1 lg:order-2">
                                            <div className="flex flex-col items-center lg:items-end w-full lg:w-3/4 justify-between">
                                                <blockquote className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 font-normal text-center lg:text-right">
                                                    "{review.quote}"
                                                </blockquote>

                                                <div className="flex items-center gap-4">
                                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                        <Image
                                                            src={review.author.avatar}
                                                            alt={`${review.author.name} profile picture`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="64px"
                                                        />
                                                    </div>
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

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                index === currentIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Auto-play indicator */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="text-sm text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                    >
                        {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
                    </button>
                </div>
            </div>
        </div>
    )
}