"use client"
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '~/app/_components/Navigation';
import { useState } from 'react';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import Footer from '~/app/_components/Footer';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
export default function publicspeakingPage() {
  const description=[
    {
        title:"Get organized:",
        content:"Preparation is the vital key to perform well. You must perform your presentation beforehand as many times as possible. If possible, visit the place where you are going to perform and act upon assuming you are performing live and the crowd is watching, this is how you’ll feel more confidence. In addition to this, it will prevent you from technical glitch or prepare you for worst."
    },
    {
        title:"Know your audience:",
        content:"It can be possible that on podium you start feeling nervous and that nervousness block the flow of thoughts. Take a one second pause and start breathing. It will calm you. Take a deep breath before you get on the stage, and just loosen up a bit. Don’t be too rigid. Be calm. "
    },
    {
        title:"Control your breathing:",
        content:"Preparation is the vital key to perform well. You must perform your presentation beforehand as many times as possible. If possible, visit the place where you are going to perform and act upon assuming you are performing live and the crowd is watching, this is how you’ll feel more confidence. In addition to this, it will prevent you from technical glitch or prepare you for worst."
    },
    {
        title:"Be positive:",
        content:"Don’t feel guilty about the fear. No matter how well you prepared, there will be always a fear while speaking. Don’t get afraid if there is a silence during your presentation or you get blank. Just take a few steps or take a deep breath and begin. Believe it audience won’t mind a pause. Taking stress of performing impeccably cause fear and nervousness. It is okay to make a or two mistakes, it is not going to ruin your performance. Sometimes being flawed is real."
    },
    {
        title:"Embrace the imperfection:",
        content:"Preparation is the vital key to perform well. You must perform your presentation beforehand as many times as possible. If possible, visit the place where you are going to perform and act upon assuming you are performing live and the crowd is watching, this is how you’ll feel more confidence. In addition to this, it will prevent you from technical glitch or prepare you for worst."
    },
    {
        title:"Meditation:",
        content:" If practicing alone can’t help you. You can join speaking club by paying very minimal cost. There are plenty of speaking club that conduct speaking activity on daily basis or on weekly basis where you may find people like you who have been going through the same problems as you. There you can practice and get feedback from professionals."
    },
    {
        title:"Join speaking club:",
        content:"Preparation is the vital key to perform well. You must perform your presentation beforehand as many times as possible. If possible, visit the place where you are going to perform and act upon assuming you are performing live and the crowd is watching, this is how you’ll feel more confidence. In addition to this, it will prevent you from technical glitch or prepare you for worst."
    },
    {
        title:"Embrace the imperfection:",
        content:"Preparation is the vital key to perform well. You must perform your presentation beforehand as many times as possible. If possible, visit the place where you are going to perform and act upon assuming you are performing live and the crowd is watching, this is how you’ll feel more confidence. In addition to this, it will prevent you from technical glitch or prepare you for worst."
    },  
  ]

  return (
    <>
    <Navigation/>
      <Head>
        <title>Overcoming fear of public speaking in English</title>
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
              backgroundImage: `url(/blog-images/image.webp)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
         
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white ">
            Overcoming fear of public speaking in English
            </h1>
            
            {/* Author Info */}
            <AuthorInfo/>
            
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/image.webp"></img>
                </div>
                
              </div>

              {/* Main Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Public speaking is an art and who doesn’t want to master it but the question is HOW? Like other art forms it, too, requires persistence, determination as well as consistency in order to master it.

Though most of the people know the significance of public speaking skill; yet many face challenges while speaking before the audience.

People fear of going up to stage as there is always an anxiety whenever there is a spotlight on you. It feels as if audience is going to eat the way a carnivore eats the poor lamb.

People-who are introvert-get perspiration on their foreheads whenever their names are called upon.
                </p>

               <h1 className='text-6xl mb-8'>How to get rid of the fear of public speaking: –</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-12 mt-4">
                It is said that practice makes a man perfect and it is true when it comes about public speaking skill. There is plethora of articles, videos etc. available on internet which might help you to some extent. But going through videos & reading article don’t help alone unless you practice. The easiest and most common trick is to practice in front of mirror or record your video before presenting a presentation.
                 </p>
                 <p className="text-lg text-gray-700 leading-relaxed mb-12">
                 It would be great if you recite it in front of your family member with whom you are comfortable. Certainly, it will assist you to overcome your fear a bit.
                </p>
               
                <div>
                {description.map((data,index) =>
                
                  <p className="text-lg text-gray-700 leading-relaxed mb-12 mt-4"  key={index} ><span className='font-bold'>{data.title} –</span> {data.content}</p>
                    
                )}
                 </div> 
                 <div>

<p className='mt-4 mb-8'>Getting nervous in particular situation is common and public speaking is no exception. There are numerous terms such stage fear, performance anxiety etc. Seeking an advice from consulted and taking concrete steps towards overcoming this fear is the only way to go forward in your life.</p>

<p>Cutting yourself from social life is never be an option. Make yourself bigger than these fear by practicing, taking part in public events, competitions as well as joining public speaking club and you will see; there is light at the end of tunnel.
</p></div>
                <div>

                </div>

               

              </div>
            </div>
           
                <Leftgrid/>
          </div>
        </div>
         <PersonalBox/>
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