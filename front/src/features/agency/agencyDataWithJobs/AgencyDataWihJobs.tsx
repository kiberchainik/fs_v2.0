'use client'

import { Button, Card, Heading } from "@/shared/components"
import { TAgencyDataResponse } from "../profile/types/agensy.type"
import { useAppSelector } from "@/shared/hooks"
import { useEffect, useState } from "react"
import AgencyVacancyCard from "./AgencyVacancyCard"
import Image from 'next/image'
import styles from './agencyData.module.scss'
import Link from "next/link"


export default function AgencyDataWithJobs({ agencyData, count, pageCount }: TAgencyDataResponse) {
    const authUser = useAppSelector(state => state.reducer.user.data)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={styles.agencyCardWrapper}>
            <Card className={styles.agencyCard}>
                <Image src={agencyData.logo[0]} alt={agencyData.agency_name} fill className={styles.agencyLogo} />
                <div>
                    <Heading>{agencyData.agency_name}</Heading>
                    <div>{agencyData.phone}</div>
                    <div>{agencyData.user.email}</div>
                    <div>{agencyData.address}</div>
                    <div>{agencyData.about}</div>
                    <div>
                        <Button>Follow</Button>
                        {agencyData.url && <Button variant='link'>
                            <Link target="_blank" href={agencyData.url}>Agency site</Link>
                        </Button>}
                    </div>
                </div>
            </Card>
            <div className="flex gap-5 flex-wrap mt-5 w-full">
                {agencyData.jobOffers.map(job => <AgencyVacancyCard {...job} authUser={authUser!} key={job.slug} />)}
            </div>
        </div>
    )
}