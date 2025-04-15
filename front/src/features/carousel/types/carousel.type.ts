export interface ICarouselCandidate {
    id: string
    firstname: string
    surname: string
    avatar: string[]
    about_my: string
    skills: {
        skill: string
    }[]
    user: {
        email: string
        login: string
    }
    education: {
        grade: string
    }[]
}

export interface ICarouselAgencies {
    id: string
    agency_name: string
    logo: string[]
    slug: string
    url: string
    about: string
    address: string
    phone: string
    user: {
        email: string
    }
}

export interface ICarouselJobs {
    id: string
    slug?: string
    title: string
    description: string
    views: number
    createdAt: string
    agency: {
        agency_name: string,
        logo: string
        slug: string
    }
    categories: {
        id: string,
        description: string,
        name: string
        slug: string
    }
    reallyUpTo: string
    contractType: {
        id: string
        name: string
    }
    experienceMinimalJob: {
        id: string
        name: string
    }
    levelEducation: {
        id: string
        name: string
    }
    modeJob: {
        id: string
        name: string
    }
    workingTimeJob: {
        id: string
        name: string
    }
}