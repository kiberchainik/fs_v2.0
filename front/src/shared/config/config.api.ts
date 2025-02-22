export const SERVER_URL = `${process.env.SERVER_URL}/api` as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    currentUser: () => API_URL.root('/users/short-data'),
    auth: (url = '') => API_URL.root(`/auth${url}`),
    authSocial: (provider: string) => API_URL.root(`/auth/${provider}`),
    confirmEmail: () => API_URL.root(`auth/email-confirmation`),
    file: (url: string) => API_URL.root(url),

    candidatsCarousel: (limit: number) => API_URL.root(`/candidat/carousel/${limit}`),
    candidats: () => API_URL.root('/candidat'),
    candidatData: (email: string) => API_URL.root(`/candidat/${email}`),
    candidatMetaData: (email: string) => API_URL.root(`/candidat/meta-data/${email}`),
    candidatProfile: () => API_URL.root('/candidat/privacy'),
    candidatSkills: (skillId: string = '') => API_URL.root(`/skills/${skillId}`),
    candidatHobbies: (hobbieId: string = '') => API_URL.root(`/hobbies/${hobbieId}`),
    candidatSocial: (socialId: string = '') => API_URL.root(`/social/${socialId}`),
    candidatLanguages: (languageId: string = '') => API_URL.root(`/languages/${languageId}`),
    candidatCourses: (id: string = '') => API_URL.root(`/courses/${id}`),
    candidatEducation: (id: string = '') => API_URL.root(`/education/${id}`),
    candidatExperience: (id: string = '') => API_URL.root(`/experience/${id}`),
    candidatLifeStatus: () => API_URL.root(`/life-state`),

    savedJobs: (id: string = '') => API_URL.root(`/saved-jobs/${id}`),
    sendedCanidature: (id: string = '') => API_URL.root(`/send-candidature/${id}`),

    agency: () => API_URL.root('/agency'),
    agencypage: (slug: string) => API_URL.root(`/agency/${slug}`),
    agencyMetadataBySlug: (slug: string) => API_URL.root(`/agency/metadata-by-slug/${slug}`),
    agencyProfile: () => API_URL.root('/agency/profile'),
    agenciesCarousel: (limit: number) => API_URL.root(`/agency/carousel/${limit}`),
    //agencyEditProfile: () => API_URL.root('/agency'),

    vacancy: (id: string = '') => API_URL.root(`/joboffers/${id}`),
    contacts: () => API_URL.root('/contacts'),
    filtering: () => API_URL.root(`/joboffers/filtering`),
    vacancySearchHeader: () => API_URL.root(`/joboffers/searchTerm`),
    deleteManyVacancy: () => API_URL.root(`/joboffers/delete-many`),
    agencyVacancy: () => API_URL.root(`/joboffers/my-vacancies`),
    getJobById: (id: string) => API_URL.root(`/joboffers/by-id/${id}`),
    getJobBySlug: (slug: string) => API_URL.root(`/joboffers/by-slug/${slug}`),
    getMetadataJobBySlug: (slug: string) => API_URL.root(`/joboffers/metadata-by-slug/${slug}`),
    getJobByCategory: (slug: string) => API_URL.root(`/joboffers/by-category/${slug}`),
    jobsForCarousel: (limit: number) => API_URL.root(`/joboffers/carousel/${limit}`),
    options: (option: string) => API_URL.root(`/${option}`),

    branch: (url = '') => API_URL.root(`/branch/${url}`),
    deleteManyBranch: () => API_URL.root(`/branch/delete-many`),

    category: (id: string = '') => API_URL.root(`/category${id}`),
    categoryBySlug: (slug: string) => API_URL.root(`/category/by-slug/${slug}`),
    categoryMetadataBySlug: (slug: string) => API_URL.root(`/category/metadata-by-slug/${slug}`)
}