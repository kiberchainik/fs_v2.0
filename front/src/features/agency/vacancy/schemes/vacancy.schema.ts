import { z } from "zod";

export const VacancySchema = z.object({
    title: z.string().min(1, {
        message: 'Write title vacancy'
    }),

    slug: z.string().optional(),

    description: z.string().min(100, {
        message: 'Write full description of vacancy'
    }),

    categoryId: z.string().min(1, {
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

    reallyUpTo: z.date().optional(),

    agencyId: z.string().optional(),

    branchId: z.string().optional(),

    tags: z.string().optional(),

    contractTypeId: z.string().optional(),

    experienceMinimalId: z.string().optional(),

    levelEducationId: z.string().optional(),

    modeJobId: z.string().optional(),

    workingTimeId: z.string().optional()
})

export type TypeVacancySchema = z.infer<typeof VacancySchema>