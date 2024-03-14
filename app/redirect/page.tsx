

import DashBoardNav from "@/components/ui/portalnavbar/page";
import { StudentPortalThreeD } from "../portalsnippet/3d-snippet";
import RedirectHome from "./_components/redirect_home";
import Footer from "@/components/ui/footer";

const RedirectLanding = () => {
    return ( 
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] 
        antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <DashBoardNav />            
            <RedirectHome />
            <StudentPortalThreeD />
            <div className="bg-white">
            <Footer />
            </div>
           
        </div>
     );
}
 
export default RedirectLanding;