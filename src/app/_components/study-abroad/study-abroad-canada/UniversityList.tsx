"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

const universities = [
    {
        name: "University of Toronto",
        image: "/university/University_of_Toronto-Logo.wine.png",
        popularFor: "Computer Sciences",
        ranking: "21",
    },
    {
        name: "McGill University",
        image: "/university/McGill_University-Logo.wine.png",
        popularFor: "Biology",
        ranking: "30",
    },
    {
        name: "University of British Columbia",
        image: "/university/university-of-british-columbia.png",
        popularFor: "Arts and Humanities",
        ranking: "34",
    },
    {
        name: "University of Alberta",
        image: "/university/university-of-alberta-logo.png",
        popularFor: "Engineering",
        ranking: "111",
    },
    {
        name: "University of Waterloo",
        image: "/university/university-of-waterloo-logo.png",
        popularFor: "Computer Science",
        ranking: "112",
    },
    {
        name: "Western University",
        image: "/university/western-university-canada.png",
        popularFor: "Business Administration",
        ranking: "114",
    },
    {
        name: "McMaster University",
        image: "/university/mcmaster-university-logo.png",
        popularFor: "Health Sciences",
        ranking: "189",
    },
    {
        name: "University of Calgary",
        image: "/university/university-of-calgary-logo.png",
        popularFor: "Nursing",
        ranking: "182",
    },
    {
        name: "University of Ottawa",
        image: "/university/university-of-ottawa-logo.png",
        popularFor: "Law",
        ranking: "203",
    },
    {
        name: "Dalhousie University",
        image: "/university/dalhousie-university-logo.png",
        popularFor: "Engineering",
        ranking: "298",
    }, {
        name: "University of Victoria",
        image: "/university/university-of-victoria-logo.png",
        popularFor: "Environmental Studies",
        ranking: "322",
    }, {
        name: "University of Saskatchewan",
        image: "/university/university-of-saskatchewan-logo.png",
        popularFor: "Medicine",
        ranking: "345",
    },

];

export default function UniversityList() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const cardWidth = 280 + 24;

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || universities.length < 4) return;

        const totalCards = universities.length;

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex > totalCards) {
                currentIndex = 1;
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
            }

            setIndex(currentIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const duplicatedList =
        universities.length >= 4 ? [...universities, ...universities.slice(0, 4)] : universities;

    const scrollleft = () => {
        const container = scrollRef.current
        if (container) {
            container.scrollBy({ left: -cardWidth, behavior: "smooth" })
        }
    }
    const scrollright = () => {
        const container = scrollRef.current
        if (container) {
            container.scrollBy({ left: cardWidth, behavior: "smooth" })
        }
    }



    return (
        <div className="bg-gray-100  py-10 px-4">
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-center">
                    <span className="underline decoration-red-500 underline-offset-4">
                        List of Universities
                    </span>{" "}
                    In Canada
                </h2>
                <p className="text-center text-lg text-gray-600 my-4">
                    Canada is a top choice for international students seeking a prestigious education.
                    <br />
                    Here are some top universities where we have successfully placed students.
                </p>
            </div>
            <div className="flex justify-end md:mr-10">
                <button className="border rounded-2xl border-blue-200 py-3 px-5 text-lg text-blue-400">View All the University</button>
            </div>


            <div className="relative mt-5 px-4">

                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden gap-6 py-10 scroll-smooth"
                >
                    {duplicatedList.map((uni, i) => (
                        <div
                            key={i}
                            className="w-72 md:w-80 flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src={uni.image}
                                    alt={""}
                                    width={64}
                                    height={64}
                                    className="object-contain border-2 border-blue-600 rounded"
                                />
                                <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                                    {uni.name}
                                </h3>
                            </div>

                            <hr className="mb-3 border-gray-300" />

                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-blue-600 text-xl">🎓</span>
                                <div className="text-sm text-gray-800">
                                    <p className="font-medium">Popular For</p>
                                    <p className="font-semibold">{uni.popularFor}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 text-xl">🎖️</span>
                                <div className="text-sm text-gray-800">
                                    <p className="font-medium">QS World Ranking</p>
                                    <p className="font-semibold">{uni.ranking}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {universities.length >= 4 && (
                    <div className="w-full mt-4 px-5 relative">
                        <div className="h-[1px] bg-gray-300 relative overflow-hidden">
                            <div
                                className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                                style={{
                                    transform: `translateX(${index * 20}%)`,
                                }}
                            ></div>
                        </div>
                    </div>
                )}
                <div className="flex justify-evenly px-20 mt-5">
                    <button onClick={scrollleft}><ArrowLeftSquare className="w-10 h-10 text-gray-500" /></button>
                    <button onClick={scrollright}><ArrowRightSquare className="w-10 h-10 text-gray-500" /></button>
                </div>
            </div>
        </div>
    );
}
