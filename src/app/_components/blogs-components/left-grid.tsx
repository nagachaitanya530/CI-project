import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
const Leftgrid = () => {
    const [email, setEmail] = useState('');
    
      const handleSubscribe = ( ) => {
       
        console.log('Subscribing with email:', email);
        // Handle subscription logic here
        alert('Subscription successful!');
        setEmail('');
      };
      const featuredCategories = [
        { name: 'News', count: 12, href: '/news/allnews' },
        { name: 'Blogs', count: 8, href: '/blog' },
        { name: 'IELTS Test', count: 15, href: '/ielts-test' }
      ];
  return (
   
      <div className="space-y-8">
              
              {/* Subscribe Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Subscribe</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    SUBSCRIBE
                  </button>
                </form>
                <p className="text-xs text-gray-600 mt-4">
                  By pressing the Subscribe button, you confirm that you have read our Privacy Policy.
                </p>
              </div>

              {/* Latest News Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Latest News</h3>
                
                <div className="space-y-6">
                  <article className="flex space-x-4">
                    <div className="w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center">
                     <img src="/blog-images/370-scaled-1.webp" className='h-16 w-16'></img>
                    </div>
                    <div>
                      <Link href="/news/news7">
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                        Article 370: The End of Kashmir's Special Status
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">July 18, 2024</p></Link>
                    </div>
                  </article>

                  <article className="flex space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img src="/blog-images/samsung-ai-system-2048x1366.webp" className="h-16"></img>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                        <Link href="/news/news1">
                        Highlights from the Expert Panel on the Future of Mobile AI Responsible, cooperative AI innovation</Link>
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">July 13, 2024</p>
                    </div>
                  </article>

                  <article className="flex space-x-4">
                    <div className="w-16 h-16 bg-blue-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img src="/blog-images/CNG-39.webp" className="h-16"></img>
                    </div>
                    <div>
                      <Link href="/news/news3">
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                        Supreme Court Grants Bail to Arvind Kejriwal in Delhi Liquor Policy Case
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">July 12, 2024</p></Link>
                    </div>
                  </article>

                  <article className="flex space-x-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img src="/blog-images/EngagingVocabularyActivitiesBLOG.webp" className="h-16"></img>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                        <Link href='/blogs-pages/vocabulary'>
                        How to Improve Communication Skills at Home: A Comprehensive Guide</Link>
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">June 27, 2024</p>
                    </div>
                  </article>

                  <article className="flex space-x-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img src="/blog-images/0.82156900_1632582022_1155x548-prime-minister-narendra-modi-s-address-to-the-united-nations-general-assembly.avif" className="h-16"></img>
                    </div>
                    <div>
                      <Link href="/news/news4">
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                        Editorial: India's Quest for Permanent Membership in the UN Security Council
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">June 26, 2024</p></Link>
                    </div>
                  </article>
                </div>
              </div>

              {/* English Skills Offer */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
              <div className="relative p-6 text-white text-center">
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                    OFFER
                  </div>
                  
                  <div className="mb-4">
                    
                        <img src="/home/professional-women.png" className=' '></img>
                   
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 ">
                    Improve your English Skills
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    Join our online English Classes
                  </p>
                 
                  <button className="bg-blue-400 text-white px-6 py-2 rounded font-semibold hover:bg-blue-500 transition-colors">
                  <Link href="/book-demo"> BOOK FREE DEMO </Link>
                  </button>
                </div>
              </div>
              

            
              {/* Featured Categories Widget */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    Featured Categories
                  </h3>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>
                
                <ul className="space-y-4">
                  {featuredCategories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        href={category.href}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {category.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
             



            </div>
    
  )
}

export default Leftgrid
