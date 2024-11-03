'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { ResetPasswordSchema, TypeResetPasswordSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { useResetPasswordMutation } from "../hooks";

export function ResetPasswordForm () {
    const {theme} = useTheme()
    const [recaptchaValue, setRecaptchValue] = useState<string | null>(null)
    
    const form = useForm<TypeResetPasswordSchema>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email: ''
        }
    })

    const {reset, isLoading} = useResetPasswordMutation()

    const onSubmit = (values: TypeResetPasswordSchema) => {
        if(!recaptchaValue) {
            toast.error('Enter captcha')
        } else {
            reset({values, recaptcha: recaptchaValue})
        }
    }

    return (
        <AuthWrapper 
            heading="Reset"
            description="Compile all fields for login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField control={form.control} name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input placeholder="Your email" type="email" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecaptchValue} theme={theme === 'light' ? 'light' : 'dark'} />
                    <Button type="submit" disabled={isLoading}>Reset password</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}