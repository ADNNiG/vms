import NavBar1 from "@/components/ui/navbar1/navbar1";
import { BottomResultChecker } from "../resultbottom/portalbottom";
import ResultChecker from "./_components/result-checker";
import Footer from "@/components/ui/footer";

const ResultForm = () => {
    return ( 
        <div className="bg-rose-100">
            <NavBar1 />
            <ResultChecker />
            <BottomResultChecker />
            <div className="bg-white">
            <Footer />
            </div>
            
        </div>
     );
}
 
export default ResultForm;