export const SERVER_URL = process.env.SERVER_URL as string

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

    joboffers: (url = '') => API_URL.root(`/offers${url}`),
    branch: (url = '') => API_URL.root(`/branch${url}`),
    category: (url = '') => API_URL.root(`/actors${url}`)
}