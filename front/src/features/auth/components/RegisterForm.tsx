"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthWrapper } from ".";
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useRegisterMutation } from "../hooks";
import { UserRole } from "../types";
import { useState } from "react";
import { useReCaptcha } from "@/shared/providers/ReCaptchaProvider";
import { useTranslations } from "next-intl";
import Spinner from "@/shared/components/Spinner/Spinner";

type TRegisterProps = {
    role: UserRole
    isShowSocial: boolean
};

export function RegisterForm({ role, isShowSocial }: TRegisterProps) {
    const { theme } = useTheme();
    const t = useTranslations('authPage.register')
    const { executeRecaptcha } = useReCaptcha()
    const { register } = useRegisterMutation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<TypeRegisterSchema>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            role,
            email: "",
            password: "",
            passwordRepeat: "",
        },
    });

    const onSubmit = async (values: TypeRegisterSchema) => {
        const token = await executeRecaptcha()
        setIsSubmitting(true);

        try {
            if (!token) {
                toast.error(t('captchaError'));
                return;
            }
            const response = await register({ values, recaptcha: token });
        } catch (error) {
            toast.error(t('anyError'));
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <AuthWrapper
            heading={t('heading')}
            description={t('description')}
            isShowSocial={isShowSocial}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('formLabelName')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('formLabelName')}
                                        {...field}
                                        disabled={isSubmitting}
                                    />
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
                                <FormLabel>{t('formLabelEmail')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('formLabelEmail')}
                                        type="email"
                                        {...field}
                                        disabled={isSubmitting}
                                    />
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
                                <FormLabel>{t('formLabelPassword')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('formLabelPassword')}
                                        type="password"
                                        {...field}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordRepeat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('formLabelPasswordRepeat')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('formLabelPasswordRepeat')}
                                        type="password"
                                        {...field}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Spinner /> : t('formBtm')}
                    </Button>
                </form>
            </Form>
        </AuthWrapper>
    );
}