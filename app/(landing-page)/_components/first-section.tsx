import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
    return (  
       <section className="xl:py-36 py-10 px-10 bg-rose-300">
        <div className="md:items-center flex flex-col">
            <div className="lg:text-5xl xl:text-6xl text-4xl flex justify-center font-bold text-vms">
                WELCOME TO VIRTUE MODEL SCHOOL LEKKI
            </div>
            <p className="text-xl xl:text-3xl font-medium xl:w-1/2 text-rose-500 lg:pt-6 pt-4 md:text-center">
                The Epitome of Knowledge where academic excellence is top notch
            </p>

            <div className="flex gap-4 py-10 xl:pt-10 ">
                <Link href={"/applicationform"}>
                    <Button className="xl:text-3xl text-xl md:justify-center font-light rounded-[60px] border-8 
                    border-rose-400/90 py-9 px-10 xl:py-12 xl:px-24 bg-vms transition-all 
                    duration-300 shadow-md hover:shadow-rose-300 hover:scale-110">
                        Enrol your Child Now!!!
                    </Button>
                </Link>                
            </div>
            <div className="xl:pt-10">
                <video className="rounded-[40px] shadow-rose-400 shadow-2xl xl:w-5/6 xl:mx-auto" autoPlay muted loop>
                    <source src="/videos/vmsslow.mp4" type="video/mp4" />
                </video>
            </div>

        </div>

       </section>
    );
}
 
export default FirstSection;