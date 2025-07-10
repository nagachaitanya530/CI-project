
import Link from "next/link"
import { Button } from "~/components/ui/button"


const universities = [
    { name: "University of Edinburgh", logo: "/study-abroad-home/university-of-edinburgh.png?height=60&width=120" },
    { name: "Johns Hopkins", logo: "/study-abroad-home/university-of-johnhopkins.png?height=60&width=120" },
    { name: "University of Melbourne", logo: "/study-abroad-home/university-of-melbourne.png?height=60&width=120" },
    { name: "NUS", logo: "/study-abroad-home/university-of-singapore.png?height=60&width=120" },
    { name: "University of Manchester", logo: "/study-abroad-home/manchester-university.png?height=60&width=120" },
    { name: "UCLA", logo: "/study-abroad-home/ucla.png?height=60&width=120" },
    { name: "UNSW Sydney", logo: "/study-abroad-home/unsw-sydney.png?height=60&width=120" },
    { name: "University of Queensland", logo: "/study-abroad-home/university-of-queenland.png?height=60&width=120" },
    { name: "King's College London", logo: "/study-abroad-home/kcl.jpeg?height=60&width=120" },
    { name: "NYU", logo: "/study-abroad-home/university-of-nyc.png?height=60&width=120" },
    { name: "University of Sydney", logo: "/study-abroad-home/university-of-sydney.png?height=60&width=120" },
    { name: "University of Auckland", logo: "/study-abroad-home/university-of-newzealand.png?height=60&width=120" },
    { name: "University of Bristol", logo: "/study-abroad-home/university-of-bristol.png?height=60&width=120" },
    { name: "Monash University", logo: "/study-abroad-home/university-of-monash.png?height=60&width=120" },
    { name: "University of Western Australia", logo: "/study-abroad-home/university-of-melbourne.png?height=60&width=120" },
    { name: "University of Amsterdam", logo: "/study-abroad-home/university-of-amsterdam.png?height=60&width=120" },
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
                    {universities.map((university, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-md px-2 py-1 hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-h-[45px]"
                        >
                            <img
                                src={university.logo}
                                alt={`${university.name} logo`}
                                width={200}
                                height={70}
                                className="max-w-full h-auto object-contain  transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link href="study-abroad/partnered-universities">
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
