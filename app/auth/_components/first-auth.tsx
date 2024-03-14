import { Poppins } from "next/font/google";



import { cn } from "@/lib/utils"; 


import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/login-auth/login-button";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["600"]
})

const FirstAuth = () => {
    return ( 
       <div className="flex h-screen flex-col items-center justify-center 
       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
       from-rose-100 to-rose-400">
        <div className="space-y-6">
            <h1 className={cn("text-6xl text-center font-semibold text-white derop-shadow-md", font.className,)}>
                Auth
            </h1>
            <p className="text-white text-lg text-center">
                A Simple Authentication Service
            </p>
            <div className="items-center justify-center flex">
                <LoginButton>                
               <Button variant="secondary" size="lg">
                Sign In
               </Button>
               </LoginButton>
               
            </div>
        </div>
       </div>
     );
}
 
export default FirstAuth;