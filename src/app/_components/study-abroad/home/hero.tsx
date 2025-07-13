"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, Ellipsis, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ContactPopup from '~/app/_components/study-abroad/home/contactpopup';
import ConsultationForm from '../../celpip/ConsultationForm';

interface ConsultationFormProps {
    show: boolean;
    onClose: () => void;
}

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

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
            image: {
                src: "/study-abroad-home/Dreams-to-conqurer.png",
                alt: "Students",
                width: 800,
                height: 600
            }
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
            image: {
                src: "/study-abroad-home/virtual-meeting.png",
                alt: "Virtual Counseling",
                width: 800,
                height: 600
            }
        }
    ];

    const startAutoRotate = useCallback(() => {
        stopAutoRotate();
        autoRotateRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 10000);
    }, [slides.length]);

    const stopAutoRotate = useCallback(() => {
        if (autoRotateRef.current) {
            clearInterval(autoRotateRef.current);
            autoRotateRef.current = null;
        }
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
        stopAutoRotate();
        startAutoRotate();
    }, [startAutoRotate, stopAutoRotate]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        stopAutoRotate();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const updateTranslateX = () => {
            const currentX = e.clientX;
            const diff = startX - currentX;
            setTranslateX(diff);
            requestRef.current = requestAnimationFrame(updateTranslateX);
        };

        cancelAnimationFrame(requestRef.current!);
        requestRef.current = requestAnimationFrame(updateTranslateX);
    };

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;
        cancelAnimationFrame(requestRef.current!);
        setIsDragging(false);

        if (Math.abs(translateX) > 100) {
            if (translateX > 0) {
                goToSlide((currentSlide + 1) % slides.length);
            } else {
                goToSlide((currentSlide - 1 + slides.length) % slides.length);
            }
        }

        setTranslateX(0);
    }, [isDragging, translateX, currentSlide, slides.length, goToSlide]);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches?.[0]) {
            setIsDragging(true);
            setStartX(e.touches[0].clientX);
            stopAutoRotate();
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !e.touches?.[0]) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        setTranslateX(diff);
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
    };

    const handleConsultationClick = () => {
        const currentSlideData = slides[currentSlide];
        if (!currentSlideData) return;

        if (currentSlideData.id === 1) {
            setIsOpen(true);
        } else if (currentSlideData.id === 2) {
            setIsPopupOpen(true);
        }
    };

    useEffect(() => {
        startAutoRotate();
        return () => {
            stopAutoRotate();
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [startAutoRotate, stopAutoRotate]);

    return (
        <div className="relative w-full h-190 overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
            <div
                ref={carouselRef}
                className="flex w-full h-full transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing will-change-transform"
                style={{
                    transform: `translateX(${-currentSlide * 100 + (isDragging ? -translateX / 10 : 0)}%)`
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="min-w-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8 lg:py-0">
                        <div className="flex-1 max-w-2xl order-2 lg:order-1 mt-8 lg:mt-0">
                            <div className="flex items-center -mb-2">
                                <Ellipsis className='text-green-600 w-30 h-30' />
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                                {slide.title.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                                {slide.highlight && (
                                    <span className="text-orange-500 relative">
                                        {slide.highlight}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
                                    </span>
                                )}
                                {slide.subtitle && (
                                    <>
                                        <br />
                                        {slide.subtitle}
                                    </>
                                )}
                            </h1>

                            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg">
                                {slide.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {slide.id === 1 && (
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="bg-blue-900 text-white py-2 md:py-3 px-4 md:px-6 rounded-3xl font-semibold hover:bg-white hover:text-blue-900 transition hover:cursor-pointer duration-300 w-full md:w-auto"
                                    >
                                        Free Expert Consultation
                                    </button>
                                )}
                                {slide.id === 2 && (
                                    <button
                                        onClick={handleConsultationClick}
                                        className="bg-blue-900 text-white py-2 md:py-3 px-4 md:px-6 rounded-3xl font-semibold hover:bg-white hover:text-orange-600 transition hover:cursor-pointer duration-300 w-full md:w-auto"
                                    >
                                        Schedule Virtual Counseling
                                    </button>
                                )}
                                <button
                                    className="border border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                                    onClick={handleWhatsApp}
                                >
                                    <MessageCircle size={20} />
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative flex items-center justify-center order-1 lg:order-2 w-full lg:w-auto">
                            <div className="relative w-full max-w-md lg:max-w-none">
                                <div className="relative aspect-video w-full lg:w-[800px] lg:h-[600px]">
                                    <Image
                                        src={slide.image.src}
                                        alt={slide.image.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                        priority={index === 0}
                                    />
                                </div>

                                {slide.stats && slide.stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`absolute ${i === 0 ? 'top-4 right-0 sm:right-4' : i === 1 ? 'top-1/2 -right-2 sm:right-4' : 'bottom-4 right-0 sm:right-4'} bg-white p-3 sm:p-4 rounded-lg shadow-lg z-10`}
                                    >
                                        <div className="text-xl sm:text-2xl font-bold text-blue-700">{stat.value}</div>
                                        <div className="text-xs sm:text-sm font-semibold text-gray-800">{stat.label}</div>
                                        {stat.sublabel && (
                                            <div className="text-xs text-gray-600">{stat.sublabel}</div>
                                        )}
                                    </div>
                                ))}

                                {slide.features && slide.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className={`absolute ${i === 0 ? 'top-4 right-0 sm:right-4' : i === 1 ? 'top-1/2 -right-2 sm:right-4' : 'bottom-4 right-0 sm:right-4'} bg-white p-3 sm:p-4 rounded-lg shadow-lg z-10`}
                                    >
                                        <div className="text-xs sm:text-sm font-semibold text-blue-700 mb-1">{feature.label}</div>
                                        {feature.sublabel && (
                                            <div className="text-xs text-gray-600">{feature.sublabel}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-700' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <ContactPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                title="Schedule Virtual Counseling"
                description="Fill out the form below to book your free virtual consultation with our study abroad experts."
            />
            {isOpen && (
                <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />
            )}
        </div>
    );
}
export default HeroCarousel;