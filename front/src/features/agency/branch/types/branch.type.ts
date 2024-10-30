export interface IBranch {
    id: string,
    name: string,
    email: string,
    phone: string,
    fax?: string,
    logo?: string | undefined,
    address: string
    location: string,
    region: string,
    about_branch?: string
}

export type IBItem = Pick<IBranch, 'id' | 'name'>
export type IBranchTable = Pick<IBranch, 'name' | 'id' | 'location' | 'email' | 'phone'>