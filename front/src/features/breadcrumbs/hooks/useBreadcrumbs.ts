export function useBreadcrumbs(params: { category: string; categorySlug?: string[]; jobSlug?: string }) {
    const { category, categorySlug, jobSlug } = params

    const breadcrumbs = [{ name: 'Home', href: '/' }]

    category && breadcrumbs.push({
        'name': category.charAt(0).toUpperCase() + category.slice(1),
        href: `/${category}`
    })

    categorySlug && categorySlug.forEach((slug, index) => {
        breadcrumbs.push({
            name: slug.charAt(0).toUpperCase() + slug.slice(1),
            href: `/${category}/${categorySlug.slice(0, index + 1).join('/')}`
        })
    })

    jobSlug && breadcrumbs.push({
        name: jobSlug.charAt(0).toUpperCase() + jobSlug.slice(1),
        href: `${category}/${categorySlug?.join('/')}/${jobSlug}`
    })

    return breadcrumbs
}