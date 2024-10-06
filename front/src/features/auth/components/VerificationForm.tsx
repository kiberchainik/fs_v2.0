'use client'

import { useSearchParams } from "next/navigation"
import { useVerificationMutation } from "../hooks/useVerificationMutation"
import { useEffect } from "react"
import { AuthWrapper } from "./AuthWrapper"
import { Loader } from "@/shared/components/ui"

export function VerificationForm () {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const { verification } = useVerificationMutation()
    
    useEffect(() => {
        verification(token)
    }, [token])

    return <AuthWrapper heading="Email verificarion">
        <div><Loader /></div>
    </AuthWrapper>
}