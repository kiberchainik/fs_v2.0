import { z } from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const BranchSchema = z.object({
    name: z.string().min(1, {
        message: 'Write title vacancy'
    }),

    email: z.string().min(1, {
        message: 'Write slug vacancy'
    }),

    phone: z.string().regex(phoneRegex, 'Invalid Number!'),

    fax: z.string().optional(),

    location: z.string().min(1, {
        message: 'Write full description of vacancy'
    }),

    region: z.string().min(1, {
        message: 'Write full description of vacancy'
    }),

    logo: z.string().optional(),

    about_branch: z.string().optional()
})

export type TypeBranchSchema = z.infer<typeof BranchSchema>