"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { LiaHamburgerSolid } from 'react-icons/lia'
import { RxCrossCircled } from "react-icons/rx";
import { IoVideocamOutline } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { GiBookPile } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CgViewComfortable } from "react-icons/cg";


const Navbar = () => {
    const router = useRouter();
    const [menuSidebar, setMenuSidebar] = useState(false);

    const handleclick = () => {
        router.push("/");
    }

    return (
        <div>
            <div className='relative bg-[#dad2d275]/80 lg:bg-white flex lg:px-20 py-4 items-center justify-between'>
               <div className='flex'>
                 <div className='lg:hidden px-4' onClick={()=>setMenuSidebar(true)}>
                        <IoMenu size={20} color='#737382'/>
                    </div>
                    {menuSidebar && (
                        <div className='absolute top-0 left-0 flex flex-col gap-3 z-50 w-[1000px] bg-white'>
                            <div className='bg-[#dad2d275] px-3 py-5 flex gap-3 items-center'>
                                <RxCrossCircled size={25} color="#737382" onClick={()=>setMenuSidebar(false)}/>
                                <img src='https://www.practostatic.com/nav/9.5.21/consumer/images/practo.svg' className='object-contain cursor-pointer' />
                            </div>
                            <div className="flex flex-col gap-8 py-2 px-3 ">
                                <div className='flex flex-col gap-2 py-5 border-b-2 border-[#dad2d275]'>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-[#414146] text-[14px] font-bold cursor-pointer'>Practo</p>
                                       <img src="https://www.practostatic.com/subscriptions/images/plus-logo-mini.png" className='w-[40px] h-[18px] object-contain'/>
                                    </div>
                                    <p className='text-[#414146] text-[14px] cursor-pointer'>Health plans for you and your family</p>
                                </div>

                                <div className='flex flex-col gap-10 pb-5 border-b-2 border-[#dad2d275]'>
                                    {[
                                        {icon: <IoSearch size={25} color="blue" />, text: "Find Doctors - Book an appointment"},
                                        {icon: <IoVideocamOutline size={25}/>, text: "Video Consults - Consult top doctors"},
                                        {icon: <MdLocalHotel size={25}/>, text: "Surgeries - Expert Surgical care"},
                                        {icon: <SlBookOpen size={25}/>, text: "Read Health Articles"},
                                        {icon: <GiBookPile size={25}/>, text: "View Medical Records"},
                                        {icon: <GiMedicines size={25}/>, text: "Read about medicines"},
                                        {icon: <AiOutlineMedicineBox size={25}/>, text: "Practo for Providers"},
                                        {icon: <CgViewComfortable size={25}/>, text: "ABDM"},

                                    ].map((item, index) => (
                                        <div className=" flex gap-3 items-center" key={index}>
                                            {item.icon}
                                            <p className="text-[15px] text-[#414146] cursor-pointer">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-6 border-b-2 border-[#dad2d275]">
                                    {["Data Security", "Help","Contact us", "Terms of service"].map((item, index) => (
                                        <p key={index} className="text-[15px] text-[#414146] cursor-pointer">{item}</p>
                                    ))}
                                    </div>
                            </div>

                        </div>
                    )}
                <div className='flex gap-5 items-center'>
                    

                    <img src='https://www.practostatic.com/nav/9.5.21/consumer/images/practo.svg' className='object-contain cursor-pointer' onClick={handleclick}/>
                  
                    <div className='hidden lg:flex justify-between items-center gap-7 ml-8'>
                        {["Find Doctors", "Video Consult", "Surgeries"].map((item, index) => (
                            <p key={index} className='text-[16px] font-bold text-[#2d2d32] font-sans cursor-pointer'>{item}</p>
                        ))}

                    </div>
                </div>
                </div>
                <div className='hidden lg:flex items-center justify-between gap-7'>
                    <div className='flex gap-1 font-[400]'>
                        <div className='bg-[#28328c] text-[9px] mt-2 rounded-[8px] px-1 cursor-pointer'>
                            <p className='text-white cursor-pointer '>NEW</p>
                        </div>
                        <div className='flex items-center gap-2 text-[#414146] cursor-pointer '>
                            <p>For Corporates</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-[#414146] cursor-pointer'>
                        <p>For Providers</p>
                        <IoIosArrowDown />
                    </div>
                    <div className='flex items-center gap-2 text-[#414146] cursor-pointer'>
                        <p>Security & help</p>
                        <IoIosArrowDown />
                    </div>
                    <div className='px-3 py-2 rounded-[3px] text-[13px] text-[#737382] font-[200] border-1 border-[#737382] mt-[-10px] cursor-pointer hover:text-blue-500 hover:border-blue-500'>
                        Login/Signup
                    </div>
                </div>
                <div className='lg:hidden px-3'>
                    <button className='border-1 border-blue-500 rounded-[4px] text-blue-500 text-[15px] px-3 py-1 cursor-pointer'>Sign In</button>
                </div>
            </div>
            <div className='hidden lg:block bg-[#dad2d275] h-[30px] w-[100%]' />
            <div className="lg:hidden flex justify-between px-5 py-4">
                {["Find Doctors", "Video Consult", "Surgeries"].map((item, index) => (
                    <p key={index} className={`text-[14px] text-center font-bold ${index === 0 ? 'text-[#28328c] border-b-1 border-[#28328c] ' : 'text-[#414146]'}`}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default Navbar
