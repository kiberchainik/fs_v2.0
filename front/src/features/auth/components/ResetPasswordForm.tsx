'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from ".";
import { ResetPasswordSchema, TypeResetPasswordSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useResetPasswordMutation } from "../hooks"
import { useReCaptcha } from "@/shared/providers/ReCaptchaProvider";
import { useTranslations } from "next-intl";

export function ResetPasswordForm() {
    const { theme } = useTheme()
    const t = useTranslations('authPage.resetPassword')
    const { executeRecaptcha } = useReCaptcha()

    const form = useForm<TypeResetPasswordSchema>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email: ''
        }
    })

    const { reset, isLoading } = useResetPasswordMutation()

    const onSubmit = async (values: TypeResetPasswordSchema) => {
        const token = await executeRecaptcha()
        if (!token) {
            toast.error(t('captchaError'))
        } else {
            reset({ values, recaptcha: token })
        }
    }

    return (
        <AuthWrapper
            heading={t('heading')}
            description={t('description')}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField control={form.control} name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('formLabelEmail')}</FormLabel>
                                <FormControl><Input placeholder={t('formLabelEmail')} type="email" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>{t('formBtm')}</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}