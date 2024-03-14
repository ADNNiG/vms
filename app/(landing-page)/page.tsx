import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import ThirdSection from "./_components/third-section";
import SecondGod from "./_components/second-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import SixthSection from "./_components/sixth-section";
import SeventhSection from "./_components/seventh-section";
import EightSection from "./_components/eight-section";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import { HeroPage } from "../heropage/page";



const LandingPage = () => {
    return (  
        <div>
            <Navbar/>
            <FirstSection/>
            <Sliders />
            <SecondGod />           
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EightSection />
            <BottomCard />
            <BottomSection />
            <Footer />
            


        </div>
    );
}
 
export default LandingPage;