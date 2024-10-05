import { Body, Heading, Link, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from 'react'

export function ResetPasswordTemplate ({domain, token}:{domain:string, token:string}) {
    const resetLink = `${domain}/auth/new-password?token=${token}`

    return (
        
            <Html>
                <Body>
                    <Heading>Reset password</Heading>
                    <Text>
                        Hello, for reset your password click: 
                    </Text>
                    <Link href={resetLink}>Reset password</Link>
                </Body>
            </Html>
        
    )
}