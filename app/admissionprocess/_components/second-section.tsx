    'use client'

    import { useState } from 'react'

    import Image from 'next/image';

    import Link from 'next/link';


const SecondSection = () => {
const [activeTitle, setActiveTitle] = useState ("Titles")

const handleTitleClick = (title : any) => {
    setActiveTitle(title)
}

const renderContent = () => {
    switch ( activeTitle ) {
        case "Creche" :
            return (
                <div className='md:py-8'>
                    <p className='text-2xl leading-relax text-[#3d2e7c] font-medium'>
                       <div className='pb-5'>CRECHE:    3 months and above</div>
                       <div className='pb-5'>BUTTERCUP:    18 months to 29 months and above</div> 
                       <div>TULIPS:    30 months to 4 years and above</div>  
                    </p>
                </div>
            )

            case "Basic" :
                return (
                    <div className='md:py-8'>
                       
                        <p className='text-3xl leading-relax text-[#3d2e7c] font-medium'>
                            <div className='pb-5'>YEAR 1 : 5 years and above</div>
                            <div className='pb-5'>YEAR 2 : 6 years and above</div>
                            <div className='pb-5'>YEAR 3 : 7 years and above</div>
                            <div className='pb-5'>YEAR 4 : 8 years and above</div>
                            <div className='pb-5'>YEAR 5 : 9 years and above</div>
                            <div className=''>YEAR 6 : 10 years and above</div>
                        </p>
                    </div>
                )

                case "College" :
                    return (
                        <div className='md:py-8'>                           
                            <p className='text-3xl leading-relax text-[#3d2e7c] font-medium'>
                            <div className='pb-5'>YEAR 7 : 11 years and above </div>
                            <div className='pb-5'>YEAR 8 : 12 years and above</div>
                            <div className='pb-5'>YEAR 9 : 13 years and above</div>
                            <div className='pb-5'>YEAR 10 : 14 years and above</div>
                            <div className=''>YEAR 11 : 15 years and above</div>
                           
                            </p>
                        </div>
                    )

                
                    default:
                        return null;

        }
    };


    return ( 
        <>
         <div className='bg-rose-100 pt-10 flex items-center justify-center space-x-20'>
            <div className='md:w-2/5'>
                <div className='text-4xl md:text-5xl font-semibold text-[#2b1c50] px-10 md:px-6 pb-6'>
                    VMS REQUIREMENTS
                </div>
                <div className='md:flex md:space-x-6 md:pl-6'>
                    {["Creche", "Basic", "College"].map((title) => (
                        <div key={title} className={`hidden items-center justify-center md:flex rounded-3xl cursor-pointer
                        ${activeTitle === title ? 'bg-[#d1d1f7] text-[#3d2e7c] hover:scale-110 transition-transform duration-300'
                    :'text-[#4b42ad] hover:shadow-md hover:scale-110 hover:shadow-rose-800 hover:text-[#3d2e7c] transition-transform duration-300'}`}
                    onClick={() => handleTitleClick(title)}>
                        <div className='text-md py-4 px-6'>{title}

                        </div>
                        </div>
                    ))}                    
                  </div>
                    <div className='px-10 hidden md:block h-96'>{renderContent()} </div>                  
                </div> 
                
                <Image src="/images/abt12.jpg" alt='image' width={1920} height={1080} 
                className='hidden md:block w-1/3 rounded-[40px] hover:scale-110 
                hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg cursor-pointer'/>  
               

        </div>
        <div className='md:hidden bg-rose-100'>
            <div className='px-10'>
                <div className='md:hidden pt-6'>
                    <Image src="/images/creche.jpg" alt='image' width={1920} height={1080} className='rounded-[40px] hover:scale-110 
                    hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg'/>
                    <div className='pt-10 pb-4 text-2xl font-bold text-[#2b1c50]'>
                        CRECHE & PRE SCHOOL 
                    </div>
                    <div className='leading-relaxed text-[#3d2e7c] font-medium'>
                        <div className='pb-5'>CRECHE:    3 months and above</div>
                        <div className='pb-5'>BUTTERCUP:    18 months to 29 months and above</div> 
                        <div>TULIPS:    30 months to 4 years and above</div>  
                    </div>
                </div>
            </div>

            <div className='px-10'>
                <div className='md:hidden pt-6'>
                    <Image src="/images/abt12.jpg" alt='image' width={1920} height={1080} className='rounded-[40px] hover:scale-110 
                    hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg' />
                    <div className='pt-10 pb-4 text-2xl font-bold text-[#2b1c50]'>
                        BASIC 
                    </div>
                    <div className='leading-relaxed text-[#3d2e7c] font-medium'>
                        <div className='pb-5'>YEAR 1 : 5 years and above</div>
                            <div className='pb-5'>YEAR 2 : 6 years and above</div>
                            <div className='pb-5'>YEAR 3 : 7 years and above</div>
                            <div className='pb-5'>YEAR 4 : 8 years and above</div>
                            <div className='pb-5'>YEAR 5 : 9 years and above</div>
                            <div className=''>YEAR 6 : 10 years and above</div>
                    </div>
                </div>
            </div>

            <div className='px-10'>
                <div className='md:hidden pt-6'>
                    <Image src="/images/college1.jpg" alt='image' width={1920} height={1080} className='rounded-[40px] hover:scale-110 
                    hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg'/>
                    <div className='pt-10 pb-4 text-2xl font-bold text-[#2b1c50] '>
                        COLLEGE 
                    </div>
                    <div className='leading-relaxed text-[#3d2e7c] font-medium'>
                        <div className='pb-5'>YEAR 1 : 5 years and above</div>
                        <div className='pb-5'>YEAR 7 : 11 years and above </div>
                            <div className='pb-5'>YEAR 8 : 12 years and above</div>
                            <div className='pb-5'>YEAR 9 : 13 years and above</div>
                            <div className='pb-5'>YEAR 10 : 14 years and above</div>
                            <div className=''>YEAR 11 : 15 years and above</div>
                    </div>
                </div>
            </div>


        </div>
        
        </>
       
     )
}
 
export default SecondSection;