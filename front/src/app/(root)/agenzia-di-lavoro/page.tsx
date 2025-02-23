import AgenciesList from "@/features/agency/agenciesList/AgenciesList";
import { agencyService } from "@/features/agency/profile/services";
import { AGENCI_PAGE_NAME, AGENCY_PAGE_DESCRIPTION } from "@/shared/constants/seo.constants"
import { cache } from "react"

export const revalidate = 60

type Props = {
    params: { slug: string }
    searchParams: {
        limit: number
        page: number
    }
}

const getCategoryData = cache(
    async ({ params, searchParams }: Props) => {
        return await agencyService.getAllAgency(searchParams)
    }
)

export async function generateMetadata() {
    return {
        title: AGENCI_PAGE_NAME,
        description: AGENCY_PAGE_DESCRIPTION,
        openGraph: {
            title: AGENCI_PAGE_NAME,
            description: AGENCY_PAGE_DESCRIPTION
        }
    }
}

export default async function AgencyPage({ params, searchParams }: Props) {
    const { agencies, count, pageCount } = await getCategoryData({ params, searchParams })

    return (
        <AgenciesList
            agencies={agencies}
            count={count}
            pageCount={pageCount}
        />
    )
}