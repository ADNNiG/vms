'use client'
import React, { useState} from 'react';
import {motion } from "framer-motion";

import ContentMenu from './content-menu';

import {
    AlignJustify,
    BarChart,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock, 
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus
} from 'lucide-react';

interface MenuItem{
    title: string
    menu: string
    options: {label:string, emoji:React.ReactElement, href:string}[];  
}

const items : MenuItem[] = [
 
    {
        title: "ABOUT US",
        menu: "about-us", 
        options: [
            {label : "About Us", emoji:<UserPlus className="text-orange-500" />, href:"/aboutus"},
            {label : "Head of Staff", emoji:<UserPlus className="text-orange-500" />, href:"/headofstaff"},
            {label : "Executive Director", emoji:<DollarSign className="text-blue-500" />, href:"/executivedirector"},
            // {label : "School Song", emoji:<Code2Icon className="text-green-500" />, href:"/schoolsong"},
            {label : "Vision | Mission | Values", emoji:<PaintBucket className="text-indigo-500" />, href:"/corevalues"},
        ],
    },
    {
        title: "ADMISSIONS",
        menu: "admissions",
        options: [
           // {label : "Admissions", emoji:<UserPlus className="text-orange-500" />, href:"/#"},//
            {label : "Why Choose VMS?", emoji:<UserPlus className="text-orange-500" />, href:"/whychoosevms"},
           // {label : "Tuition & Payment", emoji:<DollarSign className="text-blue-500" />, href:"/tuition"},//
            //{label : "Entrance Examination", emoji:<Code2Icon className="text-green-500" />, href:"/entranceexamination"},//
            {label : "Admission Process", emoji:<PaintBucket className="text-indigo-500" />, href:"/admissionprocess"},
            {label : "Application Form", emoji:<PaintBucket className="text-indigo-500" />, href:"/applicationform"},
        ],
    },
    {
        title: "NEWS",
        menu: "news",
        options: [
            {label : "News", emoji:<UserPlus className="text-orange-500" />, href:"/#"},
            {label : "Events", emoji:<DollarSign className="text-blue-500" />, href:"/#"},
        ],
    },    
    {
        title: "PAY FEES",
        menu: "Pay-fees",
        options: [
            {label : "Summer School", emoji:<UserPlus className="text-orange-500" />, href:"/redirect"},
            {label : "School Fees", emoji:<DollarSign className="text-blue-500" />, href:"/redirect"},
            {label : "Other Payment", emoji:<Code2Icon className="text-green-500" />, href:"/redirect"},
        ],
    },
    {
        title: "ACADEMICS",
        menu: "academics",
        options: [
            //{label : "Academics", emoji:<UserPlus className="text-orange-500" />, href:"/#"},//
            //{label : "Curriculum", emoji:<UserPlus className="text-orange-500" />, href:"/#"},//
            {label : "Creche", emoji:<DollarSign className="text-blue-500" />, href:"/#"},
            {label : "Pre School", emoji:<Code2Icon className="text-green-500" />, href:"/#"},
            {label : "Basic", emoji:<PaintBucket className="text-indigo-500" />, href:"/#"},
            {label : "College", emoji:<Code2Icon className="text-green-500" />, href:"/#"},
            //{label : "Sports", emoji:<PaintBucket className="text-indigo-500" />, href:"/#"},//
        ],
    },
];

export function NavigationMenuBar () {
    const [activeMenu, setActiveMenu]= useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveMenu(menu);
    }

    const handleMouseLeave = () => {
        setActiveMenu(null);
    }


    const renderMenu = ( item: MenuItem) => {
        const {title, menu, options} = item;
    

    return ( 
        <div className='flex items-center relative hover:text-vms' 
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}  
        >
            <div className='flex items-center font-semibold'>
                {/* <a href={'/${menu}'} className='w-24'> */}
                    {title}
                {/* </a> */}
                <div>
                    <ChevronDown className='relative top-[1px] h-3 w-3' />
                </div>
                <div className='mt-20'>
                    {activeMenu === menu && (
                         <ContentMenu
                         options={options.map((option, index) => (
                            {
                                ...option,
                                href:option.href
                            }

                         ))}
                         />
                    )}
                   
                   
                </div>
               
                
            </div>       
        </div>
        
    );
    }

 return (
    <div className='hidden text-md font-light space-x-4 w-full items-center xl:flex h-24'>
        {items.map((item, index) => (
            <React.Fragment key={index}>
                <div className='cursor-pointer hidden xl:block'>
                    {renderMenu(item)}
                </div>
            </React.Fragment>
        ))}
    </div>
    )
}