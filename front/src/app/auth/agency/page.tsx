import { AgencyAuth } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create account',
  description: ''
}

export default function RegisterPage() {
  return <AgencyAuth />
}
