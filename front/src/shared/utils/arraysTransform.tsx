export const joinNamesWithComma = (items:{name:string}[] | undefined):string => {
	return items?.map(item => item.name).join(', ') || ''
}

export const splitTagsWithComa = (tags:string | undefined):string[] => {
	return tags?.split(',').map(tag => tag.trim()) || []
}