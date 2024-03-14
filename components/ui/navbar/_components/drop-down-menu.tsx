import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

import {
    AlignJustify,
    ArrowRight,
    BarChart,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock, 
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus
} from 'lucide-react';
import ActionButtons from './action-button';

interface DropDownMenuProps {
    onClose: () => void;
}

const DropDownMenu : React.FC<DropDownMenuProps> = ({onClose}) => {
    const handleLinkClick = () => {
        onClose()
    }

    return (
        <motion.div className='w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 
        bg-opacity-50 pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden' 
        initial={{ opacity:0, y:'-80%'}}
        animate={{opacity:1, y:0 }}
        exit={{opacity:0, y:'-100%'}}
        transition={{ duration: 0.5}}
        >
            <Accordion className='pl-2' type='single' collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger>ABOUT US</AccordionTrigger>
                    <AccordionContent>
                    <Link href={"/aboutus"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>About Us</div>
                        </Link>
                        <Link href={"/headofstaff"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Head of Staff</div>
                        </Link>
                        <Link href={"/executivedirector"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Executive Director</div>
                        </Link>
                        {/* <Link href={"/schoolsong"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>School School</div>
                        </Link> */}
                        <Link href={"/corevalues"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Vision | Mission | Values</div>
                        </Link>                       
                    </AccordionContent>                  
                </AccordionItem>                
            </Accordion>
            <Accordion className='pl-2' type='single' collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger>ADMISSIONS</AccordionTrigger>
                    <AccordionContent>
                    <Link href={"/admissions"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Admissions</div>
                        </Link>
                        <Link href={"/whychoosevms"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Why Choose VMS?</div>
                        </Link>
                        <Link href={"/tuition"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Tuition & Payment</div>
                        </Link>
                        <Link href={"/extranceexamination"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Entrance Examination</div>
                        </Link>
                        <Link href={"/admissionprocess"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Admission Process</div>
                        </Link>
                        <Link href={"/applicationform"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Application Form</div>
                        </Link>                               
                    </AccordionContent>                  
                </AccordionItem>                
            </Accordion>
            <Accordion className='pl-2' type='single' collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger>NEWS & EVENTS</AccordionTrigger>
                    <AccordionContent>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>News</div>
                        </Link>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Events</div>
                        </Link>                                                
                    </AccordionContent>                  
                </AccordionItem>                
            </Accordion>
            <Accordion className='pl-2' type='single' collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger>PAY FEES</AccordionTrigger>
                    <AccordionContent>
                        <Link href={"/summerschool"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Summer School</div>
                        </Link>
                        <Link href={"/schoolfees"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>School Fees</div>
                        </Link>
                        <Link href={"/otherpayment"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Other Payment</div>
                        </Link>                                               
                    </AccordionContent>                  
                </AccordionItem>                
            </Accordion>
            <Accordion className='pl-2' type='single' collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger>ACADEMICS</AccordionTrigger>
                    <AccordionContent>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Curriculum</div>
                        </Link>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Creche</div>
                        </Link>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Pre School</div>
                        </Link>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Basic</div>
                        </Link>
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>College</div>
                        </Link>  
                        <Link href={"/#"} className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
                            </div>
                            <div>Sports</div>
                        </Link>                             
                    </AccordionContent>                  
                </AccordionItem>   
                    {/* <Link href={"/studentportal"} className='flex flex-1 items-center justify-between 
                    text-xl px-6 py-4 my-6 border-b'>STUDENT PORTAL 
                    <div>
                        <ArrowRight className='h-6 w-6' />
                    </div>
                    </Link>
                    <Link href={"/contactus"} className='flex flex-1 items-center justify-between 
                    text-xl px-6 py-4 my-6 border-b'>CONTACT US 
                    <div>
                        <ArrowRight className='h-6 w-6' />
                    </div>
                    </Link> */}
            </Accordion>
            <div className='md:pt-32'>
                 <div className='flex items-center justify-center space-x-4'>
                    <Link href={"/studentportal"}>
                        <Button className='text-[#B90C1B] text-sm font-light
                        bg-[#eff0ff] rounded-[40px] hover:scale-110 transition-all
                        duration-300 hover:shadow-rose-300'>
                            CONTACT US
                        </Button>
                    </Link>
                    <Link href={"/studentportal"}>
                        <Button className='text-sm font-light rounded-[40px] border-4
                        border-rose-400/90 py-6 bg-[#b90c1b] hover:scale-110 transition-all
                        duration-300 shadow-md hover:shadow-rose-300'>
                            STUDENT PORTAL
                        </Button>
                    </Link>

                 </div>
            </div>



        </motion.div>
    )
}

export default DropDownMenu;