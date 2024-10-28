import { Prisma } from "prisma/__generated__";

export const returnCategoryBaseObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}