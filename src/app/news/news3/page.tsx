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
      title: "",
      desc: ["Arvind Kejriwal, the Chief Minister of Delhi and the leader of the Aam Aadmi Party (AAP), has been granted bail by the Supreme Court in a money-laundering (काले धन को वैध बनाना) case initiated by the Enforcement Directorate (ED) in connection with the alleged Delhi liquor policy scam. However, Mr. Kejriwal will remain in custody due to ongoing inquiries by the Central Bureau of Investigation (CBI) in a separate case.",
        "The judgment was delivered by a bench comprising (शामिल) Justices Sanjiv Khanna and Dipankar Datta. The court observed that Mr. Kejriwal had been incarcerated for over 90 days and consequently granted him interim (अंतरिम) bail in the excise policy case filed by the ED."
      ]
    },
    {
      title: "",
      desc: ["The AAP responded to the Supreme Court’s ruling by quoting “Satyamev Jayate” (Truth alone triumphs-सच की ही जीत होती है ) on social media platform X (formerly Twitter), accompanied (के साथ) by an image of Mr. Kejriwal holding the national flag.",
      ]
    },
    {
      title: "",
      desc: ["Mr. Kejriwal was apprehended (गिरफ़्तार) on March 21 by the ED in relation to money laundering allegations (आरोप) linked to the purported (कथित) Delhi liquor policy scam. In his petition, the 55-year-old leader challenged the Delhi High Court’s April 9 order, which denied him relief. The High Court had validated (सही ठहराया) Mr. Kejriwal’s arrest, asserting (ज़ोर देते हुए) that there was no illegality involved and that the central investigative agency had no alternative after Mr. Kejriwal repeatedly ignored summonses (बुलावा) and refused to cooperate with the investigation.",
        "Both the ED and the CBI are investigating the money laundering aspects of the now-abrogated (रद्द) Delhi liquor policy. The excise policy, introduced in November 2021, involved the Delhi government withdrawing from retail liquor sales and allowing private licensees to operate liquor stores. In July 2022, Delhi Chief Secretary Naresh Kumar identified substantial (महत्वपूर्ण) policy violations (उल्लंघन) and alleged undue (असंगत) benefits conferred (प्रदत्त -दिये गये) to liquor licensees. Consequently (नतीजतन), the policy was annulled (रद्द) in September of the same year.",
        "The CBI has alleged that liquor companies played a significant (ज़रूरी) role in framing (बनाने में) the excise policy, which was structured to yield (देने में) a 12% profit margin for these companies. The agency has further claimed that a liquor lobby, referred to as the “South Group,” paid kickbacks (घूस) amounting to ₹100 crore to the AAP, part of which was purportedly (कथित) routed (की तरफ़-भेजे गये) to public officials. The ED has accused individuals of laundering these kickbacks, thereby compounding (और ज़्यादा बढ़ाना) the financial irregularities associated with the policy.",
        "The Supreme Court’s interim bail order provides Mr. Kejriwal with temporary relief while the investigations continue. This case underscores (रोशनी डालना)) the complexities involved in the enforcement (लागू करना) of excise policies and the stringent (कड़ी) scrutiny (जाँच) applied to alleged (कथित) financial misconduct (अनैतिक व्यवहार) by public officials and associated entities (संस्था या लोग)."
      ]
    },

  ]

  const content1 = [
    {
      title: "The Supreme Court’s Verdict",
      desc: ["In a landmark judgment in December 2023, India’s Supreme Court upheld the central government’s decision to abrogate Article 370. The court ruled that the provision was temporary in nature and that Jammu and Kashmir did not retain sovereignty after joining the Indian Union. The verdict also directed the government to restore statehood to Jammu and Kashmir and conduct elections by September 30, 2024.",

      ]
    },
    {
      title: "Implications for Kashmir",
      desc: ["The abrogation of Article 370 has profound implications for Kashmir:",
        "Political Landscape: The removal of special status and the impending elections could reshape Kashmir’s political dynamics, potentially giving rise to new political forces.",
        "Economic Integration: With barriers to investment removed, Kashmir may see increased economic activity and development projects from other parts of India.",
        "Demographic Concerns: Changes in residency laws have raised concerns about potential demographic shifts in the Muslim-majority region.",
        "Security Situation: While the government argues that the move will help combat terrorism, there are concerns about potential unrest and the need for continued security presence.",

      ]
    },
    {
      title: "A Complex Legacy",
      desc: ["The story of Article 370 is a testament to India’s complex federal structure and the challenges of nation-building in a diverse society. Its abrogation represents a significant shift in India’s approach to Kashmir, moving from a model of asymmetric federalism to a push for greater integration.",
        "As we look to the future, the success of this new approach will depend on how effectively the government can address the aspirations of the Kashmiri people, promote economic development, and maintain peace in this strategically crucial region. The restoration of statehood and the conduct of free and fair elections will be crucial steps in this process.",
        "The abrogation of Article 370 has closed one chapter in Kashmir’s history, but the story of its integration with India is far from over. The coming years will be critical in determining whether this bold move leads to the peace, prosperity, and integration that its proponents envision, or whether it gives rise to new challenges in this long-troubled region."
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
              backgroundImage: `url(/blog-images/1716808144-1461.avif)`,
            }}
          ></div>

          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Decorative Script Text Background */}


          <div className="relative z-10 text-center max-w-4xl px-6">


            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Supreme Court Grants Bail to Arvind Kejriwal in Delhi Liquor Policy Case
            </h1>

            <AuthorInfo />
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-6xl text-gray-400 mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  Arvind Kejriwal, the Chief Minister of Delhi and the leader of the Aam Aadmi Party (AAP), has been granted bail by the Supreme Court                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/1716808144-1461.avif"></img>
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