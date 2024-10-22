import { Prisma } from 'prisma/__generated__'
import { TransformStreamDefaultController } from 'stream/web'

export const returnTagsObject: Prisma.jobTagsSelectScalar = {
	id: true,
    name: true,
    slug: true
}