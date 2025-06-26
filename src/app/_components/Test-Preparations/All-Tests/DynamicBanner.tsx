"use client";
import { useState } from "react";
import Image from "next/image";
import StudyAbroadModal from "../../study-abroad/study-mauritius/StudyAbroadModal";

interface DynamicBannerProps {
  titleTop: string;
  titleBold: string;
  titleBottom: string;
  highlightWord?: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function DynamicBanner({
  titleTop,
  titleBold,
  titleBottom,
  highlightWord = "",
  buttonText,
  imageUrl,
  imageAlt,
  gradientFrom = "white",
  gradientTo = "#fef5f5",
}: DynamicBannerProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={`bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] px-4 md:px-20 py-16`}
    >
      <div className="min-h-[80vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight space-y-3">
            <div>{titleTop}</div>
            <div className="font-extrabold">{titleBold}</div>
            <div className="relative inline-block">
              <span>{titleBottom}</span>
              {highlightWord && (
                <span className="block h-[6px] w-full bg-[url('/underline.svg')] bg-no-repeat bg-left-bottom" />
              )}
            </div>
          </h1>

          <button
            className="mt-8 bg-[#143B85] text-white px-7 py-4 rounded-md text-lg font-semibold"
            onClick={() => setShowModal(true)}
          >
            {buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full max-w-md md:max-w-lg mx-auto">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={480}
            height={480}
            className="w-full h-auto scale-105"
          />
        </div>
      </div>

      {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
