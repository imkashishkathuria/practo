"use client"

import DoctorsCard from '@/components/DoctorsCard';
import Filter from '@/components/Filter';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import React, { use, useEffect, useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6';

const Listings = ({ params }) => {

  const [data, setData] = useState([]);
  const { category } = use(params);
  const decodedCategory = decodeURIComponent(category);
  const [newData, setNewData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://practo-1.onrender.com/listings");
        const allListings = await res.json();
        const filtered = allListings.filter(
          (item) => item.category === decodedCategory
        );
          setData(filtered);
          console.log(allListings.length);     
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchData();
  }, [category])
  

  return (
    <div>
      <Navbar />
      <Search />
      <Filter />

      <div className='flex flex-col gap-4 px-20 py-10'>
        <div className='flex flex-col gap-3'>
          <p className='font-[700] text-[26px] text-[#2d2d32] -tracking-tight [word-spacing:0.2rem]'>{data.length} {decodedCategory}s available in Bangalore</p>

          <div className='flex gap-2 items-center' >
            <FaCircleCheck size={20} />
            <p className='text-[16px] text-[#2d2d32] '>Book appointments with minimum wait-time & verified doctor details</p>
          </div>
        </div>

        {/* Doctors Listings Data */}
        <div className=''>
        {data.map((doctor, index) => (
           <DoctorsCard 
              key={index}
              profile={doctor.profile} 
              name={doctor.name}
              category={doctor.category}
              experience={doctor.experience}
              location={doctor.location}
              clinic_name={doctor.clinic_name}
              fees={doctor.fees}
              votes={doctor.votes}
              patient_stories={doctor.patient_stories}
              />
        ))}
        </div>
         
      </div>
    </div>
  )
}

export default Listings
