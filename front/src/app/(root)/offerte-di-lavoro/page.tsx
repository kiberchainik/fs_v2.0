import CategoryMenu from "@/features/category/components/Categories";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";

import type { Metadata } from "next";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME } from "@/shared/constants/seo.constants"
import { vacancyPageServices } from "@/features/vacancy/services"

export const revalidate = 60;

interface JobListProps {
    searchParams: {
        page?: number
        limit?: number
    }
}

async function getVacancies({ searchParams }: JobListProps) {
    return await vacancyPageServices.getVacancyList(searchParams);
}

export const metadata: Metadata = {
    title: CATEGORY_NAME,
    description: CATEGORY_DESCRIPTION,
    openGraph: {
        title: CATEGORY_NAME,
        description: CATEGORY_DESCRIPTION
    }
}


export default async function CategoryPage({ searchParams }: JobListProps) {
    const { items: vacancies, count, pageCount } = await getVacancies({ searchParams })
    return (
        <div className='flex gap-5 justify-between m-10'>
            <div className='w-1/3 hidden md:flex'>
                <CategoryMenu />
            </div>
            <div className='flex flex-col gap-y-5 w-full'>
                <VacancyList
                    name={CATEGORY_NAME}
                    description={CATEGORY_DESCRIPTION}
                    slug={'/categoria'}
                    jobs={vacancies}
                    count={count}
                    pageCount={pageCount}
                />
            </div>
        </div>
    );
}