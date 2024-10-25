import axios, { CreateAxiosDefaults } from 'axios'

import { SERVER_URL } from '@/shared/config'

import {
	getAccessToken,
	removeFromStorage
} from '@/shared/services'
import { authService } from '@/shared/services'

import { errorCatch } from '@/shared/api'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: {'Content-type': 'application/json'},
	withCredentials: true
}

const axiosPublic = axios.create(options)
const axiosPrivate = axios.create(options)

axiosPrivate.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosPrivate.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expried' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosPrivate.request(originalRequest)
			} catch (error) {
				return removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosPublic, axiosPrivate }
