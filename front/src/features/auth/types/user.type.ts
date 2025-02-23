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
    createdAt: Date
    updatedAt: Date
    type: string
    provider: string
    refreshToken: string
    accessToken: string
    expiresAt: number
    userId: string
}

export interface IUser {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    login: string
    role: UserRole
    isVerified: boolean
    isTwoFactorEnabled: boolean
    method: AuthMethod
    accounts: IAccount[]
}

export interface IPrivacy {
    avatar: string[]
    birthday: Date
    firstname: string
    surname: string
    resident: string
    phone: string
    about_my: string
}