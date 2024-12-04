export interface ICourses {
    id: string
    course: string
    institution: string
    grade?: string
    startdate: Date
    enddate: Date
}

export type TCreateCourse = Omit<ICourses, 'id'>