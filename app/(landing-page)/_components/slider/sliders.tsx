import React from 'react'
import SliderOne from './_components/slider-one'
import SliderTwo from './_components/slider-two'
import SliderThird from './_components/slider-third'

const Sliders = () => {
  return (
    <div className='py-12'>
      <div className='text-[#2b1c50] px-2 md:w-4/5 mx-auto text-center flex 
      justify-center items-center text-3xl md:text-4xl font-medium'>
        All VMS students are guranteed success in all exams both internal and external and guaranteed admissions
        into any of their university of choice! 

      </div>
      <div className='pt-20'>
        <SliderOne />
        <SliderTwo />
        <SliderThird />
     </div>
    </div>
  )
}

export default Sliders
