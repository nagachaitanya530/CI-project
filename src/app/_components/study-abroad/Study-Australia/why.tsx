import { FileBadge2, ShieldCheck } from "lucide-react";
import BookConsultationForm from "../BookConsultationForm";

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
interface WhyStudy{
   
    heading:string
    description: string;
}

const items : WhyStudy[] = [
    {
     heading:"Globally Recognised Degrees",
     description:"Australian degrees are recognised and valued across the globe. This means that if you study in Australia and complete a program, the degree will prove to be of great value for finding employment or pursuing further education anywhere in the world."   
    },
    {
     heading:"Seven of the Best Student Cities in the World",
     description:"According to the QS Best Student Cities Rankings for 2024, seven cities in Australia have secured positions within the top 100 best student cities worldwide."   
    },
    {
     heading:"Post Study Work Up To 6 years",
     description:"Students who have completed their degree in Australia are eligible for post-study work visa ranging from 2 to 4 years, depending on whether they studied a Bachelor's, Master's or Doctoral degree. Additionally, those studying and living in designated regional areas can obtain a visa for up to 6 years."
    },
    { 
     heading:"Nine of the World's Top 100 Universities",
description:"Australia is home to nine universities that rank amongst the top 100 universities in the world. The best universities in Australia gives the students the opportunity to pursue world-class education and research opportunities across a wide range of programs."
    },
    { 
     heading:"A Safe And Diverse Environment",
description:"Australia has a multicultural environment, which is seen in its diverse student population. The top universities in Australia offers a secure and culturally diverse environment ideal for international students."
    },
    { 
     heading:"Masters Duration: 1-2 Years",
description:"In Australia, the typical duration of a Master's Degree Program ranges from one to two years. They offer a concise and comprehensive education across various disciplines like the Arts, Business, IT, and a lot more."
    },
];

function WhyStudy(){
    return(
        <>
         <section>
            <div className="flex p-10 xl:flex-row flex-col">

                {/* left side why Study in "CountryName" */}
                <div className="w-full lg:w-9xl  md:p-10 flex flex-col">
                    <h1 className="text-xl md:text-2xl lg:text-5xl mb-5">Why <span className="font-semibold underline decoration-red-500"> Study in Australia?</span></h1>
                        {items.map((item,index)=>{
                            return (
                                <div key={index} className="flex  flex-col">
                                    <div className="flex justify-between gap-5 md:p-5 flex-col md:flex-row">
                                        <FileBadge2 className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg md:text-2xl mb-5">{item.heading}</h3>
                                            <p className="text-lg md:text-xl">{item.description}</p>
                                        </div>
                                    </div>

                                    <hr className="my-5 " />
                                </div>
                            );
                        })}
                </div>

                {/* Right Form  */}
                      

            <div className="h-full">
<<<<<<< Updated upstream
{/* <BookConsultationForm/> */}
=======
<BookConsultationForm/>
>>>>>>> Stashed changes
            </div>

        </div>
          
        </section> 
        
        </>
    );
}

export default WhyStudy;