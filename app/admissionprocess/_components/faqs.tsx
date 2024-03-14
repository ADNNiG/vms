import {
    Accordion, 
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

const FAQS = () => {
    return (  
        <div className='flex-col flex items-center justify-center pt-20'>
            <div className='text-4xl text-vms font-medium pb-0'>
                FAQS
            </div>
            <Accordion className='md:w-2/3 w-full px-10 md:px-0' type='single' collapsible>
                <AccordionItem className='my-6 bg-rose-100 py-5 md:py-5 
                rounded-[40px] text-[#3d2e7c]' value='item-1'>
                    <AccordionTrigger className='font-medium'>
                        Is there School bus for students that lives far?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we have a fully functioning school bus that can bring 
                        your child to school at an affordable additional fee.
                    </AccordionContent>
                

                </AccordionItem>

                <AccordionItem className='my-6 bg-rose-100 py-5 md:py-5 
                rounded-[40px] text-[#3d2e7c]' value='item-2'>
                    <AccordionTrigger className='font-medium'>
                        Do you offer scholarship to students?
                    </AccordionTrigger>
                    <AccordionContent className='w-[70%]'>
                        Yes, we offer scholarship for the overall best student in a term. 
                        This schorlaship will allows the awarded student of not paying the follwing term school fees.
                        
                    </AccordionContent>

                </AccordionItem>

                <AccordionItem className='my-6 bg-rose-100 py-5 md:py-5 
                rounded-[40px] text-[#3d2e7c]' value='item-3'>
                    <AccordionTrigger className='font-medium'>
                        Can school fees be paid installmentally?
                    </AccordionTrigger>
                    <AccordionContent className='w-[80%]'>
                        Yes that is also accepted, but here at VMS we encourage our parents to make payments on time
                        expecially before the resumption of a new term, as this guarantees a 10% discount on your child school fees
                    </AccordionContent>

                </AccordionItem>

                <AccordionItem className='my-6 bg-rose-100 py-5 md:py-5 
                rounded-[40px] text-[#3d2e7c]' value='item-4'>
                    <AccordionTrigger className='font-medium'>
                       Do students engage in vocational activities?
                    </AccordionTrigger>
                    <AccordionContent className='w-[80%]'>
                       Yes, we engage our students in vocational activities like soap making, polish making, baking, organic cream making,
                       tailoring
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='my-6 bg-rose-100 py-5 md:py-5 
                rounded-[40px] text-[#3d2e7c]' value='item-5'>
                    <AccordionTrigger className='font-medium'>
                      Do the school go for excursion?
                    </AccordionTrigger>
                    <AccordionContent className='w-[80%]'>
                       VMS students are entitled to a minimum of 2 excursions in a session, which can either be locally or internationally.
                    </AccordionContent>
                </AccordionItem>
                
            </Accordion>            
        </div>
     );
}
 
export default FAQS;