'use client'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage,} from '../ui/form';
import { useForm } from 'react-hook-form';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const FormSchema = z.object({
   vmsid: z.string().min(4, 'VMS ID is required'),
   fullname: z.string().min(4, 'Full name is required').max(20),
   email: z.string().min(2, 'Email is required').email('Invalid email'),
   password: z.string().min(4, 'Password is required').min(6, 'Password must have more than 6 characters'),
   confirmPassword: z.string().min(4, 'Password is required'),
 })
 .refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Password do not match',  
 }) 


const SignUpForm = () => {
   const form = useForm<z.infer<typeof FormSchema>>({
       resolver: zodResolver(FormSchema),
       defaultValues:
       {
        fullname: '',
        email:'',
        password: '',
        confirmPassword: ''
       }
      
     });

     const onSubmit = (values:z.infer<typeof FormSchema>) => {
       console.log('values');
     }

   


   return ( <div className='flex flex-col items-center justify-center p-28 h-[100%] bg-rose-100'>
       <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="   w-full md:w-2/4 space-y-6">
       <FormField
         control={form.control}
         name="fullname"
         render={({ field }) => (
           <FormItem>
             <FormLabel className='text-2xl'>Full Name</FormLabel>
             <FormControl>
               <Input placeholder="Rotijesu Bright" {...field} />
             </FormControl>
             
             <FormMessage />
           </FormItem>
         )}
       />

        <FormField
         control={form.control}
         name="vmsid"
         render={({ field }) => (
           <FormItem>
             <FormLabel className='text-2xl'>VMS ID NO</FormLabel>
             <FormControl>
               <Input placeholder="VMS-2024-001" {...field} />
             </FormControl>
             
             <FormMessage />
           </FormItem>
         )}
       />

          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-2xl'>Email</FormLabel>
              <FormControl>
                <Input placeholder="mail@example.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

            <FormField
         control={form.control}
         name="password"
         render={({ field }) => (
           <FormItem>
             <FormLabel className='text-2xl'>Password</FormLabel>
             <FormControl>
               <Input type='password' placeholder="Enter your password" {...field} />
             </FormControl>
             
             <FormMessage />
           </FormItem>
         )}
       />

          <FormField
         control={form.control}
         name="confirmPassword"
         render={({ field }) => (
           <FormItem>
             <FormLabel className='text-2xl'>Re-Enter your password</FormLabel>
             <FormControl>
               <Input type='password' placeholder="Re-Enter your password" {...field} />
             </FormControl>
             
             <FormMessage />
           </FormItem>
         )}
       />
       <Button className=" md:text-lg mt-6 rounded-[10px] border-4 border-rose-200/90 py-5 bg-vms
       hover:scale-110 hover:shadow-rose-800 transition-all font-semibold duration-300 shadow-md" 
       type="submit">Register</Button>
     </form>
     <div className='mx-auto my-4 flex w-[50%] items-center justify-evenly before:mr-4 before:block
     before:h-px before:flex-grow before:bg-stone-400 after:ml-4 afterblock after:h-px after:flex-grow
     after:bg-stone-400'>or
     </div>
     <p className='text-center text-1xl text-gray-600 font-bold mt-0'>
       Already a registered student? &nbsp; &nbsp; &nbsp; 
       <Link className='text-rose-400 hover:underline text-1xl md:ml-[-20px] md:text-1xl' href={"/signin"}>Sign In</Link>
     </p>
   </Form>
   </div> );
}

export default SignUpForm;