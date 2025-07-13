'use client'
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ConsultationForm from '../../celpip/ConsultationForm';

interface CardData {
    id: number;
    title: string;
    description: string;
    buttonText?: string;
}

const ScrollCardAnimation: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardData: CardData[] = [
        {
            id: 1,
            title: "Education Counseling",
            description: "One on One counseling with our country specialist. Shortlist your ideal destination, institution and program with their expert guidance.",
            buttonText: "Free Expert Consultation"
        },
        {
            id: 2,
            title: "University Applications",
            description: "Apply to your dream university. Our team will guide you through the application process.",
            buttonText: "Free Expert Consultation"
        },
        {
            id: 3,
            title: "Visa Processing",
            description: "Complete visa documentation and processing support to ensure smooth approval.",
            buttonText: "Free Expert Consultation"
        },
        {
            id: 4,
            title: "Pre-Departure",
            description: "Final preparations including accommodation, travel arrangements, and orientation.",
            buttonText: "Free Expert Consultation"
        }
    ];

    const handleResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const maxScroll = documentHeight - windowHeight;
        const progress = Math.min(scrollY / (maxScroll * 0.6), 1);

        setScrollProgress(progress);
    }, []);

    useEffect(() => {
        handleResize();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleScroll, handleResize]);

    const getCardStyle = (index: number): React.CSSProperties => {
        const isMobile = windowSize.width < 768;
        if (isMobile) {
            return {
                transform: 'translateY(0px) scale(1)',
                zIndex: 10 - index,
                marginBottom: '20px'
            };
        }

        const baseDelay = index * 0.15;
        const animationProgress = Math.max(0, Math.min(1, (scrollProgress - baseDelay) / 0.7));

        if (scrollProgress === 0) {
            return {
                transform: 'translateY(0px) scale(1)',
                zIndex: 10 - index,
                marginBottom: index === 0 ? '60px' : '20px'
            };
        }

        const translateY = animationProgress * (-index * 60);
        const scale = 1 - (animationProgress * index * 0.05);
        const rotate = index % 2 === 0 ? animationProgress * 2 : -animationProgress * 2;

        return {
            transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
            zIndex: 10 - index,
            marginBottom: index === 0 ? '120px' : '80px',
            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
            boxShadow: `0 ${10 + index * 5}px ${15 + index * 5}px -5px rgba(0, 0, 0, ${0.1 + index * 0.05})`
        };
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <div className="text-center py-12 relative z-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    4 Steps To Your Dream Destination
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 relative">
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-none">
                        <div className="space-y-4 md:space-y-6">
                            {cardData.map((card, index) => (
                                <div
                                    key={card.id}
                                    className="relative hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-lg"
                                    style={getCardStyle(index)}
                                >
                                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
                                        <div className="flex items-start gap-4 md:gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl shadow-md">
                                                    {card.id}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                                                    {card.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                                                    {card.description}
                                                </p>
                                                <button
                                                    onClick={() => setIsOpen(true)}
                                                    className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:shadow-md transform hover:scale-105 transition-all duration-200 text-sm md:text-base"
                                                >
                                                    {card.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {isOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 transition-opacity duration-300">
                                <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl relative w-full max-w-lg mx-auto">
                                    <button
                                        className="absolute top-3 right-4 text-2xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        &times;
                                    </button>
                                    <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-1/2 sticky top-24 lg:top-32 h-fit order-2 lg:order-none mb-8 lg:mb-0">
                        <div className="relative">
                            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 shadow-lg">
                                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl">
                                    <Image
                                        src="/study-abroad-home/women-holding-passport.png"
                                        alt="Student holding passport"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollCardAnimation;
