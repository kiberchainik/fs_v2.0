import { axiosPrivate, axiosPublic } from "@/shared/api";
import { TypeLoginSchema, TypeRegisterSchema } from "../schemes";
import { IAuthResponse, IUser } from "../types";
import { API_URL, MAIN_URL } from "@/shared/config";
import { removeFromStorage, saveTokenStorage } from "@/shared/services";

class AuthService {
    public async register(data: TypeRegisterSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await axiosPublic<IUser>({
            url: API_URL.auth('/register'),
            method: 'POST',
            data, 
            headers
        })

        return response
    }

    public async login (data: TypeLoginSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await axiosPublic<IAuthResponse>({
            url: API_URL.auth('/login'),
			method: 'POST',
			data,
            headers
        })

        if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken)

		return response.data
    }

    public async getProfile () {
        return await axiosPrivate<IUser>('/users/profile')
    }

    public async getCurrentUserData (accessToken: string) {
        const {data} = await axiosPrivate<IUser>(API_URL.currentUser(), {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if(!data) removeFromStorage()

        return data
    }

    public async oauthByprovider(provider: string) {
        const response = await axiosPublic.get<{url:string}>(API_URL.authSocial(provider))

        return response
    }

    public async logout() {
        const response = await axiosPublic<boolean>({
			url: API_URL.auth('/logout'),
			method: 'POST'
		})

		if (response.data) removeFromStorage()

		return response
    }
}

export const authService = new AuthService()