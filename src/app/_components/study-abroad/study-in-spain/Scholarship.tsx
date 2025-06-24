'use client';
import Image from "next/image";

export default function ScholarshipsInSpain() {
  return (
    <section className="bg-white px-4 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl text-black font-light">
            Scholarships{" "}
            <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
              In Spain
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed">
            Spain scholarships for Indian students usually cover tuition, living, and sometimes travel expenses.
            Offered by the government, universities, and organizations, these scholarships cater to various
            backgrounds and disciplines. Notable options include the Erasmus+ and Fulbright programs, as well as
            Spain's own "Becas" initiatives. Many universities also offer scholarships based on merit or need.
            Prospective students should research and apply for relevant scholarships early to enhance their chances
            of funding their studies in Spain.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/student_graduation.png"
            alt="Scholarship Student"
            width={400}
            height={400}
            className="rounded-3xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
