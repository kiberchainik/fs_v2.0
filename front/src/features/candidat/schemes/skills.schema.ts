import { z } from 'zod'

export const SkillSchema = z.object({
    skill: z.string().min(1, { message: 'Scrivi tuo nome' }),
    level: z.string().min(1, { message: 'Scrivi tuo cognome' })
})

export type TypeSkillSchema = z.infer<typeof SkillSchema>