'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { useRegisterMutation } from "../hooks";
import { UserRole } from "../types";

type TRegisterProps = {
    role: UserRole
    isShowSocial: boolean
}

export function RegisterForm ({role, isShowSocial}:TRegisterProps) {
    const {theme} = useTheme()
    const [recaptchaValue, setRecaptchValue] = useState<string | null>(null)

    const form = useForm<TypeRegisterSchema>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            role,
            email: '',
            password: '',
            passwordRepeat: ''
        }
    })

    const {register, isLoading} = useRegisterMutation()

    const onSubmit = (values: TypeRegisterSchema) => {
        if(!recaptchaValue) {
            toast.error('Enter captcha')
        } else {
            register({values, recaptcha: recaptchaValue})
        }
    }

    return (
        <AuthWrapper 
            heading="Registration"
            description="Compile all fields for registration or login"
            isShowSocial={isShowSocial}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField control={form.control} name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl><Input placeholder="Your name" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input placeholder="Your email" type="email" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input placeholder="Your password" type="password" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="passwordRepeat"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Repeat password</FormLabel>
                                <FormControl><Input placeholder="password" type="password" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
                        <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecaptchValue} theme={theme === 'light' ? 'light' : 'dark'} />
                    </div>
                    <Button type="submit" disabled={isLoading}>Create account</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}