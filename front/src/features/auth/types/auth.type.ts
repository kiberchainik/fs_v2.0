import { UserRole } from "./user.type"

export interface IAuthForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	name: string
	email: string
	password: string
	accessToken: string
}

export interface IEmailVerifyResponse {
	existingUser: {
		id: string,
		email: string,
		role: UserRole
	}
	accessToken: string
}