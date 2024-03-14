import {Lock, MessageCircle, MousePointerSquare, PencilLine} from 'lucide-react'

const Benefits = () => {
    return ( 
        <div className='py-10'>
             <div className='text-center text-4xl md:text-4xl font-bold pb-10'>
                BENEFITS OF ENROLLING WITH VMS
             </div>
             <div className='md:flex px-10 md:px-0 md:space-y-0 items-center justify-center md:space-x-10'>
                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <MousePointerSquare className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-bold'>
                            Exclusive Excursion
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        VMS students get exclusive invites to go for excursion to amazing places both in and out 
                        of the country. 
                    </div>
                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <MousePointerSquare className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-bold'>
                           Efficient School Bus
                        </div>
                    </div>
                    <div className='w-full h-20'>
                       Distance is not a problem here, we have more than enough school buses that pick up your child and bring them
                       to school right on time.
                    </div>
                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <PencilLine className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-bold'>
                            Attentivenes to Parents
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        We don&apos;t take parents suggestion and complaint for granted at VMS, we work on them.
                    </div>
                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <MessageCircle className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-bold'>
                            Experience Staffs
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        When your children leaves home, they are coming to their second home, because all our staffs are trained to noture
                        students with love.
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default Benefits;