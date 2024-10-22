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
