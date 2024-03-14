import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondText from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthRoll from "./_components/fifth-section";


const Curriculum = () => {
    return ( 
        <div style={{
            width: "100%",
            position: "relative"
        }}>
            <Navbar />
            <FirstSection />
            <SecondText />
            <ThirdSection />
            <FourthSection />
            <FifthRoll />           
            <BottomSection />
            <Footer />
        </div>
     );
}
 
export default Curriculum;