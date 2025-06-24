const courses = [
    {
        name: "Business Management",
        image: "/business.webp",
    },
    {
        name: "Hospitality Management",
        image: "/hospitality-img.webp",
    },
    {
        name: "Artificial Intelligence",
        image: "/ai-img.webp",
    },
    {
        name: "Banking & Finance",
        image: "/banking.webp",
    },
    {
        name: "Education",
        image: "/education.webp",
    },
    {
        name: "International Law",
        image: "/International Law.webp",
    },
];
function PopularCourses() {
    return (
        <>
        <div className="py-12 px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-gray-900">
                    <span className="relative inline-block">
                        <span className="relative z-10 text-black">Popular Courses</span>
                        <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
                    </span>{" "}
                    In Switzerland
                </h2>
                {/* Subtext */}
                <p className="text-center text-lg mt-2">
                    There are multiple courses in Switzerland that will cater to the needs of international <br />students.

                    <br />
                    Here are the top courses in Switzerland that are preferred by international students:

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