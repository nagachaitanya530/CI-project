"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Quote } from "lucide-react"
import Image from "next/image"

interface Review {
    id: number
    quote: string
    author: {
        name: string
        institution: string
    }
    media: {
        type: "image"
        src: string
        alt: string
    }
}

const reviews: Review[] = [
    {
        id: 1,
        quote:
            "Choosing CI was a game changer when I decided to study abroad. The staff and my counselor were super friendly and every step became seamless. Their support made my dreams come true.",
        author: {
            name: "Vaibhavee Modi",
            institution: "Confederation College, Canada",
        },
        media: {
            type: "image",
            src: "/study-abroad/sheridan-college-canada-student-review.webp",
            alt: "Student cooking in kitchen",
        },
    },
    {
        id: 2,
        quote:
            "The guidance I received from CI was exceptional. They made my dream of studying in the UK a reality with their comprehensive support system and expert counseling.",
        author: {
            name: "Rahul Sharma",
            institution: "University of Manchester, UK",
        },
        media: {
            type: "image",
            src: "/study-abroad/macquarie-university-australia-student-review.webp",
            alt: "Student in library",
        },
    },
    {
        id: 3,
        quote:
            "From visa processing to accommodation, CI took care of everything. I couldn't have asked for better support during my journey to the USA. Highly recommended!",
        author: {
            name: "Priya Patel",
            institution: "Stanford University, USA",
        },
        media: {
            type: "image",
            src: "/study-abroad/bournemouth-university-uk-student-review.webp",
            alt: "Student in laboratory",
        },
    },
]

export default function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
    const touchStartRef = useRef<number>(0)
    const touchEndRef = useRef<number>(0)

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = (): void => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prevIndex: number) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
            }, 6000) // Increased to 6 seconds for better UX
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying])

    const goToPrevious = useCallback((): void => {
        setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
        setIsAutoPlaying(false)
    }, [])

    const goToNext = useCallback((): void => {
        setCurrentIndex((prevIndex: number) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
        setIsAutoPlaying(false)
    }, [])

    const goToSlide = useCallback((index: number): void => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }, [])

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        const touch: React.Touch | undefined = e.targetTouches[0]
        if (touch) {
            touchStartRef.current = touch.clientX
        }
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        const touch: React.Touch | undefined = e.targetTouches[0]
        if (touch) {
            touchEndRef.current = touch.clientX
        }
    }

    const handleTouchEnd = (): void => {
        if (!touchStartRef.current || !touchEndRef.current) return

        const distance: number = touchStartRef.current - touchEndRef.current
        const isLeftSwipe: boolean = distance > 50
        const isRightSwipe: boolean = distance < -50

        if (isLeftSwipe) {
            goToNext()
        } else if (isRightSwipe) {
            goToPrevious()
        }

        // Reset touch positions
        touchStartRef.current = 0
        touchEndRef.current = 0
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                goToPrevious()
            } else if (event.key === 'ArrowRight') {
                goToNext()
            } else if (event.key === ' ') {
                event.preventDefault()
                setIsAutoPlaying(!isAutoPlaying)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [goToPrevious, goToNext, isAutoPlaying])

    const MediaComponent: React.FC<{
        media: { type: "image"; src: string; alt: string }
        className?: string
    }> = ({ media, className }) => {
        return (
            <div className={`relative ${className}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={currentIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                            Success Stories
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-4 max-w-2xl">
                            Discover how our students achieved their dreams of studying abroad
                        </p>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mx-auto sm:mx-0"></div>
                    </div>

                    {/* Navigation Arrows - Hidden on mobile */}
                    {!isMobile && (
                        <div className="flex gap-3">
                            <button
                                onClick={goToPrevious}
                                className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                                aria-label="Previous story"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-gray-100 transition-colors" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                                aria-label="Next story"
                            >
                                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-gray-100 transition-colors" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Cards Container */}
                <div 
                    className="relative overflow-hidden rounded-3xl"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div key={review.id} className="flex-shrink-0 w-full">
                                <div className="mx-4 md:mx-8">
                                    {/* Mobile Layout */}
                                    {isMobile ? (
                                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                                            {/* Media Section */}
                                            <div className="h-64 sm:h-80">
                                                <MediaComponent media={review.media} className="w-full h-full" />
                                            </div>
                                            
                                            {/* Content Section */}
                                            <div className="p-6 sm:p-8">
                                                <div className="flex items-start gap-4 mb-6">
                                                    <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                                                    <blockquote className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                                                        "{review.quote}"
                                                    </blockquote>
                                                </div>
                                                
                                                <div className="border-t border-gray-200 pt-6">
                                                    <div className="text-center">
                                                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                                                            {review.author.name}
                                                        </h3>
                                                        <p className="text-blue-600 font-medium text-sm sm:text-base">
                                                            {review.author.institution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Desktop Layout */
                                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                                            {/* Media Section */}
                                            <div className="w-full lg:w-1/2 h-80 lg:h-96">
                                                <MediaComponent media={review.media} className="w-full h-full" />
                                            </div>

                                            {/* Content Section */}
                                            <div className="w-full lg:w-1/2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
                                                <div className="flex items-start gap-6 mb-8">
                                                    <Quote className="w-12 h-12 text-blue-500 flex-shrink-0 mt-2" />
                                                    <blockquote className="text-gray-800 text-lg lg:text-xl leading-relaxed font-medium">
                                                        "{review.quote}"
                                                    </blockquote>
                                                </div>
                                                
                                                <div className="border-t border-gray-200 pt-8">
                                                    <div className="text-center lg:text-left">
                                                        <h3 className="font-bold text-gray-900 text-xl lg:text-2xl mb-3">
                                                            {review.author.name}
                                                        </h3>
                                                        <p className="text-blue-600 font-semibold text-base lg:text-lg">
                                                            {review.author.institution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation Arrows */}
                {isMobile && (
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={goToPrevious}
                            className="rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Next story"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                )}

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full ${
                                index === currentIndex
                                    ? "w-8 h-3 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Auto-play Control */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70"
                    >
                        {isAutoPlaying ? (
                            <>
                                <Pause className="w-4 h-4" />
                                Pause Auto-play
                            </>
                        ) : (
                            <>
                                <Play className="w-4 h-4" />
                                Resume Auto-play
                            </>
                        )}
                    </button>
                </div>

                {/* Swipe Indicator for Mobile */}
                {isMobile && (
                    <div className="flex justify-center mt-4">
                        <p className="text-xs text-gray-500 text-center">
                            Swipe left or right to navigate
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}