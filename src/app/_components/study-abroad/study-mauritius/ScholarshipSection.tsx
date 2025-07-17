import Image from "next/image";

interface ScholarshipSectionProps {
  countryName: string;
  description: string;
  image: string;
  scholarshipContent: string | string[];
}

export default function ScholarshipSection({
  countryName,
  description,
  image,
  scholarshipContent,
}: ScholarshipSectionProps) {
  const isArray = Array.isArray(scholarshipContent);

  return (
    <section className="px-4 md:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="font-bold underline decoration-red-500">Scholarships</span> In {countryName}
          </h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="space-y-4 text-[#4B5563] font-medium">
            {isArray ? (
              (scholarshipContent as string[]).map((item, idx) => (
                <p key={idx} className="text-blue-600">{item}</p>
              ))
            ) : (
              <p className="text-blue-600">{scholarshipContent}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={image}
            alt={`${countryName} scholarship`}
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
