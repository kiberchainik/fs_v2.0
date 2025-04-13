import {
    Body,
    Container,
    Heading,
    Html,
    Img,
    Section,
    Text,
} from '@react-email/components'
import * as React from 'react'

export function TwoFactorAuthTemplate({ code }: { code: string }) {
    return (
        <Html>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src="https://lavidea.it/static/logo/logo.png"
                        width="120"
                        alt="Logo"
                        style={logo}
                    />
                    <Heading style={heading}>Autenticazione a Due Fattori</Heading>
                    <Text style={paragraph}>
                        Ciao! Il tuo codice di autenticazione a due fattori è:
                    </Text>
                    <Section style={codeContainer}>
                        <Text style={{
                            fontSize: '24px',
                            color: '#8e4a23',
                            fontWeight: 700,
                            letterSpacing: '2px',
                        }}>{code}</Text>
                    </Section>
                    <Text style={footer}>
                        Se non hai richiesto questo codice, puoi ignorare questo messaggio.
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}

// --- styles ---
const main = {
    backgroundColor: '#f4f4f4',
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: '20px 0',
}

const container = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '30px 40px',
    maxWidth: '480px',
    margin: '0 auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
}

const logo = {
    marginBottom: '24px',
}

const heading = {
    color: '#397099',
    fontSize: '22px',
    marginBottom: '16px',
}

const paragraph = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '12px',
}

const codeContainer = {
    backgroundColor: '#397099',
    borderRadius: '8px',
    padding: '12px 20px',
    textAlign: 'center' as const,
    marginBottom: '20px',
}

const footer = {
    fontSize: '12px',
    color: '#777',
    marginTop: '20px',
}  