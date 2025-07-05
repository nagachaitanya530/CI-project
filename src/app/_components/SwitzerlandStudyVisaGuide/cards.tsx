"use client";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  link?: string;
};

const Card = ({ image, title, link }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-50 rounded-2xl"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {link && (
          <Link href={link}>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition">
              Read More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default function CardPage() {
  const cards = [
    {
      image:"/swtizerlandstudyvisa/mba.jpg",
      title: "MBA Degree in Australia for Indian Students",
      link: "/SwitzerlandStudyVisaGuide/MBA",
    },
    {
      image:
        "/swtizerlandstudyvisa/Cost-of-Study.jpg",
      title: "Cost of Studying in Australia for Indian Students",
      link: "/SwitzerlandStudyVisaGuide/CostOfStudy",
    },
    {
      image:
        "/swtizerlandstudyvisa/scholarships-to-study-in-australia-for-indian-students.webp",
      title: "Scholarships to Study in Australia for Indian Students",
      link: "/SwitzerlandStudyVisaGuide/Scholarship",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}