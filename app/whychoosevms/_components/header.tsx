import React from "react"


import { Check } from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
    return ( 
        <div className="md:pt-0 pb-32c px-10">
            <div className="text-[#111019] md:text-center flex justify-center items-center md:text-6xl text-4xl font-medium pb-10 md:pb-10">
                WHY CHOOSE VMS?
            </div> 
            <div className="md:flex item-center justify-center">
                <div className="md:w-2/5 bg-rose-200 rounded-[60px] md:p-10">
                    <Image src="/images/thinking.png" alt="image" width={1920} height={1080} className="object-cover rounded-md w-fullp-10" />   
                </div>
                <div className="pt-10 md:ml-20 md:w-1/3">
                    <div className="flex gap-6">
                        {/* <div className="hidden bg-rose-100 w-14 h-14 rounded-full md:flex items-center justify-center">
                            <MousePointerSquareDashed className="text-6xl text-rose-500" />
                        </div> */}
                        <div className="w-full md:w-96">
                            <div className="text-rose-600 font-medium leading-normal md:text-4xl text-2xl">
                                Are You Still in Doubt?
                            </div>
                            <div className="md:text-xl text-rose-300 leading-8 md:leading-10 font-medium pt-6">
                            Choosing the right school marks a new beginning in a child&apos;s life. Taking the time 
                            to explore educational opportunities is an important decision for every family and parent.                            
                            
                            </div>
                            <Link href={"/contactus"}>
                            <Button className="md:text-lg mt-6 rounded-[40px] text-rose-600 font-medium md:py-6 bg-[#eff0ff]
                            hover:scale-110 hover:shadow-rose-500 transition-all duration-300 shadow-md"> Enrol Now!</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center text-xl md:text-xl font-medium pt-10 md:pt-10 px-36 md:px-36 leading-normal md:leading-normal 
            md:py-2 text-[#111019] ">
            At Virtue Model Schools, we understand how boys and girls learn and grow. We strive to instill a spirit of excellence 
            in the children in our care, helping them to become outstanding scientists, athletes, artists and citizens of the world.
            Comprehensive training is critical for VMS. We help all students develop personal integrity and leadership skills that will 
            serve them throughout their lives. Virtue Model School is Nigeria&apos;s premier ideological school. We help students develop 
            a growth mindset so they can be more innovative in solving global problems.
            </div>

            <div className="text-[#2b1c50] w-full text-center flex justify-center items-center md:text-3xl font-medium pb-5 md:pt-5">
                More benefits you get when you enrol with us
            </div>
            <div className="flex flec-col items-center justify-center pb-10 md:pb-10">
                <div className="md:flex">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Develop fundamental analytical skills needed to solve global problems</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Gets trained to be an innovative, world-class student</span>
                        </div>

                        
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Develop the thinking skills needed for admission and scholarship to top colleges</span>
                        </div>

                        
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Well Equipped Laboratries </span>
                        </div>                                               
                    </div>

                    <div className="pt-10 md:pt-0 space-y-10 md:ml-40">
                    <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Zero Tolerance to Indiscipline</span>
                        </div>

                        
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Afordable Tuition Fees</span>
                        </div>

                        
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Early Introduction to Computer Studies</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                                <Check className="text-3xl text-rose-500" />
                            </div>
                            <span className="text-xl">Excursions and Competitions</span>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
     );
}
 
export default Header;