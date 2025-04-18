import { type NextRequest, NextResponse } from 'next/server'

import { AGENCY_URL, API_URL, CANDIDAT_URL, MAIN_URL } from '@/shared/config/'
import { EnumTokens } from '@/shared/services'
import { authService } from './features/auth/services'
import { UserRole } from './features/auth/types'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage = request.url.includes(API_URL.auth())

	const isCandidatProfile = request.url.includes(CANDIDAT_URL.root())
	const isAgencyProfile = request.url.includes(AGENCY_URL.root())

	if (accessToken) {
		const user = await authService.getCurrentUserData(accessToken)

		if (isAuthPage) {
			if (user.role === UserRole.Candidat) {
				return NextResponse.redirect(new URL(CANDIDAT_URL.root(), request.url))
			}
		}

		if (isAgencyProfile) {
			if (user.role !== UserRole.Agency) {
				return NextResponse.rewrite(new URL('/404', request.url))
			}

			const isAgencyProfile = request.url.includes(AGENCY_URL.profile())
			if ((!user.isVerified || !user.name || !user.avatar) && !isAgencyProfile) {
				return NextResponse.redirect(new URL(AGENCY_URL.profile(), request.url))
			}

			return NextResponse.next()
		}

		if (isCandidatProfile) {
			if (user.role !== UserRole.Candidat) {
				return NextResponse.rewrite(new URL('/404', request.url))
			}

			const isPrivacyPage = request.url.includes(CANDIDAT_URL.profileEdit())
			if ((!user.isVerified || !user.name || !user.avatar) && !isPrivacyPage) {
				return NextResponse.redirect(new URL(CANDIDAT_URL.profileEdit(), request.url))
			}

			return NextResponse.next()
		}
	}

	if (isAuthPage) {
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
		'/candidate/:path*',
		'/agency/:path*',
	]
}