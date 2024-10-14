import Cookies from 'js-cookie'

export enum ETokens {
    'COOKIE' = 'session'
}

export const getAccessToken = () => {
    return Cookies.get(ETokens.COOKIE) || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(ETokens.COOKIE, accessToken, {
        domain: process.env.APP_DOMAIN,
        sameSite: 'Strict',
        expires: 1
    })
}

export const removeFromStorage = () => {
    Cookies.remove(ETokens.COOKIE)
}