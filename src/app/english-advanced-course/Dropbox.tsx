
'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

 function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
const right=[
  {
    image:'../../Untitled-design.webp',
    title:'Sunday Webinar',
    discription:'Join our open webinar on Sundays to improve your English ',
    disc:'communication skills and to get in touch with her huge community of students.',
    button:'Register Fee'
  }
]
  const week1 = [
  {
    day: "Day 1",
    topic: "Interaction & Overview of Business English",
    activities: [
      "Introduction Overview",
      "Language Evaluation",
      "Overview of Course"
    ]
  },
  {
    day: "Day 2",
    topic: "Articles",
    activities: ['Definite Articles & Indefinite articles','Examples',
      'Worksheet Practice'
    ]
  },
  {
    day: "Day 3",
    topic: "Elucidation of Verbs -I",
    activities: [
      "Types of verbs",
      "To be forms",
      "Practice through Examples"
    ]
  },
  {
    day: "Day 4",
    topic: " Elucidation of Verbs -II",
    activities: [
      "Verb Forms",
      "Gerund and Participles",
      "Practice through Examples"
    ]
  },
  {
    day: "Day 5",
    topic: "ody Language Module:",
    activities: ['Overview of non-verbal communication',
      "Dress sense & other etiquettes"
    ]
  }
];

