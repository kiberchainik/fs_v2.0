import { z } from 'zod'

export const PrivacySchema = z.object({
    avatar: z.string().array().min(1, {
        message: 'Загрузите хотя бы одну картинку'
    }),
    email: z.string().email({
        message: 'Email incorrect'
    }),
    name: z.string().min(1, { message: 'Scrivi tuo nome' }),
    lastname: z.string().min(1, { message: 'Scrivi tuo cognome' }),
    birthday: z.date({ message: "Invalid date string!" }).or(z.undefined()),
    resident: z.string().min(1, {
        message: 'Write please address'
    }),
    phone: z.string().min(1, {
        message: 'Write please agency phone'
    }),
    about_my: z.string().min(50, {
        message: 'Write please short description'
    })
    //isTwoFactorEnabled: z.boolean()
})

export type TypePrivacySchema = z.infer<typeof PrivacySchema>