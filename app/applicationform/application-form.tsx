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

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";

const FormSchema = z.object ({
    first_name: z.string(),
    last_name: z.string(),   
    age: z.string(),
    gender: z.enum([
        "Male",
        "Female",
    ]),    
    nationality: z.enum([
        "Nigerian",
        "Ghanian",
        "Kenyan",
        "Others",
    ]),
    state: z.string(),
    class: z.string(),
    previous_school: z.string(),
    disability: z.string(),    
    religion: z.enum([
        "Christainity",
        "Islam",
        "Others",
    ]), 
    parent_name: z.string(),
    email: z.string().email(),
    phone_number: z.string(),
    residential_address: z.string(),
    parent_occupation: z.string(),
    info: z.string(),

});

type FormValues ={
    first_name: string;
    last_name: string;
    age: string;
    gender: 
    |"Male"
    |"Female";
    nationality: 
    |"Nigerian"
    |"Ghanian"
    |"Kenyan"
    |"Others";  
    state: string;
    class: string;
    previous_school: string;
    disability: string;
    religion:
    |"Christainity"
    |"Islam"
    |"Others"; 
    parent_name: string;
    email: string;
    phone_number: string;
    residential_address: string;
    parent_occupation: string;  
    info: string;
    terms: boolean;
};

const ApplyNow = () => {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState (false);
    const { toast } = useToast();

    const form =  useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            age: "",
            gender: "Male",
            nationality: "Nigerian",
            state: "",
            class: "",
            previous_school: "",
            disability: "",
            religion: "Christainity",
            parent_name: "",
            email: "",
            phone_number: "",
            residential_address: "",           
            parent_occupation: "",
            info: "",
            terms: false,
        },
    });
    async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
        setLoading(true);
        const res = await fetch("/api/applicationform", {
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
        className="md:flex bg-rose-100 justify-center pt-20 px-8">
            <div>
                <div className="text-5xl text-vms font-medium w-2/3">
                    VMS Application Form
                </div>
                <div className="py-4 text-gray-500">
                   Here begins the bold step to your academic excellence
                </div>
                <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
                    <div className="flex gap-4 border-b">
                        <PiCheckLight className="text-2xl" />
                        <div className=" font-nomral pb-4 w-80">
                           Dedicated teachers to help students academic growth
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <PiCheckLight className="text-2xl" />                    
                        <div className=" font-normal pb-4 w-80">
                            Condusive enviroment that quickens  and enhance learning
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <PiCheckLight className="text-2xl" />                    
                        <div className=" font-normal pb-4 w-80">
                            Cognitivity, Persistence, Relentless
                        </div>
                    </div>
                </div>
             
            </div>
            
            <Form {...form}>
                {!submitted ? (
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                >
                    <div className="md:flex items-center gap-6">
                        <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field}) => (
                            <FormItem className="items-center justify-center w-full">
                                <FormLabel className="text-sm">
                                    First Name *
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                          <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field}) => (
                            <FormItem className="items-center justify-center w-full">
                                <FormLabel className="text-sm">
                                    Last Name *
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field}) => (
                            <FormItem className="items-center justify-center w-full">
                                <FormLabel className="text-sm">
                                    Date Of Birth *
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                        <FormField
                        control={form.control}
                        name="gender"
                        render={({ field}) => (
                            <FormItem className="items-center justify-centerw-full">
                                <FormLabel className="w-60 text-sm">
                                    Gender *
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
                                            <SelectItem value="Nigerian">Male</SelectItem>                              
                                        </div>
                                        <SelectItem value="Ghanian">Female</SelectItem>                                        
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                        <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field}) => (
                            <FormItem className="items-center justify-centerw-full">
                                <FormLabel className="w-60 text-sm">
                                    Nationalilty *
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
                                            <SelectItem value="Nigerian">Nigerian</SelectItem>                              
                                        </div>
                                        <SelectItem value="Ghanian">Ghanian</SelectItem>
                                        <SelectItem value="Kenyan">Kenyan</SelectItem>
                                        <SelectItem value="Others">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                        <FormField
                        control={form.control}
                        name="state"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                                Local Government & State of Origin *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
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

                        <FormField
                        control={form.control}
                        name="previous_school"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                               Previous School *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                        <FormField
                        control={form.control}
                        name="disability"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                               Disability *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                        <FormField
                        control={form.control}
                        name="religion"
                        render={({ field}) => (
                            <FormItem className="items-center justify-centerw-full">
                                <FormLabel className="w-60 text-sm">
                                    Religion *
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
                                            <SelectItem value="Nigerian">Christainity</SelectItem>                              
                                        </div>
                                        <SelectItem value="Ghanian">Islam</SelectItem>
                                        <SelectItem value="Kenyan">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                        <FormField
                        control={form.control}
                        name="parent_name"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                               Parent or Guardians Name *                                
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
                        name="phone_number"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="text-sm">
                                Phone Number *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                    <FormField
                        control={form.control}
                        name="residential_address"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                                Residential Address *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />

                    <FormField
                        control={form.control}
                        name="parent_occupation"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                                Parent or Guardians Phone Number *                                
                             </FormLabel>
                             <FormControl>
                                <Input {...field} />
                             </FormControl>
                         </FormItem>
                    )} />                                           

                    <FormField
                        control={form.control}
                        name="info"
                        render={({ field}) => (
                         <FormItem className="items-center justify-center w-full">
                             <FormLabel className="w-60 text-sm">
                                Tell us more about yourself *                                
                             </FormLabel>
                             <FormControl>
                                <Textarea style={{ height: "100px" }} {...field} />
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

                    <div className="flex items-center gap-4 pb-10  ">
                        <Button type="submit" className="text-sm border-rose-200/90 bg-rose-400
                                    hover:scale-110 hover:shadow-rose-800 hover:bg-vms transition-all duration-300 shadow-md text-white  font-medium"
                        disabled={loading} 
                        onClick={() => form.handleSubmit(onSubmit)}>
                            APPLY
                        </Button>                       
                    </div>
                </form>
                ) : (
                    <>
                    <div className="text-xl md:text-2xl flex items-center justify-center
                    flex-col px-8">
                        <div className="w-80">
                            <Image
                            src="/logos/right.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto" />
                            <div className="text-gray-800 font-medium text-center justify-center mx-auto py-10">
                                Your application form has been recieved, we will get back to you shortly via phone call
                                or via email to let you know if you are eligible to be enrolled in VMS


                            </div>
                        </div>
                    </div>
                    </>
                )}
            </Form>
        </div>
    );
}
 
export default ApplyNow;