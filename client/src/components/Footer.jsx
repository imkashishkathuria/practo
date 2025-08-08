import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#dad2d275] hidden lg:flex justify-between px-90 py-6'>
                {[
                    { icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png", text: "India" },
                    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png", text: "Singapore" },
                    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/960px-Flag_of_the_Philippines.svg.png", text: "Phillipines" },
                    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png", text: "Indonesia" },
                    { icon: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png", text: "Brazil" }
                ].map((item, index) => (
                    <div key={index} className='flex gap-3 items-center'>
                        <img src={item.icon} className='w-[25px] h-[20px] object-contain' />
                        <p className='text-[14px] text-[#414146]'>{item.text}</p>
                    </div>
                ))}

            </div>
            <div className='bg-[#1d2869] px-5 py-7 lg:px-40 lg:py-10 flex flex-col gap-20'>
                <div className='hidden lg:flex justify-between gap-5'>
                    <div className='flex flex-col gap-1'>
                        {["Practo", "About", "Blog", "Careers", "Press", "Contact Us"].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}
                    </div>
                    <div className='flex flex-col gap-1'>
                        {["For patients", "Ask free health questions", "Search for doctors", "Search for clinics", "Search for hospitals", "Book Diagnostic Tests", "Book Full Body Checkups", "Read health articles", "Consult a doctor", "Order medicines", "Read about medicines", "Practo drive", "Health app", "Practo Plus"].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}
                    </div>
                    <div className='flex flex-col gap-1'>
                        {["For doctors", "Practo Consult", "Practo Health Feed", "Practo Profile", "For clinics", "Practo Prime", "Ray by Practo", "Practo Reach", "Ray Tab", "Practo Pro"].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}
                    </div>
                    <div className='flex flex-col gap-1'>
                        {["For hospitals", "Insta by Practo", "Qikwell by Practo", "Practo Profile", "Practo Reach", "Practo Drive",].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}
                    </div>
                    <div className='flex flex-col gap-1'>
                        {["More", "Help", "Developers", "Privacy Policy", "Terms & Conditions", "PCS T&C", "Healthcare Directory", "Practo Health Wiki"].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}


                    </div>
                    <div className='flex flex-col gap-1'>
                        {["Social", "Facebook", "Twitter", "LinkedIn", "Youtube", "Github"].map((item, index) => (
                            <p key={index} className='text-[14px] font-bold text-[#fff] hover:underline cursor-pointer'>{item}</p>
                        ))}


                    </div>


                </div>

                <div className='flex flex-col gap-7 justify-center items-center'>
                    <img src='https://www.practostatic.com/web-assets/images/white_practo_logo.svg' />
                    <p className='text-[14px] text-[#8d93b3]'>Copyright © 2017, Practo. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
