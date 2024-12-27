'use client'

import { Card, Heading } from "@/shared/components"
import { TAgencyDataResponse } from "../profile/types/agensy.type"
import { useAppSelector } from "@/shared/hooks"
import { useEffect, useState } from "react"
import AgencyVacancyCard from "./AgencyVacancyCard"

export default function AgencyDataWithJobs({ agencyData, count, pageCount }: TAgencyDataResponse) {
    const authUser = useAppSelector(state => state.reducer.user.data)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            <Card className="p-5">
                <Heading>{agencyData.agency_name}</Heading>
                <p>{agencyData.address}</p>
                <p>{agencyData.about}</p>
            </Card>
            <div className="flex gap-5 flex-wrap mt-5 w-full">
                {agencyData.jobOffers.map(job => <AgencyVacancyCard {...job} authUser={authUser!} key={job.slug} />)}
            </div>
        </div>
    )
}