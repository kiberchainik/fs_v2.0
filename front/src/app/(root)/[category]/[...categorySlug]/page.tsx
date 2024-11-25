import { notFound } from "next/navigation";
import { getMetadata, getPageContent, Props } from "./getPageContent"
import CategoryMenu from "@/features/category/components/Categories";
import JobFullPage from "./JobFullPage";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME } from "@/shared/constants/seo.constants";
import { Metadata } from "next";
import { Filter } from "@/features/filter/components/Filter";

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const data = await getMetadata({ params, searchParams });

    return {
        title: data?.jobData?.title || data?.categoryData?.name || CATEGORY_NAME,
        description: data?.jobData?.description || data?.categoryData?.description || CATEGORY_DESCRIPTION,
        openGraph: {
            title: data?.jobData?.title || data?.categoryData?.name || CATEGORY_NAME,
            description: data?.jobData?.description || data?.categoryData?.description || CATEGORY_DESCRIPTION
        }
    }
}

export default async function Page({ params, searchParams }: Props) {
    const data = await getPageContent({ params, searchParams })

    if (data?.categoryData?.vacancies) {
        return (
            <div className="flex gap-5 justify-between m-10">
                <div className="w-1/3 hidden md:grid h-full gap-y-5">
                    {/* <Filter /> */}
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

    return notFound()
}
