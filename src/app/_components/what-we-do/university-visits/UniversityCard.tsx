import React from 'react'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { Earth } from 'lucide-react';
const UniversityCard = () => {
    return (
        <>
            <div className="maincard flex  items-center justify-left  bg-gray-100 p-4">

                <div className="card bg-blue-100 shadow-lg rounded-lg w-[15%] d-flex flex-col b-rounded-lg p-7">
                    <div className="card-header">
                        <Image
                            src="/universitycard1.jpg"
                            alt="University Logo"
                            width={100}
                            height={100}
                            className="card-logo"
                        />
                        <h2 className="card-title">University Of Sheffield</h2>
                    </div>
                    <div className="card-body">
                        <p className="card-description">AT KOLKATA</p>
                        <p className="card-text">

                            <p>       
                                 <span><CalendarDays /></span>
                                <span>
                                    30/06/2025
                                    </span>
                            </p>
                                                   <p>       
                                 <span><Clock9 /></span>
                                <span>
                                 2:00pm-TBC
                                    </span>
                            </p>
                                                        <p>       
                                 <span><Earth /></span>
                                <span>
                               United Kingdom
                                    </span>
                            </p>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="mt-8 bg-[#143B85] text-white px-2 py-4 rounded-md text-sm font-semibold ">Book an appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniversityCard