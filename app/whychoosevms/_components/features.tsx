import Image from 'next/image';
import Link  from 'next/link';

import { Button } from  "@/components/ui/button";


const ChooseFeatures = () => {
    return ( 
    <div>
        <div className='py-20 space-y-20 justify-center items-center flex flex-col bg-[#e5e4e2]'>
            <div className='text-4xl font-semibold md:font-semibold md:w-2/5 text-center'> Features of Virtue Model School</div>  

            <div className='space-y-10 pl-20  md:space-x-40 md:flex md:space-y-0'>           
            
                <div className=''>
                     <div className='flex flex-col w-96 space-y-4'>
                         <Image src={"/logos/password.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                        <div className='text-2xl font-semibold'>SECURITY </div>
                        <div className='ml-0 text-[15px] space-y-0'>                   
                            <div>Your child will get a </div>
                            <div>well-rounded education </div>
                            <div> in a safe and secure </div>
                            <div>environment. </div>                  
                        </div>                      
                    </div>       
                </div>    

                <div className=''>
                     <div className='flex flex-col w-96 space-y-4'>
                         <Image src={"/logos/classroom.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                        <div className='text-2xl font-semibold'>PROFESSIONAL TUTORS </div>
                        <div className='ml-0 text-[15px] space-y-0'>                   
                            <div>Your child will be diligently supervised by</div>
                            <div>specialist tutors to harness his /her </div>
                            <div> core competencies </div>
                                           
                        </div>                      
                    </div>       
                </div>    

                <div className=''>
                     <div className='flex flex-col w-96 space-y-4'>
                         <Image src={"/logos/helping.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                        <div className='text-2xl font-semibold'>YOUR CHILD WILL RECEIVE ENOUGH HELPING HAND </div>
                        <div className='ml-0 text-[15px] space-y-0'>                   
                            <div>Your child will get special reinforcement when </div>
                            <div>he / she is experiencing difficulties in </div>
                            <div> achieving satisfactory performance levels </div>
                                             
                        </div>                      
                    </div>       
                </div>    

            </div>


            <div  className='space-y-10  pl-20 md:space-x-40 md:flex md:space-y-0'>           
            
            <div className=''>
                 <div className='flex flex-col w-96 space-y-4'>
                     <Image src={"/logos/languages.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                    <div className='text-2xl font-semibold'>LEARN MORE LANGUAGES </div>
                    <div className='ml-0 text-[15px] space-y-0'>                   
                        <div>your child will be given the opportunity to learn </div>
                        <div>the basic foundation of a foreign  </div>
                        <div> langauage like French and Spanish</div>
                                         
                    </div>                      
                </div>       
            </div>    

            <div className=''>
                 <div className='flex flex-col w-96 space-y-4'>
                     <Image src={"/logos/skills.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                    <div className='text-2xl font-semibold'>CORE SKILLS </div>
                    <div className='ml-0 text-[15px] space-y-0'>                   
                        <div>Your child will develop the core </div>
                        <div>skills in learning, literacy, </div>
                        <div> numeracy and sence of ordiliness </div>
                                       
                    </div>                      
                </div>       
            </div>    

            <div className=''>
                 <div className='flex flex-col w-96 space-y-4'>
                     <Image src={"/logos/cognitive.png"} width={300} height={400} alt='illustration' className='w-20 h-20' />                    
                    <div className='text-2xl font-semibold'>COGNITIVE SKILLS </div>
                    <div className='ml-0 text-[15px] space-y-0'>                   
                        <div>Your child will develop the cognitive </div>
                        <div>ability to grasp things very fast </div>
                        <div> in a stimulating and enjoyable  </div>
                        <div>learning enviroment. </div>                  
                    </div>                      
                </div>       
            </div>    

        </div>
        </div>

       

    </div> 
    );
}
 
export default ChooseFeatures;