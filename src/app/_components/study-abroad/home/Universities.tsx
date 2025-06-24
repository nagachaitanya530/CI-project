
import Link from "next/link"
import { Button } from "~/components/ui/button"


const universities = [
    { name: "University of Edinburgh", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Johns Hopkins", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Melbourne", logo: "/placeholder.svg?height=60&width=120" },
    { name: "NUS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Manchester", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UCLA", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UNSW Sydney", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Queensland", logo: "/placeholder.svg?height=60&width=120" },
    { name: "King's College London", logo: "/placeholder.svg?height=60&width=120" },
    { name: "NYU", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Sydney", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Auckland", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Bristol", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Monash University", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Western Australia", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Amsterdam", logo: "/placeholder.svg?height=60&width=120" },
]

export default function UniversityPartners() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Top Ranked{" "}
                        <span className="relative">
                            Partners
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></div>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Here are the top universities according to the QS World Rankings. Edwise is proud to partner with these
                        esteemed institutions
                    </p>
                </div>

                {/* University Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
                    {universities.map((university, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-md px-2 py-1 hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-h-[45px]"
                        >
                            <img
                                src={university.logo || "/placeholder.svg"}
                                alt={`${university.name} logo`}
                                width={70}
                                height={35}
                                className="max-w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link href="/partners">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-3 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full font-medium"
                        >
                            View more
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
