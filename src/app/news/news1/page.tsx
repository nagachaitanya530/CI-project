"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '~/app/_components/Navigation';
import Leftgrid from '~/app/_components/blogs-components/left-grid';
import PersonalBox from '~/app/_components/blogs-components/personal-box';
import BottomArticles from '~/app/_components/blogs-components/bottom-articles';
import AuthorInfo from '~/app/_components/blogs-components/author-info';
import { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle, 
  Share2,
  Send
} from 'lucide-react';
import Footer from '~/app/_components/Footer';
export default function VocabularyPage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = ( ) => {
   
    console.log('Subscribing with email:', email);
    // Handle subscription logic here
    alert('Subscription successful!');
    setEmail('');
  };
  


  const content=[
    {
    desc:["Let’s discuss the future of mobile AI based on consumer experiences, the significance of responsible AI development, and the critical role of collaboration in shaping AI for humanity,” he added, addressing the panel of industry experts and decision-makers present.",

"Using their laptops and iPhones to take notes, the audience members listened intently.",

"The conversation was started by moderator Carolina Milanesi, CEO and Founder of Heart of Tech and President of Creative Strategies, who asked the panelists to express their perspectives on the advancement of mobile artificial intelligence.",

"When we initially developed Galaxy AI, we conducted a thorough analysis of customer needs. A thorough grasp of our customers served as the foundation for our Galaxy AI, according to Choi. “We developed useful Galaxy AI features—not just gimmick features—based on our research to give our users the most meaningful experiences",

"More than 100 million smartphones have already been using Galaxy AI since its release earlier this year. “By the end of 2024, we anticipate reaching 200 million devices,” he said.",
" Subsequently, Samsung released the findings of an international research study carried out in collaboration with the University of London’s Goldsmiths’ Institute of Management Studies.",
"“This research with Samsung represents the first-ever, high-caliber academic investigation to comprehend the impact of mobile artificial intelligence on life quality,” stated Dr. Chris Brauer, the Director of Innovation at the University of London’s Goldsmiths’ Institute of Management Studies. “What we discovered clearly demonstrated the enormous potential that AI possesses.”",
"The research indicates that those who use AI frequently have a higher likelihood of reporting a higher quality of life than people who use AI seldom. These interviewees see AI as more than just a task automation tool. The study does highlight regional variations, though, with Korea having the highest percentage of frequent AI users (almost 25%) and the UK having the lowest percentage (about 9%).",
"The panelists also discussed how mobile AI may boost productivity and inspire innovation. The study, according to Daehyun Kim, Executive Vice President of Samsung Research’s Global AI Center at Samsung Electronics, is evidence that artificial intelligence will unleash people’s creativity."]

    }]

