import Image from "next/image";

const SecondSection = () => {
    return ( 
        <div className="bg-[#ffedec] mx-auto">
            <div className="py-1">
                <div className="md:flex md:space-y-0 items-center md:p-10">
                    <div className="md:order-1 md:pr-0">
                        <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
                            <div className="order-2 md:order-1 w-full md:w-1/2">
                                <Image src={"/images/values.png"} alt="image" width={700} height={700} 
                                className="object-cover rounded-md w-full p-10" />
                            </div>
                            <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-2">
                                <div className="space-y-1 text-md">
                                    <div className="text-vms font-medium leading-normal text-2xl md:text-4xl pb-4">
                                        OUR VISION
                                    </div>
                                    <div className="text-md text-vms md:leading-8 font-medium">
                                    Our Vision statement aim to create a nurturing school community, 
                                    where children excel in their achievements and are inspired to continue
                                    learning in the future.
                                    </div>
                                </div>
                                <div className="space-y-1 text-vms">
                                    <div className="text-vms font-medium leading-normal text-2xl md:text-4xl pb-4">
                                    OUR VISION STATEMENT
                                    </div>
                                    <div className="text-sm md:text-md leading-10 font-medium">
                                    VMS mission fully embraces and upholds moral values. Our mission is to turn 
                                    out morally and academically sound students, positioning our school as a leading 
                                    portal and employing the best resources to satisfy our stakeholder&apos;s total quality 
                                    demands and aspirations.
                                    </div>
                                </div>

                                <div className="space-y-1 text-vms">
                                    <div className="text-vms font-medium leading-normal text-2xl md:text-4xl pb-4">
                                    OUR AIM
                                    </div>
                                    <div className="text-sm md:text-md leading-10 font-medium">                                   
                                    We aim to lay the foundation of a lifelong educational experience, 
                                    giving the individual confidence and respect that will overcome all 
                                    distinctions of race, class, color, and creed. We also wish to develop 
                                    in our students a consciousness of the needs of society and the desire to 
                                    contribute positively through selfless service, putting the totality of God-given 
                                    talents and acquired knowledge to the service of humanity.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SecondSection;