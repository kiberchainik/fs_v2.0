export class CreateAuthAccountDto {
    userId: string
    type: string
    provide: string
    accessToken: string
    refreshToken: string
    expiresAt: number
}