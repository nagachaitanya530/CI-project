"use client";
import Link from "next/link";

const galleryImages = [
    { src: "/events/gallery/1.jpg", alt: "Image 1", style: "col-span-1 row-span-1" },
    { src: "/events/gallery/2.jpg", alt: "Image 2", style: "col-span-2" },
    { src: "/events/gallery/pair-happy-students.jpg", alt: "Image 3", style: "col-span-1" },
    { src: "/events/gallery/3.jpg", alt: "Image 4", style: "col-span-1" },
    { src: "/events/gallery/4.jpg", alt: "Image 5", style: "col-span-2" },
    { src: "/events/gallery/5.jpg", alt: "Image 6", style: "col-span-1" },
];

const GallerySection = () => {
    return (
        <section
            id="section3"
            className="test-dtl-sections animate-fade-in duration-200 px-4 md:px-10"
        >
            {/* Section Title */}
            <div className="text-center mt-10 mb-8 text-2xl font-semibold">
                International <span className="text-blue-600">Gallery</span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`overflow-hidden rounded-lg shadow ${img.style}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
                <Link
                    href="/events/gallery"
                    className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                >
                    View more
                </Link>
            </div>
        </section>
    );
};

export default GallerySection;