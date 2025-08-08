import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Card from './Card'

const Articles = () => {
  return (
    <div className='flex flex-col gap-3 lg:gap-10 justify-center items-center px-4 lg:px-20 pt-60 lg:pt-0 pb-10 lg:py-20 '>
        <p className='text-[25px] lg:text-[40px] text-[#414146] font-bold'>
            Read top articles from health experts
        </p>
        <div className='flex flex-col lg:flex-row gap-7 items-center'>
            <IoIosArrowBack size={100} color='#737382' className='hidden lg:block cursor-pointer'/>
            <Card image="https://www.practostatic.com/fit/51e95f45d66437b31ca7e335af726b51450c4983" heading="ORS Day-Spread the Message" sub1="Ms.Swati Kapoor, Dietician/Nutritionist" sub2="1007Likes • 4818Views" />
             <Card image="https://www.practostatic.com/fit/781509db5fa9b58b9278b1df79dca99020412267" heading="Best Foods to Reduce Bloating" sub1="Ms.Swati Kapoor, Dietician/Nutritionist" sub2="473Likes • 135012Views" />
              <Card image="https://www.practostatic.com/fit/8d3825a93ed3b34c0958b3808f83f84a184c37cc" heading="7 Fruits that Improve Your Skin" sub1="Dr.Mukesh Batra, Dermatologist" sub2="429Likes • 197967Views" />
            <IoIosArrowForward size={100} color='#737382' height={20}  className='cursor-pointer hidden lg:block'/>

           
        </div>
       <button className='bg-[#199fd9] px-6 py-3 text-white text-[16px] font-[700] cursor-pointer '>More Acticles</button>
    </div>
  )
}

export default Articles
