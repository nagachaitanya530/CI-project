import { ShieldCheck } from "lucide-react";
import BookConsultationForm from '~/app/_components/study-abroad/BookConsultationForm';// Make sure path is correct

interface WhyStudyItem {
  heading: string;
  description: string;
}

const items: WhyStudyItem[] = [
  {
    heading: "International Exposure",
    description:
      "Currently, the UAE is home to over 200 nationalities, coexisting harmoniously and mutually influencing one another. Consequently, the UAE has evolved into a vibrant hub of diverse traditions, marked by its status as a thriving centre for business and tourism, revealing a rich mosaic of multiculturalism, multi-religiosity, and multilinguality.",
  },
  {
    heading: "Excellent Education System",
    description:
      "Universities in Dubai are renowned for their excellence and diversity. Emphasizing innovation and excellence, it provides a broad spectrum of educational programs. Studying in Dubai is affordable and popular with students from India.",
  },
  {
    heading: "Work Opportunities",
    description:
      "University programs in the country are highly recognized globally, attracting many Indian students. With excellent job opportunities available, Dubai's status as a financial powerhouse, particularly in the lucrative oil industry, offers access to some of the highest-paying jobs.",
  },
  {
    heading: "Innovation and Entrepreneurship Centres",
    description:
      "If you study in the UAE, you can explore innovative technology through Innovation and Entrepreneurship Centres based at several universities. Also, to promote innovative technology, the UAE has assigned various free trade zones, which are perfect for gaining experience in new age enterprises. These free trade zones provide opportunities for students looking for internships and work placements.",
  },
  {
    heading: "Safety",
    description:
      "UAE ranks as the second safest in the world out of 134 countries, according to the data published in 2021 by Global Finance. Peace, personal security, and natural disasters are some of the parameters used in the research. As a study abroad student, safety will play a vital role in your academic journey.",
  },
];

function WhyStudy() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="lg:w-3/5">
          <h2 className="text-3xl md:text-4xl font-medium mb-10">
            Why{" "}
            <span className="font-bold underline decoration-red-500 underline-offset-4">
              Study In Dubai?
            </span>
          </h2>

          {items.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
              </div>
              {index !== items.length - 1 && <hr className="my-6" />}
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div className="lg:w-2/5">
          <BookConsultationForm />
        </div>
      </div>
    </section>
  );
}

export default WhyStudy;
