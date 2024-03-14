"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../redirect/_components/portalmenu";  
import Link from "next/link";

export function StudentPortalThreeD() {
  return (
    <div className="py-0 px-10 md:mx-[-300px]">
      <div className=" md:flex items-center justify-center md:space-x-5 space-y-[-50px] md:space-y-0">  
       <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-blue-600 dark:text-white"
            >
               Check Your School Result
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm font-medium max-w-sm mt-2 dark:text-neutral-300"
           >
              This takes you to the portal where you submit your student ID and login to access your result
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/checkresult.png"
              width="1000"
              height={"500"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/resultchecker"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-blue-600 text-white text-1xl font-bold"
             >
              Check Result
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
      <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-orange-600 dark:text-white"
            >
               Scheme Of Work
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-600 text-sm font-medium max-w-sm mt-2 dark:text-neutral-300"
           >
              Check all subjects scheme of work from this section
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/schemeofwork.png"
              width="1000"
              height={"500"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/checkresult"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-orange-600 text-white text-1xl font-bold"
             >
              Check Scheme of Work
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
      <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-green-600 dark:text-white"
            >
               E Learning
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 font-medium dark:text-neutral-300"
           >
              Take all the classes that you missed in school online
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/elearning.png"
              width="1000"
              height={"500"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/checkresult"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-green-500 text-white text-1xl font-bold"
             >
              Learn Online
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div> 


    </div>



    <div className=" md:flex items-center justify-center md:space-x-5 space-y-[-120px] md:space-y-0">  
       <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-red-600 dark:text-white"
            >
               Make Full Payment
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm font-medium mt-2 dark:text-neutral-300"
           >
              You can make full school payment here
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/fullpayment1.png"
              width="1000"
              height={"500"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/checkresult"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-red-600 text-white text-1xl font-bold"
             >
              Make Full Payment
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
      <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-vms dark:text-white"
            >
               Make Part Payment
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 font-medium dark:text-neutral-300"
           >
              You dont have the full payment now, its fine VMS allows for part payment, click the link below to make part payment 
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/partpayment1.png"
              width="1000"
              height={"1000"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/checkresult"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-vms text-white text-1xl font-bold"
             >
              Make Part Payment
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
      <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               Need Help?
          </CardItem>
          <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 font-medium dark:text-neutral-300"
           >
              If you finding it difficult to navigate through the website, click the link below to speak with a teacher
         </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
           <Image
              src="/images/needhelp1.png"
              width="1000"
              height={"500"}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            Try now →
            </CardItem> */}
          
            <Link 
                href={"/checkresult"}>
                <CardItem
                    translateZ={20}
                  as="button"
                className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-neutral-200 hover:text-black text-white text-1xl font-bold"
             >
              Speak with a Teacher
              </CardItem>          
            </Link>          
            </div>
          </CardBody>
        </CardContainer>
      </div> 


    </div>
  




    </div>
    
    
  );
}
