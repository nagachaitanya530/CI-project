import React, { useRef, useState } from 'react'

function Threecards() {

const cards = useRef<HTMLDivElement | null>(null);
const [active, setActive] = useState('about');

    const Additional=[
      {
          title:'Sunday Webinars',
          description:'Free access to sunday webinars with activities like Group Discussions, debates and presentations for optimal public speaking practice.',
          image: 'Reciver.jpg'
      },
      {
          title2:'Unlimited Practice',
          description2:'Join unlimited group discussions with 6 months GD support even after your course completion. Join us each Sunday for upto 6 months.',
          image2: 'Reciver2.jpg'
      },
      {
          title3:'Free Consultation',
          description3:'If you’re going for studies abroad, you can get a free consultation for your application, visa, filing, post, landing support and everything that you can think of.',
          image3: '/home/professional-women.png'
      }
      ]


  return (
    <>
<div id='Additional' className='scroll-mt-30'>
  <h1 className='text-center text-4xl p-6 sm:p-8 md:p-10'>Additional Facilities</h1>
</div>

<div className='flex  gap-20  p-6 sm:p-8 md:p-10  flex-col lg:flex-row  align-middle  justify-center  items-center'>
  
  <div className='bg-[radial-gradient(circle,_#1288a6,_#002e3b)] text-white h-[30rem] w-[20rem]   rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index} >
          <div className='p-4  m-4'>
          <h1 className='mb-4 mt-4.5'>{item.title}</h1>
          <p className=''>{item.description}</p>
          </div>
          {item.image && <img src={item.image} alt='Image' className='w-full  object-left rounded-md' />}
        </div>
      ))
    }
  </div>

  <div className='bg-[radial-gradient(circle,_#3f3f3f,_#050505)] text-white h-[30rem]  w-[20rem] rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index}>
 <div className='  '>
          <h1 className='ml-6 mt-12 mb-6'>{item.title}</h1>
          <p className='ml-6 mb-6.5'>{item.description}</p>
          </div>
          {item.image2 && <img src={item.image2} alt='Image' className='w-full object-cover rounded-md' />}
        </div>
      ))
    }
  </div>

  <div className='bg-[radial-gradient(circle,_#0c95b3,_#001336)] text-white h-[30rem] w-[20rem]  rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index}>
          <div className=''>
               <h1 className='ml-6 mt-12 mb-6 '>{item.title}</h1>
               <p className='ml-5'>{item.description}</p>
          </div>
          {item.image3 && <img src={item.image3} alt='Image' className=' w-full  object-cover rounded-md' />}
        </div>
      ))
    }
  </div>

</div>




    </>
  )
}

export default Threecards;