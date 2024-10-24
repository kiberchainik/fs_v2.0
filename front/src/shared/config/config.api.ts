export const SERVER_URL = `${process.env.SERVER_URL}/api` as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    currentUser: () => API_URL.root('/users/short-data'),
    auth: (url = '') => API_URL.root(`/auth${url}`),
    file: (url:string) => API_URL.root(url),
    candidats: () => API_URL.root('/candidats'),
    candidat: (login:string) => API_URL.root(`/candidats${login}`),
    candidatProfile: () => API_URL.root('/profile'),
    
    agency: () => API_URL.root('/agency'),
    agencypage: (slug: string) => API_URL.root(`/agency${slug}`),
    agencyProfile: () => API_URL.root('/agency/profile'),
    agencyEditProfile: () => API_URL.root('/agency'),

    jobOffersList: () => API_URL.root(`/joboffers`),
    jobCreateNew: () => API_URL.root('/joboffers'),
    branch: (url = '') => API_URL.root(`/branch${url}`),
    category: (id:string = '') => API_URL.root(`/category${id}`)
}