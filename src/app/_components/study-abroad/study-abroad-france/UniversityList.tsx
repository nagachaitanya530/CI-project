import { useRef, useEffect, useState } from "react";
const universities = [
    {
        name: "Université PSL",
        image: "/images/psl.jpg",
        popularFor: "Physics",
        ranking: "24",
    },
    {
        name: "Institut Polytechnique de Paris",
        image: "/images/polytechnique.jpg",
        popularFor: "Artificial Intelligence",
        ranking: "38",
    },
    {
        name: "Sorbonne University",
        image: "/images/sorbonne.jpg",
        popularFor: "International Law",
        ranking: "59",
    },
    {
        name: "Université Paris-Saclay",
        image: "/images/Paris-Saclay.jpg",
        popularFor: "Mathematics",
        ranking: "71",
    },
    {
        name: "École Normale Supérieure de Lyon",
        image: "/images/Normale.jpg",
        popularFor: "Cognitive Sciences",
        ranking: "184",
    },
    {
        name: "Ecole des Ponts ParisTech",
        image: "/images/Ecole.jpg",
        popularFor: "Civil Engineering",
        ranking: "192",
    },
    {
        name: "Université Paris Cité",
        image: "/images/Paris.jpg",
        popularFor: "Public Health",
        ranking: "236",
    },
    {
        name: "Université Grenoble Alpes",
        image: "/images/Grenoble.jpg",
        popularFor: "Nanosciences",
        ranking: "294",
    },
    {
        name: "Sciences Po",
        image: "/images/Sciences.jpg",
        popularFor: "Public Policy",
        ranking: "319",
    },
    {
        name: "Université Grenoble Alpes",
        image: "/images/Panthéon-Sorbonne.jpg",
        popularFor: "Economics",
        ranking: "328",
    },
];

function UniversityList() {
     const scrollRef = useRef<HTMLDivElement>(null);
        const [index, setIndex] = useState(0);
    
        useEffect(() => {
            const container = scrollRef.current;
            if (!container || universities.length < 4) return;
    
            const cardWidth = 280 + 24;
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
    return (
        <>
        <div className="bg-[#e8eff8] py-10 px-4">
                        <h2 className="text-4xl font-bold text-center">
                            <span className="text-orange-600  ">List of Universities </span> In France
                        </h2>
                        <p className="text-center text-2xl mt-2">
                            France is a top choice for international students seeking a prestigious education.
                            <br />
                            Here are some top universities where we have successfully placed students.
                        </p>
                        <div className="relative mt-10">
                            <div ref={scrollRef} className="flex overflow-x-hidden gap-6 scroll-smooth">
                                {duplicatedList.map((uni, i) => (
                                    <div
                                        key={i}
                                        className="w-[305px] h-75 flex-shrink-0 bg-white rounded-3xl p-6 py-12 shadow-md border border-blue-200"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src={uni.image} alt={uni.name} width={64} height={64} className="object-contain rounded" />
                                            <h3 className="font-semibold text-[18px] text-gray-900 leading-snug break-words">{uni.name}</h3>
                                        </div>
                                        <hr className="mb-3 border-gray-300" />
                                        <div className="flex items-start gap-4 mb-2">
                                            <span className="text-blue-600 text-xl">🎓</span>
                                            <div className="text-sm text-gray-800">
                                                <p className=" text-[20px]">Popular For</p>
                                                <p className="font-semibold text-xl">{uni.popularFor}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="text-blue-600 text-xl">🎖</span>
                                            <div className="text-sm text-gray-800">
                                                <p className="text-xl">QS World Ranking</p>
                                                <p className="font-semibold text-xl">{uni.ranking}</p>
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
                            <div className="flex justify-center gap-2 my-12">
                                <button className="hover:bg-blue-900 px-5 py-3 rounded-xl font-semibold text-blue-900 hover:text-white border-1 border-blue-900 hover:cursor-pointer hover:bg-blue-800">
                                    View Our Partnered Universities
                                </button>
                            </div>
                        </div>
                    </div>

        </>
    )
}

export default UniversityList
