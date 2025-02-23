import { CandidateFull } from "@/features/candidat/components/candidate-full/CandidateFullPage"
import { candidatService } from "@/features/candidat/services"
import { MiddleSector } from "@/features/mainComponents"
import { CANDIDAT_PAGE_DESCRIPTION, CANDIDAT_PAGE_NAME } from "@/shared/constants/seo.constants"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"

export const revalidate = 60

type Props = {
    params: { slug: string }
}

const getCandidatData = cache(
    async ({ params }: Props) => {
        return await candidatService.getCandidatData(params.slug)
    }
)

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const data = await candidatService.getCandidatMetaData(params.slug)

    if (!data) {
        return notFound()
    }

    const previousImages = (await parent).openGraph?.images || []
    return {
        title: `${data.firstname} ${data.surname}` ? `${data.firstname} ${data.surname}` : CANDIDAT_PAGE_NAME,
        description: data.about_my ? data.about_my : CANDIDAT_PAGE_DESCRIPTION,
        openGraph: {
            title: `${data.firstname} ${data.surname}` ? `${data.firstname} ${data.surname}` : CANDIDAT_PAGE_NAME,
            description: data.about_my ? data.about_my : CANDIDAT_PAGE_DESCRIPTION,
            images: [data.avatar[0], ...previousImages],
        }
    }
}

export default async function CandidateFullPage({ params }: Props) {
    const candidateFullData = await getCandidatData({ params })

    if (candidateFullData) {
        return (
            <>
                <CandidateFull {...candidateFullData} />
                <MiddleSector />
            </>
        )
    }

    return notFound()
}