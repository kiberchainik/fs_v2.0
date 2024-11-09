import type { Metadata } from "next";
import { categoryService } from "@/features/category/services";
import { Catalog } from "@/features/category/components/Catalog";

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
    };
}

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
    const vacancyData = await getVacancies(params.categorySlug);

    return (
        <div className='my-6'>
            <Catalog
                name={vacancyData.vacancies.name}
                description={vacancyData.vacancies.description}
                slug={vacancyData.vacancies.slug}
                jobs={vacancyData.vacancies.jobOffers}
                count={vacancyData.count}
                pageCount={vacancyData.pageCount}
            />
        </div>
    );
}