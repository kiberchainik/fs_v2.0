import { z } from 'zod'

export const SettingsSchema = z.object({
    name: z.string().min(1, {
        message: 'Enter name'
    }),
    email: z.string().email({
        message: 'Email incorrect'
    }),
    isTwoFactorEnables: z.boolean()
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>