import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Filter = () => {
  return (
    <div className='bg-[#28328c] px-40 py-3 flex gap-5'>
        <div className='flex gap-7 items-center'>
            {["Gender","Patient Stories", "Experience","All Filters"].map((item, index, arr)=> (
                <div key={index} className={`flex cursor-pointer items-center justify-between px-2 py-1 ${index === arr.length -1 ? 'gap-4' : 'bg-[#434ea2] gap-18'} `}>
                  <p className='text-white'>{item}</p>
                  <IoIosArrowDown color='white'/>
                </div>
            ))}
            <div className='flex items-center gap-3'>
              <p className='text-white'>Sort By</p>
              <div className='flex items-center cursor-pointer justify-between px-2 py-1 bg-[#434ea2] gap-18'>
                  <p className='text-white'>Relevance</p>
                  <IoIosArrowDown color='white'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Filter
