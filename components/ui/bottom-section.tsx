
import Link from "next/link";

const BottomSection = () => {
    return ( 
        <div>
            <section className="flex flex-col md:flex p-5 md:py-5 md:items-center md:justify-center bg-[#eff0ff]">
                <div className="md:flex md:space-x-28 md:px-0 md:py-5">
                    <div className="flex-col space-y-6 flex font-extrabold text-rose-600">
                        <div className="pt-10">NAVIGATION</div>
                        <div className="font-medium space-y-4 text-sm">
                            <Link href={"/"}><div>HOME</div></Link>
                            <Link href={"/auth"}><div>PAY FESS</div></Link>
                            <Link href={"/contactus"}><div>CONTACT US</div></Link>
                            <Link href={"/#"}><div>ADMISSION</div></Link>
                        </div>
                </div>
                        <div className="flex-col space-y-6 font-extrabold flex text-rose-600">
                            <div className="pt-10">RESOURCES</div>
                            <div className="font-medium space-y-4 text-sm">
                            <Link href={"/whychoosevms"}><div>SCHOOL FACILITIES</div></Link>
                            <Link href={"/aboutus"}><div>COLLEGE</div></Link>
                            <Link href={"/#"}><div>ACADEMIC CALENDER</div></Link>
                            <Link href={"/whychoosevms"}><div>PRE - SCHOOL</div></Link>
                            </div>
                        </div>
                        <div className="flex-col space-y-6 font-extrabold flex text-rose-600">
                            <div className="pt-10">MORE</div>
                            <div className="font-medium space-y-4 text-sm">
                            <Link href={"/contactus"}><div>WORK WITH VMS</div></Link>
                            <Link href={"/contactus"}><div>WEBSITE FEEDBACK</div></Link>
                            <Link href={"/applicationform"}><div>ENROL NOW</div></Link>
                            <Link href={"/#"}><div>MAP AND DIRECTION</div></Link>
                            </div>
                        </div>

                        <div className="flex-col space-y-6 font-extrabold flex text-rose-600">
                            <div className="pt-10">ADDRESS</div>
                            <div className="font-medium space-y-1 text-sm">
                                <div>New Nepa Bus Stop LFTZ Road Ibeju Lekki</div>
                                <div>Lagos Nigeria</div>
                                <div>+2348168184225</div>
                               <div>contact@virtuemodelschool.com</div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </div>
     );
}
 
export default BottomSection;
