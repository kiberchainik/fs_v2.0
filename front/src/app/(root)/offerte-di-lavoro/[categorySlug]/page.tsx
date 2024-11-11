import type { Metadata } from "next";
import { categoryService } from "@/features/category/services"
import CategoryMenu from "@/features/category/components/Categories";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";
import { cache } from "react";

export const revalidate = 60;

type Props = {
    params: { categorySlug: string }
    searchParams: {
        limit: number
        page: number
    }
}

const getCategoryData = cache(
    async ({ params, searchParams }: Props) => {
        return await categoryService.getCategoryDataBySlug(params.categorySlug, searchParams)
    }
)

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { vacancies } = await getCategoryData({ params, searchParams });

    return {
        title: vacancies?.name,
        description: vacancies?.description,
        openGraph: {
            title: vacancies?.name,
            description: vacancies?.description
        }
    }
}

export default async function CategoryPage({ params, searchParams }: Props) {
    const { vacancies, count, pageCount } = await getCategoryData({ params, searchParams });

    return (
        <div className='my-6'>
            <div className='flex gap-5 justify-between m-10'>
                <div className='w-1/3 hidden md:block'>
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
                    />
                </div>
            </div>
        </div>
    );
}