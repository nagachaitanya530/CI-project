import React, { useRef, useState } from 'react'

function Threecards() {

const cards = useRef<HTMLDivElement | null>(null);
const [active, setActive] = useState('about');

    const Additional=[
      {
          title:'Sunday Webinars',
          description:'Free access to sunday webinars with activities like Group Discussions, debates and presentations for optimal public speaking practice.',
          image: '/home/professional-women-3.png'
      },
      {
          title2:'Unlimited Practice',
          description2:'Join unlimited group discussions with 6 months GD support even after your course completion. Join us each Sunday for upto 6 months.',
          image2: '/home/professional-women-2.png'
      },
      {
          title3:'Free Consultation',
          description3:'If you’re going for studies abroad, you can get a free consultation for your application, visa, filing, post, landing support and everything that you can think of.',
          image3: '/home/professional-women.png'
      }
      ]

//       const scrollToAdditional = () => {
//     setActive('additional');
//     additional.current?.scrollIntoView({ behavior: 'smooth' });
//   };
  return (
    <>
<div id='Additional' className='scroll-mt-30'>
  <h1 className='text-center text-4xl p-6 sm:p-8 md:p-10'>Additional Facilities</h1>
</div>

<div className='flex flex-wrap gap-6 justify-center px-4 sm:px-6 md:px-8'>
  
  <div className='bg-[radial-gradient(circle,_#1288a6,_#002e3b)] text-white h-[30rem] w-full sm:w-[20rem] rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index}>
          <h1 className='m-7 mt-20'>{item.title}</h1>
          <p className='m-6 mb-6'>{item.description}</p>
          {item.image && <img src={item.image} alt='Image' className='w-full md:h-[13rem] rounded-xl' />}
        </div>
      ))
    }
  </div>

  <div className='bg-[radial-gradient(circle,_#3f3f3f,_#050505)] text-white h-[30rem] w-full sm:w-[20rem] rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index}>
          <h1 className='m-7 mt-10'>{item.title2}</h1>
          <div className='m-6 mb-6'>
            <p>{item.description2}</p>
          </div>
          {item.image2 && <img src={item.image2} alt='Image' className='w-full md:h-[13rem] rounded-xl' />}
        </div>
      ))
    }
  </div>

  <div className='bg-[radial-gradient(circle,_#0c95b3,_#001336)] text-white h-[30rem] w-full sm:w-[20rem] rounded-xl flex flex-col'>
    {
      Additional.map((item, index) => (
        <div key={index}>
          <h1 className='m-7'>{item.title3}</h1>
          <p className='m-7 mb-6'>{item.description3}</p>
          {item.image3 && <img src={item.image3} alt='Image' className='w-full md:h-[12rem] rounded-xl' />}
        </div>
      ))
    }
  </div>

</div>




    </>
  )
}

export default Threecards;