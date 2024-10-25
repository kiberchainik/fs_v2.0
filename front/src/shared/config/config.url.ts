export const APP_URL = process.env.APP_URL as string

export const AGENCY_URL = {
    root: (url = '') => `/agency${url ? url : ''}`,

    profile: () => AGENCY_URL.root('/profile'),
    editProfile: () => AGENCY_URL.root('/profile/edit'),

    vacancies: () => AGENCY_URL.root('/vacancies'),
    createOffers: () => AGENCY_URL.root('/joboffers'),
    editOffers: (id = '') => AGENCY_URL.root(`/joboffers/${id}`),
    deleteOffers: (id = '') => AGENCY_URL.root(`/joboffers/${id}`),

    branches: () => AGENCY_URL.root('/branch'),
    createBranch: () => AGENCY_URL.root('/branch'),
    editBranch: (id = '') => AGENCY_URL.root(`/branch/${id}`),
    deleteBranch: (id = '') => AGENCY_URL.root(`/branch/${id}`),
}

export const CANDIDAT_URL = {
    root: (url = '') => `/candidat${url ? url : ''}`,

    profile: () => CANDIDAT_URL.root('/profile'),
    profileEdit: () => CANDIDAT_URL.root('/privacy')
}

export const MAIN_URL = {
    root: (url = '') => `${url ? url : ''}`,
    
    home: () => MAIN_URL.root('/'),
    candidats: (login = '') => MAIN_URL.root(`/candidats/${login}`),
    fullVacancy: (slug = '') => MAIN_URL.root(`/vacancy/${slug}`),
    agencyPageInfo: (slug:string) => MAIN_URL.root(`/about-agency/${slug}`),
    branchPageInfo: (id:string) => MAIN_URL.root(`/about-filial/${id}`),
    about: () => MAIN_URL.root('/about'),
    contacts: () => MAIN_URL.root('/contacts')
}