import Image from "next/image";



const SecondSection = () => {
    return ( 
        <div>
                <div className="items-center justify-center flex md:space-x-20 pt-10">
                    <div className="w-full bg-[#eff0ff]">
                        <div className="md:py-20 py-16">
                            <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                                <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                    <div className="flex">
                                        <div className="space-y-10">
                                            <div className="space-y-1 md:text-md">
                                                <div className="text-rose-500 font-medium md:leading-normal md:text-4xl">
                                                    EDUCATION BACKGROUND
                                                </div>
                                                <div className="pt-4 text-sm md:text-rose-400 leading-10 font-medium md:w-4/5">
                                                Mr Samuel Medahunsi graduated from the University of Akure with a second-class 
                                                honor in accounting, he further attained his master&apos;s at the University of Lagos.
                                                He is the executive accountant at Forte Oil, as well as Virtue Model School. He is well-known 
                                                for his passion for education, and as his saying goes, there is nothing I wouldn&apos;t do to 
                                                to give the best to VMS Students 
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-xl text-rose-500 font-medium md:leading-normal leading-normal md:text-4xl">
                                                    MISSION
                                                </div>
                                                <div className="pt-4 text-sm md:text-rose-400 leading-10 font-medium md:w-4/5">
                                                Before the inception of Virtue Model School, I had always had a passion for children&apos;s education
                                                , and when I checked the Ibeju Lekki axis, I noticed that no school met the elite standards that I would want 
                                                as a director, and the few that were pushing the boundaries were very expensive, even for the middle class. 
                                                This was when I knew that something needed to be done. It has always been my mission to provide affordable, quality education 
                                                without compromising on anything because every child deserves 
                                                quality education. That has been my mission for VMS.
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pt-10 md:pt-0">
                                    <Image src="/images/Executivedirector.png" alt="image" width={1920} height={1080} className="object-cover md:rounded-[60px] w-full p-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default SecondSection;