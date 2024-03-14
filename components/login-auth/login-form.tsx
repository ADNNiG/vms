"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";

import { Form, FormControl, FormField, FormItem, 
    FormLabel, FormMessage } from "../ui/form";

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSucces] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSucces("");



        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSucces(data.success);
            });
        })
       
    }
    
    return (
        <CardWrapper         
         headerLabel="welcome back"
         backButtonLabel="Newly Admitted Student?"
         backButtonHref="/auth1/register"
         showSocial
         >
          <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10">
                <div className="space-y-8">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-1xl font-bold ">Email</FormLabel>
                            <FormControl>
                                <Input 
                                {...field} 
                                disabled={isPending}
                                placeholder="rotijesubright@gmail.com"
                                type="email"/>
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
                            <FormLabel className="text-1xl font-bold ">Password</FormLabel>
                            <FormControl>
                                <Input 
                                {...field} 
                                disabled={isPending}
                                placeholder="******"
                                type="password"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success} />
                <Button 
                disabled={isPending}
                type="submit"
                className="w-full bg-vms font-light hover:bg-rose-200 hover:text-vms">
                    Login                    
                </Button>
            </form>

          </Form>
        </CardWrapper>
    );
};