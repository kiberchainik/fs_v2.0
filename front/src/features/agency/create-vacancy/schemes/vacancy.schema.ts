import { z } from "zod";

export const VacancySchema = z.object({
    title: z.string().min(1, {
        message: 'Write title vacancy'
    }),

    slug: z.string().min(1, {
        message: 'Write slug vacancy'
    }),

    description: z.string().min(100, {
        message: 'Write full description of vacancy'
    }),

    categoryIds: z.string().min(1, {
        message: 'Select the category for vacancy'
    }),

    sectors: z.string().array().optional(),

    region: z.string().min(1, {
        message: 'Write full description of vacancy'
    }),

    province: z.string().min(1, {
        message: 'Write full description of vacancy'
    }),

    location: z.string().min(1, {
        message: 'Write full description of vacancy'
    }),

    branchId: z.string().optional(),

    tags: z.string().optional()
})

export type TypeVacancySchema = z.infer<typeof VacancySchema>