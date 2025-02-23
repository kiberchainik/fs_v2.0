import AgencyDataWithJobs from "@/features/agency/agencyDataWithJobs/AgencyDataWihJobs"
import { AgencyInfo } from "@/features/agency/agencyDataWithJobs/AgencyInfo"
import { agencyService } from "@/features/agency/profile/services"
import { MiddleSector } from "@/features/mainComponents"
import { AGENSY_NOT_FOUND } from "@/shared/constants/seo.constants"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"

export const revalidate = 60

type Props = {
    params: { slug: string }
    searchParams: {
        limit: number
        page: number
    }
}

const getAgencyData = cache(
    async ({ params, searchParams }: Props) => {
        return await agencyService.getAgencyDataWithJobs(params.slug, searchParams)
    }
)

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { agency_name, about, logo } = await agencyService.getAgencyMetaDataBySlug(params.slug)
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: agency_name ? agency_name : AGENSY_NOT_FOUND,
        description: about ? about : AGENSY_NOT_FOUND,
        openGraph: {
            title: agency_name ? agency_name : AGENSY_NOT_FOUND,
            description: about ? about : AGENSY_NOT_FOUND,
            images: [logo[0], ...previousImages],
        }
    }
}

export default async function AgencyFullPage({ params, searchParams }: Props) {
    const { agencyData, count, pageCount } = await getAgencyData({ params, searchParams })
    if (agencyData) {
        return (
            <>
                <div className="flex flex-col lg:flex-row gap-10 justify-center m-10">
                    <div className="w-full lg:w-4/6 text-slate-800 dark:text-white">
                        <AgencyDataWithJobs
                            agencyData={agencyData}
                            count={count}
                            pageCount={pageCount}
                        />
                    </div>
                    <div className="w-full h-full lg:w-2/6 p-5 bg-[#e7eae2] dark:bg-[#484841] rounded-3xl">
                        <AgencyInfo agency={agencyData} vacancies={agencyData.jobOffers.length} />
                    </div>
                </div>
                <MiddleSector />
            </>
        )
    }

    return notFound()
}