import { z } from "zod";

export const driverCategory = [
    {
        id: 'am',
        category: "AM"
    },
    {
        id: 'a1',
        category: "A1"
    },
    {
        id: 'a2',
        category: "A2"
    },
    {
        id: 'b',
        category: "B"
    },
    {
        id: 'b1code96',
        category: "B1 codice 96"
    },
    {
        id: 'be',
        category: "BE"
    },
    {
        id: 'c1',
        category: "C1"
    },
    {
        id: 'c1e',
        category: "C1E"
    },
    {
        id: 'c',
        category: "C"
    },
    {
        id: 'ce',
        category: "CE"
    },
    {
        id: 'cqc',
        category: "CQC"
    },
    {
        id: 'd1',
        category: "D1"
    },
    {
        id: 'd1e',
        category: "D1E"
    },
    {
        id: 'de',
        category: "DE"
    },
] as const

export const LifeStatusSchema = z.object({
    driverCategory: z.array(z.string()),
    availabilityTransport: z.boolean().default(false).optional(),
    maritalStatus: z.string()
})

export type TypeLifeStatusSchema = z.infer<typeof LifeStatusSchema>