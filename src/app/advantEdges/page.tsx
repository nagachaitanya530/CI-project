'use client';

import React from 'react';
import Navigation from '../_components/Navigation';
import Footer from '../_components/Footer';
import HeroSection from '../_components/advantEdges/HeroSection';
import TestimonialScroller from '../_components/advantEdges/TestimoninalScroller';
import WhyLearnEnglishSection from '../_components/advantEdges/whyLearnEnglish';
import CoursePlans from '../_components/advantEdges/Courses';
import NILFamilySection from '../_components/advantEdges/Nilfamily';
import NILAdvantage from '../_components/advantEdges/Niladvantage';
import InstituteInfo from '../_components/advantEdges/InstituteInfo';
import BookingSystem from '../_components/book-demo';
import EnglishBenefits from '../_components/advantEdges/EnglishBenifits';
import WhyChooseNILSection from '../_components/advantEdges/WhyNil';
import FadeInOnScroll from '../study-abroad/study-mauritius/FadeInOnScroll';

const heroContent = {
  heading: "Learn How To Speak English With",
  highlight: "Clarity & Confidence",
  badge: "Best Online Spoken English Course",
  description:
    "National Institute of Language’s Online Spoken English course is one of the best online course in the industry and includes personality development modules to cover all aspect of communication skills.",
  courseLink: "#",
  features: [
    "Multiple Course Levels",
    "Flexible Class Timings",
    "International CEFR Standards"
  ],
  demoButton: "BOOK FREE DEMO",
  users: [
    "/successstory5.avif",
    "/successstory6.avif",
    "/successstory7.avif"
  ],
  logoImages: [
    "/logos/ey.png",
    "/logos/mercedes.png",
    "/logos/microsoft.png",
    "/logos/qualcomm.png"
  ],
  studentCount: "90K+ Students",
  rating: "4.9",
  reviewCount: "25K+ reviews (4.9 of 5.0)",
  painHeading: "Do you struggle with",
  painSubheading: "expressing yourself confidently?",
  pains: [
    "You can't make proper sentences",
    "You want to perform well in interviews",
    "Your vocabulary is very limited"
  ],
  heroImage: "/hero.png"
};

const Page = () => {
  return (
    <>
      <Navigation />
      <HeroSection data={heroContent} />

      <FadeInOnScroll>
        <TestimonialScroller />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <WhyLearnEnglishSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <CoursePlans />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <WhyChooseNILSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <NILFamilySection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <NILAdvantage />
      </FadeInOnScroll>

      <FadeInOnScroll>
<InstituteInfo
  sections={[
    {
      title: "",
      image: "/advertEdge1.jpg",
      description: [
        "NIL-National Institute of Language provides its classes through the most advanced ",
        { text: "online portal", url: "#" },
        " developed just for Online Education, which can run on any laptop, desktop, tablet or mobile phone without downloading anything. You can talk with the trainer and other students also on video just like a regular physical classroom but better, because the trainer can show videos, presentations and even run quizzes to facilitate best learning possible.",
      ],
    },
    {
      title: "",
      image: "/advantEdge2.jpg",
      description: [
        "NIL is the only Institute, which provides  you dual certified trainers both from British Council and Cambridge. We have the best pool of trainers across the world ready to take every challenge in the industry. Not only they are certified from the most authentic and trusted organisations in the world, but also they hold vast experience of training. All NIL trainers have at least 8 years of experience, so when we say we are the best, we mean it.  ",
        { text: "", url: "#" },
        " and ",
       
      ],
    },
    {
      title: "",
      image: "/advantEdge3.jpg",
      description: [
        "NIL – National Institute of Language is an official partner with both British Council and IDP who conduct the most valued and popular English Test in the world",
        { text: "IELTS (International English Language Testing System)", url: "#" },
        " . NIL also has ties with more than 2000 international colleges and universities to help students get admission in international universities for advanced studies.",
      ],
    },

        {
      title: "",
      image: "/advantEdge4.jpg",
      description: [
        "ISO 9001 is defined as the international standard that specifies requirements for a",
        { text: "quality management system (QMS)", url: "#" },
        " Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements. It is the most popular standard in the ",
        { text: " ISO 9000 series", url: "#" },

        " and the only standard in the series to which organizations can certify.",
   
      ],
    },

            {
      title: "",
      image: "/advantEdge5.jpg",
      description: [
       
        { text: "NIL-National Institute of Language", url: "#" },
        " goes the extra mile to help the students whenever they are in need. We make sure we solve every query, doubt or complain to the best of our abilities. Being a student of NIL means being a part of a family that listens to its members and works upon improving the realationships.",
     
   
      ],
    },
  ]}
/>

      </FadeInOnScroll>

      <FadeInOnScroll>
        <BookingSystem />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <EnglishBenefits
          heading="Best Online Spoken English Coaching Classes & Course In India With Certificate"
          benefits={[
            {
              title: 'English Makes Your Life More Pleasurable.',
              description:
                'English opens an entire world of entertainment for you. You won’t need to be dependent on translation and you can love the realistic patterns. Proficient in English means one enjoys the whole blocks of entertainment, there is no barrier of language so one is free to connect Bollywood as well as Hollywood theatre. As in modern age, our lives revolve around the social media and the most of the content shaped on the internet is in English. So knowing English will permit you to access towards innumerable of information which may not be otherwise possible.',
            },
            {
              title: 'English is the easiest and interesting language.',
              description:
                'Indeed, Learning English is a piece of cake. Belonging to one particular country or state, you would definitely have language barrier but English enables you to be versatile. You can exchange feelings with innumerable of people as it’s hard to learn all regional languages so it is better to learn a language which is spoken across the world.',
            },
            {
              title: 'English is a Business Language.',
              description:
                'It doesn’t matter whether you live in an English-speaking country or any other non-English speaking country. Poor grammar and a slim vocabulary can truly damage your influence with customers who all are proficient in it, and if you plan to take your business overseas, you’re as expected to require good English as you need it personally. This is why mostly all the business studies are done in English language so that you can start grabbing it from A to Z.',
            },
            {
              title: 'English is Important in all the phase of life.',
              description:
                'We all have grown up by hearing this, how important English is to survive. In this modern age as it is crystal clear that there is no place which has not been influenced by English whether we throw a light on professional life or as well as personal life. English polishes our personality and makes us able to be fulfil our goals. If you have to crack an interview or your goal is to achieve good marks in your academics and also if you want to be famous in the society and so on, you must be good in English. Need not to worry NIL, National Institute of language is always there to assist you from the grass root level to advance level.',
            },
          ]}
        />
      </FadeInOnScroll>

      <Footer />
    </>
  );
};

export default Page;
