import { VerificationForm } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Confirmation email'
}

export default function VerificationPage() {
    return <VerificationForm />
}
