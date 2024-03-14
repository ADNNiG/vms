
import { Button} from "@/components/ui/button";

import Link from "next/link";


const ThirdSection = () => {
    return ( 
        <div className="md:py-10 bg-[#eff0ff]">
            <div className="md:text-center space-y-4 px-10">
                <div className="pt-10 md:pt-0 text-1xl md:text-2xl flex 
                md:justify-center font-semibold pb-0 text-[#2b1c50] md:w-[90%]
                md:mx-auto">
                    Start your child&apos;s enrolment by clicking the button below 
                    to go to our online admission portal. The registration fee 
                    costs ₦10,000 only.                    
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Link href={"/contactus"}>
                    <Button className="font-medium md:text-lg mt-6 rounded-[40px] border-4 p-40 border-rose-200/90 py-6 bg-rose-400
                     hover:scale-110 hover:shadow-rose-800 transition-all duration-300 shadow-md">ENROL NOW!
                    </Button>
                </Link>
            </div>

            <div className="flex md:justify-center md:mx-auto md:items-center pt-10 md:pt-10 w-[90%] ">
                <div className="text-[18px] md:text-[18px] text-[#2b1c50] font-medium justify-center items-center space-y-4 px-10">
                To complete your child&apos;s application process, the scanned copy of the following documents must be uploaded to the admission portal.
                </div>               
            </div>

            <div className="flex md:justify-start md:mx-auto md:items-start pt-50 md:pt-5 space-y-4 px-10  md:pl-60 w-[90%] ">
                <div className=" text-[16px] md:text-[16px] text-[#2b1c50] font-light justify-start items-start">
                    <div>2 recent passport photographs (not more than 6 months old)</div>
                    <div>Candidate7apos;s birth certificate or international passport data page</div>
                    <div>Most recent academic reports from the last 2 years</div>
                    <div>Most recent academic reports from the last 2 years</div>
                    <div>Applicant&apos;s character testimonial from the current school</div>
                    <div> Secondary school transcript for IB Diploma candidates</div>
                    <div>Immunization record and medical report (after the admission is offered)</div>
                    <div>Successful candidates will be informed via SMS, email, or phone call.</div>
                </div>                               
            </div>

            <div className="flex md:justify-start md:mx-auto md:items-start pt-5 md:pt-5 w-[90%] ">
                <div className=" text-[18px] md:text-[18px] text-[#2b1c50] font-medium md:pl-40 
                 justify-start items-start space-y-4 px-10">
                    <div>A provisional letter of admission will then be issued for collection.</div>
                    <div>Acceptance letter signed and returned with all required payment.</div>
                    <div>Payments are made through the online admission portal, designated banks or via POS on school premises.</div>
                    <div>The accounts department receives the bank slip/draft and issues a receipt.</div>
                    <div>The receipt is very important so please keep it safe.</div>
                    <div>The student meets with a senior teacher and is allocated to the appropriate class.</div>
                    <div>For further enquiries on how to apply, Please call any of the following numbers</div>
                    <p>+234 8068 184 225 +234 9053 999 295 or send an email to </p>
                    <p>info@virtuemodelschool.com,</p>
                    <p>admin@virtuemodelschool.com,</p>
                    <p>virtuemodelschool@gmail.com </p>                    
                </div>               
            </div>
            
            

        </div>
     );
}
 
export default ThirdSection;