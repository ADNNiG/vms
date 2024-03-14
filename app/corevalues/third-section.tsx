import Image from "next/image";


const ThirdSection = () => {
    return ( 
        <div className="bg-[#eef0f5] mx-auto">
            <div className="py-1">
                <div className="md:flex md:space-y-0 items-center md:p-10">
                    <div className="md:order-1 md:pr-0">
                        <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">                            
                            <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-2">
                                <div className="space-y-1 text-md">
                                    <div className="text-[#273665] font-medium leading-normal text-2xl md:text-4xl pb-4">
                                        OUR PHILOSOPY
                                    </div>
                                    <div className="text-md text-[#273665] md:leading-loose leading-loose font-medium">
                                    The school is non-partisan, non-denominational, and non-discriminatory. 
                                    The only criteria for admission are academic merit and the willingness to do one&apos;s 
                                    best to achieve excellence. We believe that all African children in schools are members 
                                    of a privileged minority, regardless of social and economic standing, and we 
                                    owe them a duty to provide the highest possible standard of education. The school&apos;s 
                                    philosophy embraces internationalism in its broadest sense. Education is a global 
                                    phenomenon; as such, we seek excellence wherever it is to be found and use it to 
                                    raise our standards.
                                    </div>
                                </div>
                                <div className="space-y-1 text-[#273665]">
                                    <div className="text-[#273665] font-medium leading-normal text-2xl md:text-4xl pb-4">
                                    OUR CODE OF CONDUCT
                                    </div>
                                    <div className="text-md md:text-md leading-10 font-medium">                                    
                                    A specific Code of Conduct is issued to all Secondary School 
                                    students and students in Years 4 to 6 of the Elementary School. 
                                    The Code of Conduct is an agreement between the student, the student&apos;s family, 
                                    and the school, which must be signed and returned. We generally expect our students 
                                    to be responsible community members and ambassadors for VMS. Students are expected to 
                                    wear the complete uniform and be smartly dressed at all times.
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                            {/* <div className="order-2 md:order-1 w-full md:w-1/2">
                                <Image src={"/images/values.svg"} alt="image" width={700} height={700} 
                                className="object-cover rounded-md w-full p-10" />
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default ThirdSection;