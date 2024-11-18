export interface ISearch {
    title: string
    slug: string
    id: string
    description: string
    agency?: {
        id: string
        agency_name: string
        phone: string
        address: string
        user: {
            email: string
        }
    }
    branch?: {
        id: string
        name: string
        email: string
        phone: string
        location: string
        address: string
    }
}