
"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    slug: "airc",
    title: "AIRC (American International Recruitment Council)",
    logo: "/airc-logo.jpg",
  },
  {
    slug: "aaeri",
    title: "AAERI - Education in Australia",
    logo: "/aaeri-logo.jpg",
  },
  {
    slug: "usa",
    title: "USA - A Study Destination",
    logo: "/usa-logo.jpg",
  },
];

export default function AccreditationsPage() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-20 text-center min-h-screen">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Our <span className="underline decoration-red-500">Accreditations</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/accreditations/${card.slug}`}
            className="bg-white rounded-2xl shadow-md hover:scale-105 transition-all p-5"
          >
            <Image
              src={card.logo}
              alt={card.title}
              width={200}
              height={200}
              className="mx-auto rounded-xl object-contain"
            />
            <h3 className="mt-4 text-lg font-semibold text-blue-900">{card.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
