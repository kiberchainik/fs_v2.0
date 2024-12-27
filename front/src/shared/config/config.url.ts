export const APP_URL = process.env.APP_URL as string

export const AGENCY_DROPDOWN_URL = {
    root: (url: string) => `/agency${url ? url : ''}`,

    dashboard: () => AGENCY_DROPDOWN_URL.root(''),
    profile: () => AGENCY_DROPDOWN_URL.root('/profile'),
    vacancy: (page: string = '') => AGENCY_DROPDOWN_URL.root(`/vacancy/${page}`),
    branch: (page: string = '') => AGENCY_DROPDOWN_URL.root(`/branch/${page}`),
    favorites: () => AGENCY_DROPDOWN_URL.root('/favorites'),
    candidati: () => AGENCY_DROPDOWN_URL.root('/candidati')
}

export const CANDIDAT_DROPDOWN_URL = {
    root: (url: string) => `/candidate${url ? url : ''}`,
    dashboard: () => CANDIDAT_DROPDOWN_URL.root(''),
    privacy: () => CANDIDAT_DROPDOWN_URL.root('/privacy'),
    portfolio: () => CANDIDAT_DROPDOWN_URL.root('/curriculum'),
    savedJobs: () => CANDIDAT_DROPDOWN_URL.root('/favorite'),
    sendetCandidatura: () => CANDIDAT_DROPDOWN_URL.root('/cv-inviate'),
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
    root: (url = '') => `/candidate${url ? url : ''}`,

    profile: () => CANDIDAT_URL.root('/profile'),
    profileEdit: () => CANDIDAT_URL.root('/privacy')
}

export const MAIN_URL = {
    root: (url = '') => `${url ? url : ''}`,

    home: () => MAIN_URL.root('/'),
    categories: (slug: string = '') => MAIN_URL.root(`/offerte-di-lavoro/${slug}`),
    candidats: () => MAIN_URL.root(`/candidati`),
    vacancyList: () => MAIN_URL.root(`/offerte-di-lavoro`),
    agencyPageInfo: (slug: string) => MAIN_URL.root(`/agenzia-di-lavoro/${slug}`),
    branchPageInfo: (id: string) => MAIN_URL.root(`/about-filial/${id}`),
    about: () => MAIN_URL.root('/chi-siamo'),
    contacts: () => MAIN_URL.root('/contatti'),
    authCandidat: () => MAIN_URL.root('/auth/candidate'),
    authAgency: () => MAIN_URL.root('/auth/agency')
}