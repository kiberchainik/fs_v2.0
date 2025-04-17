export type TranslationFunc = (
    key: string,
    values?: Record<string, any>,
    formats?: Intl.DateTimeFormatOptions
) => string