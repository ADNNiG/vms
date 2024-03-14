"use client";
import { TypewriterEffectSmooth } from "@/components/ui/components/resultimage"; 
import Link from "next/link";


export function BottomResultChecker() {
  const words = [
    {
      text: "Are you",
    },
    {
      text: "Done with",
    },
    {
      text: "Checking",
    },
    {
      text: "Your",
    },
    {
      text: "Result?",
      className: "text-rose-700 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 font-bold text-xs sm:text-base  ">
        Great VMS Student!
      </p>
      <TypewriterEffectSmooth words={words} />

      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"/redirect"}>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent hover:bg-vms hover:text-white text-white text-sm">
          Portal Dashbord
        </button>
        </Link>
        <Link href={"/"}>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black hover:bg-rose-200 hover:text-black text-sm">
          School Homepage
        </button>
        </Link>
        
        
      </div>
    </div>
  );
}
