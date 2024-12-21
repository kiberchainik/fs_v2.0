export interface IEducation {
    id: string
    levelId: string
    school: string
    grade?: string
    startdate: Date
    enddate: Date
    description?: string
}

export type TCreateEducation = Omit<IEducation, 'id'>