import SliderAbout from "@/components/sliders/sliderabout";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

const SpotLight = () => {
    return ( 
        <div> 
        <Spotlight 
        className="hidden h-screen md:flex md:left-10 md:-top-32" fill="white" />
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-16 px-2">
            <div className="text-2xl pb-4 md:text-7xl px-6 text-center bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to gb-neutral-400 bg-opacity-50">
                About <br /> Virtue Model School Lekki<br />               

            </div>
            <p className="mt-1 text-[18px] font-light text-neutral-300 max-w-lg 
            text-center mx-auto px-5"> The epitome of learning where minds are shaped and molded into bright stars above.
            A sanctuary of learning, where curiosity is sparked 
            And wisdom is shared, leaving an everlasting mark.
            </p>

            <Link href={"/contactus"} className="cursor-popinter flex items-center 
            justify-center border hover:bg-gray-100 hover:text-vms rounded-full w-48 p-2 mx-auto my-6 text-white">
                Request A Meeting
            </Link>

            <div className="w-full pt-20">
                <SliderAbout />

            </div>

        </div>
           

       </div>
     );
}
 
export default SpotLight;