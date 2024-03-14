import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Approved from "../whychoosevms/_components/approved";
import FAQS from "./_components/faqs";



const AdmissionProcess = () => {
    return ( 
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FAQS />
            <Approved />
            <BottomSection />
            <Footer />

        </div>
     );
}
 
export default AdmissionProcess;