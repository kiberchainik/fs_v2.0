import {
    Body,
    Container,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Text
} from "@react-email/components"
import * as React from "react"

export function ConfirmationTemplate({
    domain,
    token
}: {
    domain: string
    token: string
}) {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`
    const logoUrl = `https://lavidea.it/static/logo/logo.png`

    return (
        <Html>
            <Body
                style={{
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        maxWidth: "600px",
                        width: "100%",
                        margin: "0 auto",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                        <Img
                            src={logoUrl}
                            alt="Logo"
                            width="120"
                            style={{ margin: "0 auto" }}
                        />
                    </div>
                    <Heading
                        style={{
                            fontSize: "22px",
                            marginBottom: "16px",
                            color: "#333",
                            textAlign: "center",
                        }}
                    >
                        Conferma Email
                    </Heading>
                    <Text style={{ fontSize: "16px", color: "#555", lineHeight: "1.5" }}>
                        Grazie per esserti registrato! Per confermare la tua email, clicca
                        sul pulsante qui sotto.
                    </Text>

                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <Link
                            href={confirmLink}
                            style={{
                                display: "inline-block",
                                padding: "12px 24px",
                                backgroundColor: "#397099",
                                color: "#ffffff",
                                textDecoration: "none",
                                borderRadius: "6px",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                        >
                            Conferma Email
                        </Link>
                    </div>

                    <Text style={{ fontSize: "14px", color: "#999", lineHeight: "1.5" }}>
                        Se non hai creato un account, ignora semplicemente questa email.
                    </Text>

                    <Hr style={{ margin: "30px 0" }} />

                    <Text style={{ fontSize: "12px", color: "#ccc", textAlign: "center" }}>
                        © {new Date().getFullYear()} {domain.replace(/^https?:\/\//, "")}.
                        Tutti i diritti riservati.
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}  