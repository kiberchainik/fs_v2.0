import { Body, Heading, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from 'react'

export function TwoFactorAuthTemplate ({code}:{code:string}) {
    return (
        <Html>
            <Body className="">
                <Heading>TwoFactorAuth</Heading>
                <Text>
                    Hello your two factor auth code: <strong>{code}</strong> 
                </Text>
            </Body>
        </Html>
    )
}