import Image from "next/image";

const FirstSection = () => {
    return ( 
        <div className="md:py-2">
            <div className="px-10 md:text-center space-y-2">
                <div className="text-3xl md:text-5xl md:justify-center md:font-medium font-bold pt-1">
                    VISION | MISSION | CORE VALUES
                </div>
                <p className="text-ml md:text-2xl font-medium md:w-3/4 md:mx-auto text-[#3b394e] leading-normal">
                    Here below is our detailed vision mission and core values
                </p>

                <div className="py-1 md:pt-1">
                    <Image src={"/images/mission.jpg"} alt="image" width={800} height={600} className="object-cover 
                    rounded-[30px] md:rounded-[60px] md:w-[40%] md:mx-auto w-f p-5" />
                </div>
            </div>
        </div>
     );
}
 
export default FirstSection;
