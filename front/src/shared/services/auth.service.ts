import { axiosPublic } from '@/shared/api'

import { API_URL } from '@/shared/config'

import { IAuthForm, IAuthResponse } from '@/features/auth/types'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosPublic<IAuthResponse>({
			url: API_URL.auth(`/${type}`),
			method: 'POST',
			data
		})

		if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken)

		return response
	}

	async getNewTokens() {
		const response = await axiosPublic<IAuthResponse>({
			url: API_URL.auth('/access-token'),
			method: 'POST'
		})

		if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosPublic<boolean>({
			url: API_URL.auth('/logout'),
			method: 'POST'
		})

		if (response.data) removeFromStorage()

		return response
	}
}

export const authService = new AuthService()