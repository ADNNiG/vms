import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const DashNav = () => {
    return ( 
        <div className="py-2 pb-0 border-s-rose-200 sticky w-full z-50 ">
           <div className="container flex items-center justify-between">
           <Link href={"/"}>
                <Image
                    src="/logos/vmslogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-20" />
            </Link>

            <Link href={"/"}>
                <Button className="font-light md:text-lg mt-6 rounded-[20px] border-4 border-rose-200/90 py-6 bg-vms
                hover:scale-110 hover:shadow-rose-800 transition-all duration-300 shadow-md">Sign Out
                </Button>
            </Link>

           </div>
        </div>
     );
}
 
export default DashNav;          