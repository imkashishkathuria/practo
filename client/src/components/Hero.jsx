"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { ImLab } from "react-icons/im";
import { LuBookOpenText } from "react-icons/lu";
import { IoBagAddOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';



const Hero = () => {

  const [searchDropdown, setSearchDropdown] = useState(false);
  const dropdown = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    setSearchDropdown(prev => !prev);

  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropdown.current && !dropdown.current.contains(e.target)){
        setSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])
  return (
    <div className=''>
      <div className='w-full relative'>
        <img src='https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg' className='w-[100%] hidden lg:block ' />
        <div className="absolute lg:top-10 left-1/2 transform -translate-x-1/2">
          <div className='bg-[#28328c] w-[100vw] lg:px-0 py-10 lg:py-0 lg:bg-none flex flex-col gap-4 lg:gap-8 justify-center items-center'>
            <p className='text-[16px] lg:text-[40px] font-bold text-white'>Your home for health</p>
            <div className='flex flex-col gap-4 items-center justify-center'>
              <p className='hidden lg:block text-[24px] font-bold text-white'>Find and Book</p>
              <p className='lg:hidden text-[24px] font-bold text-white'>Book an appointment</p>
              <div className='flex relative'>
                <div className='hidden lg:flex gap-3 px-3 py-4 items-center border-1 bg-[#fff] border-[#b4b4be] h-[55px]'>
                  <IoLocationOutline />
                  <input placeholder="Bangalore" className='outline-none text-[16px] ' />
                </div>
                <div className='relative flex flex-col'>
                  <div className='flex gap-3 px-3 py-4 items-center bg-[#fff] border-1 border-[#b4b4be] lg:w-full pr-5 lg:pr-10' onClick={handleSearch}>
                    <IoIosSearch />
                    <input placeholder="Search doctors, clinics, hospitals, etc." className='outline-none lg:w-[450px] pr-13 lg:pr-25 text-[14px] cursor-pointer' />
                  </div>
                  <div>
                    {
                      searchDropdown && (
                        <div className='absolute flex flex-col gap-3 border-[#1d2869]/80 bg-[#fff] border-1 z-50 w-[534px]' ref={dropdown}>
                          <div className='bg-[#dad2d275] px-2 py-2 text-[11px]'>Popular Searches</div>
                          <div className='flex justify-between gap-6 px-3'>
                            <div className='flex gap-2 rounded-full bg-[#dad2d275] px-2 py-1 w-full cursor-pointer'>
                              <BsFillLightningChargeFill />
                              <p className='text-[14px]'>Hysterectomy</p>
                            </div>
                            <div className='flex gap-2 rounded-full bg-[#dad2d275] px-2 py-1 w-full cursor-pointer'>
                              <BsFillLightningChargeFill />
                              <p className='text-[14px]'>Normal Delivery</p>
                            </div>
                          </div>
                          <div className='bg-[#dad2d275] px-2 py-2 text-[11px]'>Common Specialities</div>
                          <div className='flex flex-col -pt-3'>
                            {["Dentist", "Gynecologist", "General Physician", "Dermatologist", "Ear-nose-throat(ent)Specialist", "Homeopath", "Ayurveda"].map((item, index) => (
                              <div 
                                key={index} 
                                className='flex justify-between items-center border-b-1 border-[#dad2d275] px-3 py-4 cursor-pointer hover:bg-[#dad2d275]' 
                                onClick={() => router.push(`/listings/${item}`)}>
                                <div className='flex gap-3 items-center'>
                                  <div className='bg-[#dad2d275] rounded-full px-1 py-1'>
                                    <IoIosSearch />
                                  </div>
                                  <p className='text-[14px]'>{item}</p>
                                </div>
                                <p className='text-[11px] uppercase'>Speciality</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    }
                  
                </div>
              </div>
            </div>
            <div className='hidden lg:flex gap-5 ml-[-200px]'>
              {["Popular searches:", "Dermatologist", "Pediatrician", "Gyneocologist/Obstetrician", "Others"].map((item, index, arr) => (
                <div key={index} className="flex items-center">
                  <p className={`text-[#8d93b3] text-[14px]  ${index !== 0 ? 'hover:underline hover:text-white cursor-pointer' : ''}`}>
                    {item}
                  </p>
                  {index === arr.length - 1 && (
                    <IoIosArrowDown className="text-[#8d93b3] ml-1 mt-[2px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block  bottom-0 w-full z-10'>
        <div className='flex px-50 py-4 bg-[#1d2869] justify-center gap-8'>
          {[
            { icon: <HiOutlineChatAlt2 size={23} />, text: "Consult with a doctor" },
            { icon: <MdOutlineShoppingCart size={23} />, text: "Order Medicines" },
            { icon: <LiaNotesMedicalSolid size={23} />, text: "View medical records" },
            { icon: <ImLab size={23} />, text: "Book test" },
            { icon: <LuBookOpenText size={23} />, text: "Read articles" },
            { icon: <IoBagAddOutline size={23} />, text: "For healthcare providers" },
          ].map((item, index, arr) => (
            <div key={index} className={`group flex flex-col justify-center items-center gap-3 text-white cursor-pointer ${index !== arr.length - 1 ? 'border-r-1 border-[#b8bbd9]/80 pr-8' : ''} `}>
              <div className='transition-transform duration-200 group-hover:scale-130'>
                {item.icon}
              </div>
              <p className='text-[14px] text-[#b8bbd9] hover:text-white cursor-pointer'>{item.text}</p>
            </div>

          ))}
        </div>
      </div>
    </div>
    {/* <div className='lg:hidden flex flex-col gap-3 w-full px-7 py-12 bg-[#28328c] items-center'>
      <p>Your Home for Health</p>
      <p>Book an appointment</p>
      
    </div> */}

    </div>
  )
}

export default Hero
