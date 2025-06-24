const carrer = [
    {
        name: "Engineering",
        image: "/Images/Engineering.jpg",
    },
    {
        name: "Healthcare ",
        image: "/images/Healthcare.jpg",
    },
    {
        name: "Financial Services",
        image: "/images/Financial.jpg",
    },
    {
        name: "Fashion & Luxury Goods",
        image: "/images/Fashion.jpg",
    },
    {
        name: "Consulting",
        image: "/images/Consulting.jpg",
    },
    {
        name: "Creative designing",
        image: "/images/Creative.jpg",
    },
];
function CarrerProspect() {
    return (
       <>
       <div className="py-12 px-4 text-center">
               
                <h2 className="text-5xl font-bold -mt-1 text-gray-900 p-5">
                    <span className="text-5xl">
                        <span className="relative z-10 text-orange-600 text-black">Career Prospect &nbsp;</span>
                        {/* <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span> */}
                    </span>
                    In France
                </h2>
                
                <p className="text-center text-2xl mt-2">
                    The job market in France is diverse, offering opportunities across various sectors.
                    <br />
                    Here are some key sectors and industries that presently offer employment opportunities:
                </p>
                
                <div className="mt-10 grid grid-cols-3 gap-x-32 gap-y-10 max-w-7xl mx-15">
                    {carrer.map((carrer, index) => (
                        <div
                            key={index}
                            className="rounded-3xl overflow-hidden border border-blue-100 w-100 shadow bg-white"
                        >
                            <img src={carrer.image} alt={carrer.name} className="w-full h-65 object-cover hover:cursor-pointer" />
                            <div className="py-4 text-lg font-semibold text-gray-900">{carrer.name}</div>
                        </div>
                    ))}
                </div>
            </div>
       </>
    )
}
export default CarrerProspect;