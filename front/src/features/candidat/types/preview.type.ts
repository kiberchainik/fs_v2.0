import { IPrivacy } from "@/features/auth/types"
import { IEducation } from "./education.type"
import { IExperience } from "./experience.type"
import { ICourses } from "./courses.type"
import { ISkills } from "./skills.type"
import { ILanguages } from "./languages.type"
import { IHobbies } from "./hobbies.type"
import { ILifeStatus } from "./life-status.type"
import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type"
import { ISocial } from "./social.type"

export interface IPreviewTemplates {
    email: string
    privacy: IPrivacy
    education: IEducation[]
    courses: ICourses[]
    experience: IExperience[]
    skills: ISkills[]
    languages: ILanguages[]
    hobbies: IHobbies[]
    lifestatus: ILifeStatus
    socialLinks?: ISocial[]
}