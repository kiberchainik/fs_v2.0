import { z } from 'zod'

export const SettingsSchema = z.object({
    logo: z.string().array().min(1, {
        message: 'Загрузите хотя бы одну картинку'
    }),
    agency_name: z.string().min(1, {
        message: 'Write please agency name'
    }),
    address: z.string().min(1, {
        message: 'Write please address'
    }),
    phone: z.string().min(1, {
        message: 'Write please agency phone'
    }),
    about: z.string().min(100, {
        message: 'Write please short description'
    }),
    url: z.string().url().optional(),
    p_iva_c_f: z.string().min(1, {
        message: 'Write please P.IVA or agency CF'
    }),
    isTwoFactorEnabled: z.boolean()
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>