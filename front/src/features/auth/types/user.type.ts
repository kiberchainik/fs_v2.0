export enum UserRole {
    Agency = 'AGENCY',
    Candidat = 'CANDIDATE',
    User = 'USER',
    Admin = 'ADMIN'
}

export enum AuthMethod {
    Credentials = 'CREDENTIALS',
    Google = 'GOOGLE',
    Yandex = 'YANDEX'
}

export interface IAccount {
    id: string
    createdAt: string
    updatedAt: string
    type: string
    provider: string
    refreshToken: string
    accessToken: string
    expiresAt: number
    userId: string
}

export interface IUser {
    id: string
    createdAt: string
    updatedAt: string
    email: string
    role: UserRole
    isVerified: boolean
    isTwoFactorEnabled: boolean
    method: AuthMethod
    accounts: IAccount[]
}

export interface IPrivacy {
    avatar: string[]
    birthday: string
    firstname: string
    surname: string
    resident: string
    phone: string
    about_my: string
}