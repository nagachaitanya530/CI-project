// src/app/study-abroad/scholarship/page.tsx

import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import ScholarHeroSection from "~/app/_components/study-abroad/scholarship/HeroSection";
import ScrollCardAnimation2 from "~/app/_components/study-abroad/scholarship/scholarshipToStudy";
import ScholarshipScrollCards from "~/app/_components/study-abroad/scholarship/TypesOfScholarship";
import ScholarshipApplyForm from "~/app/_components/study-abroad/scholarship/scholarshipApply";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";

const scholarshipFaqs = [
  {
    question: "What are the best scholarships available for studying abroad?",
    answer:
      "The best scholarships include Merit‑Based scholarships for academic/athletic achievers, Student‑Specific awards, Need‑Based programs, and Career/Program‑Based scholarships.",
  },
  {
    question: "How can I apply for scholarships to study abroad as an international student?",
    answer:
      "Check university applications or separate scholarship portals, apply early, and consult counselors for research-based Indian student opportunities.",
  },
  {
    question: "How do I find scholarships for international students to study abroad?",
    answer:
      "Explore programs like the National Overseas Scholarship Scheme and Commonwealth Scholarship, and consult official channels or counselors.",
  },
  {
    question: "What are the eligibility criteria for study abroad scholarships?",
    answer:
      "Common criteria include academic performance, financial need, extracurriculars, and certain nationality or study level requirements.",
  },
  {
    question: "Can I get a full scholarship to study abroad?",
    answer:
      "Yes — full scholarships covering tuition, living, and other expenses are available depending on the program and eligibility.",
  },
  {
    question: "What are the top countries offering scholarships to study abroad?",
    answer:
      "The USA, UK, Australia, Canada, Germany, and New Zealand offer multiple scholarship opportunities for Indian students.",
  },
  {
    question: "What documents are required for a scholarship application abroad?",
    answer:
      "Typical documents include transcripts, test scores (IELTS, TOEFL, SAT, etc.), SOP, recommendation letters, passport copy, and financial proof. Check each scholarship’s specific requirements.",
  },
  {
    question: "Are there scholarships specifically for Indian students to study abroad?",
    answer:
      "Yes, examples include Chevening, Commonwealth, Fulbright‑Nehru, and other government/institution-backed offerings.",
  },
  {
    question: "Can I apply for multiple scholarships to study abroad?",
    answer:
      "Yes, you can apply for multiple scholarships if you meet eligibility; just ensure criteria do not conflict.",
  },
  {
    question: "How can I apply for government-funded scholarships?",
    answer:
      "Visit official portals (e.g., Ministry of External Affairs) and study counselor sites for National Overseas Scholarship Scheme eligibility and deadlines.",
  },
];

export default function ScholarshipPage() {
  return (
    <div>
      <NavigationSection />

      <ScholarHeroSection />

      <ScrollCardAnimation2 />

      <ScholarshipScrollCards />

      <ScholarshipApplyForm />

      <FAQ faqs={scholarshipFaqs} />

      <YourJourney />

      <FooterSection />
    </div>
  );
}
