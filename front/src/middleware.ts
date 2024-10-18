import { type NextRequest, NextResponse } from 'next/server'

import { AGENCY_URL, API_URL, CANDIDAT_URL } from '@/shared/config/'
import { EnumTokens } from '@/shared/services'
import { authService } from './features/auth/services'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = request.url.includes(API_URL.auth())
	const isCandidatProfile = request.url.includes(CANDIDAT_URL.root())
	const isAgencyProfile = request.url.includes(AGENCY_URL.root())

	if (refreshToken) {
		const user = await authService.getCurrentUserData(refreshToken)

		if (isAgencyProfile) {
			if (user.role === 'AGENCY') {
				return NextResponse.next()
			}
	
			return NextResponse.rewrite(new URL('/404', request.url))
		}
	
		if (isCandidatProfile) {
			if (user.role === 'CANDIDAT') {
				return NextResponse.next()
			}
	
			return NextResponse.rewrite(new URL('/404', request.url))
		}

		if (isAuthPage) {
			if(user.role === 'CANDIDAT') {
				return NextResponse.redirect(new URL(CANDIDAT_URL.root(), request.url))
			}

			if(user.role === 'AGENCY') {
				return NextResponse.redirect(new URL(AGENCY_URL.root(), request.url))
			}
		}
	}

	if (refreshToken === undefined) {
		return NextResponse.next()
		//return NextResponse.redirect(new URL(API_URL.auth(), request.url))
	}
}

export const config = {
	matcher: [
		'/auth',
		'/candidat/:path*',
		'/agency/:path*'
	]
}