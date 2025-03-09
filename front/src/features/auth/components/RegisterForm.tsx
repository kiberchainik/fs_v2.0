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

type TRegisterProps = {
    role: UserRole
    isShowSocial: boolean
};

export function RegisterForm({ role, isShowSocial }: TRegisterProps) {
    const { theme } = useTheme();
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
        console.log("Form submitted with values:", values);

        try {
            console.log("Recaptcha token received:", token);

            if (!token) {
                toast.error("Captcha verification failed. Please try again.");
                return;
            }

            console.log("Sending request to register function...");
            const response = await register({ values, recaptcha: token });
            console.log("Server response:", response);

        } catch (error) {
            console.error("Register error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <AuthWrapper
            heading="Registration"
            description="Fill in all fields to register or log in"
            isShowSocial={isShowSocial}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your name"
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your email"
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your password"
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
                                <FormLabel>Repeat password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Confirm password"
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
                        {isSubmitting ? "Processing..." : "Create account"}
                    </Button>
                </form>
            </Form>
        </AuthWrapper>
    );
}