"use client"
import Head from 'next/head';
import Navigation from '~/app/_components/Navigation';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import Footer from '~/app/_components/Footer';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
export default function VocabularyPage() {
   const content=[
    {
        desc:["On July 12, the Supreme Court denied a plea asking for the formation of an expert committee to look into the Hathras stampede, which has resulted in over 121 deaths.Petitioner-attorney Vishal Tiwari was questioned by a bench led by Chief Justice of India D. Y. Chandrachud about why he had not gone straight to the highest court instead of the Allahabad High Court.",
            "A writ petition to establish a five-person expert group headed by a former Supreme Court judge was submitted to the court on July 3. Additionally, Mr. Tiwari had requested that the court establish safety regulations for public assemblies and large-scale meetings.",
            "The incident had taken place in the Hathras area of Uttar Pradesh during a prayer meeting hosted by Narayan Saakar Hari, a self-described godman. A sizable throng had attended the event.",
            "“This horrifying stampede event raises a number of problems regarding the responsibilities and shortcomings of the State Government and Municipal Corporations. The petition had stated, “The authorities have not only failed to maintain and administer the supervision, but they have also failed to control the crowd gathered for the event.”",
            "It had pleaded with the court to order the Uttar Pradesh government to provide a status report and to file a lawsuit against the individuals responsible for the safety and crowd control measures that were done carelessly.",
            ""
        ]
    }
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
              backgroundImage: `url(/blog-images/AJHathras004-1720495947.webp)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
          
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Supreme Court rejects request to create expert panel to oversee investigation into Hathras stampede
            </h1>
            
      <AuthorInfo/>
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
                  <img src="/blog-images/AJHathras004-1720495947.webp"></img>
                </div>
                
                <div className="mt-4 text-right">
                  <p className="text-sm text-gray-600">
                  Petitioner-attorney Vishal Tiwari was questioned by a bench led by Chief Justice of India D. Y. Chandrachud about why he had not gone straight to the highest court instead of the Allahabad High Court.
                  </p>
                </div>
              </div>

              {/* Main Article Content */}
              <div className="prose max-w-none">
               {content.map((item, index) => (
                 <div key={index}>
                   {item.desc.map((paragraph, idx) => (
                     <p  className="mt-8" key={idx}>{paragraph}</p>
                   ))}
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