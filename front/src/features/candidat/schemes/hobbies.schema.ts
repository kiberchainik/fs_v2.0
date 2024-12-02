import { z } from 'zod'

export const HobbieSchema = z.object({
    hobbie: z.string().min(1, { message: 'Scrivi tuo hobbie' })
})

export type TypeHobbieSchema = z.infer<typeof HobbieSchema>