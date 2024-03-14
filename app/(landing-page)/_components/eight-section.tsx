'use client'

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const EightSection = () => {
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    const isSmallScreen = useMediaQuery({ maxWidth: 767})

    const settings ={
        dots:true,
        speed: 500,
        slidesToShow:1.67,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        className: "w-full"
    }
 
    if (isMediumScreen){
        settings.slidesToShow = 1
    } else if (isSmallScreen) {
        settings.slidesToShow = 1
    }


    return (  
        <div className="py-10 md:pb-20 flex flex-col items-center justify-center pb-32">
            <Slider {...settings} className='w-full'>
                <>
                    <div className='bg-[#c8a3a3] rounded-[60px] md:rounded-[80px] p-5 md:p-50 flex flex-col 
                    md:items-center space-y-10 mb-10 mx-2'>
                        <div className='h-20 w-20 md:w-20 md:h-10'>
                                <Image src='/images/rv1.jpg' alt='image' width={600} height={600} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                        </div>

                        <div className='text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5'>
                            &quot;Just a term of my daughter attending VMS, I can immediately see the difference 
                            in her studies.&quot;
                        </div>
                        <div className='flex items-center md:justify-center space-x-4 md:space-x-0'>
                            {/* <div className='h-10 w-12 md:w-20 md:h-10'>
                                <Image src='/images/director.svg' alt='image' width={200} height={200} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div> */}
                            <div className='text-[#1f357f]'>
                                <div className='font-medium'>Mrs Sarah Ogboli</div>
                            </div>

                        </div>
                    </div>

                </>

                <>
                <div className='bg-[#e3d9b4] rounded-[60px] md:rounded-[80px] p-5 md:p-50 flex flex-col 
                    md:items-center space-y-10 mb-10 mx-2'>
                        <div className='h-20 w-20 md:w-20 md:h-10'>
                                <Image src='/images/rv2.jpg' alt='image' width={600} height={600} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div>

                        <div className='text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5'>
                            &quot;Bringing my children to Virtue Model School has been the best decision I have 
                            made for their education&quot;
                        </div>
                        <div className='flex items-center md:justify-center space-x-4 md:space-x-0'>
                            {/* <div className='h-10 w-12 md:w-20 md:h-10'>
                                <Image src='/images/director.svg' alt='image' width={200} height={200} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div> */}
                            <div className='text-[#1f357f]'>
                                <div className='font-medium'>Mrs Jegede Noah</div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className='bg-[#aa90b6] rounded-[60px] md:rounded-[80px] p-5 md:p-50 flex flex-col 
                    md:items-center space-y-10 mb-10 mx-2'>
                        <div className='h-20 w-20 md:w-20 md:h-10'>
                                <Image src='/images/rv3.png' alt='image' width={600} height={600} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div>

                        <div className='text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5'>
                            &quot;The Staffs of this great school are the best, their creche class 
                            is super amazing, thumbs up to you guys&quot;
                        </div>
                        <div className='flex items-center md:justify-center space-x-4 md:space-x-0'>
                            {/* <div className='h-10 w-12 md:w-20 md:h-10'>
                                <Image src='/images/director.svg' alt='image' width={200} height={200} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div> */}
                            <div className='text-[#1f357f]'>
                                <div className='font-medium'>Mrs Jade Oruwa</div>
                            </div>
                        </div>
                    </div>                    
                </>

                <>
                    <div className='bg-[#a7d1b1] rounded-[60px] md:rounded-[80px] p-5 md:p-50 flex flex-col 
                    md:items-center space-y-10 mb-10 mx-2'>
                        <div className='h-20 w-20 md:w-20 md:h-10'>
                                <Image src='/images/rv4.png' alt='image' width={600} height={600} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div>

                        <div className='text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5'>
                            &quot;When you child starts going to VMS, know that their reading habit will improve 100% &quot;
                
                        </div>
                        <div className='flex items-center md:justify-center space-x-4 md:space-x-0'>
                            {/* <div className='h-10 w-12 md:w-20 md:h-10'>
                                <Image src='/images/director.svg' alt='image' width={200} height={200} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div> */}
                            <div className='text-[#1f357f]'>
                                <div className='font-medium'>Mrs Jane Klugh</div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className='bg-[#a7c9cb] rounded-[60px] md:rounded-[80px] p-5 md:p-50 flex flex-col 
                     md:items-center space-y-10 mb-10 mx-2'>
                        <div className='h-20 w-20 md:w-20 md:h-10'>
                                <Image src='/images/rv5.png' alt='image' width={600} height={600} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div>

                        <div className='text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5'>
                            &quot;The best school you can find in Ibeju Lekki axis hands down, super proud of VMS&quot;
                        </div>
                        <div className='flex items-center md:justify-center space-x-4 md:space-x-0'>
                            {/* <div className='h-10 w-12 md:w-20 md:h-10'>
                                <Image src='/images/director.svg' alt='image' width={200} height={200} 
                                className='w-40 rounded-full object-cover h-full md:h-12 md:w-12' />
                            </div> */}
                            <div className='text-[#1f357f]'>
                                <div className='font-medium'>Mr Robert Miller</div>
                            </div>
                        </div>
                    </div>
                </>

            </Slider>
        </div>

    );
}
 

export default EightSection;