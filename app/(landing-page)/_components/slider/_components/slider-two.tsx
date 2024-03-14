'use client'

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';



const SliderTwo = () => {
    return (  
        <div>
           <Slider width='400px' duration={60} blurBorders={true}>
           <Slider.Slide>
                    <Image src='/logos/babcocklogo.png' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/igcselogo.jpg' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/jamblogo.jpg' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/lasulogo.png' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/necologo.jpg' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/unibenlogo.jpg' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/unilaglogo.png' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/logos/waeclogo.jpg' width={200} height={200} alt='vmslogo' className='md:w-20 h-20 text-gray-500' />
                </Slider.Slide>
           </Slider>
        </div>
    );
}
 
export default SliderTwo;