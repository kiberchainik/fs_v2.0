import { type NextRequest, NextResponse } from 'next/server'

import { AGENCY_URL, API_URL, CANDIDAT_URL, MAIN_URL } from '@/shared/config/'
import { EnumTokens } from '@/shared/services'
import { authService } from './features/auth/services'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage = request.url.includes(API_URL.auth())
	
	const isCandidatProfile = request.url.includes(CANDIDAT_URL.root())
	const isAgencyProfile = request.url.includes(AGENCY_URL.root())

	if (accessToken) {
		const user = await authService.getCurrentUserData(refreshToken)
		
		if (isAuthPage) {
			if(user.role === 'CANDIDAT') {
				return NextResponse.redirect(new URL(CANDIDAT_URL.root(), request.url))
			}

			if(user.role === 'AGENCY') {
				return NextResponse.redirect(new URL(AGENCY_URL.root(), request.url))
			}
		}

		if (isAgencyProfile) {
			if (!isAuthPage && user.role === 'AGENCY') {
				return NextResponse.next()
			}
	
			return NextResponse.rewrite(new URL('/404', request.url))
		}
	
		if (isCandidatProfile) {
			if (!isAuthPage && user.role === 'CANDIDAT') {
				return NextResponse.next()
			}
	
			return NextResponse.rewrite(new URL('/404', request.url))
		}

	}

	if(isAuthPage) {
		if (accessToken === undefined) {
			return NextResponse.next()
		}
	}

	if (accessToken === undefined) {
		return NextResponse.redirect(new URL(MAIN_URL.home(), request.url))
	}
}

export const config = {
	matcher: [
		'/auth/:path*',
		'/candidat/:path*',
		'/agency/:path*'
	]
}