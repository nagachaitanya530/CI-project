"use client";

import Link from "next/link";

const logos = [
  {
    name: "TOI",
    image: "/media/toi.png",
    link: "https://timesofindia.indiatimes.com",
  },
  {
    name: "Education Times",
    image: "/media/educationtimes.png",
    link: "https://educationtimes.com",
  },
  {
    name: "Deccan Herald",
    image: "/media/dh.png",
    link: "https://deccanherald.com",
  },
  {
    name: "The PIE",
    image: "/media/thepie.png",
    link: "https://thepienews.com",
  },
  {
    name: "Rediff",
    image: "/media/rediff.png",
    link: "https://rediff.com",
  },
  {
    name: "BBC News",
    image: "/media/bbc.png",
    link: "https://bbc.com/news",
  },
  {
    name: "Insight Success",
    image: "/media/insightsuccess.png",
    link: "https://insightssuccess.com",
  },
];

export default function MediaLogosGrid() {
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center border border-gray-300 rounded-3xl p-6 hover:shadow-lg transition"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="max-h-16 object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
