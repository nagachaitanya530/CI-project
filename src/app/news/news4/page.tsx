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
        title:"Historical Context",
        desc:["India has been a persistent aspirant for a permanent seat on the UNSC since its independence in 1947. The UNSC, established in 1945, originally had five permanent members: the United States, the Soviet Union (now Russia), the United Kingdom, France, and China. This structure reflected the global power dynamics post-World War II but has since been criticized for not representing the current geopolitical realities.",
          "China, one of the original permanent members, has historically been a significant obstacle to India’s ambitions. The Sino-Indian War of 1962 left a deep scar in bilateral relations, and while economic ties have improved over the decades, political and military tensions persist. The border clashes in recent years, particularly in the Galwan Valley, have further strained relations and underscored China’s reluctance to support India’s UNSC bid."
        ]
    },
    {
        title:"Current Trends and Arguments",
        desc:["Proponents of India’s permanent membership argue that the country’s growing economic and political clout necessitates a revision of the UNSC’s permanent membership. India is the world’s fifth-largest economy, a nuclear power, and a significant contributor to UN peacekeeping missions. Its democratic governance and commitment to multilateralism also position it as a suitable candidate for a more influential role in global decision-making.",
        ]
    },

   ]

   const content1=[
    {
        title:"Support from Western Powers",
        desc:["Several Western politicians and leaders have openly supported India’s bid. Former U.S. President Barack Obama, during his visit to India in 2010, endorsed India’s candidature. More recently, U.S. President Joe Biden and French President Emmanuel Macron have reiterated their support. “India’s participation as a permanent member would add a necessary voice for democracy and development in the UNSC,” Macron stated during a bilateral meeting.",
        "German Chancellor Olaf Scholz has also backed India’s inclusion, emphasizing the need for UNSC reform to reflect current geopolitical realities. “The world has changed since 1945, and the Security Council must change with it,” Scholz asserted, highlighting the importance of including countries like India to maintain the legitimacy and effectiveness of the UN."
            
        ]
    },
    {
        title:"Opinions from Western Politicians",
        desc:["Support for Democratic Representation:",
            "Many Western politicians advocate for India’s permanent membership on the grounds of enhancing democratic representation within the UNSC. British Foreign Secretary James Cleverly recently remarked, “Including India, a vibrant democracy, would strengthen the UNSC’s ability to address global challenges more effectively.”",
"Economic and Security Considerations:",
"Economic ties and security collaborations also play a role in the support from Western nations. U.S. Senator Lindsey Graham noted, “India is a key ally in the Indo-Pacific strategy. Its inclusion in the UNSC would bolster our collective security framework and economic cooperation in the region.”",
"Security Situation: While the government argues that the move will help combat terrorism, there are concerns about potential unrest and the need for continued security presence.",

        ]
    },
    {
        title:"Conclusion",
        desc:["India’s quest for a permanent seat on the UNSC is a reflection of its aspirations to play a more prominent role in global governance. The support from Western nations underscores the recognition of India’s potential to contribute positively to international peace and security. However, the path to permanent membership is fraught with challenges, primarily due to China’s opposition.",
            "The ongoing debates and diplomatic negotiations will determine whether the UNSC can evolve to better reflect contemporary global dynamics. As the world faces complex issues like climate change, terrorism, and pandemics, the inclusion of diverse voices like India’s in the UNSC could enhance the council’s relevance and effectiveness. Ultimately, the question remains: will the international community muster the collective will to reform the UNSC in a way that includes India and other emerging powers, or will the status quo prevail?",
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
              backgroundImage: `url(/blog-images/127846-gvaohhebsp-1569231687.webp)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
          
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Editorial: India’s Quest for Permanent Membership in the UN Security Council
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
                The debate over India’s bid for a permanent seat on the United Nations Security Council (UNSC) has resurfaced with renewed vigor in recent months.
                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/UNSC-UnitedNationsSecurityCouncil-1678354530210.webp"></img>
                </div>
                <p>As one of the world’s largest democracies and a burgeoning economic powerhouse, India’s inclusion in the UNSC is being increasingly advocated by both Indian leaders and a growing number of international allies. However, historical tensions with China and the complexities of global geopolitics continue to complicate this quest.</p>
            
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
                  <img src="/blog-images/127846-gvaohhebsp-1569231687.webp"></img>
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