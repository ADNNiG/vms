import NavBar1 from "@/components/ui/navbar1/navbar1";

import SignInForm from "@/components/form/SignInForm";
import Hero from "./_components/first-section";
import Footer from "@/components/ui/footer";

const SingnIn = () => {
    return ( 
        <div>        
        <NavBar1 />
        <Hero />
        <SignInForm />
        <Footer />
        </div>
     );
}
 
export default SingnIn;