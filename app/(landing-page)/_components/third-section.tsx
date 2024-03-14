import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThirdSection = () => {
    return (  
        <div className="py-5 items-center flex flex-col justify-center">
            <div className="px-12">
                <div className="text-vms md:text-center flex md:justify-center
                    items-center text-3xl md:text-5xl font-medium">
                        Looking for the right school for your child education?
                </div>
                <div className="pt-6 py-16 flex md:pb-10 text-[#3d2e7c] text-xl md:text-2xl
                font-medium items-center justufy-center">
                    VMS is the right choice for you, we are located at the heart of Ibeju lekki
                    creating exceptional future leaders!
                </div>
            </div>             
            <div className="items-center justify-center flex space-x-20">             
                <div className="w-full md:w-5/6 md:rounded-[80px] bg-rose-50">
                    <div className="md:py-10 py-16">
                        <div className="md:flex md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">                               
                                <div className="flex space-x-10 w-full">
                                    <div className="hidden rounded-full bg-[#ffedec] h-6 w-6 p-4 md:flex justify-center items-center">
                                        <div className="bg-rose-500 rounded-full p-2 animate-pulse duration-1000">
                                        </div>

                                    </div>
                                    <div>
                                        <div className="text-vms font-medium leading-normal w-2/3">
                                            Dedication, Assertiveness, Creativity, Honesty
                                        </div>
                                        <div className="text-lg text-rose-400 md:leading-10 font-medium wi5/6 py-4">
                                            The bright future of your children begins when you give them a sound education, from pre school
                                            to the basic class and to the college level, VMS is the right choice to give your children a sound education
                                        </div>
                                        <Link href={"/contactus"}>
                                            <Button className="font-light md:text-lg mt-6 rounded-[40px] border-4 border-rose-200/90 py-6 bg-rose-400
                                        hover:scale-110 hover:shadow-rose-800 transition-all duration-300 shadow-md">Contact Us Now!
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                <div className="md:w-1/2 mb-10 md:mb-0 order-1 p-10 md:p-0">
                                <video className="rounded-[40px] shadow-rose-400 shadow-2xl xl:w-5/6 xl:mx-auto" autoPlay muted loop>
                                    <source src="/videos/section4.mp4" type="video/mp4" />
                                </video>                                
                                </div> 
                                                           
                        </div>

                    </div>

                </div>
            </div>         
        </div>
    );
}
 
export default ThirdSection;