export interface IAuthForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	user: IAuthForm
	accessToken: string
}
