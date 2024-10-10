import { NextFetchEvent, type NextRequest, NextResponse } from 'next/server'
import { authService } from './features/auth/services'

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
	const { url, cookies } = request

	const session = cookies.get('session')?.value

	const isAuthPage = url.includes('/auth')

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard', url))
		}

		return NextResponse.next()
	}

	if (!session) {
		return NextResponse.redirect(new URL('/', url))
	}
}

export const config = {
	matcher: [
		'/auth/:path*',
		'/dashboard/:path*'
	]
}