const week2= [
  {
    day: "Day 6",
    topic: "Scenario Practice",
    activities: [
      "Use of Where & How",
      "Assessment through Practice",
      
    ]
  },
  {
    day: "Day 7",
    topic: "Modals -I",
    activities: [
      "Use of Can & Could","Difference between Must, May & Might","Difference between Should & Ought to","Worksheet"
    ]
  },
  {
    day: "Day 8",
    topic: "Day 8: Modals -II",
    activities: [
      "Use of Will & Shall",
      "Explanation of Modals in Past",
      
    ]
  },
  {
    day: "Day 9",
    topic: "Modal -III",
    activities: [
      "Use of Modals with Examples",
      "Scenario based practice",
      
    ]
  },
  {
    day: "Day 10",
    topic: "Voice & Accent Module:",
    activities: ['Understanding Pitch & Pace','Explaining Intonation.','Voice Modulation.','Pronunciations']
  }
];
const week3 = [
  {
    day: "Day 11",
    topic: " Scenario Practice",
    activities: [
      "Use of Where & How",
      "Assessment through Practice",
      
    ]
  },
  {
    day: "Day 12",
    topic: "Modals -I",
    activities: ['Use of Can & Could','Difference between Must, May & Might','Difference between Should & Ought to','Worksheet']
  },
  {
    day: "Day 13",
    topic: " Modals -II",
    activities: [
      "Use of Will & Shall",
      "Explanation of Modals in Past",
      
    ]
  },
  {
    day: "Day 14",
    topic: "DModal -III",
    activities: [
      "Use of Modals with Examples",
      "Scenario based practice",
      
    ]
  },
  {
    day: "Day 15",
    topic: "Voice & Accent Module:",
    activities: ["Understanding Pitch & Pace","Explaining Intonation.","Voice Modulation","Pronunciations"

    ]
  }
];
const week4= [
  {
    day: "Day 16",
    topic: "Overview of Indefinite Tense:",
    activities: [
      
      "Present",
      "Past","Future","Worksheet Practice"
    ]
  },
  {
    day: "Day 17",
    topic: "Overview of Continuous Tense:",
    activities: [
      "Formation of Indefinite tense in:","Present",
      "Past","Future","Worksheet Practice"
    ]
  },
  {
    day: "Day 18",
    topic: " Overview of Perfect Tense:",
    activities: [
      "Formation of Indefinite tense in:","Present",
      "Past","Future","Worksheet Practice"
    ]
  },
  {
    day: "Day 19",
    topic: "verview of Perfect Continuous Tense:",
    activities: [
      "Formation of Indefinite tense in:","Present",
      "Past","Future","Worksheet Practice"
    ]
  },
  {
    day: "Day 20",
    topic: "Brain Storming Activity",
    activities: ["Verbal","Written"]
  }
];
const week5 = [
  {
    day: "Day 21",
    topic: "Conditional Sentences:",
    activities: [
      "Overview",
      "Types of conditional sentences",
      "Use of types with examples",
      "Worksheet practice"
    ]
  },
  {
    day: "Day 22",
    topic: "Assessment through Practice",
    activities: []
  },
  {
    day: "Day 23",
    topic: "Dinning Etiquette:",
    activities: [
      "Elaborating Table manners",
      "Meal etiquette",
      "Order manners"
    ]
  },
  {
    day: "Day 24",
    topic: "Use of “used to” and “would”:",
    activities: [
      "Elaboration & Examples",
      "Worksheet",
      
    ]
  },
  {
    day: "Day 25",
    topic: " Group Discussion Presentation:",
    activities: ["Tips to be followed","Scenario based practice"]
  }
];
const week6= [
  {
    day: "Day 26",
    topic: "Interaction & Overview of Business English",
    activities: [
      "Introduction Overview",
      "Language Evaluation",
      "Overview of Course"
    ]
  },
  {
    day: "Day 27",
    topic: "Elucidation of Passive Voice -I:",
    activities: ["Overview of Present tense","Example practices"]
  },
  {
    day: "Day 28",
    topic: "Elucidation of Passive Voice -III:",
    activities: [
      "Overview of Present tense","Example practices"
    ]
  },
  {
    day: "Day 29",
    topic: "Modal verbs Passive Voice -I:",
    activities: [
      "Overview of Present tense","Example practices"
    ]
  },
  {
    day: "Day 30",
    topic: " Modal verbs Passive Voice -II:",
    activities: ["Use of Should Passive voice",'Use of “is going to” Passive voice',"Examples Practice"]
  }
];
const week7 = [
  {
    day: "Day 31",
    topic: " Assessment through Practices",
    activities: [
     
    ]
  },
  {
    day: "Day 32",
    topic: "Business Etiquette Module:",
    activities: ["Workplace Etiquette","Cubicle Etiquette Practices"]
  },
  {
    day: "Day 33",
    topic: "DDos & Don’ts in Business",
    activities: [
      "Social dealing",
      "Business & Client Meeting Etiquette",
      
    ]
  },
  {
    day: "Day 34",
    topic: "Contrasting Ideas (though, although……)",
    activities: [
      
    ]
  },
  {
    day: "Day 35",
    topic: " Dialogue Delivery:",
    activities: ['Method of Delivery','Practices']
  }
];
const week8 = [
  {
    day: "Day 36",
    topic: "Explanation of Causative verb -I:",
    activities: [
      "When to use",
      "Rules to use Get & Have",
      "Practice through Examples","Worksheet"
    ]
  },
  {
    day: "Day 37",
    topic: "Explanation of Causative verb -II:",
    activities: ["When to use",
      "Rules to use Get & Have",
      "Practice through Examples","Worksheet"]
  },
  {
    day: "Day 38",
    topic: "Discussion on Wh- Family:",
    activities: [
      "Question words",
      "Question tags",
      "Worksheet Practice"
    ]
  },
  {
    day: "Day 39",
    topic: "Role Plays:",
    activities: [
      "Scenario based practice"
    ]
  },
  {
    day: "Day 40",
    topic: "Business Writing Skills",
    activities: ["Essentials of effective Communication",
      "Email Drafting",
      "Different email formats to analyze"
      ,"Structure to Form Business Reports",
      "Proofread"]
  }
];
const week9 = [
  {
    day: "Day 41",
    topic: "Briefing Business Memo & Business Letters:",
    activities: [
      "How to write an effective business memo",
      "Tips for Writing an Effective Business Memo",
      "Types of Business letters"
      ,"Parts of a Business Letter",
      "Proofread"
    ]
  },
  {
    day: "Day 42",
    topic: "Written Assessment Based on:",
    activities: ["Email Drafting",
"Business Reports",
"Business Memo",
"Business Letter"]
  },
  {
    day: "Day 43",
    topic: "Debates Practices:",
    activities: [
      "Tips for Debates",
"Debates in 2 candidates",
"Debates in Teams (Groups)"
    ]
  },
  {
    day: "Day 44",
    topic: "Ellipsis (Exceptional Sentences)",
    activities: [
      "Overview",
"Types of Ellipsis",
"Ellipsis in sentences",
    ]
  },
  {
    day: "Day 45",
    topic: "Assessment through Practice",
    activities: ["Verbal practice",
"Written practice"]
  }
];
const week10 = [
  {
    day: "Day 46",
    topic: " Picture Narration:",
    activities: [
      "Picture to story",
"Practice"
    ]
  },
  {
    day: "Day 47",
    topic: " Telephonic Etiquette Module:",
    activities: ["Manners of using telephone communications",
"Enhance Listening skills",
"Importance"]
  },
  {
    day: "Day 48",
    topic: "Assessment & Evaluation:",
    activities: [
      "Scenarios to attend call",
"Mock calls",
"Feedback"
    ]
  },
  {
    day: "Day 49",
    topic: "Complex and Compound sentences:",
    activities: [
      "Formation of sentences",
"Practice with scenarios"
    ]
  },
  {
    day: "Day 50",
    topic: "Assessment Evaluation:",
    activities: ["Verbal Practice",
"Written Practice"]
  }
];
const week11= [
  {
    day: "Day 51",
    topic: "Professional introduction:",
    activities: [
      "Tips for Introduction","Scenario practices"

    ]
  },
  {
    day: "Day 52",
    topic: "Interview Preparation:",
    activities: ["Types of Interviews",
"Tips to Prepare",
"Professional Interview Etiquettes",
"Resume Preparation",
"Commonly Asked Interview Questions"]
  },
  {
    day: "Day 53",
    topic: "Assessment through Practices:",
    activities: [
      "Mock Interviews",
     
    ]
  },
  {
    day: "Day 54",
    topic: "Hosting/Anchoring:",
    activities: [
      "Tips to Anchoring & Hosting",
"Scenario based Practices ",
    
    ]
  },
  {
    day: "Day 55",
    topic: "Minute to Speak",
    activities: []
  }
];
const week12= [
  {
    day: "Day 56",
    topic: "Presentation Skills",
    activities: [
"What is Presentation Skill?",
"Essentials of Presentation skills",
"Effective presentation skills"
    ]
  },
  {
    day: "Day 57",
    topic: " Delivering Presentation before client",
    activities: ["Work on self-confidence.",
"Develop strategies for overcoming fear.",
"Tips to help you ace your presentation"]
  },
  {
    day: "Day 58",
    topic: "Presentation Skill Evaluation",
    activities: [
      "Scenario based practice",
"Feedback"
    ]
  },
  {
    day: "Day 59",
    topic: "Evaluation on Grammatical Errors Correction -I",
    activities: []
  },
  {
    day: "Day 60",
    topic: "Evaluation on Grammatical Errors Correction -II",
    activities: []
  }
];
const week13 = [
  {
    day: "Day 61",
    topic: " Extra Session",
    activities: [
      
    ]
  },
  {
    day: "Day 62",
    topic: "Extra Session",
    activities: [

      ]
  },
  {
    day: "Day 63",
    topic: " Assessment- 1",
    activities: [
      "Mock Interviews",
      
    ]
  },
  {
    day: "Day 64",
    topic: " Assessment- 2",
    activities: [
      
    ]
  },
  {
    day: "Day 65",
    topic: " Assessment- 3",
    activities: []
  }
];
const week14 = [
  {
    day: "Day 61",
    topic: " Extra Session",
    activities: [
      
    ]
  },
  {
    day: "Day 62",
    topic: "Extra Session",
    activities: []
  },
  {
    day: "Day 63",
    topic: " Assessment- 1",
    activities: [
      
    ]
  },
  {
    day: "Day 64",
    topic: "Assessment- 2",
    activities: [
      
    ]
  },
  {
    day: "Day 65",
    topic: "Assessment-3",
    activities: []
  }
];
const Final = [
  {
    day: "Day 66",
    topic: "Wind Up Sessions with Conversational Activities only along with written & verbal assessment to have the grade on the certificate.",
    activities: []
  }
];
const weeks={
  "Week-1":week1,
  "Week-2":week2,
  "Week-3":week3,
  "Week-4":week4,
  "Week-5":week5,
  "Week-6":week6,
  "Week-7":week7,
  "Week-8":week8,
  "Week-9":week9,
  "Week-10":week10,
  "Week-11":week11,
  "Week-12":week12,
  "Week-13":week13,
  "Week-14":week14,
  "Final Day":Final

}


  const [activeWeek, setActiveWeek] = useState<string | null>(null);


  const toggleWeek = (weekName: string) => {
  setActiveWeek(prev => (prev === weekName ? null : weekName));
};

  



  return (
    <section id="curriculum" className="w-full px-2 sm:px-6 md:py-8 mb-4 lg:py-15 flex flex-col justify-center">
  <h1 className="ml-4 sm:ml-20 md:ml-48 m-2 sm:m-5 lg:text-4xl  lg:ml-32 sm:text-xl">Curriculum to be covered</h1>

  <div className="flex flex-col lg:flex-row gap-4 justify-center ">
    <div className="flex flex-col gap-1.5 w-full lg:w-[50rem] ">
      <div>
        <div className="w-full px-2 sm:px-4">
          {
            Object.entries(weeks).map(([weekName, weekData], index) => (
              <div key={index} className="pb-2">
                <div
                  onClick={() => toggleWeek(weekName)}
                  className="cursor-pointer flex items-center justify-between px-4 py-2 rounded text-sm font-semibold "
                >
                  {weekName}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${activeWeek === weekName ? 'rotate-180' : ''}`}
                  />
                </div>
                {activeWeek === weekName && (
                  <div className="mt-2 pl-4 border-blue-300 border-5  p-3">
                    {
                      weekData.map((item, i) => (
                        <div key={i} className="mb-3">
                          <h3 className="font-semibold">{item.day}: {item.topic}</h3>
                          <ul className="list-disc pl-5 text-sm text-gray-700">
                            {item.activities.map((activity, j) => (
                              <li key={j}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <div className="flex justify-center px-2">
      <div className="bg-white shadow-xl w-full sm:w-[25rem] h-auto sm:h-[40rem] lg:-mt-30">
        {
          right.map((items, index) => (
            <div key={index}>
              {items.image && (
                <img src='../../Untitled-design.webp' alt='Image' className="w-full h-auto sm:h-90 object-cover" />
              )}
              <div className="w-full sm:w-[23rem] mt-2 p-4 sm:p-8">
                <h1 className="text-xl sm:text-2xl">{items.title}</h1>
                <p className="text-sm sm:text-base">{items.discription}</p>
                <p className="text-sm sm:text-base">{items.disc}</p>
              </div>
              <div>
                <a href="/english-business-course/free-webinar" className="text-gray-600 border-2 border-gray-700 w-fit px-4 py-1 block mx-auto  mb-6 text-center">{items.button}</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
</section>
  );
}

export default Curriculum;



