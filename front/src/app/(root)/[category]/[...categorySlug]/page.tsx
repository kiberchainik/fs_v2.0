import { notFound } from "next/navigation";
import { getMetadata, getPageContent, Props } from "./getPageContent"
import CategoryMenu from "@/features/category/components/Categories";
import JobFullPage from "./JobFullPage";
import VacancyList from "@/features/vacancy/components/vacancyList/VacancyList";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME } from "@/shared/constants/seo.constants";
import { Metadata } from "next"
import VacancyCarousel from "@/features/carousel/components/vacancies/VacancyCarousel";

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

    if (data && data.categoryData && data.categoryData.vacancies) {
        return (
            <div className="flex gap-5 justify-between m-10">
                <div className="w-1/3 hidden md:grid h-full gap-y-5">
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

    if (data && data.jobData && data.jobData.agency) {
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
                {data.jobData.categories.slug && <div className="w-screen -ml-5 mt-20 border-t border-slate-200 border-dashed flex flex-col items-center justify-center">
                    <div className="text-left">
                        <h2 className="text-[50px] text-[#1e356a] font-bold">Lavori <span className="font-normal text-[#069cd0]">in evidenza</span> correlati</h2>
                        <p className="text-lg text-[#069cd0]">Mantieni il tuo valore e trova il lavoro che dà qualità alla tua vita</p>
                    </div>
                    <div>
                        <VacancyCarousel slug={data.jobData.categories.slug} />
                    </div>
                </div>}
            </div>
        );
    }

    return notFound()
}
