import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCircleCheck } from "react-icons/fa6";

const Search = () => {
    return (
        <div className='flex gap-5 px-40 pt-5 pb-10 items-center'>
            <div>
                <div className='flex'>
                    <div className='flex gap-3 px-3 py-4 items-center border-1 bg-[#fff] border-[#b4b4be] h-[55px] pr-15'>
                        <IoLocationSharp />
                        <input placeholder="Bangalore" className='outline-none text-[16px] ' />
                    </div>
                    <div className='flex gap-3 px-3 py-4 items-center bg-[#fff] border-1 border-[#b4b4be] w-full pr-15'>
                        <IoIosSearch />
                        <input placeholder="Dentist" className='outline-none w-[450px] pr-35 text-[14px] cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-[12px] text-[#414146]'>Fed up of endless wait?</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-[14px] text-[#414146]'>Look for clinic with <span className='font-[700] text-[#8a45e6] text-[14px]'>Prime</span></p>
                    <FaCircleCheck color='#8a45e6'/>
                </div>


            </div>
        </div>
    )
}

export default Search
