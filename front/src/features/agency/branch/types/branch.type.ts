export interface IBranch {
    id: string,
    name: string,
    email: string,
    phone: string,
    fax?: string,
    logo?: string | undefined,
    location: string,
    region: string,
    about_branch?: string
}

export type IBItem = Pick<IBranch, 'id' | 'name'>