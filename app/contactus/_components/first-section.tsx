'use client'

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }
from '@/components/ui/form';

import { Input } from "@/components/ui/input";

import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const FormSchema = z.object ({
    first_name:z.string(),
    last_name:z.string(),
    email:z.string().email(),
    phone_number:z.string(),
    country:z.enum(["Nigeria", "USA", "Canada", "UK", "Ghana", "Kenya", "Others"]),
    info: z.string(),
})

type FormValues = {
    first_name:string;
    last_name:string;
    email:string;
    phone_number:string;
    country: 'Nigeria' | 'Ghana' | 'Others';
    info: string;
} 


export default function FirstSection () {
    const [loading, setLoading] = useState (false)
    const [submitted, setSubmitted] = useState(false)
    const { toast } = useToast()

    const form = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name:"",
            last_name:"",
            email:"",
            phone_number:"",
            country:"Nigeria",
            info:"",
        }
    })

   async function onSubmit(data : z.infer<typeof FormSchema>){
    console.log(data)

    try {
        setLoading(true);
        const res = await fetch ("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });

        if (!res.ok){
            throw new Error ("Something went wrong");
        }
        setSubmitted(true);
    }
            catch (err) {
            console.log(err);
            toast({
                title: "Error",
                duration: 5000,
                description: "Something went wrong",
            });
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className='items-center bg-rose-100 justify-center 
                flex flex-col pt-10 px-20 space-y-10 text-center'>
             {!submitted ? (
             <div className='text-4xl'>
                <div className='font-semibold text-vms '>Contact Us

                </div>
                <div className='text-2xl font-medium text-[#3b394e]'>
                    You are welcome, kindly fill out your information with details about your enquiries,
                    our team will get back to you shortly
                </div> 
        </div>           
        ) : (
            <div className='text-3xl text-rose-400'>
                Thank you for contacting us. We will get back to you
                shortly
            </div>
        )}
    <Form {...form}>
        {!submitted ? (
        <form onSubmit={form.handleSubmit(onSubmit)}
        className='md:w-2/3 space-y-6 border p-2 rounded-xl'>
            <FormField
            control={form.control}
            name='first_name'
            render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                    <FormLabel className='w-60 text-2xl pt-4'>First Name</FormLabel>
                    <FormControl>
                        <Input className='w-full' placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
            />       


            <FormField
            control={form.control}
            name='last_name'
            render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                    <FormLabel className='w-60 text-2xl pt-4'>Last Name</FormLabel>
                    <FormControl>
                        <Input className='w-full' placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
            />     

            <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                    <FormLabel className='w-60 text-2xl pt-4'>Email</FormLabel>
                    <FormControl>
                        <Input className='w-full' placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
            />                
            

            <FormField
            control={form.control}
            name='phone_number'
            render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                    <FormLabel className='w-60 text-2xl pt-4'>Phone Number</FormLabel>
                    <FormControl>
                        <Input className='w-full' placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
            />       

             <FormField
                control={form.control}
                name='country'
                render={({ field }) => (
                    <FormItem className='flex items-center justify-center spac-y-4 w-ful'>
                        <FormLabel className='w-60 text-2xl pt-4'>Country</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a country" />                                    
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <div className='flex gap-4'>
                                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                                </div>
                                <SelectItem value='Ghana'>
                                    Ghana
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}        
                />

                <FormField control={form.control}
                name="info"
                render={({ field }) => (
                    <FormItem className='flex items-center justify-center space-y-4 w-full'>
                        <FormLabel className='w-60 text-2xl pt-4'>
                            Information
                        </FormLabel>
                        <FormControl>
                            <Textarea 
                            style={{height: "200px"}}
                            className="" placeholder="" {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />


                <div className='flex items-center justify-center gap-4'>
                    <Button
                    type="submit"
                    className='bg-vms text-xl rounded-sm w-80 h-20'
                    disabled={loading}
                    onClick={() => form.handleSubmit(onSubmit)}>
                        Submit
                    </Button>
                </div>
        </form>
        ) : (
            <div className='text-2xl h-screen text-rose-400 items-center space-y-1
            flex flex-col justify-center'>
                <div>
                    <Image src={'/images/checked.png'} alt={'checked'} width={"100"} height={"100"}/>
                    
                </div>
            </div>

        )}  
    </Form>

        </div>
    );
    
   }

   
  