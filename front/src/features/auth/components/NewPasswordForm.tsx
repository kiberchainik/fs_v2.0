'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthWrapper } from "."
import { NewPasswordSchema, TypeNewPasswordSchema } from "../schemes"
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { useNewPasswordMutation } from "../hooks"
import { useReCaptcha } from "@/shared/providers/ReCaptchaProvider"
import { useTranslations } from "next-intl"

export function NewPasswordForm() {
    const { theme } = useTheme()
    const t = useTranslations('authPage.newPassword')
    const { executeRecaptcha } = useReCaptcha()

    const form = useForm<TypeNewPasswordSchema>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: ''
        }
    })

    const { newPassword, isLoading } = useNewPasswordMutation()

    const onSubmit = async (values: TypeNewPasswordSchema) => {
        const token = await executeRecaptcha()
        if (!token) {
            toast.error('Captcha error')
        } else {
            newPassword({ values, recaptcha: token })
        }
    }

    return (
        <AuthWrapper
            heading={t('heading')}
            description={t('description')}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField control={form.control} name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('formLabel')}</FormLabel>
                                <FormControl><Input placeholder="New password" type="password" {...field} disabled={isLoading} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>{t('formBtn')}</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}