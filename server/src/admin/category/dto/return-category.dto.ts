import { Prisma } from "@prisma/client";

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