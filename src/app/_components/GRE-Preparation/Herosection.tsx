<<<<<<< HEAD
=======
import { Title } from '@radix-ui/react-dialog'
>>>>>>> cost-of-studying-usa
import { ChevronRight, ChevronsLeftRight, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface GmatInfo {
    Title: string;
    description: string;
<<<<<<< HEAD
    Image?: string;
}
function Herosection() {
=======
    Image?: string; // optional — only index 3 will use it
}



function Herosection() {

>>>>>>> cost-of-studying-usa
    const gmat: GmatInfo[] = [
        {
            Title: "Test Format:",
            description: "AWA, Quantitative and Verbal Reasoning"
        },
        {
            Title: "Mode:",
            description: "Computer Adaptive Test"
        },
        {
            Title: "Duration:",
            description: "2 Hours (Approximately)"
        },
        {
            Title: "Last Updated:",
            description: "19 October '24",
<<<<<<< HEAD
            Image: "/gre1.jpg"
        }
    ];
    return (
        <>
            <div className='flex p-5 mb-5'>
                <Link href="#about" >Home</Link><ChevronRight /><Link href="#">Test Preperation</Link><ChevronRight /><span>GRE</span>
            </div>
            <div className='bg-blue-50 flex flex-col  lg:p-22 px-6 '>
                <div className=' flex flex-col-reverse  md:flex-row justify-between '>
                    <div className='flex flex-col gap-5' >
                        <h1 className='text-3xl xl:text-5xl md:text-4xl text-blue-900 '>GRE - 2025</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col lg:flex-row gap-5 xl:gap-30'>
                                {gmat[0] &&
                                    <div>
                                        <h4 className='text-2xl '>{gmat[0].Title}</h4>
                                        <p className=' text-blue-900 text-lg lg:w-60 xl:w-70' >{gmat[0].description}</p>
                                    </div>
                                }
                                {gmat[2] &&
                                    <div>
                                        <h4 className='text-2xl'>{gmat[2].Title}</h4>
                                        <p className=' text-blue-900 text-lg'>{gmat[2].description}</p>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col gap-5'>
                                {gmat[1] &&
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='text-2xl '>{gmat[1].Title}</h4>
                                        <p className='text-blue-900 text-lg '>{gmat[1].description}</p>
                                    </div>
                                }
                                <Link href="#" className="bg-blue-800 p-4 w-70 rounded-2xl  text-white text-center hover:text-blue-700 hover:bg-white">
                                    Free Expert Consultation
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div>
                        {gmat[3]?.Image && (
                            <img
                                src={gmat[3].Image}
                                alt="Last Updated"
                                className=" mt-2 rounded-3xl w-100 h-70"
                            />
                        )}
                    </div>
                </div>
                {gmat[3] && (
                    <div className='flex flex-row-reverse'>

                        <p>{gmat[3].Title}{gmat[3].description}</p>
                    </div>
                )}
            </div>
        </>
    )
}
=======
            Image: "/gre.webp" // image only at index 3
        }
    ];









    return (

        <>


            <div className='flex p-5 mb-5'>
                <Link href="#about" >Home</Link><ChevronRight /><Link href="#">Test Preperation</Link><ChevronRight /><span>GRE</span>
            </div>

<div className='bg-blue-50 flex flex-col  lg:p-22 px-6 '>
            <div className=' flex flex-col-reverse  md:flex-row justify-between '>
                <div className='flex flex-col gap-5' >
                    <h1 className='text-3xl xl:text-5xl md:text-4xl text-blue-900 '>GRE - 2025</h1>

                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col lg:flex-row gap-5 xl:gap-30'>
                        {/* gmat 0 index */}
                        {gmat[0] &&
                            <div>
                                <h4 className='text-2xl '>{gmat[0].Title}</h4>
                                <p className=' text-blue-900 text-lg lg:w-60 xl:w-70' >{gmat[0].description}</p>
                            </div>
                        }


                        {/* gmat 2 index */}
                        {gmat[2] &&
                            <div>
                                <h4 className='text-2xl'>{gmat[2].Title}</h4>
                                <p className=' text-blue-900 text-lg'>{gmat[2].description}</p>
                            </div>
                        }



                    </div>




                     <div className='flex flex-col gap-5'>

                    {/* gmat 2 index */}
                    {gmat[1] &&
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-2xl '>{gmat[1].Title}</h4>
                            <p className='text-blue-900 text-lg '>{gmat[1].description}</p>
                        </div>
                    }
                  <Link href="#" className="bg-blue-800 p-4 w-70 rounded-2xl  text-white text-center hover:text-blue-700 hover:bg-white">
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
                            className=" mt-2 rounded-3xl w-auto h-auto"
                        />
                    )}
                   

                </div>






            </div>


 {gmat[3] && (
                        <div className='flex flex-row-reverse'>

                            <p>{gmat[3].Title}{gmat[3].description}</p>
                        </div>
                    )}


</div>

        </>








    )
}

>>>>>>> cost-of-studying-usa
export default Herosection