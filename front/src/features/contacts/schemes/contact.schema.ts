import { z } from "zod";

export const ContactsSchema = z.object({
    name: z.string().min(1, { message: 'Scrivi tuo nome' }),
    email: z.string().email({ message: 'Inserisci un indirizzo email valido' }),
    message: z.string().min(1, { message: 'Scrivi messagio...' })
})

export type TypeContactSchema = z.infer<typeof ContactsSchema>