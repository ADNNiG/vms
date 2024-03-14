import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import FourthSection from "./forth-section";



const CoreValues = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <BottomSection />
            <Footer />

        </div>
    );
}
 
export default CoreValues;