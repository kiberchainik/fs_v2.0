'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { UserRole } from "../types";
import { useTranslations } from "next-intl";

type TAuthProps = {
    role: UserRole,
    isShowSocial: boolean
}

export function UserAuth({ role, isShowSocial }: TAuthProps) {
    const t = useTranslations('authPage')
    return (
        <div className='md:flex md:justify-center md:items-center m-5'>
            <Tabs defaultValue="login" className="">
                <TabsList>
                    <TabsTrigger value="login">{t('tabLogin')}</TabsTrigger>
                    <TabsTrigger value="registration">{t('tabRegister')}</TabsTrigger>
                </TabsList>
                <TabsContent value="login"><LoginForm isShowSocial={isShowSocial} /></TabsContent>
                <TabsContent value="registration"><RegisterForm role={role} isShowSocial={isShowSocial} /></TabsContent>
            </Tabs>
        </div>
    )
}