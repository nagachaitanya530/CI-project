"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    slug: "airc",
    title: "AIRC (American International Recruitment Council)",
    logo: "/air.png",
  },
  {
    slug: "aaeri",
    title: "AAERI - Education in Australia",
    logo: "/aaa.jpeg",
  },
  {
    slug: "usa",
    title: "USA - A Study Destination",
    logo: "/usa.jpeg",
  },
  {
    slug: "rra",
    title: "RRA - Regional Representatives Association",
    logo: "/rra.webp",
  },
];

export default function AccreditationsPage() {
  const isOdd = cards.length % 3 === 1;

  return (
    <section className="bg-blue-100 py-16 px-6 md:px-20 text-center min-h-screen">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Our <span className="underline decoration-red-500">Accreditations</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card, index) => {
          const isLastCard = index === cards.length - 1;
          const shouldCenter = isLastCard && isOdd;

          return (
            <div
              key={card.slug}
              className={`${shouldCenter ? "md:col-start-2" : ""}`}
            >
              <Link
                href={`/accreditations/${card.slug}`}
                className="bg-white rounded-2xl shadow-md hover:scale-105 transition-all block p-5 min-h-[300px] flex flex-col items-center justify-between"
              >
                <Image
                  src={card.logo}
                  alt={card.title}
                  width={150}
                  height={150}
                  className="rounded-xl object-contain"
                />
                <h3 className="mt-6 text-lg font-semibold text-blue-900 text-center">
                  {card.title}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
