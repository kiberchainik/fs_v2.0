import { z } from "zod";

export const FilterVacancySchema = z.object({
    categoryId: z.string().optional(),
    location: z.string().optional(),
    contractTypeId: z.string().optional(),
    modeJobId: z.string().optional(),
    workingTimeId: z.string().optional(),
    levelEducationId: z.string().optional(),
    experienceMinimalId: z.string().optional(),
})

export type TypeFilterVacancies = z.infer<typeof FilterVacancySchema>