import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { UserRole } from "../types";
import { useTranslations } from "next-intl";

type TAuthProps = {
    role: UserRole,
    isShowSocial: boolean
}

export async function UserAuth({ role, isShowSocial }: TAuthProps) {
    const t = useTranslations('authPage')
    return (
        <div className='flex justify-center items-center mt-5'>
            <Tabs defaultValue="login" className="w-[400px]">
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