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
		id: '23abae3c-fdb9-4e65-897b-e6fa952bca76',
		email: 'kiberpon@gmail.com'
		role: 'AGENCY'
	}
	accessToken: string
}