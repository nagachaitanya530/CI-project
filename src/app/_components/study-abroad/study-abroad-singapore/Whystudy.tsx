import { Award } from "lucide-react";

function Whystudy() {

  // Why study in Singapore?
  const reasons = [
    {
      title: "Academic excellence",
      description:
        "Singapore is home to top-ranking international universities such as the National University of Singapore (NUS) and Nanyang Technological University (NTU), which are recognised globally for their academic excellence and research contributions.",
      icon: Award,
    },
    {
      title: "Diverse environment",
      description:
        "Singapore is known for its multicultural society and diverse population. This creates a rich and enriching environment and helps develop cross-cultural understanding.",
      icon: Award,
    },
    {
      title: "A global hub for business",
      description:
        "Singapore is a global business and financial hub. This makes it an attractive destination for students across various fields. You can confidently study abroad in Singapore as the country has a strong economy and a business-friendly environment that provides good career opportunities.",
      icon: Award,
    },
    {
      title: "Research and innovation",
      description:
        "Singapore emphasizes strongly on research and innovation. Most of the universities in Singapore have collaborations with industries and research institutions. This provides cutting-edge research facilities.",
      icon: Award,
    },
    {
      title: "Career opportunities",
      description:
        "There are many internships opportunities for students that are available. This is beneficial for gaining practical knowledge and experience. Public universities offer a selection of part-time undergraduate programs and certificate courses that is specially catered for working adults to future-proof themselves.",
      icon: Award,
    },
    {
      title: "IELTS is not mandatory in Singapore",
      description:
        "IELTS scores are not mandatory for getting an education in Singapore even for professional courses like design, nursing or management.",
      icon: Award,
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 gap-10 py-12 md:px-20 bg-white ">
        <div className="grid md:grid-cols-3 gap-10 items-start px-4">
          {/* Left - Reasons */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Why <span className="font-bold text-black underline decoration-red-500">Study In Singapore?</span>
            </h2>

            <ul className="space-y-6">
              {reasons.map((item, i) => (
                <li key={i} className="flex items-start gap-4 border-b pb-6">
                  <div className="w-10 h-10 rounded-full bg-[#EDF2FA] flex items-center justify-center">
                    {/* Render icon only if defined */}
                    {item.icon && <item.icon className="w-5 h-5 text-blue-700" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>

  );
}
export default Whystudy;