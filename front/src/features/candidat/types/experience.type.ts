export interface IExperience {
    id: string
    company: string
    contract: string
    location?: string
    currently?: boolean
    startDate: Date
    endDate: Date
    description?: string
}

export type TExperienceEdit = Omit<IExperience, 'id'>

export enum EContractType {
    Parttime = 'PARTTIME',
    Selfemployed = 'SELFEMPLOYED',
    Freelance = 'FREELANCE',
    Contract = 'CONTRACT',
    Internship = 'INTERNSHIP',
    Apprenticeship = 'APPRENTICESHIP'
}