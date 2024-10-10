import { UserAuth, LoginForm } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: ''
}

export default function LoginPage() {
  return <UserAuth />
}
