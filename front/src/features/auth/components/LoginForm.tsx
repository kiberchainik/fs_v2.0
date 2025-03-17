'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { LoginSchema, TypeLoginSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "sonner";
import { useLoginMutation } from "../hooks";
import Link from "next/link";
import { useReCaptcha } from "@/shared/providers/ReCaptchaProvider";
import { useTranslations } from "next-intl";

export function LoginForm({ isShowSocial }: { isShowSocial: boolean }) {
    const { theme } = useTheme()
    const t = useTranslations('authPage.login')
    const { executeRecaptcha } = useReCaptcha()
    const [isTwoFactor, setTowFactor] = useState<boolean>(false)

    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { login, isLoading } = useLoginMutation(setTowFactor)

    const onSubmit = async (values: TypeLoginSchema) => {
        const token = await executeRecaptcha()
        if (!token) {
            toast.error('Captcha error')
        } else {
            login({ values, recaptcha: token })
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
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('code')}</FormLabel>
                                    <FormControl><Input placeholder="Verification code" {...field} disabled={isLoading} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {!isTwoFactor && (
                        <>
                            <FormField control={form.control} name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('email')}</FormLabel>
                                        <FormControl><Input placeholder="Your email" type="email" {...field} disabled={isLoading} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex items-center justify-between'>
                                            <FormLabel>{t('password')}</FormLabel>
                                            <Link href='/auth/reset-password' className='ml-auto inline-block text-sm underline'>{t('reset_password')}</Link>
                                        </div>
                                        <FormControl><Input placeholder="Your password" type="password" {...field} disabled={isLoading} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>
                    )}
                    <Button type="submit" disabled={isLoading}>{t('login')}</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}