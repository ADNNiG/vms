import { Check } from "lucide-react";

const FirstSection = () => {
    return ( 
        <div className="md:py-5">
                <div className="md:text-center space-y-4 px-10">
                    <div className="md:text-3xl text-xl text-rose-600 font-bold">
                        VMS EXECUTIVE DIRECTOR
                    </div>
                    <div className="text-5xl md:text-5xl flex md:justify-center font-bold md:py-1">
                        MR SAMUEL MEDAHUNSI
                    </div>
                    <p className="text-xl md:text-1xl font-light md:w-1/2 md:mx-auto text-rose-300 leading-normal"> 
                     BSC MSC</p>
                    {/* <div className="flex gap-4 md:justify-center pt-1">
                        <div className="flex">
                            <div className="text-white md:w-60 justify-between text-md font-light rounded-[40px] 
                             border-4 border-rose-400/90 py-4 md:py-3 bg-vms hover:scale-110 transition-all duration-300
                             swhadow-md hover:shadow-rose-700">
                                <div className=" items-center justify-center md:justify-between px-3">
                                        ENROL NOW!!!
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="pt-10 md:pt-2">                  
                        <video className="rounded-[20px] md:rounded-[40px] shadow-rose-400 shadow-2xl xl:w-[50%] xl:mx-auto" autoPlay muted loop>
                            <source src="/videos/intro.mp4" type="video/mp4" />
                        </video>                    
                    </div>
                    {/* <div className="text-4xl md:text-5xl flex md:justify-center font-bold pt-10 md:pt-10 pb-10 md:pb-10">
                            Why Parents Loves VMS
                    </div>
                    <div className="md:justify-center flex">
                        <div className="flex flex-col space-y-6 pb-10">
                            <div  className="flex gap-6 items-center">
                                <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                                    <Check className="text-4xl text-rose-600" /> </div>
                                    <div className="text-xl text-rose-600 font-normal">Dedication</div>
                               
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                                    <Check className="text-4xl text-rose-600" /></div>
                                    <div className="text-xl text-rose-600 font-normal">Excellence</div>

                                
                            </div>

                            <div className="flex gap-6 items-center">
                                <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                                    <Check className="text-4xl text-rose-600" /></div>
                                <div className="text-xl text-rose-600 font-normal">Productivity</div>                                
                            </div>
                        </div>
                    </div> */}
                    

                </div>
        </div>
     );
}
 
export default FirstSection;