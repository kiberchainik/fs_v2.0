export interface ICarouselCandidate {
    firstname: string;
    surname: string;
    avatar: string[];
    education: {
        grade: string;
    }[]
}

export interface ICarouselAgencies {
    agency_name: string,
    logo: string,
    slug: string,
    url: string,
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
    categories: {
        id: string,
        description: string,
        name: string
        slug: string
    }
}