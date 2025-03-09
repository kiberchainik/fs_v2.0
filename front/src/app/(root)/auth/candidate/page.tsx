import { UserAuth } from '@/features/auth/components'
import { UserRole } from '@/features/auth/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Candidat',
  description: ''
}

export default function CandidatLoginPage() {
  return <UserAuth role={UserRole.Candidat} isShowSocial={true} />
}
