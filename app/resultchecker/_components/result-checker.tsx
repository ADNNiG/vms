'use client'

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod"

import { Checkbox } from "@/components/ui/checkbox"; 

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, 
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object ({      
    id: z.string(),
    email: z.string().email(),
    year: z.string(),
    term: z.enum([
        "FirstTerm",
        "SecondTerm",
        "ThirdTerm",
    ]),
    class: z.string(),   
    
    

});

type FormValues ={    
    id: string;
    email: string;
    year: string;
    term: 
    |"FirstTerm"
    |"SecondTerm"
    |"ThirdTerm";
    class: string;
      
    
};

const ResultChecker = () => {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState (false);
    const { toast } = useToast();

    const form =  useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            id: "",
            email: "",
            year: "",
            term: "SecondTerm",            
            class: "",
        },
    });
    async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
        setLoading(true);
        const res = await fetch("/api/resultchecker", {
            method: "POST",
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error ('Something went wrong');
        }

        setSubmitted(true);
    } catch (error) {
        toast({
            title: "Something went wrong",
            description: 'Error',
        });
    } finally {
        setLoading (false);
    }
    }

    return (  
        <div
        style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden",
        }}
        className="md:flex justify-center pt-20 px-8">
            <div>
                <div className="text-5xl text-rose-700 font-medium w-2/3">
                    Student Result Checker
                </div>
                <div className="py-4 text-gray-500 font-semibold">
                   Inputs your login details to get your result
                </div>

                <Image src="/images/studentresultlogo.png" alt='image' width={350} height={350} 
                className='hidden md:block rounded-[40px] hover:scale-110 
                hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg cursor-pointer'/> 
                
             
            </div>
            
            <Form {...form}>
                {!submitted ? (
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                >
                    
                    <FormField
                        control={form.control}
                        name="id"
                        render={({ field}) => (
                            <FormItem className="items-center justify-center w-full">
                                <FormLabel className="text-sm">
                                    VMS ID NO *
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="text-sm">
                                Email Address *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                                Exam Year *                              
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                        <FormField
                        control={form.control}
                        name="term"
                        render={({ field}) => (
                            <FormItem className="items-center justify-centerw-full">
                                <FormLabel className="w-60 text-sm">
                                    Term *
                                </FormLabel>
                                <Select 
                                onValueChange={field.onChange}
                                defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an option" /> 
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <div className="flex gap-4">
                                            <SelectItem value="FirstTerm">First Term</SelectItem>                              
                                        </div>
                                        <SelectItem value="SecondTerm">Second Term</SelectItem>
                                        <SelectItem value="Thirdterm">Third Term</SelectItem>                                        
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />                        

                        <FormField
                        control={form.control}
                        name="class"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                               Class *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                    <div className="flex gap-4 items-center">
                        <div>
                            <Checkbox className="text-[#2f80ed]" />
                        </div>
                        <div className="text-xs font-medium md:w-3/4 mb-1">
                           I agree to Virtue Model School Lekki terms and conditions
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pb-0  ">
                        <Button type="submit" className="text-sm border-rose-200/90 bg-rose-400
                                    hover:scale-110 hover:shadow-rose-800 hover:bg-vms transition-all duration-300 shadow-md text-white  font-medium"
                        disabled={loading} 
                        onClick={() => form.handleSubmit(onSubmit)}>
                            Check Result
                        </Button>                       
                    </div>
                </form>
                ) : (
                    <>
                    <div className="text-xl md:text-2xl flex items-center justify-center
                    flex-col px-8">
                        <div className="w-80 ">
                            <Image
                            src="/logos/right.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto" />
                            <div className="text-gray-800 font-medium text-center justify-center mx-auto py-10">
                                Hold on tight your VMS result will be delivered shortly to the email address attached to your profile


                            </div>
                        </div>
                    </div>
                    </>
                )}
            </Form>
        </div>
    );
}
 
export default ResultChecker;