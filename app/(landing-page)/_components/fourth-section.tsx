import React from "react"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, CheckCircle2, MousePointerSquareDashed } from "lucide-react";
import Link from "next/link";

const FourthSection = () => {
    return ( 
        <div className="md:pt-0 pb-32c px-10">
            <div className="text-[#111019] md:text-center flex justify-center items-center md:text-6xl text-4xl font-medium pb-10 md:pb-20">
                LATEST NEWS
            </div> 
            <div className="md:flex item-center justify-center">
                <div className="md:w-2/5 bg-rose-200 rounded-[60px] md:p-20">
                    <Image src="/images/backtoschool.jpg" alt="image" width={1920} height={1080} className="object-cover rounded-md w-fullp-10" />   
                </div>
                <div className="pt-10 md:ml-20 md:w-1/3">
                    <div className="flex gap-6">
                        <div className="hidden bg-rose-100 w-14 h-14 rounded-full md:flex items-center justify-center">
                            <MousePointerSquareDashed className="text-6xl text-rose-500" />
                        </div>
                        <div className="w-full md:w-96">
                            <div className="text-rose-600 font-medium leading-normal md:text-4xl text-2xl">
                                10% Discounts Awaits You!
                            </div>
                            <div className="md:text-xl text-rose-300 leading-8 md:leading-10 font-medium pt-6">
                            School resumes on the 8th of Jan, 2024. Here is good news for all our dear parents: 
                            make a full payment on your child 2nd term school fees and get a 10% discount right away
                            </div>
                            <Link href={"/summerschool"}>
                            <Button className="md:text-lg mt-6 rounded-[40px] text-rose-600 font-medium md:py-6 bg-[#eff0ff]
                            hover:scale-110 hover:shadow-rose-500 transition-all duration-300 shadow-md"> Make Payment Now!</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex items-center justify-center md:w-5/6 md:pl-10 md:mx-auto">
                    <div className="flex flex-col-reverse md:flex-row md:mx-auto md:space-x-40 items-center justify-center">
                        <div className="flex gap-6">
                            <div className="bg-[#d1d1f7] w-14 h-14 rounded-full hidden md:flex items-center justify-center">
                                <CheckCircle2 className="text-6xl text-rose-500" />   
                            </div>
                            <div className="md:w-96">
                                <div className="text-rose-600 font-medium leading-normal text-xl md:text-4xl">
                                    HAPPY NEW YEAR!!!
                                </div>
                                <div className="md:text-xl text-rose-300 leading-8 font-medium pt-6">
                                From all of us at Virtue Model School, we would like to wish our dear parents and students 
                                a happy new year filled with laughter and lots of fulfilment. And to also tell our parents that 
                                this is the best time to claim the 10% discount going on right now if you make an early payment 
                                of your child&apos;s school fees
                                </div>
                                <Link href={"/summerschool"}>
                                    <Button className="md:text-lg mt-6 rounded-[40px] text-rose-700 font-medium md:py-6 bg-[#eff0ff]
                                    hover:scale-110 hover:shadow-rose-500 transition-all duration-300 shadow-md">PAY FEES!</Button>
                                </Link>
                            </div>
                         </div>
                         <div className="mb-10 md:mb-0 order-1 mt-10 p-10 md:items-center bg-[#eff0ff] rounded-[60px]">
                         <Image src="/images/happynewyear.jpg" alt="image" width={1920} height={1080} className="object-cover rounded-md w-fullp-10" />   
                         </div>
                    </div>
                </div>
                <div className="pt-10 md:flex items-center justify-center">
                    <div className="md:w-2/5 bg-rose-100 rounded-[60px] md:p-20">
                    <Image src="/images/usa.jpg" alt="image" width={1920} height={1080} className="object-cover rounded-md w-fullp-10" />   
                    </div>
                    <div className="pt-20 md:pb-10 md:ml-20 md:w-1/3">
                        <div className="flex gap-6">
                            <div className="hidden bg-rose-200 w-14 h-14 rounded-full md:flex items-center justify-center">
                                <MousePointerSquareDashed className="text-6xl text-rose-500" />
                            </div>
                            <div className="w-full md:w-96">
                                <div className="text-rose-600 font-medium leading-normal md:text-4xl text-2xl">
                                    UNIVERSITY ACADEMY STUDY
                                </div>
                                <div className="md:text-xl text-rose-300 leading-8 md:leading-10 font-medium pt-6">
                                University Academy Study is another branch of VMS that caters to returning students who 
                                need extra coaching to succeed in any O-level exams and gain admission into any university 
                                of their choice. Have you finished college and are still struggling to pass in all your core 
                                subjects, then kindly contact us to make an enquiry about University Study Academy
                                </div>
                                <Link href={"/contactus"}>
                                    <Button className="md:text-lg mt-6 rounded-[40px] text-rose-700 font-medium md:py-6 bg-[#eff0ff]
                                    hover:scale-110 hover:shadow-rose-500 transition-all duration-300 shadow-md">MAKE ENQUIRY!</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default FourthSection;