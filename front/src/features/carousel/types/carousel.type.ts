export interface ICarouselCandidate {
    firstname: string;
    surname: string;
    avatar: string[];
    about_my: string;
    skills: {
        skill: string
    }[]
    user: {
        email: string;
    }
    education: {
        grade: string;
    }[]
}

export interface ICarouselAgencies {
    agency_name: string,
    logo: string,
    slug: string,
    url: string,
    about: string,
    address: string,
    phone: string,
    user: {
        email: string
    }
}

export interface ICarouselJobs {
    slug: string
    title: string
    description: string
    views: string
    createdAt: string
    agency: {
        agency_name: string,
        logo: string
    }
    categories: {
        id: string,
        description: string,
        name: string
        slug: string
    }
}