'use Client'


const FirstSection = () => {
    return ( 
        <div className="md:py-20 bg-rose-100">
            <div className="flex flex-col justify-center space-y-4">
                <div className="pt-20 md:pt-0 text-5xl md:text-7xl flex justify-center font-semibold px-10 text-vms ">
                    Welcome to VMS Admission Process
                </div>
                <p className="text-xl md:text-3xl font-medium md:text-center md:w-2/3 mx-auto px-10 md:px-0 text-rose-500">A comprehensive guide to how you can enrol
                your children with us.Follow this guide to understand how our our admission process works.</p>

                <div className="flex gap-4 md:justify-center px-10 py-4">
                    <div className="flex">
                        <div className="text-white px-6 justify-between text-md font-medium rounded-[40px]
                        border-4 border-rose-400/90 md:py-0 bg-vms hover:scale-110 
                        transition-all duration-300 shadow-md hover:shadow-rose-300">
                        </div>
                    </div>
                </div>

                <div className="md:pt-10 w-5/6 mx-auto md:px-10">
                    <video className="rounded-[40px] shadow-rose-500 shadow-2xl xl:w-5/6 xl:mx-auto" autoPlay muted loop>
                        <source src="/videos/vmsslow2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        
     );
}
 
export default FirstSection;