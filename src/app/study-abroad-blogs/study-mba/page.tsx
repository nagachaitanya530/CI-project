"use client"
import { useState } from 'react';
import Link from 'next/link'
<<<<<<< HEAD
import NavigationSection from '~/app/_components/navigation1';
=======
import Navigation from '~/app/_components/Navigation';
>>>>>>> feature/UpdatePage
const MBACanadaBlog = () => {
  return (
    <div>
      <NavigationSection/>
       <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <nav className="bg-gray-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
            <span className="text-gray-400">{'>'}</span>
            < Link href="" className="text-blue-600 hover:text-blue-800 font-medium">Blogs</Link>
            <span className="text-gray-400">{'>'}</span>
            <span className="text-gray-600 font-medium">MBA in Canada for Indian Students</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
          MBA in Canada for Indian Students
        </h1>

        {/* Canada Map Section */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src="/study-aborad/blog/mba-in-canada-for-indian-students-Thumbnail.webp" className=' w-full'></img>
          </div>
        </div>

        {/* Why Study MBA in Canada Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Why Study MBA in Canada?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-lg">
              Canada is known for its high-quality education, and it ranks{' '}
              <span className="font-bold text-gray-900">2nd globally</span> for its education system,
              with top universities offering MBA programs. The average MBA tuition fee ranges between{' '}
              <span className="font-bold text-gray-900">CAD 30,000 – CAD 40,000</span>, making it more affordable than destinations like the US or UK. Cities like Toronto and
              Vancouver rank among the top 10 globally for quality of life, while Canada's business sector offers
              over <span className="font-bold text-gray-900">200,000 job openings</span> annually. With its welcoming, diverse environment, Canada is the perfect
              place to grow your career and future and thus an MBA degree from{' '}
              <span className="font-bold text-blue-600">best business schools in Canada</span>{' '}
              serves as a gateway to success in business and various other industries.
            </p>
          </div>
        </section>

        {/* Top Reasons Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Top Reasons to Study MBA in Canada</h2>
          
          <p className="text-lg text-gray-700 mb-12">
            Here are the top 4 reasons why international students choose to study an MBA in Canada:
          </p>

          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. <span className="text-blue-600">Affordable Fees:</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Compared to other international destinations like the UK, USA, and Australia, the
                average MBA cost in Canada for tuition ranges from CAD 20,000 to CAD 40,000. This fee structure is
                more affordable than in many other countries.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. <span className="text-blue-600">Quality Education:</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Canada is renowned for offering some of the highest-quality education in the
                world. Most Canadian MBA colleges and universities are highly preferred due to their up-to-date
                curriculum and excellent learning experiences.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. <span className="text-blue-600">Value for Your Money:</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Although an MBA degree in Canada can be expensive, it is often considered an
                investment that pays off in the long run. The program promises a full return on your investment, as it
                leads to higher career advancement and increased earning potential.
              </p>
            </div>

            {/* Reason 4 - Implied from context */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                4. <span className="text-blue-600">Networking Opportunities:</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Canada offers excellent networking opportunities with its diverse business environment and
                strong connections to global markets, providing valuable career prospects for international students.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Text */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            With a strong emphasis on quality education, networking opportunities, and affordability, Canada is
            an excellent choice for pursuing an MBA.
          </p>
        </div>

        {/* Canada Scenic Image Section */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
           <img src="/study-aborad/blog/mba-in-canada-for-indian-students-2.webp" className='w-full'></img>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-4">
            For any further information and to{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">study in UK</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">study in USA</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">study in Canada</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">study in Australia</a>
          </p>
        </div>

        {/* Floating Help Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MBACanadaBlog;