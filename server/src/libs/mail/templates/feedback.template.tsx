import { Body, Heading, Text, } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from 'react'

export function FeedbackTemplate({ emailFrom, name, message }: { emailFrom: string, name: string, message: string }) {
    return (

        <Html>
            <Body className="bg-slate-300 p-10">
                <Heading>New message from Findsolution</Heading>
                <Text>
                    <div>Hello you have new message from <span className="font-bold text-lg">{name}</span> \ <span className="font-light text-sm">{emailFrom}</span></div>
                    <div className="border border-b-zinc-300 py-2"></div>
                    <div>{message}</div>
                </Text>
            </Body>
        </Html>

    )
}