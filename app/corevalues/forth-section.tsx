import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const FourthSection = () => {
    return ( 
        <div className="md:py-1">
            <div className="px-10 md:text-center space-y-4">
                <div className="text-3xl md:text-5xl  text-vms md:justify-center font-medium pt-10">
                    What are you waiting for?
                </div>
                <p className="text-xl md:text-2xl font-bold md:w-3/4 md:mx-auto text-[#3b394e] 
                leading-normal">
                    Enrol your children with us today and unlock their capabilities to it&apos;s maximum
                </p>

                <div className="py-5 md:pt-0">
                    <Image src={"/images/basic3.jpg"} alt="image" width={1920} height={1080}
                    className="object-cover rounded-[30px] md:rounded-[80px] md:w-[50%] md:mx-auto w-full md:p-5" />
                </div>
            </div>
            <div className="flex justify-center items-center p-10 md:p-10">
            <Link href={"/contactus"}>
            <Button className="font-medium md:text-lg mt-6 rounded-[40px] border-4 border-rose-200/90 py-6 bg-rose-400
            hover:scale-110 hover:shadow-rose-800 transition-all duration-300 shadow-md">ENROL YOUR CHILD NOW!
            </Button></Link>

            </div>
            
        </div>
     );
}
 
export default FourthSection;