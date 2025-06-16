"use client";

import Footer from "~/app/_components/Footer";
import Navigation from "~/app/_components/Navigation";

import HeroSection from "../_components/english-foundation-course/HeroSection";
import AboutSection from "../_components/english-foundation-course/AboutSection";
import TargetLearners from "../_components/english-foundation-course/TargetLearners";
import SkillsCovered from "../_components/english-foundation-course/SkillsCovered";
import Benefits from "../_components/english-foundation-course/Benefits";
import StickyEnrollBar from "../_components/english-foundation-course/StickyEnrollBar";
import CourseDurationSection from "../_components/english-foundation-course/CourseDurationSection";
import StudentReviewCarousel from "../_components/english-foundation-course/StudentReviewCarousel";
import FAQsSection from "../_components/english-foundation-course/FAQsSection";
import CurriculumSection from "../_components/english-foundation-course/CurriculumSection";
import ScrollSpySidebar from "../_components/english-foundation-course/ScrollSpySidebar";
import Outcome from "../_components/english-foundation-course/Outcome";
import FoundationPlans from "../_components/english-foundation-course/FoundationPlans";

export default function EnglishFoundationCourse() {
  return (
    <>
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>

      <div className="flex relative">
        {/* Sidebar */}
        <div className="hidden lg:block w-48 sticky top-20 h-screen">
          <ScrollSpySidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 px-4 md:px-8 lg:pl-10 space-y-24 scroll-smooth">
          <section id="about" className="scroll-mt-36">
            <AboutSection />
          </section>

          <section id="target-learners" className="scroll-mt-36">
            <TargetLearners />
          </section>

          <section id="curriculum" className="scroll-mt-36">
            <CurriculumSection />
          </section>

          <section id="outcome" className="scroll-mt-36">
            <Outcome />
          </section>

          <section id="skills" className="scroll-mt-36">
            <SkillsCovered />
          </section>

          <section id="benefits" className="scroll-mt-36">
            <Benefits />
          </section>

          <section id="methodology" className="scroll-mt-36">
            <CourseDurationSection />
          </section>

          <section id="reviews" className="scroll-mt-36">
            <StudentReviewCarousel />
          </section>

          <section id="enrollment" className="scroll-mt-36 pt-10">
            <FoundationPlans />
          </section>

          <section id="faqs" className="scroll-mt-36">
            <FAQsSection />
          </section>

          <StickyEnrollBar />
        </main>
      </div>

      <Footer />
    </>
  );
}
