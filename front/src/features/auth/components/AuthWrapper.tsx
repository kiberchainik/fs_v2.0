import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components";
import { PropsWithChildren } from "react";
import { AuthSocial } from "./AuthSocial";

interface AuthWrapperProps {
    heading: string
    description?: string
    isShowSocial?: boolean
}

export function AuthWrapper({
    heading, children, description, isShowSocial
}: PropsWithChildren<AuthWrapperProps>) {
    return (
        <Card className="flex flex-col justify-between items-center w-[400px]">
            <CardHeader className="space-y-2">
                <CardTitle>{heading}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="w-full">
                {isShowSocial && <AuthSocial />}
                {children}
            </CardContent>
        </Card>
    )
}