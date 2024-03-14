import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (  
        <div>
            <Link href={"/"}>
                <Image
                    src="/logos/vmslogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-20" />
            </Link>
        </div>
    );
}
 
export default Logo; 