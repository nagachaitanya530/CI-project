import React from 'react'
import Link from 'next/link'
const page = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Highlights from the Expert Panel on the Future of Mobile AI Responsible, cooperative AI innovation",
      excerpt: "Samsung Electronics unveiled a record number of new products at Galaxy Unpacked 2024 on July...",
      image: "/blog-images/samsung-ai-system-2048x1366.webp",
      author: "Abhinav",
      date: "July 13, 2024",
      category: "news",
      bgGradient: "from-blue-900 via-blue-700 to-blue-500",
      textOverlay: "SAMSUNG AI",
      textColor: "text-blue-400",
      path:"news1"
      
    },
    {
      id: 2,
      title: "Supreme Court rejects request to create expert panel to oversee investigation into Hathras stampede",
      excerpt: "Petitioner-attorney Vishal Tiwari was questioned by a bench led by Chief Justice of India D....",
      image: "/blog-images/AJHathras004-1720495947.webp",
      author: "Abhinav",
      date: "July 12, 2024",
      category: "news",
      bgGradient: "from-gray-700 via-gray-600 to-gray-500",
      textOverlay: "",
      textColor: "text-white",
      path:"news2"
    },
    {
      id: 3,
      title: "Supreme Court Grants Bail to Arvind Kejriwal in Delhi Liquor Policy Case",
      excerpt: "Arvind Kejriwal, the Chief Minister of Delhi and the leader of the Aam Aadmi Party...",
      image: "/blog-images/1716808144-1461.avif",
      author: "Abhinav",
      date: "July 12, 2024",
      category: "news",
      bgGradient: "from-yellow-400 via-yellow-300 to-yellow-200",
      textOverlay: "",
      textColor: "text-gray-800",
      path:"news3"
    },
    {
        id: 4,
        title: "Editorial: India’s Quest for Permanent Membership in the UN Security Council",
        excerpt: "India has been a persistent aspirant for a permanent seat on the UNSC since its independence in 1947. The UNSC, established in 1945,...",
        image: "/blog-images/0.82156900_1632582022_1155x548-prime-minister-narendra-modi-s-address-to-the-united-nations-general-assembly.avif",
        author: "Abhinav",
        date: "July 12, 2024",
        category: "news",
        bgGradient: "from-yellow-400 via-yellow-300 to-yellow-200",
        textOverlay: "",
        textColor: "text-gray-800",
      path:"news4"
      },
      {
        id: 5,
        title: "Kalki 2898 AD: A Cinematic Gamble with Sky-High Expectations and Staggering Costs",
        excerpt: "In an era where the film industry is dominated by sequels, reboots, and superhero sagas, “Kalki 2898 AD” emerges as a bold and ambitious venture...",
        image: "/blog-images/kalki-trailer-breakdown.webp",
        author: "Abhinav",
        date: "July 12, 2024",
        category: "news",
        bgGradient: "from-yellow-400 via-yellow-300 to-yellow-200",
        textOverlay: "",
        textColor: "text-gray-800",
      path:"news5"
      },
      {
        id: 6,
        title: "Kejriwal’s Arrest Sparks Political Uproar: Statements and Reactions",
        excerpt: "New Delhi, June 26, 2024 — In a dramatic turn of events, Delhi Chief Minister Arvind Kejriwal was arrested early this morning on charges related to alleged corruption in the Delhi government’s procurement processes...",
        image: "/blog-images/CNG-39.webp",
        author: "Abhinav",
        date: "July 12, 2024",
        category: "news",
        bgGradient: "from-yellow-400 via-yellow-300 to-yellow-200",
        textOverlay: "",
        textColor: "text-gray-800",
        path:"news6"
      },
      {
        id: 7,
        title: "Article 370: The End of Kashmir’s Special Status",
        excerpt: "The abrogation of Article 370 in August 2019 marked a seismic shift in India’s relationship with Jammu and Kashmir. To understand the full impact of this decision, we must look back to the tumultuous period of India’s partition and the unique circumstances that led to Kashmir’s accession to India....",
        image: "/blog-images/370-scaled-1.webp",
        author: "Abhinav",
        date: "July 9, 2024",
        category: "news",
        bgGradient: "from-yellow-400 via-yellow-300 to-yellow-200",
        textOverlay: "",
        textColor: "text-gray-800",
        path:"news7"
      },
  ]
  return (
    <div>
      <div className='m-12'>
  <h1 className='font-bold text-6xl ml-40 '>Author: Abhinav</h1>
  <p className='mt-12 ml-40'>An educator with over 13 years of experience in language and communication training. Worked with multi national companies like HCL, Barclay's, American Express and many more. Certified from British Council. 
  </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-50 mr-50">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              {/* Image Section with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${article.bgGradient} opacity-90`} >
                 <img src={article.image} className='w-full h-full'></img>
                  </div>
                
                {/* News Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>

                {/* Text Overlay for Samsung AI */}
                

                {/* Author Avatar */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="w-12 h-12 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    href={`/news/${article.path}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read Full Article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default page
