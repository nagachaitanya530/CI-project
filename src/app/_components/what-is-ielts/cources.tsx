import { motion } from "framer-motion";

function BestCources()
{
     interface CardProps {
    image: string;
    title: string;
    description: string;
    badge?: string;
  }
    function Card({ image, title, description, badge }: CardProps) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          {badge && (
            <span className="absolute top-2 right-2 bg-red-400 text-white text-xs px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="font-bold text-lg mb-1">{title}</div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
    return(
         <section>
                <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
               
        
                    {/* Left Sticky Section */}
        
                    <div className="md:col-span-1">
                      <div className="sticky top-10 left-40">
                        <img
                          src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/verfied-badge.png"
                          alt="Verified Badge"
                        />
                        <h4 className="text-2xl font-semibold py-2">Best Online IELTS Courses</h4>
                        <h1 className="text-7xl font-bold">Live Class</h1>
                        <h2 className="text-3xl font-semibold py-2">Certified Expert Coaches</h2>
                        <p className="w-1/2">
                          Get your desired IELTS Score in live online classes with British Council & Cambridge Certified Trainers.
                          Join India’s best online IELTS courses at National Institute of Langauge.
                        </p>
                        <br />
                        <div className="flex items-center">
                          <hr className="w-6 pr-7" /> &nbsp;
                          <a href="/book-demo" className="pl-5 font-semibold text-lg">
                            Book a Free DEMO 📓
                          </a>
                        </div>
                      </div>
                    </div>
        
        
        
                    {/* Right Scrollable Cards Section */}
        
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   
                      <div className="translate-y-0">
                        <Card
                          image="/Ielts/section2.jpg"
                          title="Customised TestPrep™ Platform"
                          description="Specially developed online conferencing system to make it feel like a physical classroom."
                        />
                      </div>
                      <div className="translate-y-10">
                        <Card
                          image="/Ielts/section2.1.jpg"
                          title="Dual Certified IELTS™ Coaches"
                          description="A truly interactive experience with experts who have immense experience & Competence"
                          badge="USP"
                        />
                      </div>
                      <div className="translate-y-0">
                        <Card
                          image="/Ielts/section2.2.jpg"
                          title="Performance Analytics"
                          description="Track your progress and identify key focus areas to improve your band score."
                        />
                      </div>
                      <div className="translate-y-10">
                        <Card
                          image="/Ielts/section2.3.jpg"
                          title="Live Practice Sessions"
                          description="Experience real exam simulations with expert feedback in real-time."
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
        
              </section>
              
    )
}
export default BestCources;