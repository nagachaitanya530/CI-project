import { Title } from '@radix-ui/react-dialog'
import { ChevronRight, ChevronsLeftRight, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface GmatInfo {
    Title: string;
    description: string;
    Image?: string; // optional — only index 3 will use it
}



function Herosection() {

    const gmat: GmatInfo[] = [
        {
            Title: "Test Format:",
            description: "Verbal & Quantitative Reasoning, Data Insights"
        },
        {
            Title: "Mode:",
            description: "Computer Adaptive Test"
        },
        {
            Title: "Duration:",
            description: "2 Hours 15 mins"
        },
        {
            Title: "Last Updated:",
            description: "19 October '24",
            Image: "/test-bnr-cont-img.webp" // image only at index 3
        }
    ];









    return (

        <>


            <div className='flex p-5 mb-5'>
                <Link href="#about" >Home</Link><ChevronRight /><Link href="#">Test Preperation</Link><ChevronRight /><span>GMAT</span>
            </div>

<div className='bg-blue-50 flex flex-col  xl:px-25 px-10 py-15 lg:py-8  '>
            <div className=' flex flex-col-reverse  md:flex-row justify-center  xl:gap-86 items-center  '>
                <div className='flex flex-col gap-5  lg:mt-3 ' >
                    <h1 className='text-4xl md:text-5xl  text-blue-900 mt-4'>GMAT - 2025</h1>

                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col lg:flex-row gap-8 xl:gap-40 '>
                        {/* gmat 0 index */}
                        {gmat[0] &&
                            <div>
                                <h4 className='text-xl lg:text-2xl'>{gmat[0].Title}</h4>
                                <p className=' text-blue-900 lg:text-lg lg:w-50 xl:w-70' >{gmat[0].description}</p>
                            </div>
                        }


                        {/* gmat 2 index */}
                        {gmat[2] &&
                            <div>
                                <h4 className='text-xl lg:text-2xl'>{gmat[2].Title}</h4>
                                <p className=' text-blue-900 lg:text-lg'>{gmat[2].description}</p>
                            </div>
                        }



                    </div>




                     <div className='flex flex-col gap-5'>

                    {/* gmat 2 index */}
                    {gmat[1] &&
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-xl lg:text-2xl'>{gmat[1].Title}</h4>
                            <p className='text-blue-900 lg:text-lg '>{gmat[1].description}</p>
                        </div>
                    }
                  <Link href="#" className="bg-blue-800 p-3 mb-4  sm:w-60 rounded-lg  text-white text-center hover:text-blue-700 hover:bg-white">
                        Free Expert Consultation
                    </Link>
                </div>

                    </div>
            </div>


               



                {/* Image */}

                <div>
                    {gmat[3]?.Image && (
                        <img
                            src={gmat[3].Image}
                            alt="Last Updated"
                            className="  rounded-3xl w-auto h-auto mb-10 md:mb-0 xl:h-[17rem] xl:w-[26rem] md:mt-20  md:ml-3   xl:ml-0 xl:mt-13 "
                        />
                    )}
                   

                </div>






            </div>

<div className='flex flex-row justify-center xl:gap-265 md:gap-110 lg:gap-150'>
    <div>{""}</div>
    
 {gmat[3] && (
                        <div >

                            <p>{gmat[3].Title}{gmat[3].description}</p>
                        </div>
                    )}

</div>

</div>

        </>








    )
}
 
export default Herosection