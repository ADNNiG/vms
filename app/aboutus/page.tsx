import Image from "next/image";

import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footeraboutus";
import Navbar from "@/components/ui/navbar/navbar";
import SpotLight from "./_components/spotlight";
import AboutUsText from "./_components/about_texts";



const AboutUs = () => {
    return ( 
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] 
        antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Navbar />
            <SpotLight />
            <AboutUsText />
            <BottomSection />
            <Footer />
        </div>
     );
}
 
export default AboutUs;