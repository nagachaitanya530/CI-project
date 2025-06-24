"use client"

import { useState } from "react"

import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

interface Course {
    id: string
    title: string
    image: string
    description: string
}

interface CountryData {
    name: string
    courses: Course[]
    viewMoreRoute: string
}

const countriesData = {
    uk: {
        name: "UK",
        courses: [
            {
                id: "uk-business",
                title: "Business Management",
                image: "/placeholder.svg?height=200&width=300",
                description: "Comprehensive business leadership and management programs",
            },
            {
                id: "uk-engineering",
                title: "Engineering",
                image: "/placeholder.svg?height=200&width=300",
                description: "Advanced engineering disciplines and innovation",
            },
            {
                id: "uk-computer-science",
                title: "Computer Science",
                image: "/placeholder.svg?height=200&width=300",
                description: "Cutting-edge technology and software development",
            },
            {
                id: "uk-law",
                title: "Law",
                image: "/placeholder.svg?height=200&width=300",
                description: "Legal studies and jurisprudence programs",
            },
            {
                id: "uk-finance",
                title: "Finance",
                image: "/placeholder.svg?height=200&width=300",
                description: "Financial management and investment strategies",
            },
            {
                id: "uk-architecture",
                title: "Architecture",
                image: "/placeholder.svg?height=200&width=300",
                description: "Innovative design and construction planning",
            },
        ],
        viewMoreRoute: "/courses/uk",
    },
    usa: {
        name: "USA",
        courses: [
            {
                id: "usa-data-science",
                title: "Data Science",
                image: "/placeholder.svg?height=200&width=300",
                description: "Advanced analytics and machine learning programs",
            },
            {
                id: "usa-medicine",
                title: "Medicine",
                image: "/placeholder.svg?height=200&width=300",
                description: "Medical studies and healthcare programs",
            },
            {
                id: "usa-mba",
                title: "MBA",
                image: "/placeholder.svg?height=200&width=300",
                description: "Master of Business Administration programs",
            },
            {
                id: "usa-psychology",
                title: "Psychology",
                image: "/placeholder.svg?height=200&width=300",
                description: "Behavioral science and mental health studies",
            },
            {
                id: "usa-journalism",
                title: "Journalism",
                image: "/placeholder.svg?height=200&width=300",
                description: "Media studies and communication programs",
            },
            {
                id: "usa-biotechnology",
                title: "Biotechnology",
                image: "/placeholder.svg?height=200&width=300",
                description: "Life sciences and bioengineering programs",
            },
        ],
        viewMoreRoute: "/courses/usa",
    },
    canada: {
        name: "Canada",
        courses: [
            {
                id: "canada-environmental-science",
                title: "Environmental Science",
                image: "/placeholder.svg?height=200&width=300",
                description: "Sustainability and environmental conservation programs",
            },
            {
                id: "canada-artificial-intelligence",
                title: "Artificial Intelligence",
                image: "/placeholder.svg?height=200&width=300",
                description: "AI and machine learning specialization programs",
            },
            {
                id: "canada-nursing",
                title: "Nursing",
                image: "/placeholder.svg?height=200&width=300",
                description: "Healthcare and patient care programs",
            },
            {
                id: "canada-hospitality",
                title: "Hospitality Management",
                image: "/placeholder.svg?height=200&width=300",
                description: "Tourism and hospitality industry programs",
            },
            {
                id: "canada-renewable-energy",
                title: "Renewable Energy",
                image: "/placeholder.svg?height=200&width=300",
                description: "Clean energy and sustainable technology programs",
            },
            {
                id: "canada-film-studies",
                title: "Film Studies",
                image: "/placeholder.svg?height=200&width=300",
                description: "Cinematography and media production programs",
            },
        ],
        viewMoreRoute: "/courses/canada",
    },
    australia: {
        name: "Australia",
        courses: [
            {
                id: "australia-marine-biology",
                title: "Marine Biology",
                image: "/placeholder.svg?height=200&width=300",
                description: "Ocean life and marine ecosystem studies",
            },
            {
                id: "australia-mining-engineering",
                title: "Mining Engineering",
                image: "/placeholder.svg?height=200&width=300",
                description: "Resource extraction and geological engineering",
            },
            {
                id: "australia-sports-science",
                title: "Sports Science",
                image: "/placeholder.svg?height=200&width=300",
                description: "Athletic performance and exercise physiology",
            },
            {
                id: "australia-agriculture",
                title: "Agriculture",
                image: "/placeholder.svg?height=200&width=300",
                description: "Sustainable farming and agricultural technology",
            },
            {
                id: "australia-veterinary",
                title: "Veterinary Science",
                image: "/placeholder.svg?height=200&width=300",
                description: "Animal health and veterinary medicine",
            },
            {
                id: "australia-tourism",
                title: "Tourism Management",
                image: "/placeholder.svg?height=200&width=300",
                description: "Travel industry and destination management",
            },
        ],
        viewMoreRoute: "/courses/australia",
    },
} as const

type CountryKey = keyof typeof countriesData

export default function TrendingCourses() {
    const [activeCountry, setActiveCountry] = useState<CountryKey>("uk")

    const currentCountryData = countriesData[activeCountry]

    if (!currentCountryData) {
        return <div>Loading...</div>
    }

    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        Discover{" "}
                        <span className="relative">
                            Trending Courses
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                        </span>{" "}
                        Worldwide
                    </h2>
                </div>

                {/* Country Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(Object.keys(countriesData) as CountryKey[]).map((key) => (
                        <Button
                            key={key}
                            onClick={() => setActiveCountry(key)}
                            className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeCountry === key
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Courses in the {countriesData[key].name}
                        </Button>
                    ))}
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentCountryData.courses.map((course) => (
                        <Card
                            key={course.id}
                            className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <CardContent className="p-0">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={course.image || "/placeholder.svg"}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link href={currentCountryData.viewMoreRoute}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-3 text-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                        >
                            View more
                        </Button>
                    </Link>
                </div>

                {/* Active Country Indicator */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Currently showing courses for <span className="font-semibold text-blue-600">{currentCountryData.name}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
