import { useBreadcrumbs } from '@/features/breadcrumbs/hooks/useBreadcrumbs';
import CategoryMenu from '@/features/category/components/Categories';
import { categoryService } from '@/features/category/services'
import VacancyList from '@/features/vacancy/components/vacancyList/VacancyList';
import { vacancyPageServices } from '@/features/vacancy/services';
import { CATEGORY_DESCRIPTION, CATEGORY_NAME, CATEGORY_NOT_FOUND } from '@/shared/constants/seo.constants';
import { LoaderCircle } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const revalidate = 60;

type Props = {
    params: { category: string }
    searchParams: {
        limit: number
        page: number
    }
}

const getCategoryData = cache(
    async ({ params, searchParams }: Props) => {
        return await categoryService.getCategoryDataBySlug(params.category, searchParams)
    }
)

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { vacancies } = await getCategoryData({ params, searchParams });

    return {
        title: vacancies?.name || CATEGORY_NAME,
        description: vacancies?.description || CATEGORY_DESCRIPTION,
        openGraph: {
            title: vacancies?.name || CATEGORY_NAME,
            description: vacancies?.description || CATEGORY_DESCRIPTION
        }
    }
}

export default async function CategoryPage({ params, searchParams }: Props) {
    const { vacancies, count, pageCount } = await getCategoryData({ params, searchParams })

    if (!vacancies) {
        return notFound()
    }

    const breadcrumbs = useBreadcrumbs({
        category: params.category,
        currentCategory: { 
            name: vacancies.name, 
            slug: vacancies.slug 
        },
    })

    return (
        <div className='my-6'>
            <div className='flex gap-5 justify-between m-10'>
                <div className='w-1/3 hidden md:block'>
                    <CategoryMenu />
                </div>
                <div className='flex flex-col gap-y-5 w-full'>
                    <VacancyList
                        name={vacancies.name || CATEGORY_NAME}
                        description={vacancies.description || CATEGORY_DESCRIPTION}
                        slug={vacancies.slug || '/'}
                        jobs={vacancies.jobOffers || []}
                        count={count}
                        pageCount={pageCount}
                        breadcrumbs={breadcrumbs}
                        category_not_found={!vacancies.name ? CATEGORY_NOT_FOUND : undefined}
                    />
                </div>
            </div>
        </div>
    )
}