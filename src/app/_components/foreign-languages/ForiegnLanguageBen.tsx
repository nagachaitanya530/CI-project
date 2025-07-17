import React from 'react';
import BookingSystem from '../book-demo';

const ForeignLanguageBenefits = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            So, what exactly is the point of learning a foreign language?
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Essentially, the benefits of learning a foreign language have the power to position you for success in practically every element of your personal and professional life. Take a look at these seven compelling arguments for learning a foreign language:
          </p>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="/question-mark.png"
              alt="Woman thinking illustration"
              className="w-78 h-78 object-contain"
            />
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-16 lg:space-y-24 relative px-4 lg:px-0">

          {/* Template for each benefit block */}
          {/* Benefit 1 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:pl-32">
            <div className="absolute left-1/2 lg:-left-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">01</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Learning a foreign language is a glamorous endeavour.</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Hearing someone speak a foreign language, with its warmth and luscious sounds, is like hearing the sound of gold rushing in to embrace you...
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn a foreign language, and you might just find yourself fascinated and lured to your exotic prowess by that certain someone...
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="relative flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start text-center lg:text-right lg:pr-32">
            <div className="absolute left-1/2 lg:-right-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">02</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Learning a foreign language makes travelling less expensive and more convenient.</h2>
              <p className="text-gray-600 text-sm leading-relaxed">It’s ten o’clock at night. Just after landing from a 14-hour flight, all you want to do is fall asleep face-first into your pillow. It is possible that locating a spot to crash if you are only equipped with a few navigational terms in the local language will be a painfully tedious procedure if you are not fluent in the language. If you don’t know the correct jargon, you’ll be confined to more expensive or slower solutions. When learning a foreign language, you can save yourself a lot of time, money, and heartache by doing so. The same way that a few key phrases may make transit that much faster and less expensive, the same is true when it comes to choosing a location to live. This translates into lower pricing and a better (and even more realistic) experience for customers.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:pl-32">
            <div className="absolute left-1/2 lg:-left-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">03</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Learning a foreign language opens the door to a plethora of employment opportunities.</h2>
              <p className="text-gray-600 text-sm leading-relaxed">  It’s no secret that learning a foreign language can help you boost your job prospects in the long run. A greater number of organisations than ever before are conducting business in several—and often dozens of—countries throughout the world, but they can’t do so unless they hire employees who are fluent in at least one foreign language. Even at small, local businesses, the ability to communicate in a second language is likely to set you apart from other candidates in the hiring process. Moreover, in an increasingly competitive labour market, why not offer yourself every potential advantage?
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="relative flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start text-center lg:text-right lg:pr-32">
            <div className="absolute left-1/2 lg:-right-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">04</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Learning a new language stimulates the brain.</h2>
              <p className="text-gray-600 text-sm leading-relaxed"> Number of studies show that learning a new language has cognitive benefits. A bilingual brain is more creative, better at problem solving and has a larger memory than monolinguals. These benefits not only make learning new languages easier, but learning anything. In today’s hectic multitasking world, rapid task switching is critical. Bilinguals can switch tasks faster and handle more tasks simultaneously than monolinguals.
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:pl-32">
            <div className="absolute left-1/2 lg:-left-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">05</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Make significant friends while learning a new language.</h2>
              <p className="text-gray-600 text-sm leading-relaxed">  Meeting new people and making lifetime friends are worthy goals, and learning a new language is a surefire method to achieve them. Language helps us express ourselves, connect with others, and build meaningful connections. Speaking a foreign language not only broadens your social circle, but it also helps you connect with native speakers. Plus, speaking a foreign language is like communicating with new friends in code. This isn’t a flawless Enigma machine, but it can help make discussing Friday night’s drunkenness less embarrassing.
              </p>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className="relative flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start text-center lg:text-right lg:pr-32">
            <div className="absolute left-1/2 lg:-right-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">06</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Learning a new language broadens your horizons.</h2>
              <p className="text-gray-600 text-sm leading-relaxed">  Foreign language studies is part of a liberal arts education. Educating is leading out of imprisonment, narrowness, and darkness. Learning a new language and immersing oneself in a new culture and perspective is the surest way to become an open-minded, understanding, accepting person. Once you realise that we are all cultural beings, products of our circumstances, and that your own attitudes and behaviours are culturally based, you are ready to see others in a more positive perspective. Understanding where you and others come from is a terrific, eye-opening experience.
              </p>
            </div>
          </div>

          {/* Benefit 7 */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:pl-32">
            <div className="absolute left-1/2 lg:-left-20 top-0 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-[4rem] lg:text-[8rem] font-bold text-gray-400 z-0 pointer-events-none">07</div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full lg:w-3/4 relative z-10 mt-20 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Learning a foreign language helps you comprehend your own culture.</h2>
              <p className="text-gray-600 text-sm leading-relaxed">  Learning a foreign language might help you better comprehend your own local tongue and culture. A foreign language might help you in unforeseen ways. You will become more aware of your first language’s grammar, vocabulary, and pronunciation patterns. This explains why learning a second language improves monolinguals’ hearing, reading, and writing skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BookingSystem/>
    </section>
  );
};

export default ForeignLanguageBenefits;
