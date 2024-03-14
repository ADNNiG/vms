
import { MessageCircle } from "lucide-react";
import Image from "next/image";


const FirstSection = () => {
    return ( 
        <div className="md:py-10 bg-[#111019] px-10">
            <div className="md:text-center md:justify-center items-center flex flex-col">
                <div className="text-5xl md:text-7xl md:justify-center flex font-medium pt-16 pb-10 text-[#f1f0f3]">
                    Our Curriculum
                </div>
                <p className="text-xl md:text-3xl font-light md:w-1/2 md:mx-auto text-[#bbb6c6] leading-normal">
                    Virtue Model School adopts a child-centered approach because learning is our core purpose
                </p>

                <div className="mt-10 flex items-center justify-between gap-4 bg-[#565add] text-white px-6 py-2 rounded-full">
                    <MessageCircle className="w-6 h-6" />
                    <div className="text-lg"> Contact Us</div>
                </div>
                <div className="pt-5">
                <Image src="/images/curriculum.jpg" alt="image" width={600} height={600} className="object-cover md:rounded-[60px] w-full rounded-[40px] hover:scale-110 
                    hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg" />

              

                </div>

            </div>

        </div>
     );
}
 
export default FirstSection;