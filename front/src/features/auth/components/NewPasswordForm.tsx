'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { NewPasswordSchema, TypeNewPasswordSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { useNewPasswordMutation } from "../hooks";

export function NewPasswordForm () {
    const {theme} = useTheme()
    const [recaptchaValue, setRecaptchValue] = useState<string | null>(null)
    
    const form = useForm<TypeNewPasswordSchema>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: ''
        }
    })

    const {newPassword, isLoading} = useNewPasswordMutation()

    const onSubmit = (values: TypeNewPasswordSchema) => {
        if(!recaptchaValue) {
            toast.error('Enter captcha')
        } else {
            newPassword({values, recaptcha: recaptchaValue})
        }
    }

    return (
        <AuthWrapper 
            heading="New password"
            backButtonHref="/auth/login"
            backButtonLabel="Login"
            description="Enter new password"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField control={form.control} name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input placeholder="New password" type="password" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecaptchValue} theme={theme === 'light' ? 'light' : 'dark'} />
                    <Button type="submit" disabled={isLoading}>Login</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}