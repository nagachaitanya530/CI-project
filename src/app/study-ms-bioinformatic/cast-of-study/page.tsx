"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";

export default function Page() {
  return (
    <>
      <NavigationSection />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="text-6xl md:text-5xl mb-12">
            Cost of Studying in Australia for Indian Students
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/Cost-of-Studying-in-Australia-for-Indian-Students.jpg"
              alt="Cost-of-Studying"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-2 py-2 space-y-10 text-lg leading-relaxed text-gray-1500">
          <p>
            Australia is one of the most popular destinations for international
            students, offering a high standard of education, a diverse cultural
            experience, beautiful natural environment and a diverse wildlife
            which includes the iconic kangaroo 🦘. Before making the leap to
            entering the student life in the country, it's important to
            understand the cost of studying in Australia for international
            students. In this blog post, we’ll cover everything from university
            fees to living expenses and available scholarships to help you plan
            your study abroad journey.
          </p>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Top Universities in Australia
          </h2>
          <p className="text-lg mb-10">
            Australia is home to some of the{" "}
            <span className="font-bold">world’s top universities,</span>
            known for their academic excellence and recognition in any part of
            the world. Here are a few of the top universities that stand out:
          </p>
          <ol className="space-y-4 list-decimal text-lg mt-10">
            <li>
              University of Melbourne – Ranked #13 in the world (QS World
              Ranking), it is renowned for its research programs and diverse
              student body.
            </li>
            <li>
              Australian National University (ANU) – Located in Canberra, ANU
              offers a strong emphasis on research and is known for its
              experienced training faculty.
            </li>
            <li>
              University of Sydney – One of the oldest and most prestigious
              universities in Australia, offering a wide range of programs in
              arts, science, engineering, and more.
            </li>
            <li>
              University of Queensland (UQ) – Known for its strong emphasis on
              research, UQ ranks highly in fields like health sciences,
              engineering, and business.
            </li>
            <li>
              University of New South Wales (UNSW) – Offers a variety of degree
              programs and has a strong reputation for its engineering,
              architecture, and business schools.
            </li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-green-800">
            Australia University Fees: What You Need to Know
          </h2>
          <p className="text-lg mb-10">
            The cost of tuition can vary depending on the university and the
            program you choose to study in Australia. Here is a complete
            breakdown of Australia university fees for international students{" "}
            <em>(per year)</em>:
          </p>
          <ul className="list-disc space-y-2 text-lg mb-10">
            <li>Undergraduate Programs: AUD 20,000 to AUD 45,000.</li>
            <li>Postgraduate Programs: AUD 22,000 to AUD 50,000.</li>
          </ul>
          <h3 className="text-2xl mb-4">Program-Specific Fees</h3>
          <ul className="list-disc space-y-2 text-lg mb-10">
            <li>Humanities and Social Sciences: AUD 20,000 to AUD 30,000</li>
            <li>Engineering and Computer Science: AUD 25,000 to AUD 45,000</li>
            <li>Business and Law: AUD 20,000 to AUD 45,000</li>
            <li>Health and Medicine: AUD 30,000 to AUD 50,000</li>
          </ul>
          <p className="text-lg mb-8">
            In addition to tuition fees, students may also have to pay
            additional costs such as:
          </p>
          <ul className="list-disc space-y-2 text-lg">
            <li>Student services and amenities fees</li>
            <li>
              Health insurance fees (Overseas Student Health Cover – OSHC)
            </li>
            <li>Library and lab fees (if applicable)</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-purple-800">
            Scholarships in Australia for International Students
          </h2>
          <p className="text-lg mb-10">
            The cost of studying in Australia can be significantly offset with
            numerous scholarships available for international students to help
            ease the financial burden. Some of the prominent scholarships
            include:
          </p>
          <ol className="list-decimal space-y-4 text-lg mb-8">
            <li>
              Australia Awards Scholarships – Fully funded scholarships provided
              by the Australian government for students from developing
              countries.
            </li>
            <li>
              Endeavour Postgraduate Scholarships – For international students
              undertaking postgraduate programs in Australia.
            </li>
            <li>
              University-Specific Scholarships – Many universities offer
              scholarships for international students, including merit-based and
              need-based scholarships which vary from institution to
              institution.
            </li>
            <li>
              Research Training Program (RTP) Scholarships – For international
              students undertaking research-based programs at Australian
              universities.
            </li>
          </ol>
          <p className="text-lg">
            In addition to this, private organizations and governments may offer
            scholarships to students pursuing particular fields of study or
            demonstrating excellence in academics.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-orange-800">
            Cost of Living in Australia for International Students
          </h2>
          <p className="text-lg mb-10">
            On average, living cost in Australia for international students can
            be expected to range between AUD 20,000 and AUD 27,000 per year.
            Here's a complete breakdown of typical living expenses:
          </p>
          <ol className="list-decimal space-y-6 text-lg mb-10">
            <li>
              Accommodation: Rent varies significantly
              depending on location and type of accommodation:
              <ul className=" mt-2 space-y-2">
                <li>Shared accommodation: AUD 90–AUD 200 per week</li>
                <li>
                  University-managed accommodation: AUD 360–AUD 1,170 per month
                </li>
                <li>
                  Private rental (house/apartment): AUD 1,460–1,760 per month
                </li>
              </ul>
            </li>
            <li>
              Food: Groceries and dining out typically cost between AUD 80 and
              AUD 200 per week.
            </li>
            <li>
              Transport: Students can usually expect to pay around AUD 30–AUD 70
              per week for a transportation pass.
            </li>
            <li>
              Utilities and Other Expenses: Utilities (electricity, water,
              internet) may cost around AUD 20–AUD 50 per week, depending on
              your type of accommodation.
            </li>
          </ol>
          <p className="text-lg mt-8">
            Other costs include personal expenses such as entertainment,
            clothing, mobile phone plans, and study materials. This can vary
            greatly based on the individual’s personal spending habits.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-teal-800">
            Conclusion
          </h2>
          <p className="text-lg mb-10">
            Studying in Australia is an exciting and rewarding experience, but
            it comes with significant costs. By planning ahead, researching
            scholarship opportunities, and managing living expenses,
            international students can make their study dreams a reality in the
            Land Down Under. Just remember to consider both tuition fees and
            living costs as part of your overall budget when applying. With the
            right strategies in place, students will be able to thrive both
            academically and financially in Australia!
          </p>
          <img
            src="/images/australia-student.jpg"
            alt="International students in Australia"
            className=" rounded-lg shadow-lg mt-20"
          />
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-indigo-800">FAQs</h2>
          <div className="space-y-10 text-lg">
            <div>
              <h3 className="font-semibold mb-10">
                What is the Australia tuition fees for international students?
              </h3>
              <p>
                Tuition fees for international students typically range from AUD
                20,000 to AUD 50,000 per year, depending on the program and
                university. Additionally, living expenses can range from AUD
                20,000 to AUD 27,000 per year.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                What is the cost to study a Master’s degree in Australia?
              </h3>
              <p>
                The Australia master's degree fees typically range from AUD
                25,000–55,000 per year for international students, depending on
                the program and university.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                Are there scholarships available for international students in
                Australia?
              </h3>
              <p>
                Yes, there are various scholarships available, including
                government-funded programs like the Australia Awards and
                Endeavour Postgraduate Scholarships, as well as
                university-specific scholarships and research-based funding
                options.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                How much money do I need to live in Australia as an
                international student?
              </h3>
              <p>
                On average, international students spend between AUD 20,000 and
                AUD 27,000 per year on living expenses. This includes the cost
                of accommodation, food, transport, and personal costs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                Can I work while studying in Australia?
              </h3>
              <p>
                Yes, international students in Australia can work up to 40 hours
                per fortnight during the semester and full-time during semester
                breaks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                What is the cheapest university in Australia?
              </h3>
              <p>
                There are some options if the student wants to study at a
                low-cost university in Australia, especially in regional areas.
                Some of the most affordable universities in Australia include
                Charles Darwin University and the University of Southern
                Queensland, which offer affordable tuition rates compared to
                some of the larger institutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                What is the student visa Australia cost for international
                students?
              </h3>
              <p>
                The Australia student visa fee will be approximately AUD 650,
                which comes under student visa (subclass 500) in Australia.
              </p>
            </div>
            <div>
              <p>
                For further assistance or queries, students can contact us,
                Edwise International, and avail our wide range of services for
                destinations like studying in the UK, USA, Canada, Australia,
                New Zealand, Singapore, Ireland, France, Germany, and many other
                countries.
              </p>
            </div>
          </div>
           <div className="flex space-x-6 mt-10">
            <p className="text-lg font-bold">Share Blog via :</p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-pink-500 hover:fill-pink-700 transition"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-blue-600 hover:fill-blue-800 transition"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-blue-400 hover:fill-blue-600 transition"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Services Cards */}
        <section className="max-w-6xl mx-auto px-6 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard
              image="/images/mba-degree-in-australia.png"
              title="MBA Degree in Australia for Indian Students"
              link="/study-ms-bioinformatic/mba-degree"
            />
            <ServiceCard
              image="/images/Cost-of-Studying-in-Australia.png"
              title="Cost of Studying in Australia for Indian Students"
              link="/study-ms-bioinformatic/cast-of-study"
            />
            <ServiceCard
              image="/images/scholarships-to-study-in-australia.png"
              title="Scholarships to Study in Australia for Indian Students"
              link="/study-ms-bioinformatic/scholarships-to-study"
            />
          </div>
        </section>
      </main>
      <YourJourney />
      <FooterSection />
    </>
  );
}
// ServiceCard Component
type ServiceCardProps = {
  image: string;
  title: string;
  link?: string;
};

const ServiceCard = ({ image, title, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-80"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {link ? (
          <Link href={link}>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition">
              Read More
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
