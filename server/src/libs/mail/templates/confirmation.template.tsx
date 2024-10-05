import { Body, Heading, Link, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from 'react'

export function ConfirmationTemplate ({domain, token}:{domain:string, token:string}) {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`

    return (
        
            <Html>
                <Body className="">
                    <Heading>Confirmation email</Heading>
                    <Text>
                        Hello, for confirm your email click: 
                    </Text>
                    <Link href={confirmLink}>Confirm email</Link>
                </Body>
            </Html>
        
    )
}