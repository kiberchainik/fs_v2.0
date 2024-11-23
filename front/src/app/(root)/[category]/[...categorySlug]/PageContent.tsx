'use client'

import CategoryMenu from "@/features/category/components/Categories";
import { Filter } from "@/features/filter/components/Filter";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";
import { useMetadata } from "@/shared/providers";
import JobFullPage from "./JobFullPage";
import { notFound } from "next/navigation";

export function PageContent() {
    const data = useMetadata()
    if (data?.categoryData?.vacancies) {
        return (
            <div className="flex gap-5 justify-between m-10">
                <div className="w-1/3 hidden md:grid h-full gap-y-5">
                    <Filter />
                    <CategoryMenu />
                </div>
                <div className="flex flex-col gap-y-5 w-full">
                    <VacancyList
                        name={data.categoryData.vacancies.name}
                        description={data.categoryData.vacancies.description}
                        slug={data.categoryData.vacancies.slug}
                        jobs={data.categoryData.vacancies.jobOffers}
                        count={data.categoryData.count}
                        pageCount={data.categoryData.pageCount}
                        breadcrumbs={data.breadcrumbs}
                    />
                </div>
            </div>
        );
    }

    if (data?.jobData?.agency) {
        return (
            <div className="mt-6">
                <div className="flex gap-5 justify-between m-10">
                    <div className="w-1/3 hidden md:block">
                        <CategoryMenu />
                    </div>
                    <div className="flex flex-col gap-y-5 w-full">
                        <JobFullPage {...data.jobData} breadcrumbs={data.breadcrumbs} />
                    </div>
                </div>
            </div>
        );
    }

    return notFound();
}