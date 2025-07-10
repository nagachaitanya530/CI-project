"use client"

import { useState, useEffect } from "react"

import { ChevronLeft, ChevronRight, GraduationCap, Users, Globe, Award, BookOpen } from "lucide-react"
import { Button } from "~/components/ui/button"
import ConsultationForm from "../../celpip/ConsultationForm"

const cardData = [
    {
        title: "Excellence",
        description: "Get expert guidance without any cost",
        icon: GraduationCap,
        image: "/study-abroad-home/excellence.png",
        color: "from-white to-white",
    },
    {
        title: "Universities",
        description: "Professional guidance from experienced counselors",
        icon: Users,
        image: "/study-abroad-home/university.png",
        color: "from-white to-white",
    },
    {
        title: "Free Service",
        description: "Study opportunities in 50+ countries worldwide",
        icon: Globe,
        image: "/study-abroad-home/free-services.png",
        color: "from-white to-white",
    },
    {
        title: "200+ Experts",
        description: "Access to top-ranked institutions globally",
        icon: Award,
        image: "/study-abroad-home/Expert-consultance.png",
        color: "from-white to-white",
    },
    {
        title: "Happy Students",
        description: "Help securing financial aid and scholarships",
        icon: BookOpen,
        image: "/study-abroad-home/students-reviews.png",
        color: "from-white to-white",
    },

]

export default function EducationServices() {
    const [currentCard, setCurrentCard] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % cardData.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % cardData.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const getVisibleCards = () => {
        const cards = []
        for (let i = 0; i < 2; i++) {
            const index = (currentCard + i) % cardData.length
            cards.push({ ...cardData[index], index })
        }
        return cards
    }

    return (
        <section className="w-full py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Your{" "}
                                <span className="relative">
                                    Trusted Partner
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                                </span>{" "}
                                in Global Education
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                Edwise, study abroad consultants, have been the architects of dreams and shapers of destinies for
                                aspiring students for over three decades.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl"
                            onClick={() => setIsOpen(true)}
                        >
                            Free Expert Consultation
                        </Button>
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

                    <div className="relative">
                        <div className="relative h-96 overflow-hidden">
                            {getVisibleCards().map((card, displayIndex) => {
                                const Icon = card.icon
                                return (
                                    <div
                                        key={`${card.index}-${displayIndex}`}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${displayIndex === 0 ? "translate-x-0 z-20 scale-100" : "translate-x-8 z-10 scale-95 opacity-80"
                                            }`}
                                        style={{
                                            transform: displayIndex === 0 ? "translateX(0) scale(1)" : "translateX(2rem) scale(0.95)",
                                        }}
                                    >
                                        <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-0 h-full shadow-xl border border-white/20 backdrop-blur-sm overflow-hidden`}>
                                            <div className="relative w-full h-full mt-9">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="relative p-6">
                                                    <h3 className="text-xl font-bold text-gray-950 mb-2">{card.title}</h3>
                                                    <p className="text-sm leading-relaxed text-gray-950 opacity-90">{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={prevCard}
                                className="w-10 h-10 rounded-full bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-lg"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={nextCard}
                                className="w-10 h-10 rounded-full bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-lg"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

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
        </section>
    )
}
