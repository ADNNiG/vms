import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
const SixthSection = () => {
    return ( 
        <div className="py-10 px-10">
            <div className="text-vms text-center justify-center items-center text-4xl md:text-6xl font-medium md:pb-5 mb-10">
                    CLASSES YOUR CHILD CAN ENROL NOW!!!
            </div>
            
            <div className="md:flex items-center justify-center md:space-x-20 space-y-10 md:space-y-0">
                <Link href={"/contactus"} className="cursor-pointer">                
                    <div className="bg-[#e8f5e3] rounded-[40px] mr-[-30px] mb-10 md:w-80 p-10 pb-28 hover:scale-105 hover:shadow-xl">
                        <Image src={"/images/virtuecreche.jpg"} alt="image" width={1920} height={1080} className="rounded-xl h-40 w-80" />
                        <div className="text-2xl items-center text-[#224229] justify-center flex pt-0 ">
                            CRECHE
                        </div>
                        <div className="text-[#315b39] text-center leading-8 pt-4 h-24">
                             Creche is the foundation of your child&apo;s education. VMS Creche has all the best 
                            facilities to give your child the best. Click to LEARN MORE!                    
                        </div>
                    </div>
                </Link> 

                <Link href={"/contactus"} className="cursor-pointer">
                    <div className="bg-[#f8edfb] rounded-[40px] mr-[-30px] mb-10 md:w-80 p-10 pb-28 hover:scale-105 hover:shadow-xl">
                        <Image src={"/images/vmsps.jpg"} alt="image" width={1920} height={1080} className="rounded-xl h-40 w-80" />
                            <div className="text-2xl items-center text-[#450f3a] justify-center flex pt-0 ">
                                 PRE SCHOOL
                            </div>
                        <div className="text-[#681b58] text-center leading-8 pt-4 h-24">
                            Take your child&apos;s education to the next level with VMS Pre- School class. VMS Pre-school is the best for your child. 
                            Click to LEARN MORE! 
                        </div>
                    </div>
                </Link> 

                <Link href={"/contactus"} className="cursor-pointer">
                    <div className="bg-[#e3f3ff] mb-10 mr-[-30px] rounded-[40px] md:w-80 p-10 pb-28 hover:scale-105 hover:shadow-xl">
                        <Image src={"/images/vmsbasic.jpg"} alt="image" width={1920} height={1080} className="rounded-xl h-40 w-80" />
                        <div className="text-2xl items-center justify-center text-[#1b224b] flex pt-0 ">
                        BASIC 
                        </div>
                        <div className="text-[#1f357f] text-center leading-8 pt-4 h-24">
                            VMS basic class teaches different subjects that prepares student for the higher class, with 
                            qualified staff and condusive eviroment for learning.  Click to LEARN MORE!
                        </div>
                    </div>
                </Link> 

                <Link href={"/contactus"} className="cursor-pointer">
                    <div className="bg-[#eff0ff] mb-10 rounded-[40px] mr-[-30px] md:w-80 p-10 pb-28 hover:scale-105 hover:shadow-xl">
                        <Image src={"/images/vmscollege.jpg"} alt="image" width={1920} height={1080} className="rounded-xl h-40 w-80" />
                         <div className="text-2xl items-center justify-center text-[#2b1c50] flex pt-0 ">
                            COLLEGE 
                        </div>
                        <div className="text-[#2b1c50] text-center leading-8 pt-4 h-24">
                            Our college class is equipped with the best facilities that caters for students going either science, 
                            commercial or art class. Click to LEARN MORE!
                        </div>
                    </div>
                 </Link> 
            </div>
            
            <div className="flex items-center justify-center pt-0">
            <Link href={"tuitionestimate"}>
                <Button className="text-lg mt-6 rounded-[40px] text-rose-700 font-medium border-4 border-rose-400/90 p-8 bg-rose-200 hover:scale-110
                 hover:shadow-rose-900  transition-all  duration-300 shadow-md ">REQUEST AN ESTIMATE OF OUR TUITION FEES</Button>
                 </Link>
            </div>
            
            
            
        </div>
     );
}
 
export default SixthSection;