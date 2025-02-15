import AgencyDataWithJobs from "@/features/agency/agencyDataWithJobs/AgencyDataWihJobs";
import { agencyService } from "@/features/agency/profile/services";
import CategoryMenu from "@/features/category/components/Categories";
import { AGENSY_NOT_FOUND } from "@/shared/constants/seo.constants";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

export const revalidate = 60;

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
            <div className="flex gap-5 justify-between m-10">
                <div className="w-1/3 hidden md:grid h-full gap-y-5">
                    <CategoryMenu />
                </div>
                <div className="flex flex-col gap-y-5 w-full">
                    <AgencyDataWithJobs
                        agencyData={agencyData}
                        count={count}
                        pageCount={pageCount}
                    />
                </div>
            </div>
        )
    }

    return notFound()
}