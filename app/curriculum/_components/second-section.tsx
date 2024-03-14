import SliderOne from "@/app/(landing-page)/_components/slider/_components/slider-one";

const SecondText = () => {
    return ( 
        <div className="bg-[#111019]">
            <div className="md:pt-0 pt-5">
                <div className="text-[#f1f0f3] px-6 md:w-full mx:auto text-center flex justify-center items-center md:text-2xl text-2xl font-medium">
                    VMS is the choice for many parents just because we keep up to all our claims!
                </div>
                <div className="p-10">
                    <SliderOne />
                   
                </div>
            </div>
        </div>
     );
}
 
export default SecondText;