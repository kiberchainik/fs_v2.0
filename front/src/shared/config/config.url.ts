export const APP_URL = process.env.APP_URL as string

export const AGENCY_DROPDOWN_URL = {
    root: (url: string) => `/agency${url ? url : ''}`,

    dashboard: () => AGENCY_DROPDOWN_URL.root(''),
    profile: () => AGENCY_DROPDOWN_URL.root('/profile'),
    vacancy: (page: string = '') => AGENCY_DROPDOWN_URL.root(`/vacancy/${page}`),
    branch: (page: string = '') => AGENCY_DROPDOWN_URL.root(`/branch/${page}`),
    favorites: () => AGENCY_DROPDOWN_URL.root('/favorites')
}

export const CANDIDAT_DROPDOWN_URL = {
    root: (url: string) => `/candidat${url ? url : ''}`,
    // courses    Courses[]
    // education  Education[]
    // experience Experience[]
    // hobbies    Hobbies[]
    // languages  Languages[]
    // skills
    dashboard: () => CANDIDAT_DROPDOWN_URL.root(''),
    privacy: () => CANDIDAT_DROPDOWN_URL.root('/privacy'),
    portfolio: () => CANDIDAT_DROPDOWN_URL.root('/curriculum'),
    savedJobs: () => CANDIDAT_DROPDOWN_URL.root('/favorite'),
}

export const AGENCY_URL = {
    root: (url = '') => `/agency${url ? url : ''}`,

    profile: () => AGENCY_URL.root('/profile'),
    editProfile: () => AGENCY_URL.root('/profile/edit'),

    vacancies: () => AGENCY_URL.root('/vacancies'),
    createOffers: () => AGENCY_URL.root('/vacancy/create'),
    editOffers: (id: string = '') => AGENCY_URL.root(`/vacancy/edit/${id}`),

    branches: () => AGENCY_URL.root('/branch'),
    createBranch: () => AGENCY_URL.root('/branch/create'),
    editBranch: (id: string = '') => AGENCY_URL.root(`/branch/edit/${id}`)
}

export const CANDIDAT_URL = {
    root: (url = '') => `/candidat${url ? url : ''}`,

    profile: () => CANDIDAT_URL.root('/profile'),
    profileEdit: () => CANDIDAT_URL.root('/privacy')
}

export const MAIN_URL = {
    root: (url = '') => `${url ? url : ''}`,

    home: () => MAIN_URL.root('/'),
    categories: (slug: string = '') => MAIN_URL.root(`/offerte-di-lavoro/${slug}`),
    candidats: () => MAIN_URL.root(`/candidati`),
    fullVacancy: (slug = '') => MAIN_URL.root(`/offerta/${slug}`),
    agencyPageInfo: (slug: string) => MAIN_URL.root(`/about-agency/${slug}`),
    branchPageInfo: (id: string) => MAIN_URL.root(`/about-filial/${id}`),
    about: () => MAIN_URL.root('/chi-siamo'),
    contacts: () => MAIN_URL.root('/contatti')
}