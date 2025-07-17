import { CheckCircle } from "lucide-react";

function MostCources()
{
      const titleWords = "Most Popular Group Courses".split(" ");
    return(
        <section>
                <div className="p-6 max-w-4xl mx-auto">
        
                
        
                  {/* Title with Icon */}
        
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-green-600 w-6 h-6" />
        
                    <h2 className="text-4xl font-bold text-gray-800 flex flex-wrap">
                      {titleWords.map((word, index) => (
                        <span
                          key={index}
                          style={{ animationDelay: `${index * 0.2}s` }}
                          className="inline-block mr-2 animate-loopFade"
                        >
                          {word}
                        </span>
                      ))}
                    </h2>
                  </div>
        
        
                 
        
                  {/* Description */}
        
                  <p className="text-gray-600 mb-4 font-bold">
                    Most comprehensive and effective group classes with no more than 10
                    students per batch.
                  </p>
        
                  <div className="border-t border-gray-300"></div>
                </div>
              </section>
              
    )
}
export default MostCources;