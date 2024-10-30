import { z } from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const BranchSchema = z.object({
    name: z.string().min(1, {
        message: 'Write name filial'
    }),

    email: z.string().min(1, {
        message: 'Write email filial'
    }),

    phone: z.string().regex(phoneRegex, 'Invalid number!'),

    fax: z.string().optional(),

    location: z.string().min(1, {
        message: 'Write town filial'
    }),

    address: z.string().min(1, {
        message: 'Write full address'
    }),

    region: z.string().min(1, {
        message: 'Write region filial'
    }),

    logo: z.string().optional(),

    about_branch: z.string().optional()
})

export type TypeBranchSchema = z.infer<typeof BranchSchema>