"use client"
import Head from 'next/head';
import Navigation from '~/app/_components/navigation1';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import Footer from '~/app/_components/footer1';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
export default function VocabularyPage() {
  const articleContent = [
    {
      title: "1.Comprehensive Vocabulary Building:",
      content: ["Word Lists: Access extensive word lists categorized by difficulty levels and topics.",
        "Usage Examples: Learn how to use new words in sentences and different contexts."
      ]
    },
    {
      title: "2. Interactive Learning Modules:",
      content: ["Quizzes and Exercises: Engage with interactive quizzes and exercises designed to test and reinforce your vocabulary knowledge.",
        "Games and Activities: Participate in fun language games and activities that make learning enjoyable and effective."]
    },
    {
      title: "3. Fluency Development:",
      content: ["Speaking Practice: Regular speaking practice sessions with native speakers and language experts.",
        "Listening Exercises: Improve your listening skills with curated audio materials and comprehension exercises."]
    },
    {
      title: "4. Personalized Feedback:",
      content: ["Progress Reports: Receive detailed progress reports highlighting your strengths and areas for improvement.",
        "One-on-One Tutoring: Benefit from personalized tutoring sessions tailored to your specific learning needs."]
    }
  ];

  const conclusion = [
    {
      title: "Conclusion",
      content: "Building a strong vocabulary is a critical step towards achieving fluency in English. By incorporating the strategies outlined in this article and leveraging the resources provided by the National Institute of Language, you can enhance your vocabulary and communication skills effectively from the comfort of your home. Whether through daily reading, interactive apps, or professional courses, your journey to mastering English starts today.By following these tips and considering advanced training from the National Institute of Language, you can take significant strides towards mastering English and enriching your vocabulary."
    }

  ];


  return (
    <>
      <Navigation />
      <Head>
        <title>Mastering Vocabulary at Home - English Communication Guide</title>
        <meta name="description" content="A comprehensive guide to building vocabulary and achieving fluency in English with help from the National Institute of Language" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 mb-16">
        {/* Hero Section */}
        <section className="relative h-96  flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md scale-110"
            style={{
              backgroundImage: `url(/blog-images/EngagingVocabularyActivitiesBLOG.webp)`,
            }}
          ></div>

          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Decorative Script Text Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <span className="text-8xl md:text-9xl font-script text-gray-200 transform -rotate-12">engaging</span>
          </div>
          <div className="absolute top-10 left-20 opacity-20">
            <span className="text-6xl md:text-7xl font-script text-gray-200 transform rotate-6">vocabulary</span>
          </div>
          <div className="absolute bottom-20 right-32 opacity-10">
            <span className="text-5xl md:text-6xl font-script text-gray-200 transform -rotate-3">study</span>
          </div>

          <div className="relative z-10 text-center max-w-4xl px-6">


            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
              Mastering Vocabulary at Home: A Guide to Fluency with Help from the National Institute of Language
            </h1>

            <AuthorInfo />
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <div className="lg:col-span-2">

              {/* Quote Section */}
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-6xl text-gray-400 mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  Learning a new language can be a rewarding yet challenging experience. One of the most crucial components of mastering any language is building a robust vocabulary.
                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/1646672427909.webp"></img>
                </div>

                <div className="mt-4 text-right">
                  <p className="text-sm text-gray-600">
                    Mastering Vocabulary at Home: A Guide to Fluency with Help from the National Institute of Language 1
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  This article provides detailed strategies to help you learn vocabulary at home and achieve fluency in English, with an emphasis on the courses offered by the National Institute of Language.
                </p>
              </div>

              {/* Main Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A strong vocabulary is the foundation of effective communication. It enhances your ability to express yourself clearly and understand others. Here are some reasons why improving your vocabulary is crucial:
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      1. Enhanced Communication:
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A rich vocabulary allows you to convey your thoughts more precisely.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      2. Improved Comprehension:
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Understanding a broader range of words helps in grasping the meaning of texts and conversations more accurately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3. Boosted Confidence:
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A good command of language boosts your confidence in both personal and professional interactions.
                    </p>
                  </div>




                </div>



                {/* Engaging Vocabulary Image */}
                <div className="relative mb-8">
                  <div className="h-64 bg-amber-50 rounded-lg flex items-center justify-center border-2 border-amber-200">
                    <img src="/blog-images/EngagingVocabularyActivitiesBLOG.webp"></img>
                  </div>
                  {/* Decorative elements */}

                  <div className="absolute bottom-4 left-8 flex space-x-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      1. Enhanced Communication:
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A rich vocabulary allows you to convey your thoughts more precisely.
                    </p>
                  </div>

                  <div>
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">
                      Strategies to Learn Vocabulary at Home
                    </h1>
                    <div>
                      <h2 className="text-gray-700 font-semibold pl-2">
                        1. Daily Reading Habit
                      </h2>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Read Varied Materials: Engage with different types of reading materials, such as books, newspapers, blogs, and magazines. This exposes you to a wide range of vocabulary.

                      </p>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Note New Words: Keep a notebook handy to jot down unfamiliar words. Look up their meanings and usage later.

                      </p>
                    </div>
                    <div>
                      <h2 className="text-gray-700 font-semibold pl-2">
                        2. Use Vocabulary Apps
                      </h2>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Download Reputable Apps: Use apps like Duolingo, Memrise, and Anki that are designed to help you learn and retain new words through interactive methods.

                      </p>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Set Daily Goals: Aim to learn a set number of new words each day. Consistency is key.

                      </p>
                    </div>
                    <div>
                      <h2 className="text-gray-700 font-semibold pl-2">
                        3. Flashcards for Repetition
                      </h2>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Create Flashcards: Write new words on flashcards with their meanings and example sentences. Review them regularly.

                      </p>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Digital Flashcards: Use digital flashcard apps like Quizlet for a more convenient and engaging learning experience.

                      </p>
                    </div>
                    <div>
                      <h2 className="text-gray-700 font-semibold pl-2">
                        4. Practice Writing


                      </h2>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Daily Journal: Maintain a daily journal where you use new vocabulary words in sentences. This reinforces learning through practical application.

                      </p>
                      <p className="text-gray-700 leading-relaxed pl-4 mt-2">
                        • Essay Writing: Write essays on various topics incorporating the new words you’ve learned.

                      </p>
                    </div>
                  </div>

                  <article className="bg-white rounded-lg shadow-sm p-8 mt-8">
                    <div className="prose max-w-none">
                      <h1 className="text-2xl font-bold text-gray-800 flex-1 mb-4">
                        Course Highlights:
                      </h1>
                      {articleContent.map((section, index) => (
                        <div key={index} className="mb-8">
                          <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            <span className="font-bold">{section.title}</span>
                          </h2>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {Array.isArray(section.content) ? (
                              section.content.map((point, index) => (
                                <li key={index} className='font-semibold'>{point}</li>
                              ))
                            ) : (
                              <li>{section.content}</li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-sm p-8 mt-8">
                    <div className="prose max-w-none">

                      {conclusion.map((section, index) => (
                        <div key={index} className="mb-8">
                          <h1 className="text-lg font-semibold text-gray-800 mb-4">
                            <span className="font-bold">{section.title}</span>
                          </h1>
                          <h3> <span className="font-semibold">{section.content}</span></h3>
                        </div>
                      ))}
                    </div>
                  </article>


                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Leftgrid />
            </div>
          </div>
        </div>
        <div className="bg-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Share this article</h1>

            {/* Social Share Buttons */}
            <div>
              <PersonalBox />
            </div>

            {/* Author Profile */}

          </div>
        </div>
        <BottomArticles />
      </div>

      <style jsx>{`
        .font-script {
          font-family: 'Brush Script MT', cursive;
        }
        
        .prose h3 {
          color: #374151;
          font-weight: 600;
        }
      `}</style>
      <Footer></Footer>
    </>
  );
}