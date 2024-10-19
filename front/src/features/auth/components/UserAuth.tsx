import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { UserRole } from "../types";

type TAuthProps = {
    role: UserRole,
    isShowSocial: boolean
}

export function UserAuth({role, isShowSocial}:TAuthProps) {
    return (
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="registration">Registration</TabsTrigger>
            </TabsList>
            <TabsContent value="login"><LoginForm isShowSocial={isShowSocial} /></TabsContent>
            <TabsContent value="registration"><RegisterForm role={role} isShowSocial={isShowSocial} /></TabsContent>
        </Tabs>
    )
}