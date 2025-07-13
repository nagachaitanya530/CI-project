import React from 'react';

function Threecards() {
  const bgColors = [
    "bg-[linear-gradient(180deg,#0e4e60,#0e4e60)]",
    "bg-[linear-gradient(180deg,#1b1c1e,#1b1c1e)]",
    "bg-[radial-gradient(circle_at_top,#003c7e,#015d92)]"
  ];

  const Additional = [
    {
      title: 'Sunday Webinars',
      description: 'Free access to sunday webinars with activities like Group Discussions, debates and presentations for optimal public speaking practice.',
      image: 'Reciver2.jpg'
    },
    {
      title: 'Unlimited Practice',
      description: 'Join unlimited group discussions with 6 months GD support even after your course completion. Join us each Sunday for upto 6 months.',
      image: 'group-discussion.jpg'
    },
    {
      title: 'Free Consultation',
      description: 'If you’re going for studies abroad,you can get a free consultation for your application, visa, filing, post, landing support and everything that you can think of.',
      image: 'visa.png'
    }
  ];

  return (
    <>
      <div id='Additional' className='scroll-mt-30'>
        <h1 className='text-center text-4xl p-6 sm:p-8 md:p-10'>Additional Facilities</h1>
      </div>
      <div className=' flex flex-col md:flex-row justify-center items-center text-gray-950  px-1 align-middle  z-10  gap-4 xl:gap-15 xl:mb-20 '>
        {Additional.map((item, index) => (
          <div
            key={index}
            className={` rounded-xl shadow-md w-[20rem] h-[30rem] mb-10  text-white ${bgColors[index % bgColors.length]}`}
          >
            <div className=''>
              <h3 className="text-xl font-semibold mb-5 mt-15 px-5">{item.title}</h3>
              <p className={`${index == 2 ? "mt-9" : "mt-15"} mb-10 px-5`}>{item.description}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className={` h-49 w-full rounded-b-xl`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Threecards;