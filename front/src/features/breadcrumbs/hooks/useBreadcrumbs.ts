interface BCProps {
    category: string
    categorySlug?: string[]
    jobSlug?: string
    jobTitle?: string
    parents?: {
        name: string;
        slug: string
    }[];
    currentCategory?: {
        name: string;
        slug: string
    }
}

export function useBreadcrumbs(params: BCProps) {
    const { category, categorySlug, jobSlug, parents = [], currentCategory, jobTitle } = params;

    const breadcrumbs = [{ name: 'Home', href: '/' }];

    parents.forEach((parent, index) => {
        breadcrumbs.push({
            name: parent.name,
            href: `/${parents.slice(0, index + 1).map(p => p.slug).join('/')}`,
        });
    })

    if (!parents.length && currentCategory) {
        breadcrumbs.push({
            name: currentCategory.name,
            href: `/${currentCategory.slug}`,
        });
    }

    const lastParent = parents[parents.length - 1];
    if (parents.length > 0 && currentCategory && (!lastParent || lastParent.slug !== currentCategory.slug)) {
        breadcrumbs.push({
            name: currentCategory.name,
            href: `/${parents.map(p => p.slug).join('/')}/${currentCategory.slug}`,
        });
    }

    if (jobSlug) {
        breadcrumbs.push({
            name: jobTitle || jobSlug.charAt(0).toUpperCase() + jobSlug.slice(1),
            href: `/${category}/${categorySlug?.join('/')}/${jobSlug}`,
        });
    }

    return breadcrumbs;
}
