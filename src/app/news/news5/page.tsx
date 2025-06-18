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
        title:"",
        desc:["Helmed by visionary director Nag Ashwin, this sci-fi epic promises to transport audiences to a futuristic world teeming with advanced technology, complex narratives, and profound philosophical questions. Yet, as the release date approaches, the question looms large: Can “Kalki 2898 AD” meet the monumental expectations it has set?",
        ]
    },
    {
        title:"An Audacious Vision",
        desc:["Set in the year 2898, the film explores a dystopian future where humanity grapples with the consequences of unchecked technological advancements and environmental degradation. The storyline, inspired by Indian mythology and contemporary scientific speculation, aims to blend traditional storytelling with cutting-edge cinematic techniques.",
        "Nag Ashwin, known for his critically acclaimed work in “Mahanati,” has taken a significant creative risk with “Kalki 2898 AD.” In interviews, he has described the film as a passion project, a narrative he has envisioned for years. This level of personal investment from the director is both a blessing and a potential pitfall. While it ensures a coherent and dedicated creative direction, it also raises the stakes should the film fail to resonate with audiences."]
    },
    {
        title:"Sky-High Expectations",
        desc:["The anticipation surrounding “Kalki 2898 AD” is palpable. Science fiction is a genre that has historically struggled to find a significant foothold in Indian cinema. However, recent successes of visually and narratively ambitious films like “Baahubali” and “RRR” have paved the way for larger-than-life spectacles. Fans are expecting nothing less than a cinematic masterpiece that can stand shoulder to shoulder with Hollywood’s best sci-fi offerings.",
        "Nag Ashwin, known for his critically acclaimed work in “Mahanati,” has taken a significant creative risk with “Kalki 2898 AD.” In interviews, he has described the film as a passion project, a narrative he has envisioned for years. This level of personal investment from the director is both a blessing and a potential pitfall. While it ensures a coherent and dedicated creative direction, it also raises the stakes should the film fail to resonate with audiences.",
    "The promotional material, including teasers and trailers, has generated significant buzz. The visuals are nothing short of stunning, promising an immersive experience that rivals the grandeur of international sci-fi blockbusters. However, visuals alone do not guarantee success. The film’s narrative depth and character development will be crucial in ensuring it is not just a feast for the eyes but also a compelling story that resonates on an emotional level."]
    },  

   ]

   const content1=[
    {
        title:"Reported Budget and Cast Fees",
        desc:["The financial stakes for “Kalki 2898 AD” are astronomically high. Reports suggest the film’s budget is around ₹500 crores (approximately $67 million), making it one of the most expensive films in Indian cinema history. This colossal budget reflects not just in the high-end visual effects but also in the star-studded cast.",
        "Leading the cast is Prabhas, whose fee is reportedly around ₹100 crores (approximately $13.4 million). Known for his roles in the “Baahubali” series, Prabhas brings a significant fan following and credibility to the project. Alongside him are other heavyweights like Amitabh Bachchan and Deepika Padukone, whose fees are also rumored to be in the high eight-figure range. The inclusion of such prominent actors not only inflates the budget but also sets high expectations for stellar performances."
            
        ]
    },
    
    {
        title:"Conclusion",
        desc:["“Kalki 2898 AD” is undoubtedly a landmark project in Indian cinema. It represents a bold step forward in terms of genre and scale. As the release date draws near, the excitement is tempered with cautious optimism. The film has the potential to redefine the landscape of Indian sci-fi cinema, but it also carries the burden of immense expectations.",
            "Ultimately, whether “Kalki 2898 AD” will be remembered as a groundbreaking cinematic triumph or an ambitious misfire remains to be seen. One thing is certain: it will be a film that industry insiders, critics, and audiences will be talking about for years to come.",
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
              backgroundImage: `url(/blog-images/GLnawM1XcAA5HB1_1713709335865_1713709364323.avif)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
          
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white ">
            Kalki 2898 AD: A Cinematic Gamble with Sky-High Expectations and Staggering Costs
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
                In an era where the film industry is dominated by sequels, reboots, and superhero sagas, “Kalki 2898 AD” emerges as a bold and ambitious venture.
                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/kalki-trailer-breakdown.webp"></img>
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
                  <img src="/blog-images/kalki.webp"></img>
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