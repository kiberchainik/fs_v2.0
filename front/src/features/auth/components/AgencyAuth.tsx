import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { UserRole } from "../types";

export function AgencyAuth() {
    return (
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="registration">Registration</TabsTrigger>
            </TabsList>
            <TabsContent value="login"><LoginForm isShowSocial={false} /></TabsContent>
            <TabsContent value="registration"><RegisterForm role={UserRole.Agency} isShowSocial={false} /></TabsContent>
        </Tabs>
    )
}