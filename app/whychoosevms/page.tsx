import Navbar from "@/components/ui/navbar/navbar";
import Header from "./_components/header";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Approved from "./_components/approved";
import ChooseFeatures from "./_components/features";


const WhyChooseVms = () => {
    return ( 
        <div>
            <Navbar />
            <Header />
            <ChooseFeatures />
            <Approved />            
            <BottomSection />
            <Footer />
        </div>
     );
}
 
export default WhyChooseVms;