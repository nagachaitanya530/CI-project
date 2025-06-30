function WhyStudy() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                <span className="text-orange-600 font-bold">Why we study</span> in France?
            </h1>
            {[
                {
                    title: "Hub for Education",
                    desc: `A highly sought-after study destination renowned for its prestigious "Grande École" institutions,
                        offering unmatched global career prospects. France attracts ambitious individuals seeking excellence in both academic and professional realms.`,
                },
                {
                    title: "Affordable life",
                    desc: `France boasts of a lower cost of living compared to many other European capitals. The government offers financial assistance for accommodation,
                        covering up to one-third of the rent for students. Living expenses in France are much more affordable as compared to the United Kingdom.`,
                },
                {
                    title: "Learning French is not essential",
                    desc: `French Grande Ecoles are increasingly using English as a medium of instruction. International students are usually taught French as a subject in their curriculum to assist them in their day to routine and future jobs.`,
                },
                {
                    title: "Rich in art and culture",
                    desc: `France boasts of cultural richness in Europe, exuding an unparalleled blend of artistry and tradition. It holds the coveted title of the world's top tourist destination, captivating visitors with iconic masterpieces such as the works of Monet and the enigmatic Mona Lisa.`,
                },
                {
                    title: "Excellence in Science and Technology",
                    desc: `Within the realm of information technology, France claims the second postion in Europe and fourth globally. The nation stands as a vanguard of technological advancement across various domains.`,
                },
            ].map((item, idx) => (
                <div key={item.title} className="py-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 shadow-xl rounded-full bg-white flex-shrink-0">
                            <img
                                src="/images/certificate.png"
                                alt="France Education"
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                style={{
                                    filter:
                                        "invert(25%) sepia(99%) saturate(7486%) hue-rotate(202deg) brightness(97%) contrast(101%)",
                                }}
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h2>
                    </div>
                    <p className="ml-0 sm:ml-20 text-base sm:text-lg py-2">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
export default WhyStudy;
