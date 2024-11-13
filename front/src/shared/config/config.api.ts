export const SERVER_URL = `${process.env.SERVER_URL}/api` as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    currentUser: () => API_URL.root('/users/short-data'),
    auth: (url = '') => API_URL.root(`/auth${url}`),
    authSocial: (provider: string) => API_URL.root(`/auth/${provider}`),
    file: (url: string) => API_URL.root(url),
    candidats: () => API_URL.root('/candidats'),
    candidatData: (login: string) => API_URL.root(`/candidats${login}`),
    candidatProfile: () => API_URL.root('/profile'),

    agency: () => API_URL.root('/agency'),
    agencypage: (slug: string) => API_URL.root(`/agency${slug}`),
    agencyProfile: () => API_URL.root('/agency/profile'),
    agencyEditProfile: () => API_URL.root('/agency'),

    vacancy: (id: string = '') => API_URL.root(`/joboffers/${id}`),
    deleteManyVacancy: () => API_URL.root(`/joboffers/delete-many`),
    agencyVacancy: () => API_URL.root(`/joboffers/my-vacancies`),
    getJobById: (id: string) => API_URL.root(`/joboffers/by-id/${id}`),
    getJobBySlug: (slug: string) => API_URL.root(`/joboffers/by-slug/${slug}`),
    getJobByCategory: (slug: string) => API_URL.root(`/joboffers/by-category/${slug}`),
    options: (option: string) => API_URL.root(`/${option}`),
    branch: (url = '') => API_URL.root(`/branch/${url}`),
    category: (id: string = '') => API_URL.root(`/category${id}`),
    categoryBySlug: (slug: string) => API_URL.root(`/category/by-slug/${slug}`)
}