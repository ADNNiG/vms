import { Download } from "lucide-react";

const BottomCard = () => {
    return ( 
        <div className="pb-10 px-10">
            <div className="border p-10 items-center justify-center md:flex md:w-2/3 mx-auto md:p-2 rounded-[60px]">
                <div className="text-2xl md:text-2xl items-center font-[800px] flex text-center px-6">
                    To Download VMS 2024 Academic Calender
                </div>
                <div className="flex">
                    <div className="mt-6 text-white mx-auto w-60 justify-between py-6 font-light rounded-[40px] border-4 
                    border-rose-400/90 md:py-4 cursor-pointer bg-rose-600 hover:scale-110 transition-all duration-300 shadow-md
                    hover:shadow-rose-300 ">
                        <div className="flex items-center justify-center gap-4 md:justify-between px-6">
                            <Download className="md:w-6 md:h-6 h-4 w-4"/>
                            <div className="md:text-lg text-sm">
                                CLICK HERE!!!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BottomCard;