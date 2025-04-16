import { ICarouselCandidate } from "@/features/carousel/types/carousel.type"
import { IExperience } from "./experience.type"
import { IEducation } from "./education.type"
import { ISkills } from "./skills.type"
import { ICourses } from "./courses.type"
import { IHobbies } from "./hobbies.type"
import { ILanguages } from "./languages.type"
import { ISocial } from "./social.type"
import { IPrivacy } from "@/features/auth/types"

export interface ICandidatResponse {
    candidats: ICarouselCandidate[]
    count: number
    pageCount: number
}

export interface ICandidatMetaData extends Pick<IPrivacy, 'about_my' | 'surname' | 'firstname' | 'avatar'> { }

export interface ICandidatFullData extends IPrivacy {
    candidatLifeState: {
        availabilityTransport: boolean,
        maritalStatus: string,
        driverCategory: string[]
    },
    jobContacts: [],
    createdAt: Date,
    user: {
        id: string,
        email: string,
        social: ISocial[] //Omit<ISocial, 'id'>[]
    },
    education: IEducation[] //Omit<IEducation, 'id' | 'levelId'>[],
    experience: IExperience[] //Omit<IExperience, 'id' | 'contractTypeId'>[],
    skills: ISkills[] //Omit<ISkills, 'id'>[],
    courses: ICourses[] //Omit<ICourses, 'id'>[],
    hobbies: IHobbies[] //Omit<IHobbies, 'id'>[],
    languages: ILanguages[] //Omit<ILanguages, 'id'>[]
}