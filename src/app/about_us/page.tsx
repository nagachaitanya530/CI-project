import Navigation from "../_components/Navigation";
import Footer from "../_components/footer1";
import Image from "next/image";
import { MessageCircle, PhoneCall, Mail } from "lucide-react";

export default function AboutUsPage() {
  return (
    <>
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">

        {/* Section 1: Our Skills */}
        <section className="mb-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-light mb-4">
              And our skills make us <span className="font-bold">different</span>
            </h2>
            <p className="text-lg text-gray-600">
              Coaching Institute, CI Academy and CI Technologies are units of CI Edutech (P) Limited, where we are reinventing e-learning to suit the needs of students, especially in South-East Asia. Developing skills with the use of technology and qualified educators is the main goal of our team. We have created not only the name but also a culture in education in Asia.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/our_skills_team.png"
              alt="Team showing skills at NIL"
              width={800}
              height={400}
              className="rounded-xl mx-auto"
            />
          </div>
        </section>

        {/* Section 2: The Culture */}
        <section className="mb-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <Image
              src="/images/ci_culture.png"
              alt="Work culture at CI"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h4 className="uppercase text-sm font-semibold text-gray-500">We are a proud team</h4>
            <h2 className="text-4xl font-bold mb-4">The culture</h2>
            <p className="text-lg text-gray-600">
              CI has a culture of training employees to perform at their best. Our feedback-improvement system ensures quality delivery. Students benefit from certified training faculty and structured implementation at CI.
            </p>
          </div>
        </section>

        {/* Section 3: Brand Collaborations */}
        <section className="text-center py-20 pb-0">
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-10">
            We conducted trainings for <br />
            <span className="text-primary">national and international brands.</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-30 px-4">
            {["airtel", "wipro", "genpact", "vi", "tata"].map((brand) => (
              <Image
                key={brand}
                src={`/images/${brand}.png`}
                alt={`${brand} logo`}
                width={120}
                height={120}
                className="shadow-md rounded-md"
              />
            ))}
          </div>
        </section>

        {/* Section 4: Genius Team */}
        <section className="bg-white px-6 py-50 flex items-center justify-center">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center justify-center lg:justify-start">
              <h1 className="text-3xl md:text-5xl font-light leading-tight text-black">
                We have a <br />
                genius <span className="font-bold">team</span>
              </h1>
            </div>
            <div className="text-lg text-gray-500 max-w-lg">
              <p>
                Organizations need committed, innovative people to bring value to both the company and its clients — <strong>That’s You.</strong>
              </p>
              <p>
                Our team is driven by the philosophy of elevating online education to its rightful place in the modern world.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Core Team */}
        <section className="bg-white py-5">
          <div className="space max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/core_team_banner.png"
                alt="Core Team Banner"
                width={2000}
                height={500}
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15">
              {(() => {
                const members = [
                  { name: "", role: "Executive Director", img: "" },
                  { name: "", role: "Director Of Training", img: "" },
                  { name: "", role: "Training Lead", img: "" },
                  { name: "", role: "Director - Public Relations", img: "" },
                  { name: "", role: "Training Manager", img: "" },
                  { name: "", role: "Assistant Manager", img: "" },
                  { name: "", role: "English Lead Trainer", img: "" },
                  { name: "", role: "Certified IELTS Specialist", img: "" },
                  { name: "", role: "British Council Certified", img: "" },
                  { name: "", role: "IDP C2 Certified", img: "" },
                  { name: "", role: "Cambridge Assessment C1", img: "" },
                  { name: "", role: "CELTA Certified", img: "" },
                  { name: "", role: "English Language Specialist", img: "" },
                  { name: "", role: "IELTS Specialist", img: "" },
                  { name: "", role: "British Council Certified", img: "" },
                  { name: "", role: "IDP C1 Certified", img: "" },
                ];
                return members.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <Image
                      src={member.img || "/images/default_profile.png"}
                      alt={`Photo of ${member.name || "Team Member"}`}
                      width={128}
                      height={128}
                      className="rounded-full object-cover w-32 h-32 mb-3 border-4 border-blue-500"
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>

        {/* Section 6: Awards and Achievements */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <svg viewBox="0 0 1440 320" className="w-full h-40">
              <path
                fill="#5551f7"
                fillOpacity="1"
                d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center py-10">
            <img
              src="/images/ci logo.png"
              alt="NIL Logo"
              className="w-88 h-38 rounded-full object-contain mb-4"
            />
            <h2 className="text-4xl md:text-5xl text-white font-semibold text-center">
              Awards and <span className="font-bold">Achievements</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mt-6 px-4 pb-12">
            <div className="w-30 h-30 mx-auto overflow-hidden rounded-full">
              <Image
                src="/images/dileep_padgaonkar.jpg"
                alt="Dileep Padgaonkar"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-md italic text-gray-700 mt-4">
              "CI has introduced a fresh and innovative vocational education concept in India — a system that promotes employable skills. Online education is the future, and we need more players like CI."
            </blockquote>
            <p className="text-blue-600 font-bold mt-2">Dileep Padgaonkar</p>
            <Image
              src="/images/times_of_india.png"
              alt="The Times of India"
              width={160}
              height={60}
              className="mx-auto mt-4"
            />
          </div>
        </section>

        {/* Section 7: GENE Award */}
        <section className="py-5 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Image src="/images/trophy.png" alt="Award Trophy" width={120} height={180} className="mx-auto mb-6" />
            <p className="text-lg text-gray-700 mb-2">
              For exceptional innovation in vocational training, GENE awarded NIL the Best Indian Educator Trophy.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              A prestigious honor in the vocational training industry.
            </p>
            <h3 className="text-xl font-bold text-blue-600 mb-5">GENE Award</h3>
            <Image src="/images/gene_award.png" alt="GENE Global Education Innovation Award" width={140} height={80} className="mx-auto" />
          </div>
        </section>

        {/* Section 8: Digital Learning Illustration */}
        <section className="py-10 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Image src="/images/online_students.png" alt="Illustration of online students" width={800} height={500} className="mx-auto" />
          </div>
        </section>

        {/* Section 9: Student Support Channels */}
        <section className="py-10 bg-white text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Student Support Channels
            </h2>
            <Image src="/images/student_support.png" alt="Student Support Illustration" width={800} height={500} className="mx-auto" />
          </div>
        </section>

        {/* Section 10: Contact Options */}
        <section className="bg-white py-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                <p className="text-gray-600">Available 24x7, 365 days a year</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">Call Support</h3>
                <p className="text-gray-600">Mon-Sat, 8:00 AM - 11:00 PM (Indian Time)</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">E-mail Support</h3>
                <p className="text-gray-600">Mon-Sat, 8:00 AM - 11:00 PM (Indian Time)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Our Locations */}
        <section className="bg-gray-100 pt-0 pb-0">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">NIL EDUTECH (P) LIMITED</h3>
                <address className="not-italic text-gray-600">
                  203, 2nd Floor, Ackruti Star, MIDC Central Road,<br />
                  Andheri (East), Mumbai - 400093.
                </address>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">NIL EDUTECH (P) LIMITED</h3>
                <address className="not-italic text-gray-600">
                  #592, 3rd Block, Koramangala, Bengaluru,<br />
                  Karnataka - 560034.
                </address>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">NIL EDUTECH (P) LIMITED</h3>
                <address className="not-italic text-gray-600">
                  Basant Tower, Sneh Nagar, Near Singar Nagar Metro,<br />
                  Lucknow - 226005.
                </address>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}