import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email incorrect'
    }),
    password: z.string().min(6, {
        message: 'Password lenght must by 6 symbols'
    }),
    code: z.optional(z.string())
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>