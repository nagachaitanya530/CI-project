import React from 'react'

function AboutEnglish() {

  const group = [
    {
      title3: 'Intermediate Grammar ',
      discription: 'You will learn Intermediate level concepts of English grammar and how to use them in writing and speaking.',
      title4: 'Interpersonal Skills ',
      discription1: 'You will learn how to communicate in different circumstances with different people in various settings.',
      title5: ' Advanced Grammar',
      discription2: 'You will also learn advanced level concepts like conditional sentences, passive sentences etc and their utilisation for a specific purposes of of more advanced communication',
      title6: ' Vocabulry',
      discription3: 'Possessing extensive and impressive vocabulary is essential for advanced communication.',

    },

    {
      image: "/home/learning-Girl.jpg",
      title7: 'Want something general?',
      discription4: 'Check our Foundation English Course.',
      buttonText: 'English Foundation'
    }
  ]


  // left side
  const data = [
    {
      image: '../../../home/learning-Girl.jpg',
    },
    {
      number: '60000+',
      text: 'Students trained over the years',
    },
    {
      number1: '19000+',
      text1: 'British Council Certificates and counting',
    },
    {
      number2: '95%',
      text2: 'Success rate in industry leaders',
    }
  ]

  return (
    <>
      {/* After the sticky bar, we can add the content for the course details. */}
      <h2 id='about' className='mx-3 md:mx-7 lg:mx-30 mt-20 mb-1 text-2xl sm:text-3xl scroll-mt-35'>
        What you'll learn
      </h2>

      <div className='EntireBox  w-auto  flex flex-col justify-between md:flex-row bg-white rounded-2xl shadow-2xl mx-2 md:mx-5 lg:mx-30  pb-2'>

        <div className='LeftBox w-3/4 m-5 pt-10 '>
          {group.map((items, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
              <div className=''>
                <h1 className='text-xl'>{items.title3}</h1>
                <p className='text-sm'>{items.discription}</p>
              </div>
              <div className=''>
                <h1 className='text-xl '>{items.title5}</h1>
                <p className='text-sm '>{items.discription2}</p>
              </div>
              <div className=''>
                <h1 className='text-xl'>{items.title4}</h1>
                <p className='text-sm'>{items.discription1}</p>
              </div>
              <div className=''>
                <h1 className='text-xl '>{items.title6}</h1>
                <p className='text-sm '>{items.discription3}</p>
              </div>
            </div>
          ))}
        </div>



        <div className='Right w-full md:w-1/2 rounded-b-xl shadow-md pb-5'>
          {group.map((items, index) => (
            <div key={index}>
              <div className='-mt-5'>
                {items.image && (
                  <img
                    src={items.image}
                    alt="Course Image"
                    className='h-70 w-full '
                  />
                )}
              </div>
              <div className='ml-4'>
                <h2 className='text-3xl lg:text-4xl mt-5'>{items.title7}</h2>
                <p className='mt-3'>{items.discription4}</p>
                {items.buttonText && (
                  <a
                    className='inline-block mt-4 bg-blue-500 text-white px-4 py-2 text-lg rounded-md'
                    href=""
                  >
                    {items.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default AboutEnglish