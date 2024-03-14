import SliderOne from "@/app/(landing-page)/_components/slider/_components/slider-one";





const Slider = () => {
    return (  
        <div className="pt-5 md:pt-10">
            <div className="text-[#2b1c50] md:w-3/5 mx-auto text-center flex justify-center items-center md:text-4xl text-2xl px-10 font-bold">
                Guarranteed O&apos;level Exams Success with VMS
            </div>
    
            <div className="pt-10 md:pb-9 pb-7 items-center justify-center flex">
                <div className="text-white md:w-60 justify-center text-md font-light cursor-pointer rounded-[40px] border-4 
                border-rose-400/90 md:py-4 py-4 px-6 bg-vms hover:scale-110 
                transition-all duration-300 shadow-md hover:shadow-rose-300">  
                    <div className="text-lg text-center">ENROL NOW!!!</div>                 
                </div>
            </div>
            <div className="pb-7 md:pb-9">
             <SliderOne />
            </div>
            

        </div>
    );
}
 
export default Slider;