import { z } from 'zod'

export const SettingsSchema = z.object({
    email: z.string().email({
        message: 'Email incorrect'
    }),
    isTwoFactorEnabled: z.boolean()
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>