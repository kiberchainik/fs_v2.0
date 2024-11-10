import type { Metadata } from "next";
import { categoryService } from "@/features/category/services"
import CategoryMenu from "@/features/category/components/Categories";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";

export const revalidate = 60;

async function getVacancies(categorySlug: string) {
    return await categoryService.getCategoryDataBySlug(categorySlug);
}

export async function generateMetadata({ params }: { params: { categorySlug: string } }): Promise<Metadata> {
    const { vacancies } = await getVacancies(params.categorySlug);

    return {
        title: vacancies?.name,
        description: vacancies?.description,
        openGraph: {
            title: vacancies?.name,
            description: vacancies?.description
        }
    }
}

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
    const { vacancies, count, pageCount } = await getVacancies(params.categorySlug);

    return (
        <div className='my-6'>
            <div className='flex gap-5 justify-between m-10'>
                <div className='w-1/3 hidden md:flex'>
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