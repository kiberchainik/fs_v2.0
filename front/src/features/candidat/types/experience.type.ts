export interface IExperience {
    id: string
    company: string
    contractTypeId: string
    contractTypeJob?: {
        name: string
    }
    location?: string
    currently?: boolean
    startDate: Date
    endDate: Date
    description?: string
}

export type TExperienceEdit = Omit<IExperience, 'id'>