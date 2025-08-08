import React from 'react'

const Card = ({ image, heading, sub1, sub2 }) => {
    return (
        <div className='flex flex-col gap-10 pb-10'>
            {[
                { image, heading, sub1, sub2 }
            ].map((item, index) => (
                <div key={index} className='shadow-xl pb-20 rounded-[4px] transition-transform duration-200 hover:scale-105 cursor-pointer'>
                    <img src={item.image} className='rounded-t-[4px]' />
                    <div className='flex flex-col gap-3 px-4 py-2'>
                        <h2 className='text-[#414146] text-[20px] '>{item.heading}</h2>
                        <p className='text-[#737382]  text-[14px]'>{item.sub1}</p>
                        <p className='text-[#737382]  text-[14px]'>{item.sub2}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card


{/* <th style={text-align: "left";}>degree</th> */}
