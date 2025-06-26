const courses = [
    {
        name: "MBA",
        image: "/images/MBA.jpg",
    },
    {
        name: "Engineering",
        image: "/Images/Engineering.jpg",
    },
    {
        name: "Information Technology",
        image: "/images/Information.jpg",
    },
    {
        name: "Hospitality & Tourism",
        image: "/images/Hospitality.jpg",
    },
    {
        name: "Fashion",
        image: "/images/Fashion.jpg",
    },
    {
        name: "Culinary Arts",
        image: "/images/Culinary.jpg",
    },
];
function PopularCourses() {
    return (
        <>
        <div className="py-12 px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-gray-900">
                    <span className=" inline-block">
                        <span className="text-orange-600">Popular Courses</span>
                        {/* <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span> */}
                    </span>{" "}
                    In France
                </h2>
                {/* Subtext */}
                <p className="text-center text-2xl mt-2">
                    France offers a wide range of programs across various fields of study.
                    <br />
                    Here are the top courses in France that are preferred by international students:
                </p>
                {/* Cards */}
                <div className="mt-10 grid grid-cols-3 gap-x-32 gap-y-10 max-w-7xl mx-15">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="rounded-3xl overflow-hidden border border-blue-100 w-100 shadow bg-white"
                        >
                            <img src={course.image} alt={course.name} className="w-full h-65 object-cover hover:cursor-pointer" />
                            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PopularCourses;