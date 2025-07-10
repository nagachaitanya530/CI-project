"use client";
import React, { useState } from "react";

type ImageGroup = {
    title: string;
    thumbnail: string;
    overlay: string;
    images: string[];
};

const imageGroups: ImageGroup[] = [
    {
        title: "World Education Fair",
        thumbnail: "/events/gallery/worldfair/1.jpg",
        overlay: "World Education Fair",
        images: [
            "/events/gallery/worldfair/2.jpg",
            "/events/gallery/worldfair/3.jpg",
            "/events/gallery/worldfair/4.jpg",
        ],
    },
    {
        title: "Awards Received",
        thumbnail: "/events/gallery/awardr/reward4.jpg",
        overlay: "Awards Received",
        images: [
            "/events/gallery/awardr/reward.jpg",
            "/events/gallery/awardr/reward2.jpg",
            "/events/gallery/awardr/reward3.jpg",
            "/events/gallery/awardr/reward4.jpg",
        ],
    },
    {
        title: "Pre-Departure",
        thumbnail: "/events/gallery/predeparture/pre-departure.jpg",
        overlay: "Pre-Departure",
        images: [
            "/events/gallery/predeparture/pred1.jpg",
            "/events/gallery/predeparture/pred2.jpg",
            "/events/gallery/predeparture/pred3.jpg",


        ],
    },
];

const GallerySection = () => {
    const [openGroup, setOpenGroup] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handleOpen = (groupIndex: number) => {
        setOpenGroup(groupIndex);
        setCurrentImageIndex(0);
    };

    const handleClose = () => {
        setOpenGroup(null);
    };

    const handleNext = () => {
        if (openGroup !== null) {
            const total = imageGroups[openGroup]?.images.length ?? 0;
            setCurrentImageIndex((prev) => (prev + 1) % total);
        }
    };

    const handlePrev = () => {
        if (openGroup !== null) {
            const total = imageGroups[openGroup]?.images.length ?? 0;
            setCurrentImageIndex((prev) => (prev - 1 + total) % total);
        }
    };

    return (
        <section id="Image_Gallery" className="mb-20">
            <div className="grid md:grid-cols-3 gap-6 pl-5 pr-5">
                {imageGroups.map((group, index) => (
                    <div key={index}>
                        <div
                            className="relative cursor-pointer"
                            onClick={() => handleOpen(index)}
                        >
                            <img
                                src={group.thumbnail}
                                alt={group.title}
                                className="rounded-lg shadow-md w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-70 text-white text-center py-2">
                                {group.overlay}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Viewer */}
            {openGroup !== null && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <button
                        className="absolute top-4 right-6 text-white text-4xl font-bold z-50"
                        onClick={handleClose}
                    >
                        &times;
                    </button>

                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
                        onClick={handlePrev}
                    >
                        &#8592;
                    </button>

                    <img
                        src={imageGroups[openGroup]?.images?.[currentImageIndex] ?? ""}
                        alt="Full View"
                        className="max-h-full max-w-full object-contain"
                    />

                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
                        onClick={handleNext}
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </section>
    );
};
export default GallerySection;