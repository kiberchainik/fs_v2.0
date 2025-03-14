import { z } from "zod";

export const ExperienceSchema = z.object({
    company: z.string(),
    contractTypeId: z.string(),
    location: z.string().optional(),
    position: z.string().optional(),
    currently: z.boolean().default(false).optional(),
    description: z.string().optional(),
    dateRange: z.object(
        {
            startDate: z.date(),
            endDate: z.date(),
        },
        {
            required_error: 'Please select a date range'
        }
    )
}).refine((data) => data.dateRange.startDate < data.dateRange.endDate, {
    path: ['dateRange'],
    message: 'From date must be before to date'
})

export type TypeExperienceSchema = z.infer<typeof ExperienceSchema>