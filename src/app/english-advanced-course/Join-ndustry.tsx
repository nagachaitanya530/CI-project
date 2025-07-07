import React from 'react'

function Joinndustry() {


  const lists = [
    {
      title: 'Join industry-leading course',
      description: 'National Institute of Language provides top quality trainers with updated curriculum for best outcomes.',
      points: [
        'Learn from British Council and Cambridge certified trainers.',
        'Engage in conversation activities with trainers and other students to improve your fluency.',
        'Get proper assessment and detailed feedback on your performance.',
        'Engage in community activities to make connections for your future study, professional and Migration programmes.'
      ]
    }
  ];
  const data = [
    {
      image: '/home/learning-Girl.jpg',
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
      <div className='flex mx-5 lg:mx-30 flex-col sm:flex-row border-1 border-gray-500 px-2 rounded-2xl mt-10  gap-20 '>
        <div className='flex flex-col sm:flex-row p-5 '>
          {lists.map((item, index) => (
            <div
              key={index}
              className=' '
            >
              <h2 className='text-2xl sm:text-3xl '>{item.title}</h2>
              <p className='text-gray-500 my-5'>{item.description}</p>
              <ul className='list-disc ml-12 text-gray-500'>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li> 
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=' py-5 '>
          <div className=" h-96 border-1 rounded-2xl  border-black ">

            <div className='' >
              {
                data.map((item, index) => (
                  <div key={index}>
                    {item.image && <img src={item.image} alt="Course Image" className=' rounded-2xl w-full h-50  ' />}
                  </div>
                ))
              }
            </div>
            <div className="flex  ">
              {data.map((item, index) => (
                <div key={index} className='mt-3 p-1'>
                  <div>
                    <h3 className="text-2xl font-bold  ">{item.number}</h3>
                    <p className="text-base  text-gray-800">{item.text}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  ">{item.number1}</h3>
                    <p className="text-base  text-gray-800">{item.text1}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  ">{item.number2}</h3>
                    <p className="text-base  text-gray-800">{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Joinndustry