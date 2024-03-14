import Image from 'next/image'

const Approved = () => {
    return ( 
        <div className='py-10 md:space-y-20 items-center justify-center flex flex-col'>
            <div className='text-4xl text-center font-semibold px-10'>VMS IS FULLY APPROVED BY
            </div>
            <div className="md:flex md:space-x-20 items-center justify-center"> 
                     <div className='border-b md:border-r md:border-b-0 md:w-80'>
                        <Image src="/logos/approved.jpg" width={250} height={250} alt='logo'className='h-40' />
                    </div>
                    <div className='border-b md:border-r md:border-b-0 md:w-80'>
                        <Image src="/logos/lft.png" width={250} height={250} alt='logo'className='h-40' />
                    </div>
                    <div className='border-b md:border-r md:border-b-0 md:w-80'>
                         <Image src="/logos/jamb.jpg" width={250} height={250} alt='logo'className='h-40' />
                     </div>
                     <div className='border-b md:border-r md:border-b-0 md:w-80'>
                        <Image src="/logos/lagosedu.png" width={200} height={250} alt='logo'className='h-40' />
                     </div>
            </div>     
 
        </div>
    );
}
 
export default Approved;