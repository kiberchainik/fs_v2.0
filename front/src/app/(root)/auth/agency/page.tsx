import { UserAuth, AuthDescription } from '@/features/auth/components'
import { UserRole } from '@/features/auth/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Agency',
  description: ''
}

export default function AgencyLoginPage() {
  return (
    <div className='flex flex-col md:flex-row gap-10 md:justify-center md:items-center'>
      <UserAuth role={UserRole.Agency} isShowSocial={false} />
      <AuthDescription />
    </div>
  )
}