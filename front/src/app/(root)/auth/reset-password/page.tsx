import { ResetPasswordForm } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Password reset'
}

export default function ResetPasswordPage() {
    return <ResetPasswordForm />
}