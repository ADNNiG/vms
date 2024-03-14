'use client'

import Slider from "react-slick";
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




const SliderAbout = () => {
    const isMediumScreen = useMediaQuery({minWidth: 768, maxWidth: 1023})
    const isSmallScreen = useMediaQuery({maxWidth: 767})

    const settings ={
        arrows : false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed : 4000,
        autoplaySpeed: 1000,
        className: 'w-full mx-auto cursor-pointer center-mode',
}

if (isMediumScreen) {
    settings.slidesToShow = 1.67
} else if (isSmallScreen) {
    settings.slidesToShow = 1
}



    return ( 
        <div>
            <Slider {...settings}>
                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/virtuecreche.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-10">
                    <Image
                    priority
                    src={"/images/vmsps.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-10">
                    <Image
                    priority
                    src={"/images/vmscollege.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt1.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt2.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt3.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt4.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt5.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt6.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt7.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt8.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt9.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

                <>
                <div className="rounded-md px-2 md:p-5">
                    <Image
                    priority
                    src={"/images/abt10.jpg"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-2xl" />
                </div>
                </>

            </Slider>
        </div>
     );
}
 
export default SliderAbout;