import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import Benefits from "./_components/Benefits";
import Slider from "./_components/slider";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";



const ExecutiveDirector = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <Benefits />
            <Slider />
            <BottomCard />
            <BottomSection />
            <Footer />
        </div>
      );
}
 
export default ExecutiveDirector;