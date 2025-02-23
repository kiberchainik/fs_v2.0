import { UserAuth, LoginForm } from '@/features/auth/components'
import { UserRole } from '@/features/auth/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Agency',
  description: ''
}

export default function AgencyLoginPage() {
  return <UserAuth role={UserRole.Agency} isShowSocial={false} />
}