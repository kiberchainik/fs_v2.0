export const COOKIE_NAME = 'language'
export const languages = ['ru', 'en', 'it', 'ro'] as const
export const defaultLanguage: Language = 'it'

export type Language = (typeof languages)[number]