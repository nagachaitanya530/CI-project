"use client"
import Head from 'next/head';
import Navigation from '~/app/_components/Navigation';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import Footer from '~/app/_components/Footer';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
export default function Article370Page() {
   const content=[
    {
        title:"Origins of Article 370",
        desc:["In 1947, as British India was partitioned into India and Pakistan, the princely states were given the choice to join either nation or remain independent. Maharaja Hari Singh, the Hindu ruler of the Muslim-majority Jammu and Kashmir, initially hesitated. However, faced with a Pakistan-backed tribal invasion, he signed the Instrument of Accession to India in October 1947.",
            "To assuage concerns about Kashmir’s autonomy and to respect its unique character, Article 370 was introduced into the Indian Constitution in 1949. This provision granted Jammu and Kashmir significant autonomy, allowing it to have its own constitution, flag, and decision-making rights in all matters except defence, foreign affairs, and communications."
        ]
    },
    {
        title:"Seven Decades of Special Status",
        desc:["For 70 years, Article 370 defined Kashmir’s relationship with the rest of India. It allowed the state to maintain distinct residency laws, property ownership rules, and other special privileges. Proponents argued that this arrangement respected Kashmir’s cultural uniqueness and the terms of its accession to India. Critics, however, saw it as an impediment to full integration and a source of separatist sentiment.",
        ]
    },
    {
        title:"The 2019 Abrogation",
        desc:["On August 5, 2019, the Indian government, led by Prime Minister Narendra Modi’s Bharatiya Janata Party (BJP), revoked Article 370 through a presidential order. The state was simultaneously bifurcated into two union territories: Jammu and Kashmir, and Ladakh. This move fulfilled a long-standing promise of the BJP to fully integrate Kashmir with the rest of India.",
        ]
    },

   ]

   const content1=[
    {
        title:"The Supreme Court’s Verdict",
        desc:["In a landmark judgment in December 2023, India’s Supreme Court upheld the central government’s decision to abrogate Article 370. The court ruled that the provision was temporary in nature and that Jammu and Kashmir did not retain sovereignty after joining the Indian Union. The verdict also directed the government to restore statehood to Jammu and Kashmir and conduct elections by September 30, 2024.",
            
        ]
    },
    {
        title:"Implications for Kashmir",
        desc:["The abrogation of Article 370 has profound implications for Kashmir:",
            "Political Landscape: The removal of special status and the impending elections could reshape Kashmir’s political dynamics, potentially giving rise to new political forces.",
"Economic Integration: With barriers to investment removed, Kashmir may see increased economic activity and development projects from other parts of India.",
"Demographic Concerns: Changes in residency laws have raised concerns about potential demographic shifts in the Muslim-majority region.",
"Security Situation: While the government argues that the move will help combat terrorism, there are concerns about potential unrest and the need for continued security presence.",

        ]
    },
    {
        title:"A Complex Legacy",
        desc:["The story of Article 370 is a testament to India’s complex federal structure and the challenges of nation-building in a diverse society. Its abrogation represents a significant shift in India’s approach to Kashmir, moving from a model of asymmetric federalism to a push for greater integration.",
            "As we look to the future, the success of this new approach will depend on how effectively the government can address the aspirations of the Kashmiri people, promote economic development, and maintain peace in this strategically crucial region. The restoration of statehood and the conduct of free and fair elections will be crucial steps in this process.",
            "The abrogation of Article 370 has closed one chapter in Kashmir’s history, but the story of its integration with India is far from over. The coming years will be critical in determining whether this bold move leads to the peace, prosperity, and integration that its proponents envision, or whether it gives rise to new challenges in this long-troubled region."
        ]
    },

   ]
  return (
    <>
    <Navigation/>
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
              backgroundImage: `url(/blog-images/370-scaled-1.webp)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
          
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Article 370: The End of Kashmir’s Special Status
            </h1>
            
      <AuthorInfo/>
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
                The abrogation of Article 370 in August 2019 marked a seismic shift in India’s relationship with Jammu and Kashmir. To understand the full impact of this decision, we must look back to the tumultuous period of India’s partition and the unique circumstances that led to Kashmir’s accession to India.
                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/370-scaled-1.webp"></img>
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
                  <img src="/blog-images/1200px-Supreme_Court_of_India_inside_bulidings_01_cropped.webp"></img>
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
              <Leftgrid/>
            </div>
          </div>
        </div>
        <div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Share this article</h1>
          
          {/* Social Share Buttons */}
        <div>
          <PersonalBox/>
        </div>

          {/* Author Profile */}
         
        </div>
      </div>
      <BottomArticles/>
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