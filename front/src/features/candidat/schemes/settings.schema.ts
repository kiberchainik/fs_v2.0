import { z } from 'zod'

export const PrivacySchema = z.object({
    avatar: z.string().array().min(1, {
        message: 'Carica la tua foto profilo'
    }),
    email: z.string().email({
        message: 'Email incorrect'
    }),
    name: z.string().min(1, { message: 'Scrivi tuo nome' }),
    lastname: z.string().min(1, { message: 'Scrivi tuo cognome' }),
    birthday: z.date({ message: "Invalid date string!" }).or(z.undefined()),
    resident: z.string().min(1, {
        message: 'Scrivi indirizio di residenza'
    }),
    phone: z.string().min(1, {
        message: 'Scrivi tuo numero di telefono'
    }),
    about_my: z.string().min(50, {
        message: 'Scrivi qualcosa di te'
    })
    //isTwoFactorEnabled: z.boolean()
})

export type TypePrivacySchema = z.infer<typeof PrivacySchema>