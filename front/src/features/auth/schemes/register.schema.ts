import { z } from 'zod'

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: 'Enter name'
    }),
    role: z.string(),
    email: z.string().email({
        message: 'Email incorrect'
    }),
    password: z.string().min(6, {
        message: 'Password lenght must by 6 symbols'
    }),
    passwordRepeat: z.string().min(6, {
        message: 'Password lenght must by 6 symbols'
    })
}).refine(data => data.password === data.passwordRepeat, {
    message: 'Password is wrong',
    path: ['passwordRepeat']
})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>