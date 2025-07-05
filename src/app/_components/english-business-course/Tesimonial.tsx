'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type TestimonialType = {
  id: number;
  quote: string;
  author: string;
  x_id: string;
  image: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    quote: "Nil had good online platform and live sessions were very helpful...",
    author: "Akil Ghani",
    x_id: "@ghaiakil",
    image: "/home/right-arrow.png"
  },
  {
    id: 2,
    quote: "I recently had the pleasure of taking classes at the National Institute of Language...",
    author: "Samyak",
    x_id: "@smykdura",
    image: "/home/right-arrow.png"
  },
  {
    id: 3,
    quote: "I was associated with Nil for about one month but the bond I shared with my mentor Ms. Veronica...",
    author: "Shilpi Samantha",
    x_id: "@shilpisamntha",
    image: "/home/right-arrow.png"
  },
  {
    id: 4,
    quote: "I had a wonderful experience at NIL as it helped me to overcome the major challenges...",
    author: "Yashmeet Saini",
    x_id: "@yashmeet",
    image: "/home/right-arrow.png"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  if (!testimonial) return null;

  return (
    <section id="testimonial" className="py-10 bg-gray-100">
      <h1 className="text-4xl font-semibold pb-10">
        Testimonial
      </h1>
      <div className="px-5">
        <div
          className={`bg-white rounded-lg shadow p-6 flex flex-col items-center text-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border border-gray-300">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-gray-700 text-base mb-4 italic max-w-2xl">
            “{testimonial.quote}”
          </p>
          <div className="text-blue-900 font-semibold">{testimonial.author}</div>
          <div className="text-sm text-gray-500">{testimonial.x_id}</div>
          <div className="flex justify-between w-full mt-6 px-10">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <ArrowBigLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <ArrowBigRight />
            </button>
          </div>
          <div className="flex gap-2 justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-900" : "bg-gray-300"}`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFade(true);
                  }, 200);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
