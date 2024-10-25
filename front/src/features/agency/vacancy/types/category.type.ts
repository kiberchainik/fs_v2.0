export interface ICategory {
    id: string
    name: string
    slug: string
    description: string
    children?: ICategory[]
    level?: number | null
    parentId?: string[]
}

export type TCategorySelector = Pick<ICategory, 'id' | 'name' | 'slug' | 'description' | 'children'>