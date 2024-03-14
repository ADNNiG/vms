import Image from "next/image";

const FourthSection = () => {
    return ( 
        <div className=" p-20 bg-[#111019]">       
            <div className="bg-[#1b224b] rounded-[60px] md:rounded-[80px] p-20 md:p-10">
                <div className="flex md:flex justify-center items-center md:justify-center  flex-col md:items-center">
                    <Image src={"/logos/vmslogo.png"} alt="logo" width={500} height={500} className="w-40" />
                </div>
                <div className="flex md:flex justify-center items-center md:justify-center md:items-center text-center mx-auto md:mx-auto p-0 pt-10 w-full leading-8 text-2xl font-medium md:text-2xl md:pt-10 text-[#e3f3ff]"> 
                    At Virtue Model School we adopts a world-wide recognised experience that enables our graduants to excel in any part of the world with their leaving qualifications. 
                    Homework is set regurlarly and in all subjects, with increasing degree of dedication as students get older. We monitor the homework being set to maintain high standards.
                    We also insist on student recording homework in their personal planners and and ask parents to check these every day. we encourage parents to support their child by providing a quiet space and time for 
                    homework, taking an interest in the set taks and providing praise and encouragement
                
                </div>
            </div>
        </div>
     );
}
 
export default FourthSection;