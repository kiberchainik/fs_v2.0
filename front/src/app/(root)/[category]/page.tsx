import { useBreadcrumbs } from '@/features/breadcrumbs/hooks/useBreadcrumbs';
import CategoryMenu from '@/features/category/components/Categories';
import { categoryService } from '@/features/category/services'
import { Filter } from '@/features/filter/components/Filter';
import VacancyList from '@/features/vacancy/components/vacancyList/VacancyList';
import { vacancyPageServices } from '@/features/vacancy/services';
import { CATEGORY_DESCRIPTION, CATEGORY_NAME, CATEGORY_NOT_FOUND } from '@/shared/constants/seo.constants';
import { Metadata } from 'next';
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
    const breadcrumbs = useBreadcrumbs(params)

    if (!vacancies) {
        const { count, items: vacancies, pageCount } = await vacancyPageServices.getVacancyList(searchParams)

        return (
            <div className='my-6'>
                <div className='flex gap-5 justify-between m-10'>
                    <div className='w-1/3 hidden md:block'>
                        {/* <Filter /> */}
                        <CategoryMenu />
                    </div>
                    <div className='flex flex-col gap-y-5 w-full'>
                        <VacancyList
                            name={CATEGORY_NAME}
                            description={CATEGORY_DESCRIPTION}
                            slug={'/'}
                            jobs={vacancies}
                            count={count}
                            pageCount={pageCount}
                            breadcrumbs={breadcrumbs}
                            category_not_found={CATEGORY_NOT_FOUND}
                        />
                    </div>
                </div>
            </div>
        )
    }

    if (vacancies) {
        return (
            <div className='my-6'>
                <div className='flex gap-5 justify-between m-10'>
                    <div className='w-1/3 hidden md:block'>
                        <Filter />
                        <CategoryMenu />
                    </div>
                    <div className='flex flex-col gap-y-5 w-full'>
                        <VacancyList
                            name={vacancies.name}
                            description={vacancies.description}
                            slug={vacancies.slug}
                            jobs={vacancies.jobOffers}
                            count={count}
                            pageCount={pageCount}
                            breadcrumbs={breadcrumbs}
                        />
                    </div>
                </div>
            </div>
        )
    }
}