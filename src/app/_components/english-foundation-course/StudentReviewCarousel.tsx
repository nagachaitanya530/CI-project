"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const reviews = [
  {
    name: "Rohit Sharma",
    content: "This course helped me become confident in speaking. Highly recommended!",
  },
  {
    name: "Aditi Verma",
    content: "Grammar and vocabulary were made so easy. Loved the live sessions.",
  },
  {
    name: "Samar Khan",
    content: "AI feedback really helped me improve. Trainers are super supportive.",
  },
  {
    name: "Priya Mehta",
    content: "Amazing experience, especially the mock speaking sessions.",
  },
]

export default function StudentReviewCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current])

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="relative text-center text-[#284c87] text-3xl md:text-4xl font-bold mb-12 group">
          What Our Students Say
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded" />
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8 px-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`min-w-[90%] sm:min-w-[65%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] 
                bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg 
                hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 
                ${index === 0 ? "ml-4 md:ml-6" : ""}
                ${index === reviews.length - 1 ? "mr-4 md:mr-6" : ""}`}
              >
                <p className="text-gray-700 italic leading-relaxed">
                  “{review.content}”
                </p>
                <p className="mt-4 font-semibold text-[#284c87] text-right">
                  – {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
