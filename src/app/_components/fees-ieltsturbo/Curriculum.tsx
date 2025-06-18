'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const curriculumData = [
    {
      week: "Overview",
      description: (
           <div>
          <ul className="list-disc pl-10 my-5">
            <li>22 Hours of Live Sessions.</li>
            <li>22 Hours of Audited Practice Sessions</li>
            <li>5 Full Length Mock Tests</li>
            <li>60+ Practice Tests</li>
          </ul>
        </div>
      ),
    },
   {
      week: "Grammar - Conditional sentences",
      description: (
        <div>
          <p>Conditional sentences are those sentences which have two different classes dependent on each other to make a proper sense, it is important to include these sentences to provide variety in the sentence structures.</p>
         
        </div>
      ),
    },
    {
      week: "Grammar - Usage of Modals",
      description: (
        <div>
          <p>Correct usage of modal verb is important to make grammatically accurate sentences. They include should, would, can, could, might, may, should have, could have, would have etc.</p>
          
        </div>
      ),
    },
    {
      week: "IELTS Parameters",
      description: (
        <div>
          <p>Understanding of IELTS parameters is very important in order to attain a good score. Under this section, you will be given detailed information about all the parameters and how to work on those parameters.</p>
         
        </div>
      ),
    },
    {
      week: "IELTS Writing Structures",
      description: (
        <div>
          <p>IELTS writing requires deep understanding of the structures of essays, reports and letter writing in accordance with the set parameters. </p>
        
        </div>
      ),
    },
    {
      week: "Report/Letter Writing",
      description: (
        <div>
          <p>As the first task of IELTS writing, either report or a letter is asked to be written (depending on general and academic variants) on the given points or data.</p>
          
        </div>
      ),
    },
    {
      week: "Agree/Disagree Essays",
      description: (
        <div>
          <p>Sample Question Some people believe that unpaid community service should be compulsory in high school programs (for example, working for a charity, improving the neighbourhood or teaching sports to younger children).</p>
          </div>
      ),
    },
    {
      week: "Problem and Solutions Essay",
      description: (
        <div>
          <p>Sample Question Students are becoming more and more reliant on technology.
          <br />
          What are some of the problems associated with reliance on computers, and what are some of the possible solutions?</p>
        </div>
      ),
    },
    {
      week: "Advantages/Disadvantages Type Essay",
      description: (
        <div>
          <p>Sample Question Technology is being used more and more in education. Discuss the advantages and disadvantages.</p>
         
        </div>
      ),
    },
    {
      week: "Discussion Type Essay",
      description: (
        <div>
          <p>Sample Question<br />

          Technology is being used more and more in education. Some people say that this is a positive trend, while others argue that it is leading to negative consequences.<br />
         
         

Discuss both sides of this argument and then give your own opinion.</p>
         </div>
      ),
    },{
  week: "Two-Part Question Type",
  description: (
    <div>
      <p>Sample Question As most people spend a major part of their adult life at work, job satisfaction is an important element of individual well-being.<br />

What factor contributes to job satisfaction?<br />

How realistic is the expectation of job satisfaction for all workers?</p>
      
    </div>
  ),
},{
  week: "IELTS Reading Parameters",
  description: (
    <div>
      <p>Understanding the reading section scoring parameters and the structure of the test.</p>
      </div>
  ),
},{
  week: "IELTS Reading Question Types - Expand to see",
  description: (
    <div>
      <p>Note: All types of questions are not intended for IELTS General and Academic</p>
      <p>1. Multiple choice questions</p>
      <p>These are types of questions that requires you to pick the correct answer from the given choices which are in capital letters of ABC and D. This type of questions tests your ability to understand detailed and specific information.</p>
      <p>2. Information identification questions</p>
      <p>These are types of questions that requires you to identify whether the given information is either true false or it’s not given. This type of question tests your ability to clearly understand what the text is talking about.</p>
      <p>3. Information matching</p>
      <p>These types of questions requires you to find a specific information and placing them where they fit to be. You need to have clearly understood the text and be able to understand every paragraph and what information it contains.</p>
      <p>4. Headline Matching</p>
      <p>These questions requires you to pick a heading from the given headings and place each of them to the paragraphs. Mainly, if you have clearly understood the given text, you’ll be able to make a heading out of every paragraph.</p>
      <p>5. Sentence completion</p>
      <p>In this type of question, you will find an incomplete sentence. You are supposed to complete it with words taken from the text. You therefore need to quickly map the incomplete text to a particular location in the text for you to find the correct answer.

 </p>
      <p>6. Summary completion</p>
      <p>A summary part of the text will be given to you. You are required to complete it by picking words from the text with a given maximum number of words to complete it.

 </p>
      <p>7. Features matching</p>
      <p>These are types of questions that that requires you to find a specific information about given features and match it. For example you can be given different people who discovered different things at different times. You are now required to match who discovered what at what time. You therefore need to be very</p>
      <p>8. Matching sentence endings</p>
      <p>This is a very simple question. Part of a sentence is picked from a line in the text. What you need to do here is to just locate where it has been taken from and complete the sentence and there you have your have your correct answer!</p>
      <p>9. Short answer questions</p>
      <p>You have to be extra careful here! This is a question that expects you to answer the question from the given facts in the text. Moreover you need to check the number of words because you are limited. A maximum number of words is always given.</p>
      <p>10. Matching information</p>
      <p>You just need not to get this question wrong. All that is required of you here is to find some given information and place them where they fit.</p>
    </div>
  ),
}
,{
  week: "IELTS Listening Prctice",
  description: (
    <div>
      <p>You need to be settled, organised and ready for what’s coming. Read and listen to the instructions very carefully. Many students throw away easy marks by misreading or not following simple instructions.</p>
     
    </div>
  ),
}
,
    {
      week: "IELTS Speaking Interview",
      description: (<p>
       Conducting 3 stage interview like IELTS Exam. <br />
        <b>Stages:</b>
        <br />
        1. Introduction: 5min
        <br />
        2. Cue Card: 3-4min
        <br />
        3. Conversation on the cue card: 5min
      </p>
  ),
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-10 px-4 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Curriculum List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Curriculum to be covered</h2>
          <ul className="space-y-2 text-sm">
            {curriculumData.map((item, index) => (
              <li key={index} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="font-medium">{item.week}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="mt-2 border border-cyan-400 p-5 text-gray-700">{item.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>

            <div>

              <div className=" mb-5">
                <div className="bg-cyan-700 text-white rounded-xl p-6 w-full shadow-md transition-all duration-300">
                  {openIndex !== null && curriculumData[openIndex] ? 
                  (<>
                    <p className="text-xl mb-2">Current Week</p>
                    <h2 className="text-2xl font-semibold">{curriculumData[openIndex].week}</h2>
                    <p className="text-sm mt-2 text-blue-100">Click to view Curriculum</p>
                  </>
                  ) : (
                    <>
                    <p className="text-xl mb-2">Curriculum</p>
                    <p className="text-sm text-blue-100">Select week for view its Content</p>
                    </>
                  )
                  }
                </div>

              </div>

            
        {/* Right Side: Static Info Card */}
        <div className="m-0 p-0 bg-gray-300 rounded-lg shadow overflow-hidden self-start">
          <div className="relative w-full h-85">
            <Image
              src="/home/professional-women.png"
              alt="Sunday Webinar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Sunday Webinar</h2>
            <p className="text-base text-gray-600 mb-5">
              Join our open webinar on Sundays to improve your English communication skills and to get in touch with our huge community of students.
            </p>
            <Link
              href="/english-business-course/free-webinar"
              className=" px-5 py-3 text-white border rounded-lg bg-cyan-500">
              Register Free
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}