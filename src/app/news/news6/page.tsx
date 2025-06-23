"use client"
import Head from 'next/head';
import Navigation from '~/app/_components/navigation1';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import Footer from '~/app/_components/footer1';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
export default function Article370Page() {
  const content = [
    {
      title: "New Delhi, June 26, 2024 —",
      desc: [" In a dramatic turn of events, Delhi Chief Minister Arvind Kejriwal was arrested early this morning on charges related to alleged corruption in the Delhi government’s procurement processes. The arrest, carried out by the Central Bureau of Investigation (CBI), has sent shockwaves through the political landscape of India, triggering a flurry of statements from Kejriwal himself, his party members, and political adversaries.",
      ]
    },
    {
      title: "The Arrest",
      desc: ["Kejriwal was taken into custody from his residence in Civil Lines, New Delhi, at around 6:30 AM. The CBI, in a brief statement, confirmed the arrest, citing substantial evidence of irregularities and corruption in the allocation of government contracts. The investigation, which has been ongoing for several months, reportedly uncovered a network of fraudulent practices linked to high-ranking officials within the Delhi government."]
    },

    {
      title: "Kejriwal’s Response",
      desc: ["In a defiant message recorded just before his arrest, Kejriwal called the allegations baseless and politically motivated. He stated, “This is a witch-hunt orchestrated by the central government to destabilize the Delhi administration and suppress voices of dissent. I have always maintained a zero-tolerance policy towards corruption. The people of Delhi know the truth and will not be swayed by these tactics.”",
        "Kejriwal, known for his fiery rhetoric and anti-corruption stance, urged his supporters to remain peaceful but vigilant. He emphasized that the fight against corruption and for the rights of the common man would continue unabated.",
      ]
    },

  ]

  const content1 = [
    {
      title: "AAP Leaders Speak Out",
      desc: ["The Aam Aadmi Party (AAP) has rallied behind its leader, with senior party members denouncing the arrest as an act of political vendetta. Deputy Chief Minister Manish Sisodia addressed a press conference, saying, “This arrest is a blatant misuse of power by the central government. They are afraid of Arvind Kejriwal’s popularity and his unwavering commitment to transparency and honesty in governance.”",
        "Sisodia announced a series of protests and rallies across Delhi to garner public support and demand Kejriwal’s immediate release. He also assured that the party’s legal team was preparing to challenge the arrest in court."

      ]
    },

    {
      title: "Opposition’s Reaction",
      desc: ["In stark contrast, opposition parties welcomed the arrest, with Bharatiya Janata Party (BJP) leaders calling it a necessary step to curb corruption. BJP spokesperson Sambit Patra said, “The law is taking its course. For too long, Kejriwal has presented himself as a crusader against corruption while engaging in corrupt practices himself. This arrest is a victory for justice and accountability.”",
        "Congress leaders echoed similar sentiments, though they cautioned against the potential for political misuse of investigative agencies. Rahul Gandhi, in a tweet, stated, “Corruption should be dealt with firmly, but due process and transparency must be maintained. The people deserve to know the truth.”",

      ]
    },
    {
      title: "What’s Next?",
      desc: ["Legal experts anticipate a prolonged legal battle, with Kejriwal likely to challenge the charges in court. The Delhi High Court is expected to hear the initial appeal for bail in the coming days. Political analysts suggest that this incident could significantly impact the upcoming state elections, with potential repercussions for both AAP and its rivals.",
        "As the situation unfolds, all eyes remain on Delhi, where the arrest of its chief minister has become the focal point of national attention. The coming days will be crucial in determining the political and legal trajectory of this high-stakes drama.",

      ]
    },


  ]
  return (
    <>
      <Navigation />
      <Head>
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
              backgroundImage: `url(/blog-images/CNG-39.webp)`,
            }}
          ></div>

          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Decorative Script Text Background */}


          <div className="relative z-10 text-center max-w-4xl px-6">


            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white ">
              Kejriwal’s Arrest Sparks Political Uproar: Statements and Reactions
            </h1>

            <AuthorInfo />
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <div className="lg:col-span-2">

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/CNG-39.webp"></img>
                </div>


              </div>

              {/* Main Article Content */}
              <div className="prose max-w-none">
                {content.map((item, index) => (
                  <div key={index}>
                    <h3 className="mt-8 font-bold text-5xl">{item.title}</h3>
                    {Array.isArray(item.desc) && item.desc.map((paragraph, idx) => (
                      <p key={idx} className="mt-4 text-xl mb-4 ">{paragraph}</p>
                    ))}
                    <p className='mt-4 font-bold text-xl'></p>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/FILE-PHOTO-Delhi-Chief-Minister-Arvind-Kejriwal-a_1719380685574_1719380707682.avif"></img>
                </div>

              </div>
              <div className="prose max-w-none">
                {content1.map((item, index) => (
                  <div key={index}>
                    <h3 className="mt-8 font-bold text-5xl">{item.title}</h3>
                    {Array.isArray(item.desc) && item.desc.map((paragraph, idx) => (
                      <p key={idx} className="mt-4 text-xl mb-4 ">{paragraph}</p>
                    ))}
                    <p className='mt-4 font-bold text-xl'></p>
                  </div>
                ))}
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