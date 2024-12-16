import { Prisma } from "prisma/__generated__";

export const returnCategoryBaseObject: Prisma.CategorySelect = {
	id: true,
	description: true,
	name: true,
	slug: true,
	parent: {
		select: {
			id: true,
			description: true,
			name: true,
			slug: true,
			parent: {
				select: {
					id: true,
					description: true,
					name: true,
					slug: true,
					parent: {
						select: {
							id: true,
							description: true,
							name: true,
							slug: true,
							parent: {
								select: {
									id: true,
									description: true,
									name: true,
									slug: true,
								}
							}
						}
					}
				}
			}
		}
	}
}