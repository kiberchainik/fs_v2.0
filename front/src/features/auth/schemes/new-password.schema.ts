import { z } from 'zod'

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: 'Password lenght must by 6 symbols'
    })
})

export type TypeNewPasswordSchema = z.infer<typeof NewPasswordSchema>