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
                                                Mrs Eniola Medahunsi graduated from the University of Lagos with a second-class honor 
                                                in economics. She proceeded with her education by getting a postgraduate diploma in 
                                                education and went ahead to bag her master&apos;s in psychology from the University 
                                                of Lagos.
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-xl text-rose-500 font-medium md:leading-normal leading-normal md:text-4xl">
                                                    MISSION
                                                </div>
                                                <div className="pt-4 text-sm md:text-rose-400 leading-10 font-medium md:w-4/5">
                                                My mission is to make sure that every student of Virtue Model School can stand for 
                                                themselves anywhere they find themselves in this world. With a sound education and 
                                                discipline that is practiced here at VMS, this can be achieved. Academic excellence 
                                                is what we practice here, and it has always been a mission of mine that all students 
                                                of VMS must be the best at all they do.
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pt-10 md:pt-0">
                                    <Image src="/images/rv1.jpg" alt="image" width={1920} height={1080} className="object-cover md:rounded-[60px] w-full p-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default SecondSection;