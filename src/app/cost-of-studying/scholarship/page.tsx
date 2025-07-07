import React from 'react'

import Link from 'next/link'
import { ChevronRight, Facebook, Linkedin, Navigation2, Twitter } from 'lucide-react'
import Cards from '../cards-studying'
import YourJourney from '~/app/_components/study-abroad/your-journey'
import FooterSection from '~/app/_components/footer1'
import NavigationSection from '~/app/_components/navigation1'

function Scholarships() {

const Ausis1=[
    {
    Image:"../scholarships-to-study-in-australia-for-indian-students-1.webp",
    para:[<>Australia, also lovingly called as the Land Down Under,
     is a top destination for Indian students seeking higher education, with its world-renowned universities and diverse academic programs. 
     However, studying abroad can be expensive, which is where scholarships come in helping to ease the cost of education. 
     There is numerous scholarship in Australia for Indian students, ranging from
      government-funded opportunities to university-specific programs. These scholarships help ease the financial burden of the international 
    students <Link href="/" className="text-blue-900  font-bold">studying in Australia</Link> and provide access to world-class education.</>,


    
    ]
}
]



const Ausis2=[
    {
        heading:"Types of Scholarships Available in Australia",
        description:<>Australia Government Scholarships

</>,
        list:[
    <>The Australian government offers several fully funded <Link href="/" className="text-blue-900  font-bold">scholarships fo Indian students</Link>
    through programs such as the Australia Awards. This prestigious scholarship covers tuition fees,
     living expenses, airfare, and health insurance. Another notable program is the Endeavour Postgraduate Scholarship,
      which offers full funding for master’s and doctoral students.

</>
        ]
    },
]

const Ausis3=[
    {
        heading:"",
        description:<>University Scholarships
</>,
        list:[
            <>Many Australian universities provide scholarships to attract international students. For example,
             the University of Sydney offers the Sydney Scholars Awards, a competitive scholarship for undergraduate students that helps 
             cover partial tuition fees. The University of Melbourne offers the Melbourne International Undergraduate Scholarship, which 
             is a partial fee remission for international students pursuing undergraduate programs. Australian National University (ANU)
              offers the Global Diversity Scholarship, providing substantial <Link href="/" className="text-blue-900  font-bold">financial assistance</Link>
                for both undergraduate and postgraduate students.

Postgraduate Programs: AUD 22,000 to AUD 50,000.

</>,
        
        ]
    },
    {
        heading:"",
        description:"Fully Funded Undergraduate Scholarships for International Students",
        list:[
            <>are also available that cover tuition, living expenses, and travel costs. The Australia Awards Scholarship is one of the most popular choices. Additionally, The Destination Australia Scholarship encourages students to study in regional areas of Australia, offering full financial support. The Charles Darwin University Vice-Chancellor’s International High Achievers Scholarship also provides complete funding for students with exceptional academic standing.


</>,
        ]
    },


    {
        heading:"",
        description:"Scholarships for Master’s Degree in Australia",
        list:[
            <>Australia is a great destination for postgraduate studies, and several scholarships are available for Indian students seeking master’s degrees. The Endeavour Postgraduate Scholarship, mentioned earlier, is available for students pursuing postgraduate courses. The University of Queensland offers the UQ Graduate School Scholarship, which covers tuition fees and living expenses for research-based master's and Ph.D. students.



</>,

        ],
        note:"Monash University also offers the Graduate Scholarship, which provides substantial financial support for international students pursuing master’s programs."
    }
]




const Ausis4=[
    {
        heading:"Eligibility Criteria for Scholarships in Australia",
        description:"Eligibility for Australia scholarships for international students varies, but common requirements include:",
        
        list:[
<>Academic Performance: Strong grades and academic achievements are often required, with minimum GPA or exam score thresholds.
</>,
            <>English Proficiency: Most scholarships require proof of English language skills, typically through <Link href="/" className="text-blue-900  font-bold"> IELTS</Link> or <Link href="/" className="text-blue-900  font-bold">TOEFL.</Link>

</>,
            <>Financial Need: Some scholarships assess financial background to offer need-based assistance.

</>,
            <>Course: Certain scholarships are available only for specific fields (e.g., STEM, business).


</>,
<>Additional Requirements: These can include work experience, leadership roles, volunteer work, and statement of purposes (SOPs).
</>
        
        ],
    },





]




const Ausis5=[
    {
        heading:"",
        description:<>
Conclusion</>,
        list:
    <>Australia continues to be an attractive destination for Indian students, thanks to its world-class education system and cultural diversity. 
    With the wide array of scholarship in Australia available, including fully funded government and university-specific scholarships, 
    Indian students can pursue their dreams without worrying about the financing their international education. Whether you’re applying for an undergraduate 
    or master’s degree, 
    there is a scholarship in Australia that can make your<Link href="/" className="text-blue-900  font-bold"> study abroad</Link> study abroad journey more accessible and financially manageable.</>
        ,

        
    },




    
]


const Ausis6=[
    {
    Image:"../scholarships-to-study-in-australia-for-indian-students-2 (1).webp",
    para:<>For further assistance or queries students can contact us, Edwise International and avail our wide range of services for students on destinations like 
        <Link href="/study-in-uk" className="text-blue-900  font-bold">Study in UK</Link>,
    <Link href="/study-in-usa" className="text-blue-900  font-bold">Study in USA</Link>,
    <Link href="/study-in-canada" className="text-blue-900  font-bold">Study in Canada</Link>,
    <Link href="/study-in-australia" className="text-blue-900  font-bold">Study in Australia</Link>,
    <Link href="/study-in-new-zealand" className="text-blue-900  font-bold">Study in New Zealand</Link>,
    <Link href="/study-in-singapore" className="text-blue-900  font-bold">Study in Singapore</Link>,
    <Link href="/study-in-ireland" className="text-blue-900  font-bold">Study in Ireland</Link>,
    <Link href="/study-in-france" className="text-blue-900  font-bold">Study in France</Link>,
    <Link href="/study-in-germany" className="text-blue-900  font-bold">Study in Germany</Link>, and many other countries     


</>

    
    
}
]







const faq=[
    {
        question:"What scholarships are available for Indian students in Australia?",
        Answer:<>Indian students can apply for government-funded scholarships like the Australia Awards, 
        Endeavour Postgraduate Scholarships, and various university-specific scholarships.</>,


        description:""
    },
    {
        question:"What is the cost of to study a Master’s degree in the Australia?",
        Answer:<>The Australia master degree fees typically ranges from AUD 25,000 - 55,000 per year for international students, depending on the program and university.


</>,
       
        description:""
    },
    {
        question:"Can Indian students get scholarships for undergraduate studies in Australia?",
        Answer:<>
Yes, there are many scholarship in Australia for Indian students which maybe fully funded or partially funded for the students pursuing undergraduate programs.



</>,
       
        description:""
    },
    {
        question:"Are there fully funded scholarships for Indian students in Australia?",
        Answer:<>Yes, there are fully funded scholarships available for Indian students,
         covering tuition, living expenses, airfare, and health insurance. 
         Some examples include the Australia Awards Scholarships and the Endeavour Scholarships and Fellowships.



</>,
        
        description:""
    },
    {
        question:"How can I apply for scholarships to study in Australia?",
        Answer:<>Students should research available scholarships, check eligibility,
         prepare required documents, and submit your application online at their respective portals before the deadline.


</>,
       
        description:<>
</>
    },
    {
        question:"Are there scholarships for master’s degrees in Australia?",
        Answer:<>Yes, there are several scholarships for master’s degree students,
         including the Endeavour Postgraduate Scholarship and university-specific options.

</>,
       
        description:<>
</>
    },
    {
        question:"Can I apply for scholarships after receiving an admission offer?",
        Answer:<>Some Australia university scholarship require you to have an offer of admission, while others can be applied for before or after applying to universities.



</>,
       


    },
{
        question:"Do Australian universities offer partial scholarships to study in Australia?",
        Answer:<>Yes, many<Link href="/" className="text-blue-900  font-bold"> universities in Australia</Link> offer partial scholarships that cover a portion of tuition fees for international students.

</>
       


    }

]








  return (
    <>
    <NavigationSection/>
     
    <div className="  md:flex-row  flex-col text-sm text-gray-600 px-5 sm:px-10 xl:px-20  mt-10">
      <div className='flex  text-sm text-gray-600  flex-col md:flex-row mb-5   md:text-xl' >
       <div className='flex '>
         <Link href="" className="hover:underline text-blue-600">Home</Link>
      <ChevronRight className="w-4 h-4 md:h-7 md:w-6" />

      <Link href="" className="hover:underline text-blue-600">Blogs</Link>
      <ChevronRight className="w-4 h-4 md:h-7 md:w-6" />
       </div>
<div>
        
      <span className="text-blue-800 ">
        Scholarships to Study in Australia for Indian Students
     </span>
      </div>
      </div>
      
      <h3 className='text-gray-800 xl:text-5xl text-3xl lg:text-4xl mb-10 mt-10'>Scholarships to Study in Australia for Indian Students
</h3>
     
    </div>
    
    
    <div className=''>
      
        <div className='flex flex-col gap-20 mb-10 '  >
            {
      Ausis1.map((items,index)=>(
        <div key={index} className='flex flex-col gap-4 px-10 xl:px-20'>
            {items.Image && <img src={items.Image} alt="Image"
            
             className='rounded-3xl  '
            /> }
        {items.para && 
        
        <ul className=' flex flex-col gap-5 mb-5 px-5 mt-10 xl:px-50 text-justify  '>{
                items.para.map((item,indexs)=>(
                    <div key={indexs}>
                    <li className='text-xl'>
                        {item}
                    </li>
                    </div>
                ))

            }
            
        </ul>
        
        }
        </div>
      ))  
    }
        </div> 

<div className='flex flex-col gap-20 mb-10'>
    {/* Why study an MBA degree Australia? */}




    {
        Ausis2.map((items, index)=>(
            <div key={index} className=' flex flex-col gap-10  px-5  xl:px-70 sm:px-15'>
                {items.heading && <h3 className='text-2xl xl:text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className='flex flex-col gap-4    '>
    {items.list.map((item,indexs)=>(
        <li key={indexs}>
            {item}
        </li>
    )) }
</ul>


}
            </div>
        ))
    }
</div>

<div className='flex flex-col gap-20 mb-10'>
    {/* Why study an MBA degree Australia? */}




    {
        Ausis3.map((items, index)=>(
            <div key={index} className=' flex flex-col gap-10  px-5  xl:px-70 sm:px-15'>
                {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className='flex flex-col gap-4 list-disc '>
    {items.list.map((item,indexs)=>(
        <li key={indexs}>
            {item}
        </li>
    )) }
</ul>


}
            </div>
        ))
    }
</div>








<div className='flex flex-col gap-20 mb-10 px-5  xl:px-70 sm:px-15' >
    



    {
        Ausis4.map((items, index)=>(
            <div key={index} className=' flex flex-col gap-10 '>
                {items.heading && <h3 className='text-2xl xl:text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className='flex flex-col gap-4 list-decimal px-5  '>
    {items.list.map((item,indexs)=>(
        <li key={indexs}>
            {item}
        </li>
    )) }
</ul>


}
            </div>
        ))
    }
</div>





<div className='flex flex-col gap-20 px-5  xl:px-70 sm:px-15'>
 



{
    Ausis5.map((items,index)=>(
        <div key={index} className='flex flex-col gap-4 '>
            {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
            {items.list && <p>{items.list}</p> }

            </div>
        ))
    }
</div>









{/* faq */}


<div className='px-5  xl:px-70 sm:px-15 '>
    <h3 className=' mt-10 text-3xl text-blue-600'>FAQs</h3>
    {
        faq.map((itm,idx)=>(
            <div key={idx} className=' flex flex-col py-5 gap-5'>
         {itm.question &&  <p className='text-xl xl:text-2xl'>{itm.question}</p> }
         {itm.Answer &&  <p>{itm.Answer}</p> }
         
         {itm.description &&  <p>{itm.description}</p> }
      
            </div>
        ))
    }
</div>





<div className='px-5  xl:px-70 sm:px-15' >
            {
      Ausis6.map((items,index)=>(
        <div key={index} className='flex flex-col gap-4'>
            {items.Image && <img src={items.Image} alt="Image "
            
             className='rounded-3xl  xl:h-80 w-[50rem] mt-10 mb-10 object-cover   '
            /> }
        {items.para && <p>{items.para}</p>
        
       
        
        }
        </div>
      ))  
    }


    

        </div> 
<div className="flex items-center gap-2 mt-10 mb-0 px-5 sm:px-15  xl:px-70">
  <p>Share Blog via :</p>
  <span className="flex gap-4">
    <Link href="" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
      <Facebook className="h-4 w-4" />
    </Link>
    <Link href="" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
      <Linkedin className="h-4 w-4" />
    </Link>
    <Link href="" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
      <Twitter className="h-4 w-4" />
    </Link>
    

  </span>
</div>


    </div>
    <Cards/>

    <YourJourney/>


<FooterSection/>

    </>
    
  )
}

export default Scholarships