import { Prisma } from '@prisma/client'

export const returnTagsObject: Prisma.jobTagsSelectScalar = {
    id: true,
    name: true,
    slug: true
}