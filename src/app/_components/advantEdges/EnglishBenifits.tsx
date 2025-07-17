'use client';

interface Benefit {
  title: string;
  description: string;
}

interface EnglishBenefitsProps {
  heading: string;
  benefits: Benefit[];
}

export default function EnglishBenefits({ heading, benefits }: EnglishBenefitsProps) {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h2 className="text-sm font-semibold text-blue-600 mb-6">{heading}</h2>
      <div className="space-y-10">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-lg text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
