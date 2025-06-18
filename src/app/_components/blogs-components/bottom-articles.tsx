import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
const BottomArticles = () => {
    const newsArticles = [
        {
          id: 1,
          title: "Article 370: The End of Kashmir's Special Status",
          author: "Abhinav",
          date: "July 18, 2024",
          comments: 0,
          backgroundImage: "url('/blog-images/370-scaled-1.webp')",
          category: "Politics",
          overlayText: "ARTICLE 370",
          overlayColor: "text-orange-400",
          colSpan: "col-span-1",
          image:"/blog-images/370-scaled-1.webp",
          path:"news/news7"
        },
        {
          id: 2,
          title: "SAMSUNG AI",
          subtitle: "Highlights from the Expert Panel on the Future of Mobile AI",
          description: "Responsible, cooperative AI innovation",
          author: "Abhinav",
          date: "July 13, 2024",
          comments: 0,
          backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
          category: "Technology",
          overlayText: "SAMSUNG AI",
          overlayColor: "text-blue-400",
          colSpan: "col-span-1",
          hasNetworkEffect: true,
          image:"/blog-images/samsung-ai-system-2048x1366.webp",
          path:'news/news1'
        },
        {
          id: 3,
          title: "Supreme Court rejects request to set up expert panel to oversee investigation into Hathras stampede",
          author: "Abhinav",
          date: "July 12, 2024",
          comments: 0,
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MTUxO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2Yjc3ODA7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8L3N2Zz4=')",
          category: "Legal",
          colSpan: "col-span-1",
          image:"/blog-images/AJHathras004-1720495947.webp",
          path:'news/news2'
        },
        {
          id: 4,
          title: "Supreme Court Grants Bail to Arvind Kejriwal in Delhi Liquor Policy Case",
          author: "Abhinav",
          date: "July 11, 2024",
          comments: 0,
          backgroundImage: "linear-gradient(135deg, #eab308 0%, #f59e0b 100%)",
          category: "Legal",
          colSpan: "col-span-1",
          image:"/blog-images/CNG-39.webp",
          path:'news/news3'
        },
        {
          id: 5,
          title: "Mastering Vocabulary at Home: A Guide to Fluency with Help from the National Institute of Language",
          author: "Abhinav",
          date: "July 10, 2024",
          comments: 0,
          backgroundImage: "linear-gradient(135deg, #f3e8d2 0%, #e2d4b7 100%)",
          category: "Education",
          colSpan: "col-span-1",
          hasVocabularyCard: true,
          image:"/blog-images/happy-teacher-during-class-elementary-260nw-2183353397.webp",
          path:'blogs-pages/vocabulary'
        },
        {
          id: 6,
          title: "How to Improve Communication Skills at Home: A Comprehensive Guide",
          author: "Abhinav",
          date: "July 15, 2024",
          comments: 0,
          backgroundImage: "linear-gradient(135deg, #f3e8d2 0%, #e2d4b7 100%)",
          category: "Education",
          colSpan: "col-span-1",
          hasVocabularyCard: true,
          image:"/blog-images/istockphoto-1307457391-612x612.jpg",
          path:'blogs-pages/public-speaking'
        }
      ];
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Header with line */}
        <div className="flex items-center mb-8">
          <hr className="flex-1 border-gray-300" />
          <h1 className="px-6 text-xl font-medium text-gray-600">More News</h1>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {newsArticles.map((article) => (
  
    <Link
      key={article.id}
      href={`/${article.path}`}
      className={`${article.colSpan} group cursor-pointer`}
    >
      <div
        className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
          <div className="mb-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              {article.category}
            </span>
          </div>

          <h2 className="text-gray-200 text-lg font-semibold mb-2 line-clamp-2 leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center text-gray-300 text-sm">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              {article.comments}
            </span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  )
}

export default BottomArticles;
