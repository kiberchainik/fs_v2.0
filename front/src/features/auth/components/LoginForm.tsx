'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { LoginSchema, TypeLoginSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { useLoginMutation } from "../hooks";
import Link from "next/link";

export function LoginForm ({isShowSocial}:{isShowSocial: boolean}) {
    const {theme} = useTheme()
    const [recaptchaValue, setRecaptchValue] = useState<string | null>(null)
    const [isTwoFactor, setTowFactor] = useState<boolean>(false)

    
    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const {login, isLoading} = useLoginMutation(setTowFactor)

    const onSubmit = (values: TypeLoginSchema) => {
        if(!recaptchaValue) {
            toast.error('Enter captcha')
        } else {
            login({values, recaptcha: recaptchaValue})
        }
    }

    return (
        <AuthWrapper 
            heading="Login"
            description="Compile all fields for login"
            isShowSocial={isShowSocial}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    {isTwoFactor && (
                        <FormField control={form.control} name="code"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Code</FormLabel>
                                    <FormControl><Input placeholder="Verification code" {...field} disabled={isLoading} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {!isTwoFactor && (
                        <><FormField control={form.control} name="email"
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
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Password</FormLabel>
                                        <Link href='/auth/reset-password' className='ml-auto inline-block text-sm underline'>Reset password</Link>
                                    </div>
                                    <FormControl><Input placeholder="Your password" type="password" {...field} disabled={isLoading} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /></>
                    )}
                    <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecaptchValue} theme={theme === 'light' ? 'light' : 'dark'} />
                    <Button type="submit" disabled={isLoading}>Login</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}