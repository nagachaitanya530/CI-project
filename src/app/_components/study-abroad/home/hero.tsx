"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Ellipsis, ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

    const slides = [
        {
            id: 1,
            title: "Dream, Discover & Conquer with",
            subtitle: "Your Study Abroad Partner",
            description: "Ready to start your overseas education journey? Reach out to one of Edwise's expert country counselors today!",
            stats: [
                { value: "99%", label: "Visa Success Rate", sublabel: "Highest in the Industry" },
                { value: "950+", label: "Universities", sublabel: "33 Years of Experience" },
                { value: "200K+", label: "Students", sublabel: "Part of Edwise Alumni" }
            ],
            image: ""
        },
        {
            id: 2,
            title: "Get Started with a Free",
            subtitle: "with Edwise Experts.",
            description: "Turn your study abroad aspirations into reality through a personalized virtual interaction with our experts.",
            highlight: "Instant Virtual Meet",
            features: [
                { label: "Instant Virtual Counseling", sublabel: "Free* Guidance For Student Visa" },
                { label: "Schedule Virtual Counseling", sublabel: "" }
            ],
            image: ""
        }
    ];

    // Auto-rotate functionality
    const startAutoRotate = () => {
        autoRotateRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 10000);
    };
    const handleWhatsApp = () => {
    window.open('https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
  };

    const stopAutoRotate = () => {
        if (autoRotateRef.current) {
            clearInterval(autoRotateRef.current);
        }
    };

    useEffect(() => {
        startAutoRotate();
        return () => stopAutoRotate();
    }, []);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        stopAutoRotate();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = startX - currentX;
        setTranslateX(diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (Math.abs(translateX) > 100) {
            if (translateX > 0) {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            } else {
                setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
            }
        }

        setTranslateX(0);
        startAutoRotate();
    };

    // Touch handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches && e.touches[0]) {
            setIsDragging(true);
            setStartX(e.touches[0].clientX);
            stopAutoRotate();
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !e.touches || !e.touches[0]) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        setTranslateX(diff);
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        stopAutoRotate();
        startAutoRotate();
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
            <div
                ref={carouselRef}
                className="flex w-full h-full transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
                style={{
                    transform: `translateX(${-currentSlide * 100 + (isDragging ? -translateX / 10 : 0)}%)`
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Slide 1 */}
                <div className="min-w-full flex items-center justify-between px-8 lg:px-16">
                    <div className="flex-1 max-w-2xl">
                        <div className="flex items-center -mb-2">
                            <Ellipsis className='text-green-600 w-30 h-30' />
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                            Dream, Discover &<br />
                            Conquer with <span className="text-orange-500 relative">
                                Edwise
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
                            </span><br />
                            Your Study Abroad<br />
                            Partner
                        </h1>

                        <p className="text-gray-600 text-lg mb-8 max-w-lg">
                            Ready to start your overseas education journey? Reach out to one of Edwise's expert country counselors today!
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                Book Free Consultation
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                                <MessageCircle size={20} />
                                WhatsApp
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center">
                        <div className="relative">
                            <img
                                src=""
                                alt="Students"
                                className=""
                            />

                            {/* Stats Cards */}
                            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold text-blue-700">99%</div>
                                <div className="text-sm font-semibold text-gray-800">Visa Success Rate</div>
                                <div className="text-xs text-gray-600">Highest in the Industry</div>
                            </div>

                            <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold text-blue-700">950+</div>
                                <div className="text-sm font-semibold text-gray-800">Universities</div>
                                <div className="text-xs text-gray-600">33 Years of Experience</div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold text-blue-700">200K+</div>
                                <div className="text-sm font-semibold text-gray-800">Students</div>
                                <div className="text-xs text-gray-600">Part of Edwise Alumni</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="min-w-full flex items-center justify-between px-8 lg:px-16">
                    <div className="flex-1 max-w-2xl">
                        <div className="flex items-center -mb-2">
                            <Ellipsis className='text-green-600 w-30 h-30' />
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                            Get Started with a Free<br />
                            <span className="text-orange-500 relative">
                                Instant Virtual Meet
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
                            </span><br />
                            with Edwise Experts.
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-lg">
                            Turn your study abroad aspirations into reality through a personalized virtual interaction with our experts.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                Book Free Consultation
                            </button>
                     <button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3" onClick={handleWhatsApp}>
                        WhatsApp Us
                    </button>
                        </div>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center">
                        <div className="relative">
                            <img
                                src=""
                                alt="Virtual Counseling"
                                className="rounded-lg "
                            />

                            {/* Feature Cards */}
                            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-sm font-semibold text-blue-700 mb-1">Instant</div>
                                <div className="text-sm font-semibold text-gray-800">Virtual Counseling</div>
                            </div>

                            <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-sm font-semibold text-blue-700">Free* Guidance</div>
                                <div className="text-xs text-gray-600">For Student Visa</div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="text-sm font-semibold text-blue-700">Schedule</div>
                                <div className="text-xs text-gray-600">Virtual Counseling</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-700' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default HeroCarousel;