import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SecondGod = () => {
    return (  
        <div className="flex items-center justify-center">
            <div className="w-full md:w-5/6 md:rounded-[80px] bg-vms">
                <div className="md:py-30">
                    <div className="md:flex md:px-20 px-5 md:space-x-20 md:space-y-0">
                        <div className="md:w-1/2">
                            <Image src='/images/drvms.png' alt="image" width={1920} height={1080} className="object-cover 
                            rounded-md w-full p-10"/>
                        </div>
                        <div className="text-white flex space-y-10 md:w-1/2">
                            <div className="md:space-y10 flex flex-col px-4 py-10">
                                <div className="text-2xl md:text-3xl">VMS</div> 
                                <div className="text-5xl md:text-7xl pb-4 md:pb-0">EXECUTIVE DIRECTOR</div>
                                <div className="text-xl md:text-3xl w-5/6">
                                I will like to welcome you to VMS, here giving the best all round education is our
                                top priority, whatever your education needs are, VMS got you, without a doubt we are 
                                the best school here in Ibeju Lekki Lagos State. We are,
                                </div>  
                                <div className="md:flex pt-10 md:py-10">
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Cognitive</span>
                                        </div>   
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Affective</span>
                                        </div>  
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Creative</span>
                                        </div> 
                                             
                                        
                                    </div>
                                    <div className="space-y-10 py-10 md:py-0 md:ml-40">
                                    <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Truthful</span>
                                        </div>                       
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Positive</span>
                                        </div>   
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-rose-500" />
                                            <span>Enlighten</span>
                                        </div> 
                                    </div>
                                </div>
                                <Link href={"/contactus"}>
                                <Button className="text-md font-light w-40 rounded-[40px] border-4 border-rose-400 bg-vms 
                                hover:scale-110 hover:shadow-rose-300 transition-all duration-300 shadow-md">ENROLL NOW</Button>
                                </Link>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
 
export default SecondGod;