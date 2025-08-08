"use client"

// import { useRouter } from 'next/router';
import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const DoctorsCard = ({ profile, name, category, experience, location, clinic_name, fees, votes, patient_stories }) => {

    // const router = useRouter();
    return (
        <div className='flex justify-between py-3 border-y-1 border-[#dad2d275]'>
            <div className='flex gap-4 items-center'>
                <img src={profile} className='rounded-full object-contain w-[140px] h-[140px]' />
                <div className='flex flex-col gap-4'>
                    <p className='text-[#199fd9] text-[20px] font-bold'>{name}</p>
                    <p className='text-[#737382] text-[15px]'>{category}</p>
                    <p className='text-[#737382] text-[15px]'>{experience}</p>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#414146] text-[15px]'>{location}</p>
                        <p className='text-[#414146]'>•</p>
                        <p className='text-[#414146] text-[15px]'>{clinic_name}</p>
                    </div>
                    <p className='text-[#414146] text-[15px]'>{fees}</p>
                    <div className='w-full border-1 border-dashed border-[#dad2d275]' />
                    <div className='flex gap-3 items-center'>
                        <div className='flex gap-1 items-center px-2 py-1 bg-[#00a500]'>
                            <BiSolidLike color='white' />
                            <p className='text-white font-bold text-[15px]'>{votes}</p>

                        </div>
                        <p className='text-[15px] underline text-[#414146]'>{patient_stories}</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-end flex-col gap-4 mr-8 items-center'>
                <div className="flex items-center gap-2">
                    <BiBriefcase color="#00a500" />
                    <p className='text-[17px] text-[#00a500]'>Available Today</p>

                </div>
                <button className='flex flex-col items-center justify-center px-12 py-3 bg-[#199fd9] cursor-pointer'>
                    <p className='text-white font-bold text-[14px] '>Book Clinic Visit</p>
                    <p className='text-white font-bold text-[12px] '>No Booking fee</p>
                </button>
                <button className='group flex justify-center items-center gap-2 px-10 py-3 border-1 border-[#737382] bg-white cursor-pointer hover:bg-[#199fd9]'>
                    <FaPhoneAlt className='text-[#199fd9] group-hover:text-white'/>
                    <p className='text-[#199fd9] text-[14px] font-bold group-hover:text-white'>Contact Clinic</p>
                </button>
            </div>

        </div>
    )
}

export default DoctorsCard
