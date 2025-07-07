function HeroSection() {
    return (
        <>
            <section className="bg-gradient-to-r from-blue-700 via-purple-600 to-red-800 text-white px-4 py-10 lg:flex items-center">
                <div className="flex justify-center">
                    <div className="text- mt-5 ml-30">
                        <div className=" flex justify-start h-10">
                            <img
                                src="../../british.webp"
                                alt="British Council"
                            />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-justify ">Corporate Training</h1>
                        <p className="text-lg-max-w-xl">
                            Customisable advanced English course for detailed understanding<br />
                            of English grammar and vocabulary with Corporate standard <br />
                            sentence syntax and rules.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="aspect-video w-full max-w-xl mx-auto">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/PHSNcKCAJrE"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSection;