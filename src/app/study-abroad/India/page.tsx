import Navigation from "~/app/_components/study-abroad/navigation";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";

const IndiaFAQs = [
  {
    question: "Is it expensive to study in India?",
    answer: "The cost of studying in India is much lower than most of the countries in the world. This allows the student to pursue a world class education at a relatively cheaper price."
  },
  {
    question: "Is it easy to get a visa to study in India?",
    answer: "The Government of India has made it easier for International students to obtain a visa to study in India and the process is generally straightforward."
  },
  {
    question: "What is the accommodation like for students in India?",
    answer: "Most universities and colleges in India have on-campus accommodations referred to as hostels. Students may also live off-campus if required."
  },
  {
    question: "Can I work while studying in India?",
    answer: "Students are only allowed to work or earn as part of the education program. Working full time or part-time in other capacities is not allowed."
  },
  {
    question: "Should I learn Hindi to study in India?",
    answer: "Almost all courses of higher education are taught in English making India an attractive study destination for international students."
  },
  
];

export default function India() {
    return (
        <>
        <Navigation />
        <FAQ faqs={IndiaFAQs} title="FAQs" />
        <YourJourney />

        </>
    )

}