import { Facebook, Globe, Instagram, Twitter } from "lucide-react";
import Link from "next/link";



const Footer = () => {
    return ( 
        <div>
            <section className="md:flex flex-col md:py-2 md:justify-between">
                <div className="p-5 space-y-5 md:space-y-0 md:text-center md:flex justify-between 
                md:px-40 md:space-x-20"> 
                    <div>
                    ©2024 Virtue Model School. All rights reserved. Developed By ADNNiG
                    </div>
                    <div>
                        <Globe className="h-4 w-4" />
                    </div>
                    <div>Terms and conditions </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="bg-black p-1 rounded-full">
                            <Link href={"/twitter.com"}>
                                <Twitter className="h-3 w-3 text-white" />  
                            </Link>
                        </div>
                        <div className="bg-black p-2 rounded-full">
                            <Link href={"/facebook.com"}>
                             <Facebook className="h-3 w-3 text-white" />
                            </Link>
                        </div>
                        <div className="bg-black p-2 rounded-full">
                            <Link href={"/instagram.com"}>
                                <Instagram className="h-3 w-3 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Footer;