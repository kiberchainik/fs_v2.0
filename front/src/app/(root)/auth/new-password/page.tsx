import { NewPasswordForm } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'New password'
}

export default function Page() {
    return <NewPasswordForm />
}
