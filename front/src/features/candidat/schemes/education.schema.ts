import { z } from "zod";

export const EducationSchema = z.object({
    levelId: z.string(),
    school: z.string(),
    grade: z.string().optional(),
    dateRange: z.object(
        {
            startdate: z.date(),
            enddate: z.date(),
        },
        {
            required_error: 'Please select a date range'
        }
    ),
    description: z.string().optional()
}).refine((data) => data.dateRange.startdate < data.dateRange.enddate, {
    path: ['dateRange'],
    message: 'From date must be before to date'
})

export type TypeEducationSchema = z.infer<typeof EducationSchema>