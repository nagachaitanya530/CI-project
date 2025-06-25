'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavigationSection from '../_components/navigation1';
import FooterSection from '../_components/footer1';
import SpainHero from '../_components/study-abroad/study-in-spain/SpainHero';
import ConsultationFormModal from '~/app/_components/study-abroad/study-in-spain/ConsultationForm';

export default function StudentServicesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-gradient-to-r from-white via-pink-50 to-green-50 min-h-screen">
      <ConsultationFormModal show={showModal} onClose={() => setShowModal(false)} />

      <NavigationSection />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Student{' '}
            <span className="relative inline-block">
              <span className="text-black font-extrabold">Services</span>
              <span className="absolute left-0 bottom-1 w-full h-1 bg-red-500 rounded-md"></span>
            </span>
            <br />
            Offered
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Image
            src="/images/student.png"
            alt="Student"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            image="/images/admission.png"
            title="Admission Guidance"
            description="Admission guidance from our expert counselors, tailored for your academic aspirations and career goals."
            link="/student-service/admission-guidance"
          />
          <ServiceCard
            image="/images/career.png"
            title="Career Counseling"
            description="Our experienced advisors will help chart your career path in alignment with the international job market."
            link="/student-service/career-counseling"
          />
          <ServiceCard
            image="/images/testprep.png"
            title="Test Preparation"
            description="Comprehensive training programs for tests like IELTS, TOEFL, SAT, GRE, GMAT etc."
            link="/student-service/test-preparation"
          />
          <ServiceCard
            image="/images/visaa.png"
            title="Visa Application Assistance"
            description="Meticulous preparation of visa documents and expert guidance on country-specific requirements."
            link="/student-service/visa-assistance"
          />
          <ServiceCard
            image="/images/financial.png"
            title="Financial Assistance"
            description="Tailor-made financial planning services to assist with scholarships, loans, and budget management."
            link="/student-service/financial-assistance"
          />
          <ServiceCard
            image="/images/travel.png"
            title="Travel & Forex Assistance"
            description="Complete travel planning services and convenient Forex solutions to facilitate your smooth transition."
            link="/student-service/travel-forex-assistance"
          />
        </div>
      </section>

      {/* Additional Section */}
      <SpainHero />

      <FooterSection />
    </main>
  );
}

// ServiceCard Component
type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

const ServiceCard = ({ image, title, description, link }: ServiceCardProps) => {
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
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-black-600 mb-4">{description}</p>
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
