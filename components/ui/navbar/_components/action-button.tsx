'use client'

import React, { useState } from 'react';

import { Button } from '@/components/ui/button'

import { X, AlignJustify } from 'lucide-react'
import Link from 'next/link' 
import DropDownMenu from './drop-down-menu';


const ActionButtons = () => {

    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () =>{
        setDropDownVisible(false)
    }

    return (        
            <div className='flex items-center md:justify-end md:space-x-6 sm:px-10'>
                {/* <div className='flex xl:space-x-6'>
                    <Link href ={'/getstarted'} className='xl:flex items-center hidden'>
                        <div className='font-light flex '>
                            Pricing
                        </div>
                    </Link>
                    <Link href ={'/signin'} className='xl:flex items-center hidden'>
                        <div className="font-light flex xl:w-14">
                            Sign In
                        </div>
                    </Link>

                </div> */}
                <div className='flex lg:space-x-4 items-center'>
                    <Link href={"/auth"}>
                        <Button className='hidden md:flex text-md font-semibold rounded-[40px] 
                        border-4 border-rose-400/90 py-6 bg-[#B90C1B] hover:scale-110 transition-all
                        duration-300 shadow-md hover:shadow-rose-300'>
                            STUDENT PORTAL
                        </Button>
                    </Link>
                    <Link href={"/contactus"}>
                        <Button className='h-12 animate-shimmer items-center justify-center rounded-md border 
                        border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
                        px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 
                        focus:ring-offset-2 focus:ring-offset-slate-50       hidden text-[#B90C1B] text-md font-semibold bg-[#eff0ff]
                        hover:scale-110 transiton-all duration-900 shadow-md md:hidden lg:flex hover:shadow-rose-300 p-6'>
                            CONTACT US
                        </Button>
                    </Link>
                </div>

                {isDropDownVisible && (
                    <div onClick={toggleDropdown} className='bg-[#b90c1b] p-3 rounded-full xl:hidden'>
                        <X className='h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full' />
                        </div>
                )}
                {!isDropDownVisible && (
                    <div onClick={toggleDropdown} className='bg-[#eff0ff] p-3 rounded-full xl:hidden'>
                    <AlignJustify className='h-6 w-6 text-[#b90c1b] items-center justify-center rounded-full' /> 
                    </div>
                )}
                {isDropDownVisible && <DropDownMenu onClose={closeDropDown} />}
               
            </div>
     );
}
 
export default ActionButtons;