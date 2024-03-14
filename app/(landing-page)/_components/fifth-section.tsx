
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FifthSection = () => {
    return ( 
        <div className="md:w-5/6 md:h-[50%] mx-auto bg-[#eff0ff] md:rounded-[80px] md:p-10 pt-20 items-center justify-center">
            <div className="text-rose-500 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl py-10 font-medium">
                Think Education is Expensive? Try Ignorance!
            </div>
            <div className="text-xl md:w-2/3 md;text-3xl text-rose-400 leading-relaxed font-medium justify-center text-center w-4/5 mx-auto">
                Give your child the best education they truly deserve, At Virtue Model school Lekki we know how important it is for a child to be 
                academically sound expecially at the early stage, that is why we take premetive measures to ensure that all dots are checked when it comes
                to giving your child the best education, we are located in the heart of Ibeju Lekki, a standard school is also available in 
                conveying students that dont live nearby. Contact us today a start a journey that will secure your child&apos;s future
            </div>     
            <div className="items-center justify-center flex py-10">
            <Link href={"/contactus"}>
                <Button className="md:text-xl py-6 font-light rounded-[40px] border-4 border-rose-400/90 md:p-8 bg-rose-300
                hover:scale-110 hover:shadow-rose-500 transition-all duration-300 shadow-md">ENROL NOW!</Button>
            </Link>
            </div>      
        </div>
     );
}
 
export default FifthSection;