const content1=[
    
    {
    desc:["One of the main subjects of the talk was collaboration. Samsung is offering cutting-edge AI-based user experiences through open collaboration with companies like Google, Qualcomm Technologies, and others.",
        "“Google and Samsung’s collaboration was exemplified by the launch of Circle to Search with the Galaxy S24 series,” stated Jenny Blackburn, Google’s Vice President of User Experience for Gemini Experiences and Google Assistant. “It took some time for us to coordinate the introduction of that feature — to develop something that functions for everyone on various devices in a variety of scenarios.”",
        "The hybrid AI strategy that Galaxy AI used turned into yet another main topic of conversation.",
        "“The hybrid approach to mobile AI will be regarded as the only approach to mobile AI in years to come,” said Kim. “Hybrid AI combines cloud-based AI’s enormous resources and experiences with the responsiveness of on-device AI.”",
        "In order to create AI that is focused on people, Samsung works to innovate and collaborate, even if it has painstakingly constructed its own generative AI model.",
        "According to McGuire, “Hybrid scaling of AI will be required for many practical reasons but also from a user experience perspective.” “We’re dedicated to collaborating with Samsung, Google, and other partners to deliver robust on-device and cloud-based artificial intelligence.”",
        "According to Lucia Russo, an economist and policy analyst in the OECD’s Artificial Intelligence (AI) Unit and Digital Economy Policy Division, “regulation is still working to fully catch up with the speed of AI innovation.” “Innovation should be promoted, but not at the expense of morality or privacy.”",
        "In this age of hyperconnectivity, privacy is paramount. Fairness, transparency, and accountability are our three guiding principles, and we strive to deliver both safety and innovation,” stated Kim. “Users can select cloud-based services or have some features operate entirely on-device with the Galaxy AI Dashboard.”",
        "“In the near future, AI will be able to handle multiple input formats, such as text, photos, audio, and video, using multiple modalities. AI will also become contextual to understand the current scenario at the same time, he said. “A constant consideration in mobile AI innovation is providing users with choice and control.”",
        "Salon d’AI, Samsung’s inaugural AI media event, showed how the company is developing AI beyond just technological innovation by enhancing quality of life. As it works to build AI for everyone, Samsung is excited about the prospects that AI will present, all while keeping an eye on improved security and transparent cooperation."
    ]
    }
  ]


  return (
    <>
    <Navigation/>
      <Head>
        <title>Highlights from the Expert Panel on the Future of Mobile AI Responsible, cooperative AI innovation</title>
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
              backgroundImage: `url(/blog-images/samsung-ai-system-2048x1366.webp)`,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-opacity-40"></div>
          
          {/* Decorative Script Text Background */}
          
          <div className="relative z-10 text-center max-w-4xl px-6">
           
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Highlights from the Expert Panel on the Future of Mobile AI Responsible, cooperative AI innovation            </h1>
            
            {/* Author Info */}
            <AuthorInfo/>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Article Content */}
            <div className="lg:col-span-2">
              
              {/* Quote Section */}
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-6xl text-gray-400 mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                Samsung Electronics unveiled a record number of new products at Galaxy Unpacked 2024 on July 10 including the Galaxy Z Fold6, Galaxy Z Flip6, Galaxy Watch Ultra, Galaxy Watch7, Galaxy Ring and Galaxy Buds3 series. Now, the Galaxy AI ecosystem is stronger than ever with the expansion to foldables and wearables.
                </p>
              </div>

              {/* Featured Image with Caption */}
              <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/samsung-ai-system-2048x1366.webp   "></img>
                </div>
              </div>

              {/* Main Article Content */}
              <div className="prose max-w-none font-semibold">
              <div className='mt-12 mb-32'><p className='mb-12'>
              Samsung held a panel discussion at 3 Mazarium, a contemporary conference venue with classic Parisian architecture, on June 11 to highlight its dedication to mobile AI. Samsung hosted a spirited debate about the future of artificial intelligence (AI) with partners and industry executives from Google, Qualcomm Technologies, the Organization for Economic Co-operation and Development (OECD), and other organizations.
              </p>
              <p className='mb-32'>The auditorium was filled with over 300 media members and attendees eager to hear the experts’ opinions. In light of the tremendous influence that AI developments are expected to have on people’s lives, Samsung Newsroom considered some insightful comments made by attendees of Salon d’AI.</p>
              </div>

                {/* Engaging Vocabulary Image */}
                <div className="relative mb-8">
                 
                  {/* Decorative elements */}
                  
                
                </div>

                <div className='font-semibold mb-12 mt-12'>
                    <h1 className='font-bold text-4xl mb-4 mt-4'>An Approach to Mobile AI That Is Human-Centric</h1>
                    <p>Samsung Electronics Executive Vice President and Head of the Mobile R&D Office, Mobile eXperience Business, Won-joon Choi, introduced the panel.</p>
                    {content.map((data, index) => (
                        <div key={index}>
                            {data.desc.map((paragraph, pIndex) => (
                                <p key={pIndex} className="mb-4 mt-4">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mb-8">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/blog-images/Samsung-Mobile-Galaxy-Unpacked-2024-Salond-AI_main7.webp   "></img>
                </div>
              </div>

                <div className='font-semibold mb-12 mt-12'>
                    <h1 className='font-bold text-4xl mb-4 mt-4'>Open Collaboration Drives Innovation in Mobile AI</h1>
                    {content1.map((data, index) => (
                        <div key={index}>
                            {data.desc.map((paragraph, pIndex) => (
                                <p key={pIndex} className="mb-4 mt-4">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>

                

              </div>
              
            </div>
            

            {/* Sidebar */}
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