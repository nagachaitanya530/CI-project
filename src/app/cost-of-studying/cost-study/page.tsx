import React from 'react'

import Link from 'next/link'
import { ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import Cards from '~/app/cost-of-studying/cards-studying'
import NavigationSection from '~/app/_components/navigation1'
import YourJourney from '~/app/_components/study-abroad/your-journey'
import FooterSection from '~/app/_components/footer1'

function CostAustralia() {

const Ausis1=[
    {
    Image:"../Cost-of-Studying-in-Australia-for-Indian-Students-1.webp",
    para:[<>Australia is one of the most popular destinations for international students, offering a high standard of education,
     a diverse cultural experience, beautiful natural environment and a diverse wildlife which includes the iconic kangaroo 🦘.
      Before making the leap to entering the student life in the country, it's important to understand the cost of studying in Australia for international students.
       In this blog post,
     we’ll cover everything from university fees to living expenses and available scholarships to help you plan your study abroad journey.</>,


    
    ]
}
]



const Ausis2=[
    {
        heading:"Top Universities in Australia",
        description:<>Australia is home to some of the <Link href="#" className='text-blue-700'>world’s top universities</Link>
        , known for their academic excellence and recognition in any part of the world. Here are a few of the top universities that stand out:
</>,
        list:[
            <>University of Melbourne – Ranked <span className='text-black text-xl font-bold'>#13 in the world</span> (QS World Ranking), it is renowned for its research programs and diverse student body.</>,
            <>Australian National University (ANU) – Located in Canberra, ANU offers a strong emphasis on research and is known for its experienced training faculty.
</>,
            <>University of Sydney – It is one of the oldest and most prestigious <Link  href="#" className='text-blue-700 text-xl'> universities in Australia</Link>, offering a wide range of programs in arts, science, engineering, and more.

</>,
            <>University of New South Wales (UNSW) – Offers a variety of degree programs and has a strong reputation for its engineering, architecture, and business schools.

</>,
<>University of New South Wales (UNSW) – Offers a variety of degree programs and has a strong reputation for its engineering, architecture, and business schools.</>
        
        ]
    },
]

const Ausis3=[
    {
        heading:"Australia University Fees: What You Need to Know",
        description:<>The cost of tuition can vary depending on the university and the program you choose to <Link href="#" className='text-blue-700'>study in Australia.</Link> . Here is a complete breakdown of Australia university fees for international students (*per year),</>,

        list:[
            <><span className="font-bold text-gray-900">Undergraduate Programs: </span>AUD 20,000 to AUD 45,000.
</>,

            <> <span className="font-bold text-gray-900">Postgraduate Programs:</span> AUD 22,000 to AUD 50,000.

</>,
        
        ]
    },
    {
        heading:"",
        description:"Program-Specific Fees",
        list:[
            <><span className="font-bold text-gray-900">Humanities and Social Sciences:</span> AUD 20,000 to AUD 30,000

</>,

            <> <span className="font-bold text-gray-900">Engineering and Computer Science:</span> AUD 25,000 to AUD 45,000


</>,
<><span className="font-bold text-gray-900">Business and Law:</span> AUD 20,000 to AUD 45,000

</>,

            <><span className="font-bold text-gray-900">Health and Medicine: </span>AUD 30,000 to AUD 50,000


</>,
        ]
    },


    {
        heading:"",
        description:"In addition to tuition fees, students may also have to pay additional costs such as:",
        list:[
            <>Student services and amenities fees


</>,

            <>Health insurance fees (Overseas Student Health Cover – OSHC)



</>,
<>Library and lab fees (if applicable)


</>,

        ]
    }
]




const Ausis4=[
    {
        heading:"Scholarships in Australia for International Students",
        description:"The cost of studying in Australia can be significantly offset with a numerous scholarship available for international students to help ease the financial burden. Some of the prominent scholarships include:",

        list:[
            <>Australia Awards Scholarships – Fully funded scholarships provided by the Australian government for students from developing countries.
</>,
            <>Endeavour Postgraduate Scholarships – For international students undertaking postgraduate programs in Australia.

</>,
            <>University-Specific Scholarships – Many universities offer <Link href="#" className='text-blue-700 text-xl'> scholarships for international students</Link>, including merit-based and need-based scholarships which vary from institution to institution.


</>,
            <>Research Training Program (RTP) Scholarships – For international students undertaking research-based programs at Australian universities.


</>,
        
        ],
        note:"In addition to this, private organizations and governments may offer scholarships to students pursuing particular fields of study or demonstrating excellence in academics."
    },





]



const Ausis5=[
    {
        heading:"Cost of Living in Australia for International Students",
        description:"On average, living cost in Australia for international students can be expected to range between AUD 20,000 and AUD 27,000 per year. Here's a complete breakdown of typical living expenses:",

        list:[
            <>Accommodation: Rent varies significantly depending on location and type of accommodation:
            <br />
            Shared accommodation: AUD 90–AUD 200 per week
            <br />
            University-managed accommodation: AUD 360 – AUD 1,170 per month
            <br />
            Private rental (house/apartment): AUD 1,460 – 1,760 per month
</>,
            <>Transport: Students can usually expect to pay around AUD 30–AUD 70 per week for a transportation pass.



</>,
            <>Other costs include personal expenses such as entertainment, clothing, mobile phone plans, and study materials. This can vary greatly based on the individual’s personal spending habits.

</>,
<>Utilities and Other Expenses: Utilities (electricity, water, internet) may cost around AUD 20 – AUD 50 per week, depending on your type of accommodation.</>
       
    
        
        ],
        note:"Other costs include personal expenses such as entertainment, clothing, mobile phone plans, and study materials. This can vary greatly based on the individual’s personal spending habits."
    },




    
]



const Ausis6=[
    {
        heading:"Conclusion",
        description:<>
<Link href="#" className='text-blue-700 text-2xl'> Studying in Australia</Link> is an exciting and rewarding experience, but it comes with significant costs. By planning ahead,
 researching scholarship opportunities, and managing living expenses, international students can make their study dreams a reality in the Land Down Under.
  Just remember to consider both tuition fees and living costs as part of your overall budget when applying.
 With the right strategies in place, students will be able to thrive both academically and financially in Australia!</>,
        list:[
    
        ],

        Image:"../Cost-of-Studying-in-Australia-for-Indian-Students-2.webp"
    },




    
]




const faq=[
    {
        question:"What is the Australia tuition fees for international students?",
        Answer:<>Tuition fees for international students typically range from AUD 20,000 to AUD 50,000 per year, depending on the program and university. Additionally, living expenses can range from AUD 20,000 to AUD 27,000 per year.</>,
        
        description:""
    },
    {
        question:"What is the cost of to study a Master’s degree in the Australia?",
        Answer:<>The Australia master degree fees typically ranges from AUD 25,000 - 55,000 per year for international students, depending on the program and university.


</>,
       
        description:""
    },
    {
        question:"Are there scholarships available for international students in Australia?",
        Answer:<>
Yes, there are various scholarships available, including government-funded programs like the Australia Awards and Endeavour Postgraduate Scholarships, as well as university-specific scholarships and research-based funding options.


</>,
       
        description:""
    },
    {
        question:"How much money do I need to live in Australia as an international student?",
        Answer:<>On average, international students spend between AUD 20,000 and AUD 27,000 per year on living expenses. This includes the cost of accommodation, food, transport, and personal costs.



</>,
        
        description:""
    },
    {
        question:"Can I work while studying in Australia?",
        Answer:<>Yes, international students in Australia can work up to 40 hours per fortnight during the semester and full-time during semester breaks.

</>,
       
        description:<>
</>
    },
    {
        question:"What is the cheapest university in Australia?",
        Answer:<>There are some options if the student wants to study at a low cost university in Australia, especially in regional areas. Some of the most affordable universities in Australia include the Charles Darwin University and the University of Southern Queensland which offer affordable tuition rates compared to some of the larger institutions.


</>,
       
        description:<>
</>
    },
    {
        question:"What is the student visa Australia cost for international students?",
        Answer:<>The Australia student visa fee will be approximately AUD 650 which comes under student visa (subclass 500) in Australia.


</>,
       
        description:<>
        For further assistance or queries students can contact us, Edwise International and avail our wide range of services for students on destinations like 
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








  return (
    <>
    <NavigationSection/>
    <div className="  md:flex-row  flex-col text-sm text-gray-600 px-5 sm:px-10 xl:px-30  mt-10">
      <div className='flex  text-sm text-gray-600  flex-col md:flex-row mb-5   md:text-xl' >
       <div className='flex '>
         <Link href="" className="hover:underline text-blue-600">Home</Link>
      <ChevronRight className="w-4 h-4 md:h-7 md:w-6" />

      <Link href="" className="hover:underline text-blue-600">Blogs</Link>
      <ChevronRight className="w-4 h-4 md:h-7 md:w-6" />
       </div>
<div>
        
      <span className="text-blue-800 ">
         Cost of Studying in USA for Indian Students
     </span>
      </div>
      </div>
      
      <h3 className='text-gray-800 xl:text-5xl text-3xl lg:text-4xl mb-10 mt-10'>Cost of Studying in USA for Indian Students
</h3>
     
    </div>
    
    <div className='md:px-20'>
       
    
        <div  >
            {
      Ausis1.map((items,index)=>(
        <div key={index} className='flex flex-col gap-4 text-justify px-10'>
            {items.Image && <img src={items.Image} alt="Image"
            
             className='rounded-3xl '
            /> }
        {items.para && 
        
        <ul className='xl:px-40 flex flex-col gap-5 '>{
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

<div className='flex flex-col gap-20 mb-10 px-10 mt-10 xl:px-50'>
    {/* Why study an MBA degree Australia? */}




    {
        Ausis2.map((items, index)=>(
            <div key={index} className='flex flex-col gap-4 text-justify'>
                {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className=' flex flex-col gap-5  list-decimal'>
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

<div className='flex flex-col gap-20 mb-10 px-10 xl:px-50 '>
    {/* Why study an MBA degree Australia? */}




    {
        Ausis3.map((items, index)=>(
            <div key={index} className='flex flex-col gap-4 text-justify'>
                {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className='flex flex-col gap-5  list-disc'>
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








<div className='flex flex-col gap-20 mb-10 px-10 text-justify xl:px-50'>
    



    {
        Ausis4.map((items, index)=>(
            <div key={index} className=' flex flex-col gap-10'>
                {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className=' flex flex-col gap-5  list-decimal'>
    {items.list.map((item,indexs)=>(
        <li key={indexs}>
            {item}
        </li>
    )) }
</ul>


}
{items.note && <p className='text-xl'>{items.note}</p> }
            </div>
        ))
    }
</div>


<div className='flex flex-col gap-20 mb-10 px-10 text-justify xl:px-50'>
    {/* Why study an MBA degree Australia? */}




    {
        Ausis5.map((items, index)=>(
            <div key={index} className=' flex flex-col gap-10'>
                {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
                {items.list &&

<ul className=' flex flex-col gap-5  list-decimal '>
    {items.list.map((item,indexs)=>(
        <li key={indexs}>
            {item}
        </li>
    )) }
</ul>


}
{items.note && <p className='text-xl'>{items.note}</p> }
            </div>
        ))
    }
</div>


<div className='flex flex-col gap-20 px-10 text-justify xl:px-50'>
    {/* Why study an MBA degree Australia? */}



{
    Ausis6.map((items,index)=>(
        <div key={index} className='flex flex-col gap-4'>
            {items.heading && <h3 className='text-3xl text-blue-800'>{items.heading}</h3> }
                {items.description && <p className='text-xl'>{items.description}</p> }
            {items.Image && <img src={items.Image} alt="Image"
            
             className='rounded-3xl  w-[25rem] mt-10 mb-10'
            /> }


            </div>
        ))
    }
</div>



{/* faq */}


<div className='px-10 text-justify  xl:px-50 '>
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
    <div className="flex items-center gap-2 mt-10 mb-0 xl:px-50 sm:px-10 px-6" >
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

export default CostAustralia