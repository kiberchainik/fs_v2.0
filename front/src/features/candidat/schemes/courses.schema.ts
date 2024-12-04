import { z } from "zod";

export const CourseSchema = z.object({
    course: z.string().min(1, { message: 'Title of course' }),
    institution: z.string().min(1, { message: 'Institution of course' }),
    grade: z.string().optional(),
    dateRange: z.object(
        {
            startdate: z.date(),
            enddate: z.date(),
        },
        {
            required_error: "Please select a date range",
        }
    )
}).refine((data) => data.dateRange.startdate < data.dateRange.enddate, {
    path: ["dateRange"],
    message: "From date must be before to date",
})

export type TypeCourseSchema = z.infer<typeof CourseSchema>