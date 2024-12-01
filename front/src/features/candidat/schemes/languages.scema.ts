import { z } from 'zod'

export const LanguageSchema = z.object({
    language: z.string().min(1, { message: 'Scrivi lingua' }),
    level: z.string().min(1, { message: 'Scegli livelo' })
})

export type TypeLanguageSchema = z.infer<typeof LanguageSchema>